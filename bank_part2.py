# Bank Part 2: Chapters 5 - 7 (36 questions: 3 chapters x 4 slots x 3 varieties)

PART2_DATA = {
  # CHAPTER 5: 機械学習 / Machine Learning & Git
  5: [
    # Slot 1: AI・機械学習・深層学習の包含関係 (AI/ML/DL Hierarchy)
    [
      {
        "id": "ch5_q1_v1",
        "code": None,
        "ja": {
          "question": "人工知能（AI）、機械学習（ML）、深層学習（DL）の包含関係を表す記述として、最も適切なものはどれですか？",
          "options": [
            "AI ⊃ ML ⊃ DL（AIの中に機械学習が含まれ、その中に深層学習が含まれる）",
            "DL ⊃ ML ⊃ AI（深層学習の中に機械学習が含まれ、その中にAIが含まれる）",
            "3者は全く独立した別の分野であり、重なり合う部分はない",
            "ML ⊃ AI ⊃ DL"
          ],
          "explanation": "AI（人工知能）は最も広い概念であり、その中でデータからパターンを学習する手法が「機械学習（ML）」、さらにその中で多層ニューラルネットワークを用いる手法が「深層学習（DL / Deep Learning）」です。"
        },
        "en": {
          "question": "Which of the following correctly describes the relationship between AI, Machine Learning (ML), and Deep Learning (DL)?",
          "options": [
            "AI ⊃ ML ⊃ DL (ML is a subset of AI, and DL is a subset of ML)",
            "DL ⊃ ML ⊃ AI (AI is a subset of ML, which is a subset of DL)",
            "They are three distinct disjoint fields with no conceptual overlap",
            "ML ⊃ AI ⊃ DL"
          ],
          "explanation": "Artificial Intelligence is the broad umbrella. Machine Learning is the subset that learns from empirical data, and Deep Learning is the specialized subset of ML leveraging deep artificial neural networks."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q1_v2",
        "code": None,
        "ja": {
          "question": "従来の「ルールベースAI（エキスパートシステム）」と「機械学習」の根本的な違いは何ですか？",
          "options": [
            "ルールベースは人間が明示的にルールを記述するのに対し、機械学習はデータから自動的にパターンや規則を学習する",
            "ルールベースはPythonでしか実装できず、機械学習はC言語でしか実装できない",
            "ルールベースは画像認識にのみ使われ、機械学習は数値計算にのみ使われる",
            "両者に本質的な違いはなく、単に呼び方が異なるだけである"
          ],
          "explanation": "従来のエキスパートシステムは人間が「もし〜なら…」というルールを網羅的に記述していましたが、機械学習は大量のデータからアルゴリズム自身が予測・判別のパターンやパラメータを最適化して学習します。"
        },
        "en": {
          "question": "What is the fundamental distinction between classical rule-based AI systems and machine learning?",
          "options": [
            "Rule-based AI relies on hand-crafted rules written by humans, while ML extracts patterns and models directly from data",
            "Rule-based AI can only be implemented in Python, while ML is restricted to C",
            "Rule-based systems exclusively handle computer vision, whereas ML only computes tabular data",
            "There is no distinction; they are interchangeable marketing terms"
          ],
          "explanation": "In rule-based AI, human domain experts explicitly hard-code all logic. In Machine Learning, mathematical algorithms optimize parameters directly from training datasets."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q1_v3",
        "code": None,
        "ja": {
          "question": "深層学習（ディープラーニング）が従来の機械学習に対して持つ際立った強みとして、正しいものはどれですか？",
          "options": [
            "多層ニューラルネットワークにより、人間が手作業で特徴量を設計しなくても高次な表現をデータから自動獲得できる点",
            "いかなる学習データも必要とせず、起動した瞬間に100%の精度を発揮する点",
            "計算コストが完全にゼロであり、スマートフォンでも数ミリ秒で学習が完了する点",
            "プログラムのバグを一切含まないことが数学的に保証される点"
          ],
          "explanation": "深層学習の最大の強みは「表現学習（Feature Learning）」能力です。多層構造によって低レベルな特徴（エッジや輪郭）から高レベルな抽象概念（物体の形状など）を自動的に学習・抽出できます。"
        },
        "en": {
          "question": "What is the major technical advantage of Deep Learning compared to traditional shallow Machine Learning models?",
          "options": [
            "Multi-layer networks learn high-level feature representations automatically, bypassing manual feature engineering",
            "It requires zero training data and achieves perfect accuracy upon initial initialization",
            "Training takes zero compute budget and trains in milliseconds on any hardware",
            "The model is mathematically guaranteed to contain zero prediction errors"
          ],
          "explanation": "Deep Learning eliminates the bottleneck of manual feature engineering by learning hierarchical, end-to-end representations directly from raw inputs through deep neural architectures."
        },
        "correctIndex": 0
      }
    ],

    # Slot 2: 機械学習の3大分類 (3 Major ML Paradigms)
    [
      {
        "id": "ch5_q2_v1",
        "code": None,
        "ja": {
          "question": "入力データと正解ラベルのペアを与え、未知のデータに対して正しい出力を予測できるように学習する手法はどれですか？",
          "options": ["教師あり学習（Supervised Learning）", "教師なし学習（Unsupervised Learning）", "強化学習（Reinforcement Learning）", "進化的計算（Evolutionary Computing）"],
          "explanation": "教師あり学習（Supervised Learning）は、「入力と正解ラベル（教師信号）」のペアをもとに、新しい入力に対して正解を推論・分類・回帰できるようにモデルを訓練します。"
        },
        "en": {
          "question": "Which machine learning paradigm trains models using pairs of input data and ground-truth output labels?",
          "options": ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Evolutionary Computing"],
          "explanation": "Supervised Learning provides the model with labeled pairs (input x and target y), training it to approximate a mapping function for classification or regression."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q2_v2",
        "code": None,
        "ja": {
          "question": "正解ラベルを与えずに、データ自体の統計的性質や類似度に基づいてグループ分け（クラスタリング）を行う学習手法はどれですか？",
          "options": ["教師なし学習（Unsupervised Learning）", "教師あり学習（Supervised Learning）", "強化学習（Reinforcement Learning）", "転移学習（Transfer Learning）"],
          "explanation": "教師なし学習（Unsupervised Learning）はラベルのないデータから潜在的な構造、クラスタ、主成分などを自動的に抽出します（k-meansクラスタリングやPCAなど）。"
        },
        "en": {
          "question": "Which machine learning paradigm groups data points based on inherent statistical similarities without using any target labels?",
          "options": ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Transfer Learning"],
          "explanation": "Unsupervised Learning discovers underlying patterns, groupings, or low-dimensional manifolds from unlabeled inputs (e.g. k-means clustering, PCA)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q2_v3",
        "code": None,
        "ja": {
          "question": "エージェントが環境との相互作用を通じて試行錯誤し、得られる「報酬」の総和を最大化するように行動方針を学習する枠組みは何ですか？",
          "options": ["強化学習（Reinforcement Learning）", "教師あり学習（Supervised Learning）", "教師なし学習（Unsupervised Learning）", "ルールベース推論"],
          "explanation": "強化学習（Reinforcement Learning）は、正解の行動を直接教えられる代わりに、行動によって環境から返される「報酬（Reward）」を手がかりに最適な行動方針（方策）を獲得します。"
        },
        "en": {
          "question": "Which paradigm involves an agent learning a behavioral policy through trial-and-error to maximize cumulative rewards?",
          "options": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Rule-Based Expert Systems"],
          "explanation": "Reinforcement Learning centers on an autonomous agent interacting with an environment, guided by scalar reward feedback rather than labeled correct actions."
        },
        "correctIndex": 0
      }
    ],

    # Slot 3: 強化学習の固有の特徴 (Traits of Reinforcement Learning)
    [
      {
        "id": "ch5_q3_v1",
        "code": None,
        "ja": {
          "question": "強化学習が「教師あり学習」と大きく異なる特徴として、最も適切なものはどれですか？",
          "options": [
            "行動の直後ではなく、将来の時間経過後に結果が現れる「遅延報酬（Delayed Reward）」を扱う点",
            "学習にコンピュータやGPUを一切使用できない点",
            "正解のラベルが1ステップごとに必ず人間から与えられる点",
            "一度決めた行動を途中で変更することが禁止されている点"
          ],
          "explanation": "強化学習では「今取った行動が良い結果につながるのが数十ステップ後になる」という遅延報酬（クレジット割り当て問題）を解く必要がある点が教師あり学習との大きな違いです。"
        },
        "en": {
          "question": "What is a defining challenge of Reinforcement Learning that distinguishes it from Supervised Learning?",
          "options": [
            "Handling delayed rewards where the consequences of an action appear many time steps into the future",
            "The total ban on using matrix operations and GPU accelerators",
            "Receiving human ground-truth labels for optimal actions after every step",
            "Being restricted to strictly static, non-interactive datasets"
          ],
          "explanation": "In Reinforcement Learning, rewards are often delayed across many sequential steps (the temporal credit assignment problem), unlike supervised learning where immediate error gradients exist for each sample."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q3_v2",
        "code": None,
        "ja": {
          "question": "強化学習において、エージェントが得られるフィードバックの性質として正しいものはどれですか？",
          "options": [
            "「何が正解の行動だったか」ではなく、「取った行動の結果がどれくらい良かったか（報酬の大小）」という評価的フィードバック",
            "「次はこのキーを押すべきである」という完全な指示指示フィードバック",
            "常に数学的な正解証明がテキスト形式で与えられるフィードバック",
            "一切のフィードバックが返されない完全な無情報フィードバック"
          ],
          "explanation": "強化学習のフィードバックは「指導（インストラクション）」ではなく「評価（エバリュエーション）」です。どの行動が最適解かは教えられず、自分が選んだ行動の良し悪し（報酬値）のみが知らされます。"
        },
        "en": {
          "question": "What is the nature of the feedback an agent receives in Reinforcement Learning?",
          "options": [
            "Evaluative feedback (indicating how desirable the outcome was) rather than instructive feedback (prescribing the optimal action)",
            "Direct prescriptive instructions telling the agent exactly which motor commands to trigger next",
            "Formal mathematical proofs guaranteeing convergence in text format",
            "Complete absence of any feedback signal whatsoever"
          ],
          "explanation": "RL feedback is evaluative: the environment provides a scalar reward measuring the success of the chosen action, but never reveals what the optimal alternative action would have been."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q3_v3",
        "code": None,
        "ja": {
          "question": "強化学習において、エージェントが収集する学習データに関して正しい説明はどれですか？",
          "options": [
            "エージェント自身の行動選択によって次に訪れる状態が決まるため、データの収集方針そのものが学習に直結する",
            "事前に準備された固定の画像データセットのみを何周も読み込む",
            "常にすべての状態が均等な確率で自動的に順番に訪れる",
            "エージェントは環境の状態を自由自在に書き換える権限を持っている"
          ],
          "explanation": "強化学習では、エージェントがどの方策をとるかによって探索されるデータ（経験した状態や報酬）の分布が動的に変化します。"
        },
        "en": {
          "question": "How does data generation work in Reinforcement Learning compared to static supervised datasets?",
          "options": [
            "The data distribution is dynamically driven by the agent's own policy choices and exploration behavior",
            "The agent solely loops over a static, pre-collected, immutable image dataset",
            "All environment states are guaranteed to be visited with equal uniform frequency",
            "The agent possesses administrative privileges to arbitrarily rewrite the laws of the environment"
          ],
          "explanation": "In RL, data collection is active: the trajectory of visited states and collected rewards depends directly on the policy currently deployed by the agent."
        },
        "correctIndex": 0
      }
    ],

    # Slot 4: Gitによるバージョン管理 (Version Control with Git)
    [
      {
        "id": "ch5_q4_v1",
        "code": None,
        "ja": {
          "question": "Gitにおいて、変更したファイルを「コミット対象として登録（ステージング）」するための基本コマンドはどれですか？",
          "options": ["git add", "git commit", "git push", "git init"],
          "explanation": "「git add ファイル名」を実行することで、作業ディレクトリの変更内容がステージングエリア（インデックス）に追加され、次のコミットの対象となります。"
        },
        "en": {
          "question": "In Git, which command stages modified files in preparation for a commit?",
          "options": ["git add", "git commit", "git push", "git init"],
          "explanation": "'git add <file>' moves modified working files into the staging area (index) so they can be bundled into the next snapshot."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q4_v2",
        "code": None,
        "ja": {
          "question": "ステージングエリアにある変更履歴を、メッセージとともにリポジトリへ永続記録するコマンドはどれですか？",
          "options": ["git commit", "git add", "git status", "git clone"],
          "explanation": "「git commit -m \"メッセージ\"」によって、ステージングされた変更がリポジトリのコミット履歴として永続的に記録されます。"
        },
        "en": {
          "question": "Which Git command permanently records staged changes into the local repository history along with a descriptive message?",
          "options": ["git commit", "git add", "git status", "git clone"],
          "explanation": "'git commit -m \"message\"' takes the staged snapshot and creates a new permanent commit node in the repository tree."
        },
        "correctIndex": 0
      },
      {
        "id": "ch5_q4_v3",
        "code": None,
        "ja": {
          "question": "機械学習の開発や実験において、Gitなどのバージョン管理システムを導入する意義として最も適切なものはどれですか？",
          "options": [
            "モデルのコードやハイパーパラメータの変更履歴を確実に追跡し、過去の実験結果を再現可能にするため",
            "プログラムの実行速度が自動的に2倍に高速化されるため",
            "GPUのメモリ容量をソフトウェア的に倍増させるため",
            "インターネットがないとPythonを実行できなくするため"
          ],
          "explanation": "機械学習ではコードの変更や設定の微修正で学習結果が大きく変わるため、バージョン管理を行うことで「どのコードと設定でその精度が出たのか」を確実に再現・追跡できます。"
        },
        "en": {
          "question": "Why is version control (e.g. Git) essential in machine learning development and experimental workflows?",
          "options": [
            "It rigorously tracks code and hyperparameter revisions, ensuring reproducibility of past experimental results",
            "It automatically doubles the physical execution speed of deep neural networks",
            "It doubles GPU VRAM through virtual memory tricks",
            "It prevents Python from executing when disconnected from GitHub"
          ],
          "explanation": "In ML research, tracking exact configurations and code versions is fundamental for experimental provenance and scientific reproducibility."
        },
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 6: 多腕バンディット問題 / Multi-Armed Bandit Problem
  6: [
    # Slot 1: 探索と活用のトレードオフ (Exploration vs Exploitation)
    [
      {
        "id": "ch6_q1_v1",
        "code": None,
        "ja": {
          "question": "多腕バンディット問題において、「活用（Exploitation）」とはどのような行動選択を指しますか？",
          "options": [
            "現在判明している情報の中で、最も期待値（Q値）が高いと推定されるスロット台を引くこと",
            "まだ引いたことがない未知のスロット台をランダムに引いて情報を集めること",
            "コインの投入枚数を毎回2倍に増やすこと",
            "すべてのスロット台を同時に引くこと"
          ],
          "explanation": "「活用（Exploitation）」は、現時点で得られている推定値（Q値）が最大のアクションを選び、目先の報酬を最大化しようとする行動です。"
        },
        "en": {
          "question": "In the Multi-Armed Bandit framework, what does 'Exploitation' refer to?",
          "options": [
            "Selecting the arm with the highest currently estimated value (Q-value) to maximize immediate reward",
            "Pulling poorly-understood or unvisited arms at random to gather new information",
            "Doubling the coin wager on every consecutive trial",
            "Actuating all bandit levers simultaneously"
          ],
          "explanation": "Exploitation means capitalizing on existing knowledge by choosing the greedy action that currently appears best."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q1_v2",
        "code": None,
        "ja": {
          "question": "「純粋な貪欲法（Pure Greedy: ε=0）」を採用した場合に発生しやすい典型的な失敗（限界）は何ですか？",
          "options": [
            "初期の偶然で少し高い報酬が出た台に固執し、より優れた台を一生発見できなくなる",
            "すべての台を永久にランダムに引き続けて報酬を浪費する",
            "Q値の計算にメモリを無限に消費してクラッシュする",
            "数学的に必ず真の最適台を発見できるため失敗は存在しない"
          ],
          "explanation": "純粋な貪欲法は探索を全く行わないため、初期の試行でたまたま良い報酬が出た平凡な台を「最良」と誤認し、真に当たる確率が高い別の台を永遠に試さず見逃してしまいます。"
        },
        "en": {
          "question": "What is the primary failure mode of a pure greedy strategy (ε = 0) in the multi-armed bandit problem?",
          "options": [
            "It can lock onto a mediocre arm based on early lucky returns and never discover the true optimal arm",
            "It perpetually pulls random arms forever, wasting potential returns",
            "It runs out of memory attempting to calculate floating point estimates",
            "A pure greedy strategy is mathematically infallible and has no failure mode"
          ],
          "explanation": "Without exploration, early variance can bias initial estimates, causing pure greedy agents to exploit a suboptimal arm indefinitely while ignoring superior options."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q1_v3",
        "code": None,
        "ja": {
          "question": "「探索（Exploration）」を行う主な目的として、最も適切なものはどれですか？",
          "options": [
            "各スロット台の真の期待値をより正確に把握し、長期的なトータル報酬を最大化するため",
            "現在の推定値が一番低い台だけを意図的に引き続けるため",
            "乱数生成器の品質を検証するため",
            "エージェントの行動履歴を消去するため"
          ],
          "explanation": "探索（Exploration）の目的は、未知または推定精度の低い台のデータを集めて推定値（Q値）の不確実性を減らし、より優れた選択肢を発見して長期的な利益を大きくすることです。"
        },
        "en": {
          "question": "What is the primary objective of 'Exploration' in multi-armed bandits?",
          "options": [
            "Gathering information to improve value estimates of uncertain arms, unlocking higher long-term returns",
            "Deliberately choosing only the worst possible arm on every trial",
            "Benchmarking the performance of the system pseudorandom number generator",
            "Purging the agent's historical memory logs"
          ],
          "explanation": "Exploration sacrifices short-term returns to collect information about uncertain actions, preventing premature convergence on suboptimal strategies."
        },
        "correctIndex": 0
      }
    ],

    # Slot 2: 標本平均法とQ値の逐次更新 (Sample-Average & Incremental Updates)
    [
      {
        "id": "ch6_q2_v1",
        "code": None,
        "ja": {
          "question": "ある腕 a を k 回引いて得られた報酬が R_1, R_2, ..., R_k であるとき、標本平均法による価値推定値 Q(a) はどのように求まりますか？",
          "options": [
            "得られた報酬の総和を試行回数 k で割った算術平均値",
            "最後に得られた報酬 R_k の値そのもの",
            "得られた報酬のうち最も大きかった最大値（max）",
            "k 回の二乗和平方根"
          ],
          "explanation": "標本平均法（Sample-average method）では、その行動を選択した回数 k と、そのとき得られた報酬の合計から平均値 Q(a) = (R_1 + ... + R_k) / k を推定値とします。"
        },
        "en": {
          "question": "Under the sample-average method, how is the estimated value Q(a) of arm a computed after k pulls yielding rewards R_1, ..., R_k?",
          "options": [
            "The arithmetic mean: the sum of observed rewards divided by the pull count k",
            "The raw value of the most recent reward R_k alone",
            "The maximum single reward observed among all k trials",
            "The root-mean-square of the reward sequence"
          ],
          "explanation": "The sample-average estimate is simply the empirical average of rewards received from taking that action: Q_k = (1/k) * sum(R_i)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q2_v2",
        "code": "# 新しい推定値 = 古い推定値 + ステップサイズ * (得られた報酬 - 古い推定値)\nQ_new = Q_old + (1 / k) * (R - Q_old)",
        "ja": {
          "question": "上記のように標本平均を逐次更新（インクリメンタル更新）する利点として、最も適切なものはどれですか？",
          "options": [
            "過去のすべての報酬履歴（R_1〜R_{k-1}）をメモリに保存し続ける必要がなく、メモリ消費量を O(1) に抑えられる点",
            "計算結果が必ず 100 に固定される点",
            "除算（割り算）を一切行わずに計算できる点",
            "乱数を使わずに探索できるようになる点"
          ],
          "explanation": "逐次更新式「Q_{k+1} = Q_k + (1/k)(R_k - Q_k)」を使うことで、過去の全報酬履歴を配列として保持する必要がなくなり、直前の Q値 と 回数 k だけでメモリ消費量 O(1) で更新できます。"
        },
        "en": {
          "question": "What is the key engineering benefit of the incremental update formula Q_new = Q_old + (1/k) * (R - Q_old)?",
          "options": [
            "It eliminates the need to store the entire history of past rewards in memory, keeping space complexity at O(1)",
            "It guarantees that every updated estimate equals 100",
            "It completely avoids performing any floating point division",
            "It eliminates randomness from the environment"
          ],
          "explanation": "The incremental update requires storing only the current estimate Q_k and step counter k, updating in O(1) time and O(1) memory without retaining historical logs."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q2_v3",
        "code": None,
        "ja": {
          "question": "報酬の確率分布が時間とともに変動する「非定常（Non-stationary）バンディット問題」において、1/k の代わりに固定値のステップサイズ α (0 < α ≤ 1) を用いる理由は何ですか？",
          "options": [
            "遠い過去の古い報酬よりも、最近得られた新しい報酬に大きな重みを置いて追従させるため",
            "学習を途中で強制停止させるため",
            "すべての腕のQ値をゼロにリセットするため",
            "計算量を O(n^2) に増やすため"
          ],
          "explanation": "固定のステップサイズ α を使うと、過去の報酬の影響が指数関数的に減衰（指数移動平均）するため、時間経過で環境が変化しても直近の傾向に柔軟に適応できます。"
        },
        "en": {
          "question": "In non-stationary bandit problems where reward probabilities drift over time, why use a constant step size α (0 < α ≤ 1) instead of 1/k?",
          "options": [
            "It places exponentially greater weight on recent rewards than on distant historical observations",
            "It halts updates when the counter reaches 100",
            "It resets all Q-values to 0 periodically",
            "It forces complexity to scale quadratically"
          ],
          "explanation": "Using a constant step-size parameter results in an exponential recency-weighted average, allowing the agent to track changes in dynamic, non-stationary environments."
        },
        "correctIndex": 0
      }
    ],

    # Slot 3: ε-greedy法のアルゴリズム (ε-greedy Algorithm Mechanics)
    [
      {
        "id": "ch6_q3_v1",
        "code": None,
        "ja": {
          "question": "「ε-greedy法」における各試行での行動選択ルールとして、正しい説明はどれですか？",
          "options": [
            "確率 1 - ε で現在のQ値が最大のアクションを選び、確率 ε で全アクションからランダムに選ぶ",
            "確率 ε で常に何もしないパス（待機）を選ぶ",
            "偶数回目の試行では常に第1のアクション、奇数回目の試行では第2のアクションを選ぶ",
            "得られた報酬の金額が ε を超えるまで同じアクションを繰り返す"
          ],
          "explanation": "ε-greedy法は、大部分（確率 1 - ε）で最も有望な推定最良アクション（活用）を選びつつ、時々（確率 ε）ランダムなアクションを選択（探索）するシンプルな手法です。"
        },
        "en": {
          "question": "What is the action selection rule of the ε-greedy algorithm?",
          "options": [
            "With probability 1 - ε choose the greedy action (max Q), and with probability ε choose an action uniformly at random",
            "With probability ε do nothing and skip the turn",
            "Alternate deterministically between arm 1 on even steps and arm 2 on odd steps",
            "Pull arm 1 until reward exceeds ε, then reset"
          ],
          "explanation": "ε-greedy balances exploitation and exploration: it picks the greedy action with probability 1 - ε, and explores a random action with probability ε."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q3_v2",
        "code": None,
        "ja": {
          "question": "4本腕のバンディット問題において、複数の腕が「同一の最高Q値」で並んだ場合、標準的なε-greedy法はどう処理しますか？",
          "options": [
            "最高Q値を持つ候補の中からランダム（等確率）に1つを選択して決定する",
            "プログラムがエラーで停止する",
            "常にインデックスが最も若い腕（腕0）を強制的に選ぶ",
            "Q値をすべて0に初期化し直す"
          ],
          "explanation": "複数の行動が同率1位（タイ）となった場合、特定の行動への偏りを防ぐため、同率1位の候補群の中からランダムにタイブレーク（決着）を行うのが標準的です。"
        },
        "en": {
          "question": "In an ε-greedy bandit, how are ties broken when multiple arms share the identical highest Q-value?",
          "options": [
            "Ties are broken arbitrarily, typically selecting uniformly at random among the tied best arms",
            "The interpreter raises a ValueError and halts",
            "The system is strictly locked to arm 0 forever",
            "All Q-values are reset to zero"
          ],
          "explanation": "When multiple actions tie for the maximum estimated value, standard implementations break ties randomly among the maximal candidates to prevent systematic bias."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q3_v3",
        "code": "# 4本腕バンディット、ε = 0.2 の設定\n# 確率 0.8 で最高Q値の腕を選択\n# 確率 0.2 で全4本の腕からランダム選択",
        "ja": {
          "question": "上記の設定において、現在「最高Q値を持つ腕」が選ばれるトータルの確率はいくつですか？",
          "options": ["0.85 (85%)", "0.80 (80%)", "0.20 (20%)", "0.25 (25%)"],
          "explanation": "活用時に選ばれる確率 0.80 に加え、探索時（確率 0.20）に4本の中からランダムに選ばれる確率 0.20 × (1/4) = 0.05 が加算されるため、合計確率は 0.80 + 0.05 = 0.85 (85%) になります。"
        },
        "en": {
          "question": "In a 4-armed bandit with ε = 0.2, what is the total probability that the currently greedy arm is selected?",
          "options": ["0.85 (85%)", "0.80 (80%)", "0.20 (20%)", "0.25 (25%)"],
          "explanation": "The greedy action is chosen directly during exploitation (probability 1 - ε = 0.80), plus during exploration when randomly picking among 4 arms (0.20 * 1/4 = 0.05), totaling 0.85."
        },
        "correctIndex": 0
      }
    ],

    # Slot 4: パラメータεの影響と減衰 (Tuning ε & Epsilon Decay)
    [
      {
        "id": "ch6_q4_v1",
        "code": None,
        "ja": {
          "question": "ε-greedy法において、パラメータ ε の値を「1.0」に設定した場合の動作はどうなりますか？",
          "options": [
            "Q値を一切考慮せず、毎回完全にランダムに行動を選択する（純粋な探索）",
            "毎回必ず最高Q値の行動だけを選択する（純粋な活用）",
            "学習が即座に完了する",
            "Q値がすべて 1.0 に固定される"
          ],
          "explanation": "ε = 1.0 は「100%の確率でランダム選択を行う」設定であり、これまでに学習したQ値を全く利用しない完全なランダム行動（純粋な探索）になります。"
        },
        "en": {
          "question": "In ε-greedy selection, what happens if parameter ε is set to 1.0?",
          "options": [
            "The agent chooses actions completely at random on every step, completely ignoring learned Q-values",
            "The agent behaves as a purely greedy optimizer",
            "The agent halts immediately because training converges",
            "All Q-values are permanently clamped to 1.0"
          ],
          "explanation": "When ε = 1.0, exploration probability is 100%, causing the agent to pick uniformly random actions without exploiting learned estimates."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q4_v2",
        "code": None,
        "ja": {
          "question": "学習初期は ε を高め（例: 1.0）にしておき、試行を重ねるにつれて徐々に ε を小さくしていく手法は何と呼ばれますか？",
          "options": [
            "ε-decay（イプシロン減衰法）",
            "モンテカルロ木探索",
            "過学習（Overfitting）",
            "バックプロパゲーション"
          ],
          "explanation": "ε-decay（減衰法）は、未知の初期段階では広く探索し、推定値が信頼できるようになってきた終盤では活用をメインに切り替える合理的なアプローチです。"
        },
        "en": {
          "question": "What is the technique called where parameter ε starts high (e.g. 1.0) and decreases over training iterations?",
          "options": [
            "ε-decay (Epsilon Decay)",
            "Monte Carlo Tree Search",
            "Overfitting",
            "Backpropagation"
          ],
          "explanation": "ε-decay gradually shifts the agent's behavior from aggressive early exploration towards reliable late-stage exploitation as value estimates mature."
        },
        "correctIndex": 0
      },
      {
        "id": "ch6_q4_v3",
        "code": None,
        "ja": {
          "question": "バンディット問題で ε = 0.1 と設定した固定エージェントが、長時間の試行後も満点（最適台の期待値）にわずかに届かない理由は何ですか？",
          "options": [
            "学習が十分に進んだ後でも、10%の確率でランダムな探索行動を続けてしまうため",
            "0.1 という数値が小さすぎてQ値が更新されないため",
            "Q値が負の値に発散するため",
            "コンピュータの丸め誤差が蓄積するため"
          ],
          "explanation": "固定の ε=0.1 では、たとえ最適台を特定した後でも 10% の確率で他の台を試し続けるため、その 10% の試行で劣った台を引くペナルティが常に残り続けます。"
        },
        "en": {
          "question": "Why does a fixed ε-greedy agent with ε = 0.1 never achieve the theoretical maximum possible average reward in late trials?",
          "options": [
            "It continues exploring suboptimal arms with 10% probability even after discovering the best arm",
            "ε = 0.1 is too small for Q-updates to compute",
            "Q-values inevitably diverge toward negative infinity",
            "Floating-point roundoff errors corrupt the value table"
          ],
          "explanation": "A static ε = 0.1 policy continues to take non-greedy exploration steps 10% of the time, perpetually suffering sub-optimal returns on those random exploratory pulls."
        },
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 7: 強化学習の基礎 / Foundations of Reinforcement Learning
  7: [
    # Slot 1: エージェントと環境の相互作用ループ (Agent-Environment Loop)
    [
      {
        "id": "ch7_q1_v1",
        "code": None,
        "ja": {
          "question": "強化学習の各ステップ t におけるエージェントと環境のやり取りとして、正しい順序はどれですか？",
          "options": [
            "エージェントが状態 S_t を観測し行動 A_t を選択 → 環境が報酬 R_{t+1} と次状態 S_{t+1} を返す",
            "環境が行動 A_t を決定 → エージェントが報酬 R_{t+1} を環境に支払う",
            "エージェントが次状態 S_{t+1} を強制指定 → 環境が状態 S_t を計算する",
            "報酬 R_{t+1} が先に決まり → その後にエージェントが初期状態 S_t を選ぶ"
          ],
          "explanation": "強化学習の基本サイクルは「①状態 S_t の観測 → ②行動 A_t の実行 → ③環境からの報酬 R_{t+1} と新状態 S_{t+1} の受け取り」というステップの連続です。"
        },
        "en": {
          "question": "What is the standard interaction sequence between Agent and Environment at discrete time step t?",
          "options": [
            "Agent observes state S_t and selects action A_t; Environment responds with reward R_{t+1} and next state S_{t+1}",
            "Environment picks action A_t; Agent computes and delivers reward R_{t+1} to Environment",
            "Agent arbitrarily commands next state S_{t+1}; Environment infers previous state S_t",
            "Reward R_{t+1} is fixed upfront before agent selects initial state S_t"
          ],
          "explanation": "The fundamental RL loop: Agent observes S_t, acts with A_t, and the environment transitions to S_{t+1} while emitting scalar reward R_{t+1}."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q1_v2",
        "code": None,
        "ja": {
          "question": "強化学習において、「エージェント」と「環境」の境界線（境界）はどのように定義されますか？",
          "options": [
            "エージェントが自由かつ任意に直接制御できないものはすべて「環境」に含まれる",
            "PC本体がエージェントで、モニタやキーボードが環境である",
            "ソフトウェアのコード行数が100行未満のものがエージェントである",
            "エージェントと環境の間に明確な境界線は存在しない"
          ],
          "explanation": "強化学習の定式化では、ロボットのモーターやバッテリー残量のように物理的にロボット内部にあっても「エージェントの意思で任意に即座に変更できない物理制約」はすべて環境の一部としてモデル化されます。"
        },
        "en": {
          "question": "In Reinforcement Learning theory, how is the boundary between Agent and Environment defined?",
          "options": [
            "Anything that cannot be arbitrarily and directly modified at will by the agent is part of the Environment",
            "The computer chassis is the Agent, while monitors and keyboards are the Environment",
            "Functions under 100 lines of code belong to the Agent",
            "There is no conceptual boundary; both are identical components"
          ],
          "explanation": "The boundary is defined by control: even internal hardware components (like motors or joint dynamics) count as Environment if the agent cannot alter them directly at will."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q1_v3",
        "code": None,
        "ja": {
          "question": "時間ステップ t で行動 A_t を取った結果として得られる報酬の添字を「R_{t+1}」と表記する理由は何ですか？",
          "options": [
            "行動をとった結果として現れる報酬は、次の時刻 (t+1) に確定して受け取られるため",
            "単なるタイポ（誤植）であり、本来は R_t と書くべきであるため",
            "報酬は常に1ステップ遅れてマイナスされる罰則だから",
            "添字を増やさないと数式がエラーになるため"
          ],
          "explanation": "時刻 t で選択した行動 A_t の影響によって環境が状態遷移し、その結果としての報酬 R_{t+1} は次の時刻 t+1 にエージェントに届くため、現代の標準テキスト（Sutton & Barto等）では R_{t+1} と表記します。"
        },
        "en": {
          "question": "Why is the reward resulting from action A_t taken at time t standardly indexed as R_{t+1}?",
          "options": [
            "Because the reward arrives together with the next state transition at time step t+1",
            "It is a historical typo in standard literature; it should strictly be R_t",
            "Because rewards are always delayed penalties subtracted one step late",
            "Mathematical notation forbids reusing the t index"
          ],
          "explanation": "In standard modern notation (Sutton & Barto), reward R_{t+1} and next state S_{t+1} are emitted jointly by the environment at time step t+1 as the causal consequence of (S_t, A_t)."
        },
        "correctIndex": 0
      }
    ],

    # Slot 2: マルコフ決定プロセス（MDP）とマルコフ性 (MDP & Markov Property)
    [
      {
        "id": "ch7_q2_v1",
        "code": None,
        "ja": {
          "question": "状態の「マルコフ性（Markov Property）」を満たす条件として、正しい説明はどれですか？",
          "options": [
            "次状態への遷移確率が「現在の状態 S_t と行動 A_t」のみに依存し、それ以前の過去の履歴には依存しない",
            "過去すべての履歴データをすべて保存しておかなければ次の状態を計算できない",
            "いかなる行動をとっても状態が絶対に変化しない",
            "すべての状態が必ず均等な確率で推移する"
          ],
          "explanation": "マルコフ性とは「未来は、過去の全履歴ではなく、現在の状態のみを通じて決まる」という性質です。現在の状態 S_t が過去のすべての情報を要約していれば、過去の履歴を参照する必要がありません。"
        },
        "en": {
          "question": "What does the 'Markov Property' state regarding environment dynamics?",
          "options": [
            "The probability of transitioning to next state S_{t+1} depends only on current state S_t and action A_t, not on past history",
            "Computing the next state strictly requires querying the entire chronological history from inception",
            "Actions taken by an agent can never induce any change in state",
            "All state transitions occur with uniform equal probability"
          ],
          "explanation": "The Markov Property states that the future is independent of the past given the present: P(S_{t+1}, R_{t+1} | S_t, A_t, S_{t-1}, A_{t-1}, ...) = P(S_{t+1}, R_{t+1} | S_t, A_t)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q2_v2",
        "code": None,
        "ja": {
          "question": "マルコフ決定プロセス（MDP）を数学的に定義する4要素（または5要素）の構成として正しいものはどれですか？",
          "options": [
            "状態集合 S、行動集合 A、状態遷移確率 P、報酬関数 R、割引率 γ",
            "CPU、主記憶、SSD、バス、電源",
            "Python、IDLE、NumPy、Gymnasium、PyTorch",
            "学習率、エポック数、バッチサイズ、損失関数"
          ],
          "explanation": "MDPは通常、タプル (S, A, P, R, γ) で定式化されます。S=状態集合、A=行動集合、P=状態遷移確率、R=報酬関数、γ=割引率です。"
        },
        "en": {
          "question": "Which set of components formally defines a Markov Decision Process (MDP)?",
          "options": [
            "State space S, Action space A, Transition dynamics P, Reward function R, and Discount factor γ",
            "CPU, DRAM, SSD storage, System Bus, and Power Supply",
            "Python, IDLE, NumPy, Gymnasium, and PyTorch",
            "Learning rate, Epoch count, Batch size, and Loss function"
          ],
          "explanation": "A formal MDP is defined by the 5-tuple (S, A, P, R, γ): States, Actions, Transition probability distribution, Reward function, and Discount factor."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q2_v3",
        "code": None,
        "ja": {
          "question": "テレビゲームの画面で「静止画像1枚」だけを状態とした場合、マルコフ性が破られる典型的な例はどれですか？",
          "options": [
            "静止画1枚からはキャラクターの「移動速度や移動方向」が分からず、過去のフレームを見ないと次の位置を予測できない",
            "静止画の色数が多すぎてメモリに入りきらないため",
            "ゲームのスコアがゼロのときは画面が真っ暗になるため",
            "コントローラーのボタン数が多すぎるため"
          ],
          "explanation": "ボールが空中にある1枚の静止画だけでは、ボールが上昇中なのか落下中なのか（速度ベクトル）が判別できません。過去フレームの情報が必要になるため、単一フレームは完全なマルコフ状態になりません（DQNでは直近4フレームを重ねて入力します）。"
        },
        "en": {
          "question": "Why does using a single static video frame as the state observation in a game violate the Markov property?",
          "options": [
            "A single frame reveals position but not velocity or trajectory, requiring historical frames to predict future movement",
            "Modern game engines produce too many pixels for memory",
            "The score is reset whenever an observation is captured",
            "Gamepad buttons cannot map to matrix tensors"
          ],
          "explanation": "A single still image lacks velocity/momentum information (e.g. which way a ball is traveling), meaning the past trajectory is needed to predict the next state."
        },
        "correctIndex": 0
      }
    ],

    # Slot 3: 割引率γと収益 (Discount Factor γ & Returns)
    [
      {
        "id": "ch7_q3_v1",
        "code": "# 割引収益 G_t の定義式\n# G_t = R_{t+1} + γ * R_{t+2} + (γ^2) * R_{t+3} + ...",
        "ja": {
          "question": "割引率 γ（0 ≤ γ < 1）の役割として、最も適切な説明はどれですか？",
          "options": [
            "将来得られる報酬の価値を割り引いて評価し、無限時間続く課題でも収益の合計が発散（無限大）しないようにする",
            "学習したQ値を強制的にゼロにリセットする",
            "エージェントの行動速度を物理的にスローダウンさせる",
            "ゲームのグラフィックの解像度を下げる"
          ],
          "explanation": "割引率 γ は「遠い未来の報酬よりも目の前の報酬を優先する」度合いを調整し、また無限ステップ続く課題において累積収益が無限大に発散するのを防ぐ数学的な役割を持ちます。"
        },
        "en": {
          "question": "What is the primary mathematical purpose of the discount factor γ (0 ≤ γ < 1)?",
          "options": [
            "It discounts future rewards relative to immediate ones and ensures cumulative returns converge to a finite sum",
            "It forces learned Q-values to reset to zero every episode",
            "It mechanically slows down the simulation frame rate",
            "It downsamples the graphical canvas resolution"
          ],
          "explanation": "The discount factor γ balances immediate versus future rewards and mathematically guarantees that infinite-horizon returns sum to a bounded finite value."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q3_v2",
        "code": None,
        "ja": {
          "question": "割引率を「γ = 0」に設定した場合、エージェントはどのような行動基準になりますか？",
          "options": [
            "将来の報酬を完全に無視し、直後の1ステップで得られる目先の報酬（R_{t+1}）のみを最大化する近視眼的なエージェントになる",
            "100ステップ先の未来まで完全に計算に入れる超遠視眼的なエージェントになる",
            "報酬を一切受け取らないエージェントになる",
            "すべてのQ値が無限大に発散する"
          ],
          "explanation": "γ = 0 のとき、G_t = R_{t+1} + 0 + 0 + ... となるため、エージェントは直後の1ステップの報酬だけを考慮する「極めて近視眼（myopic）」な動作になります。"
        },
        "en": {
          "question": "How does an agent behave if the discount factor is set to γ = 0?",
          "options": [
            "It becomes purely myopic, maximizing only the immediate next-step reward R_{t+1} while completely ignoring the future",
            "It becomes infinitely farsighted, optimizing rewards hundreds of steps ahead",
            "It refuses to accept any scalar rewards from the environment",
            "All Q-values immediately diverge to infinity"
          ],
          "explanation": "With γ = 0, G_t = R_{t+1}. The agent cares exclusively about immediate next-step gratification and ignores any consequences beyond step t+1."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q3_v3",
        "code": "R1 = 10\nR2 = 10\ngamma = 0.5\n# G = R1 + gamma * R2",
        "ja": {
          "question": "1ステップ後に報酬 10、2ステップ後に報酬 10 を受け取り終了したとき、γ = 0.5 での累積収益 G はいくらですか？",
          "options": ["15.0", "20.0", "10.5", "5.0"],
          "explanation": "G = R_1 + γ * R_2 = 10 + 0.5 * 10 = 10 + 5 = 15.0 となります。"
        },
        "en": {
          "question": "If an agent receives reward 10 at step 1 and reward 10 at step 2, what is the discounted return G with γ = 0.5?",
          "options": ["15.0", "20.0", "10.5", "5.0"],
          "explanation": "G = R_1 + γ * R_2 = 10 + 0.5 * 10 = 10 + 5.0 = 15.0."
        },
        "correctIndex": 0
      }
    ],

    # Slot 4: 価値関数 V(s) と Q(s, a) (Value Functions)
    [
      {
        "id": "ch7_q4_v1",
        "code": None,
        "ja": {
          "question": "状態価値関数 V(s) と行動価値関数 Q(s, a) の違いとして、最も適切なものはどれですか？",
          "options": [
            "V(s) は状態 s から得られる期待収益、Q(s, a) は状態 s で特定の行動 a を取った後に得られる期待収益",
            "V(s) はエージェントの速度、Q(s, a) はエージェントの加速度を表す",
            "V(s) は敵の強さ、Q(s, a) は味方の体力を表す",
            "V(s) と Q(s, a) は単なる記号の違いであり、全く同一の値を返す"
          ],
          "explanation": "状態価値関数 V(s) は「その状態にいること自体の良さ（期待収益）」を評価し、行動価値関数 Q(s, a) は「その状態で特定の行動 a を選択することの良さ」を評価します。"
        },
        "en": {
          "question": "What is the fundamental difference between state-value function V(s) and action-value function Q(s, a)?",
          "options": [
            "V(s) measures the expected return from state s; Q(s, a) measures the expected return of taking specific action a from state s",
            "V(s) measures velocity; Q(s, a) measures acceleration",
            "V(s) models adversary power; Q(s, a) tracks agent health points",
            "They are identical mathematical functions with interchangeable notation"
          ],
          "explanation": "V(s) evaluates how good it is to be in state s under policy π. Q(s, a) evaluates how good it is to perform action a in state s under policy π."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q4_v2",
        "code": None,
        "ja": {
          "question": "最適行動価値関数 Q*(s, a) が完全に判明している場合、エージェントはどのように最適方策 π*(s) を決定できますか？",
          "options": [
            "各状態 s において、Q*(s, a) の値が最大となる行動 a を選ぶ（arg max_a Q*(s, a)）",
            "Q*(s, a) の値が最も低い行動をあえて選ぶ",
            "すべての行動を等確率でランダムに選ぶ",
            "環境を強制終了させる"
          ],
          "explanation": "Q*(s, a) が求まっていれば、各状態で Q*(s, a) を最大化する行動（貪欲な行動選択: argmax）をとるだけで、環境の遷移確率を知らなくても最適な行動方針（最適方策）が定まります。"
        },
        "en": {
          "question": "Once the optimal action-value function Q*(s, a) is known, how does the agent execute the optimal policy π*(s)?",
          "options": [
            "By greedily choosing the action that maximizes Q*(s, a) in each state: argmax_a Q*(s, a)",
            "By choosing the action with the lowest Q*(s, a) value",
            "By taking uniformly random actions forever",
            "By immediately aborting the simulation"
          ],
          "explanation": "With optimal Q*(s, a), the agent simply acts greedily: π*(s) = argmax_a Q*(s, a), selecting the highest-valued action in each state."
        },
        "correctIndex": 0
      },
      {
        "id": "ch7_q4_v3",
        "code": None,
        "ja": {
          "question": "強化学習において「方策（Policy: π）」とは何を定義したものですか？",
          "options": [
            "状態 s が与えられたときに、どの行動 a を選択するかを定めた決定ルール（確率分布 π(a|s)）",
            "エージェントのハードウェアの購入予算計画",
            "ゲーム画面の背景色とBGMの音量設定",
            "Pythonのバージョン番号"
          ],
          "explanation": "方策（Policy: π）はエージェントの「行動規範・意思決定ルール」であり、状態 s において行動 a をとる確率分布 π(a|s) または確定的関数 a = π(s) として表現されます。"
        },
        "en": {
          "question": "What is a 'Policy' (π) in reinforcement learning?",
          "options": [
            "The decision-making rule or probability distribution π(a|s) mapping states to actions",
            "The hardware procurement budget for training servers",
            "The screen background color and sound volume setting",
            "The compiler version string"
          ],
          "explanation": "A policy π defines the agent's behavior, specifying the probability π(a|s) of selecting action a when in state s."
        },
        "correctIndex": 0
      }
    ]
  ]
}
