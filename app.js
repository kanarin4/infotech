// InfoTech — Quiz Practice Application
// Chapters 1-14, Bilingual JA/EN, Practice/Test Modes, Tactile Feedback & Responsive Design

(function () {
  'use strict';

  // Global App State
  const state = {
    lang: 'ja', // 'ja' | 'en'
    mode: 'practice', // 'practice' | 'test'
    activeView: 'hub', // 'hub' | 'quiz' | 'results'
    currentChapterId: 1,
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
      heroDesc: "授業前の予習や復習用のクイズです。各回の小テストで扱われるコードの挙動や重要概念を章ごとに確認できます。",
      heroTotalQ: "全14章 / 168問 (各問3〜4バリエーション)",
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
      verdictPerfectDesc: "この章の内容をしっかり理解できています。",
      verdictGoodTitle: "合格点です",
      verdictGoodDesc: "間違えた問題の解説を確認しておきましょう。",
      verdictReviewTitle: "復習が必要です",
      verdictReviewDesc: "下の解説を確認して、もう一度挑戦してみましょう。",
      noMissedQuestions: "全問正解です。間違えた問題はありません。"
    },
    en: {
      appTitle: "InfoTech",
      appSubtitle: "Quiz Prep",
      heroBadge: "Weekly Quiz Prep",
      heroTitle: "Prepare for In-Class Quizzes",
      heroDesc: "Quizzes for weekly class preparation and review. Check your understanding of code behavior and core concepts chapter by chapter.",
      heroTotalQ: "14 Chapters / 168 Questions (3–4 variants per topic)",
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
      noMissedQuestions: "No missed questions. You got everything right."
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
    el.retakeLabel.textContent = t.retakeQuiz;
    el.nextChapLabel.textContent = t.nextChapter;
    el.backHubResultsLabel.textContent = t.backToHubResults;
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

  // Render Hub Chapter Cards with Double-Bezel Architecture
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

        // Check local storage for score
        const savedScore = localStorage.getItem(`it_score_ch_${ch.id}`);

        const cardShell = document.createElement('article');
        cardShell.className = `chapter-card-shell ${savedScore ? 'completed' : ''}`;
        cardShell.setAttribute('role', 'button');
        cardShell.setAttribute('tabindex', '0');
        cardShell.setAttribute('aria-label', `${title} - ${sessionCount} questions (${totalVarieties} variants)`);

        const chLabel = state.lang === 'ja' ? `第 ${ch.id} 章` : `CHAPTER ${ch.id}`;
        const qCountLabel = state.lang === 'ja' 
          ? `${sessionCount} 問 (全${totalVarieties}パターン)` 
          : `${sessionCount} Qs (${totalVarieties} variants)`;

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
            <div class="chapter-card-bottom">
              <span class="question-count-badge">${qCountLabel}</span>
              ${savedScore ? `<span class="score-chip">${savedScore}</span>` : ''}
              <span class="start-link-arrow">&rarr;</span>
            </div>
          </div>
        `;

        cardShell.addEventListener('click', () => startChapterQuiz(ch.id));
        cardShell.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            startChapterQuiz(ch.id);
          }
        });

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

  // Start Quiz for Specific Chapter with Dynamic Variety Sampling & Shuffling
  function startChapterQuiz(chapterId) {
    state.currentChapterId = chapterId;
    const rawSlots = quizData[chapterId] || [];

    // For each slot, pick 1 random variety from the bank, then shuffle options
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

  // Render Current Question Card
  function renderCurrentQuestion() {
    const q = state.currentQuestions[state.currentQuestionIndex];
    if (!q) return;

    const t = i18n[state.lang];
    const totalQ = state.currentQuestions.length;
    const currentNum = state.currentQuestionIndex + 1;

    // Header info
    el.currentChapterPill.textContent = `Ch ${state.currentChapterId}`;
    el.quizProgressCounter.textContent = `${t.qCountPrefix} ${currentNum} / ${totalQ}`;

    const percentProgress = ((currentNum - 1) / totalQ) * 100;
    el.quizProgressFill.style.width = `${percentProgress}%`;

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
    localStorage.setItem(`it_score_ch_${state.currentChapterId}`, `${correctCount}/${totalQ} (${percent}%)`);

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

    // Verdict copy
    if (percent === 100) {
      el.resultVerdictTitle.textContent = t.verdictPerfectTitle;
      el.resultVerdictDesc.textContent = t.verdictPerfectDesc;
    } else if (percent >= 75) {
      el.resultVerdictTitle.textContent = t.verdictGoodTitle;
      el.resultVerdictDesc.textContent = t.verdictGoodDesc;
    } else {
      el.resultVerdictTitle.textContent = t.verdictReviewTitle;
      el.resultVerdictDesc.textContent = t.verdictReviewDesc;
    }

    // Render breakdown review
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

  // Keyboard Shortcuts (Linear/Raycast-grade tactile navigation)
  function handleKeyboardShortcuts(e) {
    // If typing in an input, don't hijack
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
        startChapterQuiz(state.currentChapterId);
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
    el.resultsHubBtn.addEventListener('click', () => showView('hub'));

    // Next Question Button
    el.quizNextBtn.addEventListener('click', onNextQuestionClick);

    // Results Actions
    el.retakeQuizBtn.addEventListener('click', () => {
      startChapterQuiz(state.currentChapterId);
    });

    el.nextChapterBtn.addEventListener('click', () => {
      const nextId = (state.currentChapterId % 14) + 1;
      startChapterQuiz(nextId);
    });

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
