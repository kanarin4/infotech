// InfoTech Quiz Hub Application Logic
// Supports Chapters 1-14, Bilingual JA/EN, Practice Mode & Test Mode, LocalStorage Tracking

(function () {
  'use strict';

  // State
  const state = {
    lang: 'ja', // 'ja' | 'en'
    mode: 'practice', // 'practice' | 'test'
    activeView: 'hub', // 'hub' | 'quiz' | 'results'
    currentChapterId: 1,
    currentQuestionIndex: 0,
    currentQuestions: [],
    userAnswers: [], // array of indices
    practiceAnswered: false,
    reviewFilter: 'all' // 'all' | 'missed'
  };

  // Translations
  const i18n = {
    ja: {
      appTitle: "情報技術基礎 小テスト対策ハブ",
      appSubtitle: "Fundamentals of Information Technology • Quiz Prep",
      heroBadge: "✨ 2026年度 新シラバス対応",
      heroTitle: "授業前クイズで理解度を完全チェック",
      heroDesc: "本講義は事前学習を前提としたハイブリッド形式です。講義カリキュラムに基づき、各回の授業内小テストで頻出するコード追跡・重要概念・典型的な引っ掛け問題を章ごとに特訓できます。",
      heroTextbook: "カリキュラム:",
      heroTotalQ: "全 14 章 / 56 問収録",
      heroModeDesc: "モード: 練習（即時解説）または本番テスト（採点）",
      practiceMode: "💡 練習モード",
      testMode: "⏱ 本番テスト",
      backToHub: "章選択へ戻る",
      qCategory: "確認問題",
      qCountPrefix: "問題",
      nextQ: "次の問題へ",
      finishQuiz: "テストを提出して結果を見る",
      retakeQuiz: "もう一度解く",
      nextChapter: "次の章へ進む",
      backToHubResults: "ハブに戻る",
      reviewHeading: "解答の解説と詳細分析 (Why & How)",
      filterAll: "全問表示",
      filterMissed: "不正解のみ",
      scoreSuffix: "正解",
      statusCorrect: "正解！",
      statusIncorrect: "不正解",
      explanationLabel: "【解説 & 思考プロセス】",
      startQuiz: "挑戦する",
      verdictPerfectTitle: "完璧です！授業内小テストの準備完了",
      verdictPerfectDesc: "この章の重要概念とコードの挙動を的確に理解できています。この調子で本番の小テストに臨みましょう！",
      verdictGoodTitle: "合格ライン達成！あと一歩で満点です",
      verdictGoodDesc: "基礎はしっかり固まっています。間違えた問題の解説を確認して、小テスト本番で100点を目指しましょう！",
      verdictReviewTitle: "復習をおすすめします",
      verdictReviewDesc: "いくつかの重要なトラップや概念でつまずきがありました。下の解説（Why & How）を熟読し、もう一度チャレンジしてみましょう。"
    },
    en: {
      appTitle: "InfoTech Quiz Hub",
      appSubtitle: "Fundamentals of Information Technology • Quiz Preparation",
      heroBadge: "✨ Updated 2026 Curriculum",
      heroTitle: "Master Weekly In-Class Quizzes in Advance",
      heroDesc: "This is a hybrid course where students must prepare beforehand. Practice key code-tracing questions, essential RL concepts, and typical traps chapter by chapter.",
      heroTextbook: "Curriculum:",
      heroTotalQ: "14 Chapters / 56 Questions",
      heroModeDesc: "Mode: Practice (Instant Feedback) or Test (Exam Sim)",
      practiceMode: "💡 Practice Mode",
      testMode: "⏱ Test Mode",
      backToHub: "Back to Chapter Hub",
      qCategory: "Check Question",
      qCountPrefix: "Question",
      nextQ: "Next Question",
      finishQuiz: "Submit & View Results",
      retakeQuiz: "Retake Quiz",
      nextChapter: "Next Chapter",
      backToHubResults: "Return to Hub",
      reviewHeading: "Question Breakdown & Explanations (Why & How)",
      filterAll: "All Questions",
      filterMissed: "Missed Only",
      scoreSuffix: "Correct",
      statusCorrect: "Correct!",
      statusIncorrect: "Incorrect",
      explanationLabel: "【Explanation & Trace】",
      startQuiz: "Start Quiz",
      verdictPerfectTitle: "Outstanding! Fully Ready for In-Class Quiz",
      verdictPerfectDesc: "You have a flawless grasp of this chapter's mechanics and code. You are well-prepared for the in-class evaluation!",
      verdictGoodTitle: "Great Job! Near Perfect Score",
      verdictGoodDesc: "Your foundation is solid. Review the missed question explanations below to ensure full marks in class!",
      verdictReviewTitle: "Recommended Review",
      verdictReviewDesc: "You tripped on some key misconceptions. Read through the detailed 'Why & How' breakdown below and retake the quiz."
    }
  };

  // DOM Elements
  const el = {
    // Views
    hubView: document.getElementById('hub-view'),
    quizView: document.getElementById('quiz-view'),
    resultsView: document.getElementById('results-view'),

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

  // Safe escape
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

  // Apply Current Language Texts
  function applyLanguage() {
    const t = i18n[state.lang];
    document.documentElement.lang = state.lang;

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

  // Render Hub Chapter Cards
  function renderHub() {
    const t = i18n[state.lang];
    el.coursePartsContainer.innerHTML = '';

    courseSections.forEach(part => {
      const partSection = document.createElement('section');
      partSection.className = 'part-section';

      const partTitle = state.lang === 'ja' ? part.partTitleJa : part.partTitleEn;
      const titleBar = document.createElement('div');
      titleBar.className = 'part-title-bar';
      titleBar.innerHTML = `
        <h3><span class="part-indicator"></span>${escapeHtml(partTitle)}</h3>
      `;
      partSection.appendChild(titleBar);

      const grid = document.createElement('div');
      grid.className = 'chapter-grid';

      part.chapters.forEach(ch => {
        const questions = quizData[ch.id] || [];
        const title = state.lang === 'ja' ? ch.titleJa : ch.titleEn;
        const topics = state.lang === 'ja' ? ch.topicsJa : ch.topicsEn;

        // Check local storage for score
        const savedScore = localStorage.getItem(`it_score_ch_${ch.id}`);

        const card = document.createElement('article');
        card.className = 'chapter-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
          <div class="chapter-card-top">
            <span class="chapter-number-tag">CHAPTER ${ch.id}</span>
            <h4 class="chapter-title">${escapeHtml(title)}</h4>
            <p class="chapter-desc">${escapeHtml(topics)}</p>
          </div>
          <div class="chapter-card-bottom">
            <span class="question-count-badge">${questions.length} Questions</span>
            ${savedScore ? `<span class="score-chip">Best: ${savedScore}</span>` : ''}
            <span class="start-quiz-btn">${t.startQuiz} →</span>
          </div>
        `;

        card.addEventListener('click', () => startChapterQuiz(ch.id));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            startChapterQuiz(ch.id);
          }
        });

        grid.appendChild(card);
      });

      partSection.appendChild(grid);
      el.coursePartsContainer.appendChild(partSection);
    });
  }

  // Start Quiz for Specific Chapter
  function startChapterQuiz(chapterId) {
    state.currentChapterId = chapterId;
    state.currentQuestions = quizData[chapterId] || [];
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

    // Render Options
    el.qOptionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    const chosenIndex = state.userAnswers[state.currentQuestionIndex];

    qData.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';

      if (chosenIndex === idx) {
        btn.classList.add('selected');
      }

      // If in practice mode and already answered
      if (state.mode === 'practice' && chosenIndex !== null) {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.classList.add('correct-feedback');
        } else if (chosenIndex === idx) {
          btn.classList.add('incorrect-feedback');
        }
      }

      btn.innerHTML = `
        <span class="option-indicator">${letters[idx]}</span>
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

  // Handle Option Click
  function onOptionSelect(selectedIndex) {
    const q = state.currentQuestions[state.currentQuestionIndex];
    if (!q) return;

    state.userAnswers[state.currentQuestionIndex] = selectedIndex;

    if (state.mode === 'practice') {
      // In practice mode, lock and give instant feedback
      const qData = q[state.lang];
      const isCorrect = selectedIndex === q.correctIndex;

      // Update button classes
      const optionButtons = el.qOptionsContainer.querySelectorAll('.option-btn');
      optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.correctIndex) {
          btn.classList.add('correct-feedback');
        } else if (idx === selectedIndex) {
          btn.classList.add('incorrect-feedback');
        }
      });

      showPracticeFeedback(isCorrect, qData.explanation);
    } else {
      // In test mode, just highlight selected
      const optionButtons = el.qOptionsContainer.querySelectorAll('.option-btn');
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
      el.feedbackStatusBadge.className = 'feedback-badge correct';
      el.feedbackStatusBadge.innerHTML = `✓ ${t.statusCorrect}`;
    } else {
      el.feedbackStatusBadge.className = 'feedback-badge incorrect';
      el.feedbackStatusBadge.innerHTML = `✕ ${t.statusIncorrect}`;
    }

    el.feedbackExplanationText.innerHTML = `
      <strong>${t.explanationLabel}</strong><br>
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

  // Go to Next Question or Results
  function onNextQuestionClick() {
    const totalQ = state.currentQuestions.length;
    if (state.currentQuestionIndex < totalQ - 1) {
      state.currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      // Complete Quiz
      finishQuiz();
    }
  }

  // Finish Quiz & Compute Score
  function finishQuiz() {
    showView('results');
  }

  // Render Results & Why/How Review
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

    // Animate Circle
    el.resultScorePercent.textContent = `${percent}%`;
    el.resultScoreFraction.textContent = `${correctCount} / ${totalQ} ${t.scoreSuffix}`;

    // Circumference = 2 * PI * 60 = ~377
    const circumference = 377;
    const offset = circumference - (percent / 100) * circumference;
    setTimeout(() => {
      el.resultCircleProgress.style.strokeDashoffset = offset;
    }, 100);

    // Color stroke based on pass/fail
    if (percent >= 75) {
      el.resultCircleProgress.style.stroke = 'var(--accent-emerald)';
    } else if (percent >= 50) {
      el.resultCircleProgress.style.stroke = 'var(--accent-amber)';
    } else {
      el.resultCircleProgress.style.stroke = 'var(--accent-rose)';
    }

    // Verdict titles
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

    // Render detailed review cards
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
      const card = document.createElement('div');
      card.className = `review-card ${isCorrect ? 'correct-card' : 'incorrect-card'}`;

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
            <span style="margin-right: 8px; font-weight: 700;">${prefix}</span>
            <span>${escapeHtml(optText)}</span>
          </div>
        `;
      });

      let codeSnippetHtml = '';
      if (q.code) {
        codeSnippetHtml = `
          <div class="code-box" style="margin: 12px 0 16px;">
            <div class="code-box-header"><span>python3 snippet</span></div>
            <pre><code>${escapeHtml(q.code)}</code></pre>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">${t.qCountPrefix} ${idx + 1}</span>
          <span class="review-status-badge ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? t.statusCorrect : t.statusIncorrect}
          </span>
        </div>
        <h5 class="review-question-text">${escapeHtml(qData.question)}</h5>
        ${codeSnippetHtml}
        <div class="review-options-summary">
          ${optionsRowsHtml}
        </div>
        <div class="review-explanation-box">
          <div class="review-explanation-title">${t.explanationLabel}</div>
          <div class="review-explanation-text">${escapeHtml(qData.explanation)}</div>
        </div>
      `;

      el.reviewCardsContainer.appendChild(card);
    });

    if (el.reviewCardsContainer.children.length === 0) {
      el.reviewCardsContainer.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
          <p>🎉 不正解の問題はありません！全問正解です。</p>
        </div>
      `;
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

    // Back to Hub
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
  }

  // Initialization
  function init() {
    initListeners();
    applyLanguage();
    showView('hub');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
