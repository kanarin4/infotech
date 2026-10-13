// InfoTech — Quiz Practice Application
// Chapters 1-14, Subsection Drills & Full Chapter Tests, Bilingual JA/EN, Practice/Test Modes, Tactile Feedback & Responsive Design

(function () {
  'use strict';

  // Global App State
  const state = {
    lang: 'ja', // 'ja' | 'en'
    mode: 'practice', // 'practice' | 'test'
    activeView: 'hub', // 'hub' | 'quiz' | 'results'
    quizType: 'chapter', // 'chapter' | 'subsection'
    currentChapterId: 1,
    currentSubsectionId: null, // e.g. '1.5.1'
    currentSubsectionTitleJa: '',
    currentSubsectionTitleEn: '',
    currentQuestionIndex: 0,
    currentQuestions: [],
    userAnswers: [], // array of numbers or null
    practiceAnswered: false,
    reviewFilter: 'all' // 'all' | 'missed'
  };

  // Content Strings & Localizations
  const i18n = {
    ja: {
      appTitle: "InfoTech",
      appSubtitle: "小テスト対策",
      heroBadge: "事前学習クイズ",
      heroTitle: "授業前の確認クイズ",
      heroDesc: "授業前の予習や復習用のクイズです。各回の小テストで扱われるコードの挙動や重要概念を節ごと・章ごとに確認できます。",
      heroTotalQ: "全14章 / 231問 (各節ごとの練習 & 総合テスト)",
      heroModeDesc: "モード: 練習（即時回答）/ テスト（採点）",
      practiceMode: "💡 練習モード",
      testMode: "⏱ テストモード",
      backToHub: "章選択へ戻る",
      qCategory: "確認問題",
      qCountPrefix: "問題",
      nextQ: "次の問題へ",
      finishQuiz: "テストを提出する",
      retakeQuiz: "もう一度解く",
      nextChapter: "次の章へ進む",
      backToHubResults: "章選択に戻る",
      reviewHeading: "解答と解説",
      filterAll: "全問表示",
      filterMissed: "不正解のみ",
      scoreSuffix: "問正解",
      statusCorrect: "正解",
      statusIncorrect: "不正解",
      explanationLabel: "【解説】",
      startQuiz: "開始",
      verdictPerfectTitle: "全問正解です",
      verdictPerfectDesc: "この単元の内容をしっかり理解できています。",
      verdictGoodTitle: "合格点です",
      verdictGoodDesc: "間違えた問題の解説を確認しておきましょう。",
      verdictReviewTitle: "復習が必要です",
      verdictReviewDesc: "下の解説を確認して、もう一度挑戦してみましょう。",
      noMissedQuestions: "全問正解です。間違えた問題はありません。",
      subsectionsToggle: "📚 節ごとの個別練習を開く",
      drillBtn: "練習 →",
      startFullChapterQuiz: "総合テストを開始 (全問演習) →",
      retakeSubsection: "この節をもう一度解く",
      nextSubsection: "次の節へ進む",
      toFullChapterQuiz: "章の総合テストへ →",
      subBreakdownHeading: "節ごとの習熟度・弱点分析",
      subBreakdownHint: "各節の正答率を比較して、重点的に復習すべき弱点を確認できます。",
      pillMastered: "習得",
      pillGood: "概ね良好",
      pillWeak: "🚨 重点復習",
      pillUntested: "未実施",
      btnDrillFocus: "この節を特訓 →",
      subMasteredDone: "✓ 習得完了",
      btnFocusWeakestPrefix: "🚨 最も苦手な「§ ",
      btnFocusWeakestSuffix: "」を集中特訓 →"
    },
    en: {
      appTitle: "InfoTech",
      appSubtitle: "Quiz Prep",
      heroBadge: "Weekly Quiz Prep",
      heroTitle: "Prepare for In-Class Quizzes",
      heroDesc: "Quizzes for weekly class preparation and review. Check your understanding of code behavior and core concepts by subsection or full chapter.",
      heroTotalQ: "14 Chapters / 231 Questions (Subsections & Full Tests)",
      heroModeDesc: "Mode: Practice (immediate feedback) / Test (scored)",
      practiceMode: "💡 Practice Mode",
      testMode: "⏱ Test Mode",
      backToHub: "Back to Chapters",
      qCategory: "Question",
      qCountPrefix: "Question",
      nextQ: "Next Question",
      finishQuiz: "Submit Quiz",
      retakeQuiz: "Retake",
      nextChapter: "Next Chapter",
      backToHubResults: "Back to Chapters",
      reviewHeading: "Answers & Explanations",
      filterAll: "All",
      filterMissed: "Missed Only",
      scoreSuffix: "Correct",
      statusCorrect: "Correct",
      statusIncorrect: "Incorrect",
      explanationLabel: "【Explanation】",
      startQuiz: "Start",
      verdictPerfectTitle: "Perfect Score",
      verdictPerfectDesc: "You answered all questions correctly.",
      verdictGoodTitle: "Passed",
      verdictGoodDesc: "Review the explanations below for questions you missed.",
      verdictReviewTitle: "Needs Review",
      verdictReviewDesc: "Review the explanations below and try the quiz again.",
      noMissedQuestions: "No missed questions. You got everything right.",
      subsectionsToggle: "📚 Practice by Subsection",
      drillBtn: "Drill →",
      startFullChapterQuiz: "Start Chapter Quiz (All Topics) →",
      retakeSubsection: "Retake Subsection",
      nextSubsection: "Next Subsection",
      toFullChapterQuiz: "To Chapter Quiz →",
      subBreakdownHeading: "Subsection Mastery Breakdown",
      subBreakdownHint: "Compare accuracy across subsections to identify weak areas needing focused practice.",
      pillMastered: "Mastered",
      pillGood: "Good",
      pillWeak: "🚨 Focus Area",
      pillUntested: "Untested",
      btnDrillFocus: "Drill Section →",
      subMasteredDone: "✓ Mastered",
      btnFocusWeakestPrefix: "🚨 Drill Weakest: § ",
      btnFocusWeakestSuffix: " →"
    }
  };

  // DOM Elements Cache
  const el = {
    // Views
    hubView: document.getElementById('hub-view'),
    quizView: document.getElementById('quiz-view'),
    resultsView: document.getElementById('results-view'),

    // Branding Trigger
    brandHomeTrigger: document.getElementById('brand-home-trigger'),

    // Header Controls
    langJaBtn: document.getElementById('lang-ja-btn'),
    langEnBtn: document.getElementById('lang-en-btn'),
    modePracticeBtn: document.getElementById('mode-practice-btn'),
    modeTestBtn: document.getElementById('mode-test-btn'),

    // Hub View
    appTitleText: document.getElementById('app-title-text'),
    appSubtitleText: document.getElementById('app-subtitle-text'),
    heroBadgeText: document.getElementById('hero-badge-text'),
    heroTitleText: document.getElementById('hero-title-text'),
    heroDescText: document.getElementById('hero-desc-text'),
    heroMetaTotal: document.getElementById('hero-meta-total-chapters'),
    heroMetaModeDesc: document.getElementById('hero-meta-mode-desc'),
    coursePartsContainer: document.getElementById('course-parts-container'),

    // Quiz View
    quizBackBtn: document.getElementById('quiz-back-btn'),
    backHubLabel: document.getElementById('back-hub-label'),
    currentChapterPill: document.getElementById('current-chapter-pill'),
    quizProgressCounter: document.getElementById('quiz-progress-counter'),
    quizProgressFill: document.getElementById('quiz-progress-fill'),
    qCategoryTag: document.getElementById('q-category-tag'),
    qTitleText: document.getElementById('q-title-text'),
    qCodeContainer: document.getElementById('q-code-container'),
    qCodeBlock: document.getElementById('q-code-block'),
    qOptionsContainer: document.getElementById('q-options-container'),
    practiceFeedbackBox: document.getElementById('practice-feedback-box'),
    feedbackStatusBadge: document.getElementById('feedback-status-badge'),
    feedbackExplanationText: document.getElementById('feedback-explanation-text'),
    quizNextBtn: document.getElementById('quiz-next-btn'),
    nextBtnText: document.getElementById('next-btn-text'),

    // Results View
    resultCircleProgress: document.getElementById('result-circle-progress'),
    resultScorePercent: document.getElementById('result-score-percent'),
    resultScoreFraction: document.getElementById('result-score-fraction'),
    resultVerdictTitle: document.getElementById('result-verdict-title'),
    resultVerdictDesc: document.getElementById('result-verdict-desc'),
    retakeQuizBtn: document.getElementById('retake-quiz-btn'),
    retakeLabel: document.getElementById('retake-label'),
    nextChapterBtn: document.getElementById('next-chapter-btn'),
    nextChapLabel: document.getElementById('next-chap-label'),
    resultsHubBtn: document.getElementById('results-hub-btn'),
    backHubResultsLabel: document.getElementById('back-hub-results-label'),
    subBreakdownCard: document.getElementById('sub-breakdown-card'),
    subBreakdownHeading: document.getElementById('sub-breakdown-heading'),
    subBreakdownHint: document.getElementById('sub-breakdown-hint'),
    subBreakdownGrid: document.getElementById('sub-breakdown-grid'),
    resultsActionsGroup: document.getElementById('results-actions-group'),
    reviewHeadingText: document.getElementById('review-heading-text'),
    filterAllBtn: document.getElementById('filter-all-btn'),
    filterMissedBtn: document.getElementById('filter-missed-btn'),
    reviewCardsContainer: document.getElementById('review-cards-container')
  };

  // Safe HTML Escaping
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Switch Active View
  function showView(viewName) {
    state.activeView = viewName;
    el.hubView.classList.remove('active');
    el.quizView.classList.remove('active');
    el.resultsView.classList.remove('active');

    if (viewName === 'hub') {
      renderHub();
      el.hubView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'quiz') {
      el.quizView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (viewName === 'results') {
      renderResults();
      el.resultsView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Apply Language Settings
  function applyLanguage() {
    const t = i18n[state.lang];
    document.documentElement.lang = state.lang;
    document.title = state.lang === 'ja' ? "InfoTech | 小テスト対策" : "InfoTech | Quiz Prep";

    el.appTitleText.textContent = t.appTitle;
    el.appSubtitleText.textContent = t.appSubtitle;
    el.heroBadgeText.textContent = t.heroBadge;
    el.heroTitleText.textContent = t.heroTitle;
    el.heroDescText.textContent = t.heroDesc;
    el.heroMetaTotal.textContent = t.heroTotalQ;
    el.heroMetaModeDesc.textContent = t.heroModeDesc;
    el.modePracticeBtn.textContent = t.practiceMode;
    el.modeTestBtn.textContent = t.testMode;
    el.backHubLabel.textContent = t.backToHub;
    el.qCategoryTag.textContent = t.qCategory;
    if (el.retakeLabel) el.retakeLabel.textContent = state.quizType === 'subsection' ? t.retakeSubsection : t.retakeQuiz;
    if (el.nextChapLabel) el.nextChapLabel.textContent = state.quizType === 'subsection' ? t.nextSubsection : t.nextChapter;
    if (el.backHubResultsLabel) el.backHubResultsLabel.textContent = t.backToHubResults;
    if (el.subBreakdownHeading) el.subBreakdownHeading.textContent = t.subBreakdownHeading;
    if (el.subBreakdownHint) el.subBreakdownHint.textContent = t.subBreakdownHint;
    el.reviewHeadingText.textContent = t.reviewHeading;
    el.filterAllBtn.textContent = t.filterAll;
    el.filterMissedBtn.textContent = t.filterMissed;

    if (state.activeView === 'hub') {
      renderHub();
    } else if (state.activeView === 'quiz') {
      renderCurrentQuestion();
    } else if (state.activeView === 'results') {
      renderResults();
    }
  }

  // Helper: Find chapter metadata by ID
  function getChapterMeta(chId) {
    if (typeof courseSections === 'undefined') return null;
    for (const part of courseSections) {
      for (const ch of part.chapters) {
        if (ch.id === chId) return ch;
      }
    }
    return null;
  }

  // Helper: Find next subsection in the same chapter
  function getNextSubsection(chId, currentSubId) {
    const ch = getChapterMeta(chId);
    if (!ch || !ch.subsections) return null;
    const idx = ch.subsections.findIndex(s => s.id === currentSubId);
    if (idx !== -1 && idx < ch.subsections.length - 1) {
      return ch.subsections[idx + 1];
    }
    return null;
  }

  // Render Hub Chapter Cards with Subsection Accents
  function renderHub() {
    el.coursePartsContainer.innerHTML = '';

    courseSections.forEach(part => {
      const partSection = document.createElement('section');
      partSection.className = 'part-section';

      const partTitle = state.lang === 'ja' ? part.partTitleJa : part.partTitleEn;
      const titleBar = document.createElement('div');
      titleBar.className = 'part-title-bar';
      titleBar.innerHTML = `
        <h3>${escapeHtml(partTitle)}</h3>
        <span class="part-number-pill">Part ${part.partId}</span>
      `;
      partSection.appendChild(titleBar);

      const grid = document.createElement('div');
      grid.className = 'chapter-grid';

      part.chapters.forEach(ch => {
        const rawSlots = quizData[ch.id] || [];
        const sessionCount = rawSlots.length;
        const totalVarieties = rawSlots.reduce((sum, slot) => sum + (Array.isArray(slot) ? slot.length : 1), 0);
        const title = state.lang === 'ja' ? ch.titleJa : ch.titleEn;
        const topics = state.lang === 'ja' ? ch.topicsJa : ch.topicsEn;
        const t = i18n[state.lang];

        // Check local storage for score
        const savedScore = localStorage.getItem(`it_score_ch_${ch.id}`);

        const cardShell = document.createElement('article');
        cardShell.className = `chapter-card-shell ${savedScore ? 'completed' : ''}`;

        const chLabel = state.lang === 'ja' ? `第 ${ch.id} 章` : `CHAPTER ${ch.id}`;
        const qCountLabel = state.lang === 'ja' 
          ? `${sessionCount} 問 (全${totalVarieties}パターン)` 
          : `${sessionCount} Qs (${totalVarieties} variants)`;

        // Subsections Accordion HTML
        let subsectionsHtml = '';
        if (ch.subsections && ch.subsections.length > 0) {
          const subRowsHtml = ch.subsections.map(sub => {
            const subTitle = state.lang === 'ja' ? sub.titleJa : sub.titleEn;
            const displayId = sub.id.replace('_', '–');
            return `
              <div class="subsection-item-row">
                <div class="sub-meta-group">
                  <span class="sub-id-badge">§ ${displayId}</span>
                  <span class="sub-title-text" title="${escapeHtml(subTitle)}">${escapeHtml(subTitle)}</span>
                </div>
                <button type="button" class="btn-drill-sub" data-chid="${ch.id}" data-subid="${sub.id}" aria-label="${escapeHtml(subTitle)}">${t.drillBtn}</button>
              </div>
            `;
          }).join('');

          const countLabel = state.lang === 'ja' ? ` (${ch.subsections.length}節)` : ` (${ch.subsections.length} parts)`;

          subsectionsHtml = `
            <div class="subsections-accordion">
              <button type="button" class="subsections-toggle-btn" aria-expanded="false">
                <span>${t.subsectionsToggle}${countLabel}</span>
                <span class="toggle-arrow">▾</span>
              </button>
              <div class="subsections-list">
                ${subRowsHtml}
              </div>
            </div>
          `;
        }

        cardShell.innerHTML = `
          <div class="chapter-card-core">
            <div class="chapter-card-top">
              <div class="chapter-id-badge">
                <span>${chLabel}</span>
                <span class="chapter-status-dot"></span>
              </div>
              <h4 class="chapter-title">${escapeHtml(title)}</h4>
              <p class="chapter-desc">${escapeHtml(topics)}</p>
            </div>
            ${subsectionsHtml}
            <div class="chapter-card-bottom" style="margin-top: 14px; flex-direction: column; align-items: stretch; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="question-count-badge">${qCountLabel}</span>
                ${savedScore ? `<span class="score-chip">${savedScore}</span>` : ''}
              </div>
              <button type="button" class="btn-chapter-full-quiz" data-chid="${ch.id}">
                <span>${t.startFullChapterQuiz}</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        `;

        // Bind Accordion Toggle
        const toggleBtn = cardShell.querySelector('.subsections-toggle-btn');
        const subList = cardShell.querySelector('.subsections-list');
        const arrow = cardShell.querySelector('.toggle-arrow');
        if (toggleBtn && subList) {
          toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = subList.classList.toggle('open');
            toggleBtn.setAttribute('aria-expanded', isOpen);
            if (arrow) arrow.textContent = isOpen ? '▴' : '▾';
          });
        }

        // Bind Subsection Drill Buttons
        const drillBtns = cardShell.querySelectorAll('.btn-drill-sub');
        drillBtns.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const chId = parseInt(btn.getAttribute('data-chid'), 10);
            const subId = btn.getAttribute('data-subid');
            startSubsectionQuiz(chId, subId);
          });
        });

        // Bind Full Chapter Quiz Button
        const fullQuizBtn = cardShell.querySelector('.btn-chapter-full-quiz');
        if (fullQuizBtn) {
          fullQuizBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startChapterQuiz(ch.id);
          });
        }

        grid.appendChild(cardShell);
      });

      partSection.appendChild(grid);
      el.coursePartsContainer.appendChild(partSection);
    });
  }

  // Helper: Deep-clone a question and shuffle option order while remapping correctIndex
  function prepareQuestion(rawQ) {
    if (!rawQ) return null;
    const q = JSON.parse(JSON.stringify(rawQ));
    if (!q.ja || !q.ja.options || !q.en || !q.en.options) return q;

    const count = q.ja.options.length;
    const indices = Array.from({ length: count }, (_, i) => i);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const origCorrect = q.correctIndex !== undefined ? q.correctIndex : 0;
    q.correctIndex = indices.indexOf(origCorrect);
    q.ja.options = indices.map(idx => rawQ.ja.options[idx]);
    q.en.options = indices.map(idx => rawQ.en.options[idx]);

    return q;
  }

  // Start Full Chapter Quiz (Sample 1 variety per slot, shuffle options)
  function startChapterQuiz(chapterId) {
    state.quizType = 'chapter';
    state.currentChapterId = chapterId;
    state.currentSubsectionId = null;
    state.currentSubsectionTitleJa = '';
    state.currentSubsectionTitleEn = '';
    const rawSlots = quizData[chapterId] || [];

    state.currentQuestions = rawSlots.map(slot => {
      if (Array.isArray(slot)) {
        const picked = slot[Math.floor(Math.random() * slot.length)];
        return prepareQuestion(picked);
      }
      return prepareQuestion(slot);
    });

    state.currentQuestionIndex = 0;
    state.userAnswers = new Array(state.currentQuestions.length).fill(null);
    state.practiceAnswered = false;

    showView('quiz');
    renderCurrentQuestion();
  }

  // Start Subsection Drill (Focus on specific topic slots)
  function startSubsectionQuiz(chapterId, subsectionId) {
    state.quizType = 'subsection';
    state.currentChapterId = chapterId;
    state.currentSubsectionId = subsectionId;

    const ch = getChapterMeta(chapterId);
    if (ch && ch.subsections) {
      const sub = ch.subsections.find(s => s.id === subsectionId);
      if (sub) {
        state.currentSubsectionTitleJa = sub.titleJa;
        state.currentSubsectionTitleEn = sub.titleEn;
      }
    }

    const rawSlots = quizData[chapterId] || [];
    // Match slots belonging to this subsection
    const matchedSlots = [];
    rawSlots.forEach(slot => {
      const firstQ = Array.isArray(slot) ? slot[0] : slot;
      if (firstQ && firstQ.sectionId === subsectionId) {
        matchedSlots.push(slot);
      }
    });

    // Fallback if no exact match (e.g. range matching like 1.3_1.4)
    if (matchedSlots.length === 0) {
      rawSlots.forEach(slot => {
        const firstQ = Array.isArray(slot) ? slot[0] : slot;
        if (firstQ && firstQ.sectionId && (subsectionId.includes(firstQ.sectionId) || firstQ.sectionId.includes(subsectionId))) {
          matchedSlots.push(slot);
        }
      });
    }

    const targetSlots = matchedSlots.length > 0 ? matchedSlots : rawSlots;

    state.currentQuestions = targetSlots.map(slot => {
      if (Array.isArray(slot)) {
        const picked = slot[Math.floor(Math.random() * slot.length)];
        return prepareQuestion(picked);
      }
      return prepareQuestion(slot);
    });

    state.currentQuestionIndex = 0;
    state.userAnswers = new Array(state.currentQuestions.length).fill(null);
    state.practiceAnswered = false;

    showView('quiz');
    renderCurrentQuestion();
  }

  // Render Current Question Card
  function renderCurrentQuestion() {
    const q = state.currentQuestions[state.currentQuestionIndex];
    if (!q) return;

    const t = i18n[state.lang];
    const totalQ = state.currentQuestions.length;
    const currentNum = state.currentQuestionIndex + 1;

    // Header info: Chapter / Subsection Pill
    if (state.quizType === 'subsection') {
      const displaySub = (state.currentSubsectionId || '').replace('_', '–');
      el.currentChapterPill.textContent = `Ch ${state.currentChapterId} · § ${displaySub}`;
    } else {
      el.currentChapterPill.textContent = `Ch ${state.currentChapterId}`;
    }

    el.quizProgressCounter.textContent = `${t.qCountPrefix} ${currentNum} / ${totalQ}`;

    const percentProgress = ((currentNum - 1) / totalQ) * 100;
    el.quizProgressFill.style.width = `${percentProgress}%`;

    // Display Subsection Tag above question
    if (q.sectionTitleJa || q.sectionTitleEn) {
      const secTitle = state.lang === 'ja' ? (q.sectionTitleJa || q.sectionId) : (q.sectionTitleEn || q.sectionId);
      el.qCategoryTag.textContent = `§ ${secTitle}`;
    } else {
      el.qCategoryTag.textContent = t.qCategory;
    }

    // Question text & code
    const qData = q[state.lang];
    el.qTitleText.textContent = qData.question;

    if (q.code) {
      el.qCodeContainer.style.display = 'block';
      el.qCodeBlock.textContent = q.code;
    } else {
      el.qCodeContainer.style.display = 'none';
      el.qCodeBlock.textContent = '';
    }

    // Reset feedback box
    el.practiceFeedbackBox.style.display = 'none';
    el.feedbackExplanationText.textContent = '';

    // Render Option Tiles
    el.qOptionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const chosenIndex = state.userAnswers[state.currentQuestionIndex];

    qData.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-tile';
      btn.setAttribute('data-index', idx);

      if (chosenIndex === idx) {
        btn.classList.add('selected');
      }

      // If in practice mode and already answered
      if (state.mode === 'practice' && chosenIndex !== null) {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.classList.add('correct-state');
        } else if (chosenIndex === idx) {
          btn.classList.add('incorrect-state');
        }
      }

      btn.innerHTML = `
        <span class="option-key-badge">${letters[idx]}</span>
        <span class="option-label">${escapeHtml(optText)}</span>
      `;

      btn.addEventListener('click', () => onOptionSelect(idx));
      el.qOptionsContainer.appendChild(btn);
    });

    // Practice Mode immediate feedback display if answered
    if (state.mode === 'practice' && chosenIndex !== null) {
      showPracticeFeedback(chosenIndex === q.correctIndex, qData.explanation);
    }

    // Update Next Button State
    updateNextButtonState();
  }

  // Handle Option Selection
  function onOptionSelect(selectedIndex) {
    const q = state.currentQuestions[state.currentQuestionIndex];
    if (!q) return;

    state.userAnswers[state.currentQuestionIndex] = selectedIndex;

    if (state.mode === 'practice') {
      const qData = q[state.lang];
      const isCorrect = selectedIndex === q.correctIndex;

      // Update button classes
      const optionButtons = el.qOptionsContainer.querySelectorAll('.option-tile');
      optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.classList.add('correct-state');
        } else if (idx === selectedIndex) {
          btn.classList.add('incorrect-state');
        }
      });

      showPracticeFeedback(isCorrect, qData.explanation);
    } else {
      // In test mode, toggle selected class
      const optionButtons = el.qOptionsContainer.querySelectorAll('.option-tile');
      optionButtons.forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === selectedIndex);
      });
    }

    updateNextButtonState();
  }

  // Show Practice Feedback Card
  function showPracticeFeedback(isCorrect, explanation) {
    const t = i18n[state.lang];
    el.practiceFeedbackBox.style.display = 'block';

    if (isCorrect) {
      el.feedbackStatusBadge.className = 'feedback-status-row correct';
      el.feedbackStatusBadge.innerHTML = `<span>✓</span> <span>${t.statusCorrect}</span>`;
    } else {
      el.feedbackStatusBadge.className = 'feedback-status-row incorrect';
      el.feedbackStatusBadge.innerHTML = `<span>✕</span> <span>${t.statusIncorrect}</span>`;
    }

    el.feedbackExplanationText.innerHTML = `
      <strong style="color: #38BDF8; font-family: var(--font-mono); font-size: 0.8rem; display: block; margin-bottom: 6px;">${t.explanationLabel}</strong>
      ${escapeHtml(explanation)}
    `;
  }

  // Update Next / Submit Button
  function updateNextButtonState() {
    const t = i18n[state.lang];
    const isAnswered = state.userAnswers[state.currentQuestionIndex] !== null;
    const isLastQ = state.currentQuestionIndex === state.currentQuestions.length - 1;

    el.quizNextBtn.disabled = !isAnswered;
    el.nextBtnText.textContent = isLastQ ? t.finishQuiz : t.nextQ;
  }

  // Advance to Next Question or Finish
  function onNextQuestionClick() {
    const totalQ = state.currentQuestions.length;
    if (state.currentQuestionIndex < totalQ - 1) {
      state.currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      finishQuiz();
    }
  }

  // Complete Quiz & Route to Results
  function finishQuiz() {
    showView('results');
  }

  // Render Per-Subsection Results & Weakness Comparison
  function renderSubsectionBreakdown() {
    const chMeta = getChapterMeta(state.currentChapterId);
    if (!chMeta || !chMeta.subsections || chMeta.subsections.length === 0) {
      if (el.subBreakdownCard) el.subBreakdownCard.style.display = 'none';
      return { statsList: [], weakestSub: null, allMastered: false };
    }

    if (el.subBreakdownCard) el.subBreakdownCard.style.display = 'block';
    const t = i18n[state.lang];

    // Compute statistics per subsection
    const statsList = chMeta.subsections.map(sub => {
      let correct = 0;
      let total = 0;
      let tested = false;

      if (state.quizType === 'chapter') {
        const subQuestions = state.currentQuestions.filter(q => {
          if (!q) return false;
          if (q.sectionId === sub.id) return true;
          if (q.sectionId && (sub.id.includes(q.sectionId) || q.sectionId.includes(sub.id))) return true;
          return false;
        });

        if (subQuestions.length > 0) {
          tested = true;
          total = subQuestions.length;
          subQuestions.forEach(q => {
            const idx = state.currentQuestions.indexOf(q);
            if (idx !== -1 && state.userAnswers[idx] === q.correctIndex) {
              correct++;
            }
          });
          const pct = Math.round((correct / total) * 100);
          localStorage.setItem(`it_score_sub_${state.currentChapterId}_${sub.id}`, `${correct}/${total} (${pct}%)`);
        }
      } else if (state.quizType === 'subsection') {
        if (state.currentSubsectionId === sub.id) {
          tested = true;
          total = state.currentQuestions.length;
          correct = state.currentQuestions.filter((q, idx) => state.userAnswers[idx] === q.correctIndex).length;
          const pct = Math.round((correct / total) * 100);
          localStorage.setItem(`it_score_sub_${state.currentChapterId}_${sub.id}`, `${correct}/${total} (${pct}%)`);
        } else {
          // Read previously saved score from localStorage
          const saved = localStorage.getItem(`it_score_sub_${state.currentChapterId}_${sub.id}`);
          if (saved) {
            tested = true;
            const match = saved.match(/^(\d+)\/(\d+)\s*\(([\d.]+)%\)/);
            if (match) {
              correct = parseInt(match[1], 10);
              total = parseInt(match[2], 10);
            }
          }
        }
      }

      const percent = tested && total > 0 ? Math.round((correct / total) * 100) : null;
      let status = 'untested';
      if (tested) {
        if (percent === 100) status = 'mastered';
        else if (percent >= 75) status = 'good';
        else status = 'weak';
      }

      return {
        sub,
        tested,
        correct,
        total,
        percent,
        status
      };
    });

    // Populate UI
    el.subBreakdownGrid.innerHTML = '';

    statsList.forEach(item => {
      const sub = item.sub;
      const subTitle = state.lang === 'ja' ? sub.titleJa : sub.titleEn;
      const displayId = sub.id.replace('_', '–');

      let pillClass = 'pill-untested';
      let pillText = t.pillUntested;
      let meterWidth = 0;
      let meterColor = 'rgba(255, 255, 255, 0.1)';
      let fractionText = '—';
      let percentText = '—%';

      if (item.tested) {
        meterWidth = item.percent;
        percentText = `${item.percent}%`;
        fractionText = state.lang === 'ja' ? `${item.correct} / ${item.total}問` : `${item.correct} / ${item.total} Qs`;

        if (item.status === 'mastered') {
          pillClass = 'pill-mastered';
          pillText = t.pillMastered;
          meterColor = 'var(--accent-emerald)';
        } else if (item.status === 'good') {
          pillClass = 'pill-good';
          pillText = t.pillGood;
          meterColor = 'var(--accent-amber)';
        } else {
          pillClass = 'pill-weak';
          pillText = t.pillWeak;
          meterColor = 'var(--accent-rose)';
        }
      }

      const itemCard = document.createElement('div');
      itemCard.className = `sub-breakdown-item ${item.status}`;

      itemCard.innerHTML = `
        <div class="sub-breakdown-row-top">
          <div class="sub-breakdown-info">
            <span class="sub-badge-id">§ ${displayId}</span>
            <span class="sub-name-label" title="${escapeHtml(subTitle)}">${escapeHtml(subTitle)}</span>
          </div>
          <div class="sub-breakdown-stats">
            <span class="sub-fraction">${fractionText}</span>
            <span class="sub-percentage">${percentText}</span>
            <span class="sub-status-pill ${pillClass}">${pillText}</span>
          </div>
        </div>
        <div class="sub-meter-bar" role="progressbar" aria-valuenow="${meterWidth}" aria-valuemin="0" aria-valuemax="100">
          <div class="sub-meter-fill" style="width: ${meterWidth}%; background-color: ${meterColor};"></div>
        </div>
        <div class="sub-breakdown-action-row">
          ${
            item.status === 'mastered'
              ? `<span class="sub-mastered-tag">${t.subMasteredDone}</span>
                 <button type="button" class="btn-sub-drill-focus" data-subid="${sub.id}" style="margin-left: 8px;">${t.btnDrillFocus}</button>`
              : `<button type="button" class="btn-sub-drill-focus ${item.status === 'weak' ? 'urgent' : ''}" data-subid="${sub.id}">
                   ${item.status === 'weak' ? '🚨 ' : ''}${t.btnDrillFocus}
                 </button>`
          }
        </div>
      `;

      const drillBtn = itemCard.querySelector('.btn-sub-drill-focus');
      if (drillBtn) {
        drillBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          startSubsectionQuiz(state.currentChapterId, sub.id);
        });
      }

      el.subBreakdownGrid.appendChild(itemCard);
    });

    // Identify weak subsections
    const testedList = statsList.filter(s => s.tested);
    const weakList = testedList.filter(s => s.percent < 100);
    weakList.sort((a, b) => a.percent - b.percent);

    const allMastered = testedList.length === chMeta.subsections.length && weakList.length === 0;
    const weakestSub = weakList.length > 0 ? weakList[0].sub : null;

    return { statsList, weakestSub, allMastered };
  }

  // Render Dynamic Remediation & Navigation Actions
  function renderResultsActions(weakestSub, allMastered, percent) {
    if (!el.resultsActionsGroup) return;
    const t = i18n[state.lang];
    el.resultsActionsGroup.innerHTML = '';

    if (state.quizType === 'chapter') {
      if (weakestSub) {
        // Prioritize focused drill for the weakest subsection
        const displaySubId = weakestSub.id.replace('_', '–');
        const focusBtn = document.createElement('button');
        focusBtn.type = 'button';
        focusBtn.className = 'primary-action-btn btn-weakest-focus';
        focusBtn.id = 'focus-weakest-btn';
        focusBtn.innerHTML = `
          <span>${t.btnFocusWeakestPrefix}${displaySubId}${t.btnFocusWeakestSuffix}</span>
          <span class="btn-trailing-disk" aria-hidden="true">&rarr;</span>
        `;
        focusBtn.addEventListener('click', () => {
          startSubsectionQuiz(state.currentChapterId, weakestSub.id);
        });
        el.resultsActionsGroup.appendChild(focusBtn);

        // Retake Chapter Quiz
        const retakeBtn = document.createElement('button');
        retakeBtn.type = 'button';
        retakeBtn.className = 'secondary-action-btn';
        retakeBtn.id = 'retake-quiz-btn';
        retakeBtn.innerHTML = `
          <span>${t.retakeQuiz}</span>
          <span aria-hidden="true">&#x21bb;</span>
        `;
        retakeBtn.addEventListener('click', () => {
          startChapterQuiz(state.currentChapterId);
        });
        el.resultsActionsGroup.appendChild(retakeBtn);

        // Advance to Next Chapter (secondary/optional)
        const nextChapBtn = document.createElement('button');
        nextChapBtn.type = 'button';
        nextChapBtn.className = 'secondary-action-btn';
        nextChapBtn.id = 'next-chapter-btn';
        nextChapBtn.innerHTML = `
          <span>${t.nextChapter}</span>
          <span aria-hidden="true">&rarr;</span>
        `;
        nextChapBtn.addEventListener('click', () => {
          const nextId = (state.currentChapterId % 14) + 1;
          startChapterQuiz(nextId);
        });
        el.resultsActionsGroup.appendChild(nextChapBtn);
      } else {
        // All mastered!
        const nextChapBtn = document.createElement('button');
        nextChapBtn.type = 'button';
        nextChapBtn.className = 'primary-action-btn';
        nextChapBtn.id = 'next-chapter-btn';
        nextChapBtn.innerHTML = `
          <span>${t.nextChapter}</span>
          <span class="btn-trailing-disk" aria-hidden="true">&rarr;</span>
        `;
        nextChapBtn.addEventListener('click', () => {
          const nextId = (state.currentChapterId % 14) + 1;
          startChapterQuiz(nextId);
        });
        el.resultsActionsGroup.appendChild(nextChapBtn);

        const retakeBtn = document.createElement('button');
        retakeBtn.type = 'button';
        retakeBtn.className = 'secondary-action-btn';
        retakeBtn.id = 'retake-quiz-btn';
        retakeBtn.innerHTML = `
          <span>${t.retakeQuiz}</span>
          <span aria-hidden="true">&#x21bb;</span>
        `;
        retakeBtn.addEventListener('click', () => {
          startChapterQuiz(state.currentChapterId);
        });
        el.resultsActionsGroup.appendChild(retakeBtn);
      }
    } else {
      // Subsection quiz mode
      const nextSub = getNextSubsection(state.currentChapterId, state.currentSubsectionId);

      if (percent === 100 && nextSub) {
        // High score on subsection -> Offer next subsection as primary
        const nextSubId = nextSub.id.replace('_', '–');
        const nextSubBtn = document.createElement('button');
        nextSubBtn.type = 'button';
        nextSubBtn.className = 'primary-action-btn';
        nextSubBtn.id = 'next-chapter-btn';
        nextSubBtn.innerHTML = `
          <span>${state.lang === 'ja' ? `次の節へ (§ ${nextSubId})` : `Next Subsection (§ ${nextSubId})`}</span>
          <span class="btn-trailing-disk" aria-hidden="true">&rarr;</span>
        `;
        nextSubBtn.addEventListener('click', () => {
          startSubsectionQuiz(state.currentChapterId, nextSub.id);
        });
        el.resultsActionsGroup.appendChild(nextSubBtn);

        const retakeBtn = document.createElement('button');
        retakeBtn.type = 'button';
        retakeBtn.className = 'secondary-action-btn';
        retakeBtn.id = 'retake-quiz-btn';
        retakeBtn.innerHTML = `
          <span>${t.retakeSubsection}</span>
          <span aria-hidden="true">&#x21bb;</span>
        `;
        retakeBtn.addEventListener('click', () => {
          startSubsectionQuiz(state.currentChapterId, state.currentSubsectionId);
        });
        el.resultsActionsGroup.appendChild(retakeBtn);
      } else if (percent === 100 && !nextSub) {
        // Finished last subsection of the chapter! Offer full chapter quiz as primary!
        const fullChapBtn = document.createElement('button');
        fullChapBtn.type = 'button';
        fullChapBtn.className = 'primary-action-btn';
        fullChapBtn.innerHTML = `
          <span>${t.startFullChapterQuiz}</span>
          <span class="btn-trailing-disk" aria-hidden="true">&rarr;</span>
        `;
        fullChapBtn.addEventListener('click', () => {
          startChapterQuiz(state.currentChapterId);
        });
        el.resultsActionsGroup.appendChild(fullChapBtn);

        const retakeBtn = document.createElement('button');
        retakeBtn.type = 'button';
        retakeBtn.className = 'secondary-action-btn';
        retakeBtn.id = 'retake-quiz-btn';
        retakeBtn.innerHTML = `
          <span>${t.retakeSubsection}</span>
          <span aria-hidden="true">&#x21bb;</span>
        `;
        retakeBtn.addEventListener('click', () => {
          startSubsectionQuiz(state.currentChapterId, state.currentSubsectionId);
        });
        el.resultsActionsGroup.appendChild(retakeBtn);
      } else {
        // Under 100% on subsection -> retake is primary
        const retakeBtn = document.createElement('button');
        retakeBtn.type = 'button';
        retakeBtn.className = 'primary-action-btn';
        retakeBtn.id = 'retake-quiz-btn';
        retakeBtn.innerHTML = `
          <span>${t.retakeSubsection}</span>
          <span class="btn-trailing-disk" aria-hidden="true">&#x21bb;</span>
        `;
        retakeBtn.addEventListener('click', () => {
          startSubsectionQuiz(state.currentChapterId, state.currentSubsectionId);
        });
        el.resultsActionsGroup.appendChild(retakeBtn);

        if (nextSub) {
          const nextSubId = nextSub.id.replace('_', '–');
          const nextSubBtn = document.createElement('button');
          nextSubBtn.type = 'button';
          nextSubBtn.className = 'secondary-action-btn';
          nextSubBtn.id = 'next-chapter-btn';
          nextSubBtn.innerHTML = `
            <span>${state.lang === 'ja' ? `次の節へ (§ ${nextSubId})` : `Next Subsection (§ ${nextSubId})`}</span>
            <span aria-hidden="true">&rarr;</span>
          `;
          nextSubBtn.addEventListener('click', () => {
            startSubsectionQuiz(state.currentChapterId, nextSub.id);
          });
          el.resultsActionsGroup.appendChild(nextSubBtn);
        }

        const fullChapBtn = document.createElement('button');
        fullChapBtn.type = 'button';
        fullChapBtn.className = 'secondary-action-btn';
        fullChapBtn.innerHTML = `
          <span>${t.toFullChapterQuiz}</span>
          <span aria-hidden="true">&rarr;</span>
        `;
        fullChapBtn.addEventListener('click', () => {
          startChapterQuiz(state.currentChapterId);
        });
        el.resultsActionsGroup.appendChild(fullChapBtn);
      }
    }

    // Always include Back to Hub
    const hubBtn = document.createElement('button');
    hubBtn.type = 'button';
    hubBtn.className = 'secondary-action-btn';
    hubBtn.id = 'results-hub-btn';
    hubBtn.innerHTML = `<span>${t.backToHubResults}</span>`;
    hubBtn.addEventListener('click', () => showView('hub'));
    el.resultsActionsGroup.appendChild(hubBtn);
  }

  // Render Results Dashboard & Analytics
  function renderResults() {
    const t = i18n[state.lang];
    const totalQ = state.currentQuestions.length;
    let correctCount = 0;

    state.currentQuestions.forEach((q, idx) => {
      if (state.userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / totalQ) * 100);

    // Save to LocalStorage
    if (state.quizType === 'subsection') {
      localStorage.setItem(`it_score_sub_${state.currentChapterId}_${state.currentSubsectionId}`, `${correctCount}/${totalQ} (${percent}%)`);
    } else {
      localStorage.setItem(`it_score_ch_${state.currentChapterId}`, `${correctCount}/${totalQ} (${percent}%)`);
    }

    // Update Percentage
    el.resultScorePercent.textContent = `${percent}%`;
    el.resultScoreFraction.textContent = `${correctCount} / ${totalQ} ${t.scoreSuffix}`;

    // Animate Radial Gauge (Circumference: 2 * PI * 60 = 377)
    const circumference = 377;
    const offset = circumference - (percent / 100) * circumference;
    setTimeout(() => {
      el.resultCircleProgress.style.strokeDashoffset = offset;
    }, 60);

    // Color stroke based on mastery
    if (percent >= 75) {
      el.resultCircleProgress.style.stroke = 'var(--accent-emerald)';
    } else if (percent >= 50) {
      el.resultCircleProgress.style.stroke = 'var(--accent-amber)';
    } else {
      el.resultCircleProgress.style.stroke = 'var(--accent-rose)';
    }

    // Render Per-Subsection Breakdown
    const subBreakdown = renderSubsectionBreakdown();

    // Verdict copy with subsection awareness
    if (percent === 100) {
      el.resultVerdictTitle.textContent = t.verdictPerfectTitle;
      el.resultVerdictDesc.textContent = state.lang === 'ja'
        ? "すべての節で満点を獲得しました！この章の内容を完全にマスターしています。"
        : "Perfect score across all subsections! You have full mastery of this chapter.";
    } else if (subBreakdown && subBreakdown.weakestSub) {
      const weakDisplayId = subBreakdown.weakestSub.id.replace('_', '–');
      if (percent >= 75) {
        el.resultVerdictTitle.textContent = state.lang === 'ja'
          ? "合格点ですが、復習推奨の節があります"
          : "Passed, but review recommended for some topics";
        el.resultVerdictDesc.textContent = state.lang === 'ja'
          ? `下の節別分析で「§ ${weakDisplayId}」などの弱点を確認し、集中特訓で理解を深めてから次へ進みましょう。`
          : `Review the breakdown below for § ${weakDisplayId} and practice your weaker topics before moving on.`;
      } else {
        el.resultVerdictTitle.textContent = state.lang === 'ja'
          ? "重点的な復習が必要です"
          : "Needs Focused Review";
        el.resultVerdictDesc.textContent = state.lang === 'ja'
          ? `特に正答率の低かった「§ ${weakDisplayId}」から順に、下のボタンから集中特訓を行いましょう。`
          : `Start targeted practice on your lowest-scoring subsections, starting with § ${weakDisplayId}.`;
      }
    } else {
      if (percent >= 75) {
        el.resultVerdictTitle.textContent = t.verdictGoodTitle;
        el.resultVerdictDesc.textContent = t.verdictGoodDesc;
      } else {
        el.resultVerdictTitle.textContent = t.verdictReviewTitle;
        el.resultVerdictDesc.textContent = t.verdictReviewDesc;
      }
    }

    // Render Dynamic Action Buttons (Focus on weakest vs Next chapter)
    renderResultsActions(subBreakdown ? subBreakdown.weakestSub : null, subBreakdown ? subBreakdown.allMastered : false, percent);

    // Render breakdown review questions
    renderReviewCards();
  }

  // Render Detailed Question Review Cards
  function renderReviewCards() {
    const t = i18n[state.lang];
    el.reviewCardsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    state.currentQuestions.forEach((q, idx) => {
      const userChoice = state.userAnswers[idx];
      const isCorrect = userChoice === q.correctIndex;

      // Filter check
      if (state.reviewFilter === 'missed' && isCorrect) {
        return;
      }

      const qData = q[state.lang];
      const shell = document.createElement('div');
      shell.className = 'review-item-shell';

      let optionsRowsHtml = '';
      qData.options.forEach((optText, optIdx) => {
        let rowClass = 'review-option-row';
        let prefix = `${letters[optIdx]}. `;

        if (optIdx === q.correctIndex) {
          rowClass += ' correct-ans';
          prefix = `✓ ${letters[optIdx]}. `;
        } else if (optIdx === userChoice && !isCorrect) {
          rowClass += ' user-wrong';
          prefix = `✕ ${letters[optIdx]}. `;
        }

        optionsRowsHtml += `
          <div class="${rowClass}">
            <span style="font-family: var(--font-mono); font-weight: 700; margin-right: 8px;">${prefix}</span>
            <span>${escapeHtml(optText)}</span>
          </div>
        `;
      });

      let codeSnippetHtml = '';
      if (q.code) {
        codeSnippetHtml = `
          <div class="terminal-code-box" style="margin: 12px 0 16px;">
            <div class="terminal-header"><span>python3 &bull; snippet</span></div>
            <pre><code>${escapeHtml(q.code)}</code></pre>
          </div>
        `;
      }

      shell.innerHTML = `
        <div class="review-item-core ${isCorrect ? 'pass-border' : 'fail-border'}">
          <div class="review-card-top-row">
            <span class="review-q-number">${t.qCountPrefix} ${idx + 1}</span>
            <span class="review-status-tag ${isCorrect ? 'correct' : 'incorrect'}">
              ${isCorrect ? t.statusCorrect : t.statusIncorrect}
            </span>
          </div>
          <h5 class="review-question-text">${escapeHtml(qData.question)}</h5>
          ${codeSnippetHtml}
          <div class="review-options-list">
            ${optionsRowsHtml}
          </div>
          <div class="review-explanation-card">
            <div class="review-explanation-title">${t.explanationLabel}</div>
            <div class="review-explanation-text">${escapeHtml(qData.explanation)}</div>
          </div>
        </div>
      `;

      el.reviewCardsContainer.appendChild(shell);
    });

    if (el.reviewCardsContainer.children.length === 0) {
      el.reviewCardsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-inner); border: 1px solid var(--border-subtle);">
          <p style="font-family: var(--font-display); font-size: 1.05rem; color: var(--accent-emerald);">${t.noMissedQuestions}</p>
        </div>
      `;
    }
  }

  // Keyboard Shortcuts (Tactile navigation)
  function handleKeyboardShortcuts(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (state.activeView === 'quiz') {
      const key = e.key.toLowerCase();
      // Select option with 1-4 or a-d
      if (['1', 'a'].includes(key)) {
        e.preventDefault();
        onOptionSelect(0);
      } else if (['2', 'b'].includes(key)) {
        e.preventDefault();
        onOptionSelect(1);
      } else if (['3', 'c'].includes(key)) {
        e.preventDefault();
        onOptionSelect(2);
      } else if (['4', 'd'].includes(key)) {
        e.preventDefault();
        onOptionSelect(3);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (!el.quizNextBtn.disabled) {
          onNextQuestionClick();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        showView('hub');
      }
    } else if (state.activeView === 'results') {
      if (e.key === 'Enter' || e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        const focusBtn = document.getElementById('focus-weakest-btn');
        if (e.key === 'Enter' && focusBtn) {
          focusBtn.click();
        } else if (state.quizType === 'subsection') {
          startSubsectionQuiz(state.currentChapterId, state.currentSubsectionId);
        } else {
          startChapterQuiz(state.currentChapterId);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        showView('hub');
      }
    } else if (state.activeView === 'hub') {
      if (e.key === 'l' || e.key === 'L') {
        // Toggle language
        e.preventDefault();
        state.lang = state.lang === 'ja' ? 'en' : 'ja';
        el.langJaBtn.classList.toggle('active', state.lang === 'ja');
        el.langEnBtn.classList.toggle('active', state.lang === 'en');
        applyLanguage();
      }
    }
  }

  // Setup Event Listeners
  function initListeners() {
    // Language Switchers
    el.langJaBtn.addEventListener('click', () => {
      if (state.lang !== 'ja') {
        state.lang = 'ja';
        el.langJaBtn.classList.add('active');
        el.langEnBtn.classList.remove('active');
        applyLanguage();
      }
    });

    el.langEnBtn.addEventListener('click', () => {
      if (state.lang !== 'en') {
        state.lang = 'en';
        el.langEnBtn.classList.add('active');
        el.langJaBtn.classList.remove('active');
        applyLanguage();
      }
    });

    // Mode Switchers
    el.modePracticeBtn.addEventListener('click', () => {
      if (state.mode !== 'practice') {
        state.mode = 'practice';
        el.modePracticeBtn.classList.add('active');
        el.modeTestBtn.classList.remove('active');
        if (state.activeView === 'quiz') {
          renderCurrentQuestion();
        }
      }
    });

    el.modeTestBtn.addEventListener('click', () => {
      if (state.mode !== 'test') {
        state.mode = 'test';
        el.modeTestBtn.classList.add('active');
        el.modePracticeBtn.classList.remove('active');
        if (state.activeView === 'quiz') {
          renderCurrentQuestion();
        }
      }
    });

    // Brand Home Link
    if (el.brandHomeTrigger) {
      el.brandHomeTrigger.addEventListener('click', () => showView('hub'));
      el.brandHomeTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showView('hub');
        }
      });
    }

    // Back Buttons
    el.quizBackBtn.addEventListener('click', () => showView('hub'));

    // Next Question Button
    el.quizNextBtn.addEventListener('click', onNextQuestionClick);

    // Results Actions: Dynamic buttons and handlers are attached in renderResultsActions()

    // Review Filters
    el.filterAllBtn.addEventListener('click', () => {
      state.reviewFilter = 'all';
      el.filterAllBtn.classList.add('active');
      el.filterMissedBtn.classList.remove('active');
      renderReviewCards();
    });

    el.filterMissedBtn.addEventListener('click', () => {
      state.reviewFilter = 'missed';
      el.filterMissedBtn.classList.add('active');
      el.filterAllBtn.classList.remove('active');
      renderReviewCards();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', handleKeyboardShortcuts);
  }

  // App Initialization
  function init() {
    initListeners();
    applyLanguage();
    showView('hub');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
