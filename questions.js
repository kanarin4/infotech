// InfoTech - In-Class Prep Quiz Bank for Chapters 1 - 14
// Subsection Architecture: 1.1 through 1.6 (Strictly anchored in course site materials)
// 231 total questions across 14 chapters and 77 topic slots.
// Options and question varieties are sampled and shuffled dynamically at runtime.

const courseSections = [
  {
    "partId": 1,
    "partTitleJa": "第1部：プログラミングとアルゴリズムの基礎",
    "partTitleEn": "Part 1: Programming & Algorithm Foundations",
    "chapters": [
      {
        "id": 1,
        "slug": "01_program_intro",
        "titleJa": "第1章 プログラムとは",
        "titleEn": "Ch 1: What is a Program?",
        "topicsJa": "コンピュータの動作、CPU、主記憶と補助記憶、Python/IDLE環境、四則演算、変数、関数",
        "topicsEn": "Computer Architecture, CPU, Main/Secondary Storage, IDLE, Operators, Variables, Functions",
        "subsections": [
          {
            "id": "1.1",
            "titleJa": "1.1 コンピュータの動作",
            "titleEn": "1.1 Computer Architecture & Hardware"
          },
          {
            "id": "1.2",
            "titleJa": "1.2 プログラミング言語",
            "titleEn": "1.2 Programming Languages & Python"
          },
          {
            "id": "1.3",
            "titleJa": "1.3 Python開発環境の導入",
            "titleEn": "1.3 Installing Python & IDLE"
          },
          {
            "id": "1.4",
            "titleJa": "1.4 Pythonプログラムの実行",
            "titleEn": "1.4 Running Python Programs (Shell & Script)"
          },
          {
            "id": "1.5",
            "titleJa": "1.5 Python言語の文法",
            "titleEn": "1.5 Python Syntax & Core Grammar"
          },
          {
            "id": "1.6",
            "titleJa": "1.6 まとめとノート練習問題",
            "titleEn": "1.6 Exercises & Review"
          }
        ]
      },
      {
        "id": 2,
        "slug": "02_python_basics1",
        "titleJa": "第2章 場合分けと繰り返し",
        "titleEn": "Ch 2: Branching & Loops",
        "topicsJa": "input()、型キャスト、if/elif/else、for/while、range",
        "topicsEn": "input(), Type Casting, if/elif/else, for/while, range()",
        "subsections": [
          {
            "id": "2.1",
            "titleJa": "2.1 キーボードからの入力（input・型変換・IDLE）",
            "titleEn": "2.1 User Input & Type Casting"
          },
          {
            "id": "2.2",
            "titleJa": "2.2 場合分け（if / elif / else・真偽値・比較演算子）",
            "titleEn": "2.2 Conditionals & Booleans"
          },
          {
            "id": "2.3",
            "titleJa": "2.3 繰り返し（for / while・無限ループ）",
            "titleEn": "2.3 Loops (for & while)"
          },
          {
            "id": "2.4_2.5",
            "titleJa": "2.4-2.5 range関数と多重ループ（ネスト）",
            "titleEn": "2.4-2.5 range() & Nested Loops"
          }
        ]
      },
      {
        "id": 3,
        "slug": "03_python_basics2",
        "titleJa": "第3章 データ型",
        "titleEn": "Ch 3: Data Types & Data Structures",
        "topicsJa": "リスト、辞書(dict)、インデックス、スライス、可変性",
        "topicsEn": "Lists, Dictionaries, Indexing, Slicing, Mutability",
        "subsections": [
          {
            "id": "3.1",
            "titleJa": "3.1 データ型の基礎（int, float, str, bool, list, dict）",
            "titleEn": "3.1 Fundamental Data Types"
          },
          {
            "id": "3.2",
            "titleJa": "3.2 リストの詳細（インデックス・スライス・append）",
            "titleEn": "3.2 Lists & Slicing"
          },
          {
            "id": "3.3",
            "titleJa": "3.3 辞書（キーと値・KeyError・in演算子）",
            "titleEn": "3.3 Dictionaries (dict)"
          },
          {
            "id": "3.4",
            "titleJa": "3.4 可変性と参照（ミュータブル vs イミュータブル）",
            "titleEn": "3.4 Mutability & References"
          }
        ]
      },
      {
        "id": 4,
        "slug": "04_algorithm",
        "titleJa": "第4章 アルゴリズムの性質",
        "titleEn": "Ch 4: Nature of Algorithms & Coding Agents",
        "topicsJa": "coding agent、vibe coding、停止性、計算量 O(n)",
        "topicsEn": "Coding Agents, Vibe Coding, Halting Problem, Big-O",
        "subsections": [
          {
            "id": "4.1",
            "titleJa": "4.1 アルゴリズムの基礎と要件",
            "titleEn": "4.1 Algorithm Fundamentals"
          },
          {
            "id": "4.2",
            "titleJa": "4.2 アラン・チューリングと停止問題（Halting Problem）",
            "titleEn": "4.2 Turing & The Halting Problem"
          },
          {
            "id": "4.3",
            "titleJa": "4.3 計算量（Big-O記法・線形探索 vs 二分探索）",
            "titleEn": "4.3 Computational Complexity (Big-O)"
          },
          {
            "id": "4.4",
            "titleJa": "4.4 コーディングエージェントと検証責任（単体テスト）",
            "titleEn": "4.4 Coding Agents & Verification"
          }
        ]
      }
    ]
  },
  {
    "partId": 2,
    "partTitleJa": "第2部：機械学習と強化学習の概念",
    "partTitleEn": "Part 2: Machine Learning & RL Concepts",
    "chapters": [
      {
        "id": 5,
        "slug": "05_machine_learning",
        "titleJa": "第5章 機械学習",
        "titleEn": "Ch 5: Machine Learning & Git",
        "topicsJa": "AI・ML・DL、3大分類、強化学習の特徴、Gitバージョン管理",
        "topicsEn": "AI/ML/DL, 3 Major Classes, RL Traits, Git Version Control",
        "subsections": [
          {
            "id": "5.1",
            "titleJa": "5.1 AI・機械学習・深層学習の包含関係",
            "titleEn": "5.1 AI, ML & Deep Learning Hierarchy"
          },
          {
            "id": "5.2",
            "titleJa": "5.2 3大学習パラダイム（教師あり・教師なし・強化学習）",
            "titleEn": "5.2 3 Paradigms of Machine Learning"
          },
          {
            "id": "5.3",
            "titleJa": "5.3 強化学習の特徴（試行錯誤・遅延報酬）",
            "titleEn": "5.3 Key Characteristics of RL"
          },
          {
            "id": "5.4",
            "titleJa": "5.4 Gitによるバージョン管理（add, commit, リポジトリ）",
            "titleEn": "5.4 Git Version Control Fundamentals"
          }
        ]
      },
      {
        "id": 6,
        "slug": "06_multi_armed_bandit",
        "titleJa": "第6章 多腕バンディット問題",
        "titleEn": "Ch 6: Multi-Armed Bandit Problem",
        "topicsJa": "探索と活用のトレードオフ、ε-greedy法、標本平均法",
        "topicsEn": "Exploration vs Exploitation, ε-greedy, Sample-average",
        "subsections": [
          {
            "id": "6.1",
            "titleJa": "6.1 多腕バンディット問題の定式化",
            "titleEn": "6.1 Multi-Armed Bandit Formulation"
          },
          {
            "id": "6.2",
            "titleJa": "6.2 探索と活用のトレードオフ",
            "titleEn": "6.2 Exploration vs Exploitation"
          },
          {
            "id": "6.3",
            "titleJa": "6.3 標本平均法と逐次更新式",
            "titleEn": "6.3 Sample-Average Method"
          },
          {
            "id": "6.4",
            "titleJa": "6.4 ε-greedy法（探索率εの調整）",
            "titleEn": "6.4 ε-greedy Action Selection"
          }
        ]
      },
      {
        "id": 7,
        "slug": "07_reinforcement_learning_basics",
        "titleJa": "第7章 強化学習の基礎",
        "titleEn": "Ch 7: Foundations of Reinforcement Learning",
        "topicsJa": "エージェントと環境、MDP、割引率γ、状態・行動価値関数",
        "topicsEn": "Agent & Environment, MDP, Discount Factor γ, V(s) & Q(s,a)",
        "subsections": [
          {
            "id": "7.1",
            "titleJa": "7.1 エージェントと環境の相互作用ループ",
            "titleEn": "7.1 Agent-Environment Interaction Loop"
          },
          {
            "id": "7.2",
            "titleJa": "7.2 マルコフ決定プロセス（MDP）とマルコフ性",
            "titleEn": "7.2 Markov Decision Processes (MDP)"
          },
          {
            "id": "7.3",
            "titleJa": "7.3 収益 G_t と割引率 γ",
            "titleEn": "7.3 Return G_t & Discount Factor γ"
          },
          {
            "id": "7.4",
            "titleJa": "7.4 状態価値関数 V(s) と行動価値関数 Q(s, a)",
            "titleEn": "7.4 Value Functions V(s) & Q(s,a)"
          }
        ]
      }
    ]
  },
  {
    "partId": 3,
    "partTitleJa": "第3部：Gymnasiumによる強化学習の実践",
    "partTitleEn": "Part 3: Practical RL with Gymnasium",
    "chapters": [
      {
        "id": 8,
        "slug": "08_rl_cliff_walking",
        "titleJa": "第8章 強化学習の例(1) - Cliff Walking",
        "titleEn": "Ch 8: Cliff Walking (Gymnasium Basics)",
        "topicsJa": "Gymnasium API、env.reset/step、崖歩き環境、状態価値可視化",
        "topicsEn": "Gymnasium API, env.step/reset, Cliff Walking, Value Maps",
        "subsections": [
          {
            "id": "8.1",
            "titleJa": "8.1 Gymnasium Core API（reset, step 5要素）",
            "titleEn": "8.1 Gymnasium Core API (reset & step)"
          },
          {
            "id": "8.2",
            "titleJa": "8.2 Cliff Walking環境の構造と崖転落ペナルティ",
            "titleEn": "8.2 Cliff Walking Grid Dynamics"
          },
          {
            "id": "8.3",
            "titleJa": "8.3 最短崖際ルート vs 安全大回りルート（Q vs SARSA）",
            "titleEn": "8.3 Optimal vs Safe Detour (Q vs SARSA)"
          },
          {
            "id": "8.4",
            "titleJa": "8.4 行動空間・観測空間と環境レンダリング",
            "titleEn": "8.4 Observation & Action Spaces"
          }
        ]
      },
      {
        "id": 9,
        "slug": "09_rl_blackjack",
        "titleJa": "第9章 強化学習の例(2) - Blackjack",
        "titleEn": "Ch 9: Blackjack (Monte Carlo Method)",
        "topicsJa": "行動価値関数 Q(s,a)、モンテカルロ法、エピソード収益平均化",
        "topicsEn": "Action-Value Q(s,a), Monte Carlo Method, Episode Returns",
        "subsections": [
          {
            "id": "9.1",
            "titleJa": "9.1 モンテカルロ法の基本原理（エピソード収益平均化）",
            "titleEn": "9.1 Monte Carlo Principle"
          },
          {
            "id": "9.2",
            "titleJa": "9.2 Blackjackの状態表現（手札合計, 見せ札, 使えるA）",
            "titleEn": "9.2 Blackjack State Tuple"
          },
          {
            "id": "9.3",
            "titleJa": "9.3 収益 G_t 計算トレースとQ値標本平均更新",
            "titleEn": "9.3 Return Calculation & Sample-Average"
          },
          {
            "id": "9.4",
            "titleJa": "9.4 初回訪問MC vs 全訪問MC、最適方策抽出",
            "titleEn": "9.4 First-visit vs Every-visit MC"
          }
        ]
      },
      {
        "id": 10,
        "slug": "10_rl_frozen_lake",
        "titleJa": "第10章 強化学習の例(3) - Frozen Lake",
        "titleEn": "Ch 10: Frozen Lake (TD Learning & Q-Learning)",
        "topicsJa": "凍った湖、TD学習、Q-learning更新式、学習率α、確率的遷移",
        "topicsEn": "Frozen Lake, TD Learning, Q-Learning Equation, Learning Rate α",
        "subsections": [
          {
            "id": "10.1",
            "titleJa": "10.1 TD学習（時間的差分学習）とブートストラップ",
            "titleEn": "10.1 TD Learning & Bootstrapping"
          },
          {
            "id": "10.2",
            "titleJa": "10.2 Q-learning更新式（Off-policy, TD誤差, 学習率α）",
            "titleEn": "10.2 Q-Learning Update Equation"
          },
          {
            "id": "10.3",
            "titleJa": "10.3 Q値更新の数値計算トレース",
            "titleEn": "10.3 Q-Table Calculation Trace"
          },
          {
            "id": "10.4",
            "titleJa": "10.4 滑る氷の確率的遷移（is_slippery=True）",
            "titleEn": "10.4 Slippery Surface Dynamics"
          }
        ]
      },
      {
        "id": 11,
        "slug": "11_rl_cart_pole",
        "titleJa": "第11章 強化学習の例(4) - Cart Pole",
        "titleEn": "Ch 11: Cart Pole (Continuous State & Discretization)",
        "topicsJa": "倒立振子、連続状態空間、表形式の限界、ビニング（離散化）",
        "topicsEn": "Cart Pole, Continuous States, Table Limits, Discretization/Binning",
        "subsections": [
          {
            "id": "11.1",
            "titleJa": "11.1 CartPole-v1の4連続物理状態と行動空間",
            "titleEn": "11.1 CartPole 4D Continuous State"
          },
          {
            "id": "11.2",
            "titleJa": "11.2 連続状態空間における表形式手法の限界と次元の呪い",
            "titleEn": "11.2 Curse of Dimensionality"
          },
          {
            "id": "11.3",
            "titleJa": "11.3 離散化（ビニング）と np.digitize 計算トレース",
            "titleEn": "11.3 Discretization via np.digitize"
          },
          {
            "id": "11.4",
            "titleJa": "11.4 終了条件（角度 ±12度, 500ステップ, 攻略基準）",
            "titleEn": "11.4 CartPole Termination & Solved Criteria"
          }
        ]
      }
    ]
  },
  {
    "partId": 4,
    "partTitleJa": "第4部：自作ゲーム環境の作成と強化学習",
    "partTitleEn": "Part 4: Custom Game Environment & AI Training",
    "chapters": [
      {
        "id": 12,
        "slug": "12_custom_env",
        "titleJa": "第12章 自作ゲームの作成",
        "titleEn": "Ch 12: Creating a Custom Gymnasium Env",
        "topicsJa": "gymnasium.Env継承、reset/step/render、GridTreasureEnv",
        "topicsEn": "Subclassing gym.Env, reset/step/render, GridTreasureEnv",
        "subsections": [
          {
            "id": "12.1",
            "titleJa": "12.1 gymnasium.Env のサブクラス化とメソッド",
            "titleEn": "12.1 Subclassing gym.Env"
          },
          {
            "id": "12.2",
            "titleJa": "12.2 行動空間・観測空間の定義（Discrete, Box）",
            "titleEn": "12.2 Action & Observation Spaces"
          },
          {
            "id": "12.3",
            "titleJa": "12.3 グリッド座標更新と np.clip 境界クリッピング",
            "titleEn": "12.3 Grid Step & Boundary Clipping"
          },
          {
            "id": "12.4",
            "titleJa": "12.4 step戻り値型仕様と check_env 検証",
            "titleEn": "12.4 Step Signature & check_env"
          }
        ]
      },
      {
        "id": 13,
        "slug": "13_train_custom_env",
        "titleJa": "第13章 自作ゲームのAI育成",
        "titleEn": "Ch 13: Training Custom Game AI",
        "topicsJa": "Q-learning適用、ε-decay（減衰）、ハイパーパラメータ調整",
        "topicsEn": "Applying Q-learning, ε-decay, Hyperparameter Tuning",
        "subsections": [
          {
            "id": "13.1",
            "titleJa": "13.1 強化学習トレーニングループの実装",
            "titleEn": "13.1 RL Training Loop Architecture"
          },
          {
            "id": "13.2",
            "titleJa": "13.2 ε-decay（減衰）スケジュール計算トレース",
            "titleEn": "13.2 ε-Decay Schedules"
          },
          {
            "id": "13.3",
            "titleJa": "13.3 評価フェーズにおけるグリーディ方策適用",
            "titleEn": "13.3 Greedy Evaluation Mode"
          },
          {
            "id": "13.4",
            "titleJa": "13.4 報酬設計（Reward Shaping）と報酬ハッキング防止",
            "titleEn": "13.4 Reward Shaping & Hacking Prevention"
          }
        ]
      },
      {
        "id": 14,
        "slug": "14_summary",
        "titleJa": "第14章 まとめ",
        "titleEn": "Ch 14: Summary & Deep RL Roadmap",
        "topicsJa": "表形式の限界、深層強化学習(DQN)、AI検証とエンジニアの役割",
        "topicsEn": "Tabular Limits, Deep Q-Networks (DQN), Verification & Ethics",
        "subsections": [
          {
            "id": "14.1",
            "titleJa": "14.1 表形式の限界と深層強化学習（DQN: 関数近似）",
            "titleEn": "14.1 Tabular Limits & DQN"
          },
          {
            "id": "14.2",
            "titleJa": "14.2 DQNの安定化技術（Experience Replay と Target Network）",
            "titleEn": "14.2 Experience Replay & Target Network"
          },
          {
            "id": "14.3",
            "titleJa": "14.3 AI生成コードの検証責任と単体テスト",
            "titleEn": "14.3 Code Verification & Unit Testing"
          },
          {
            "id": "14.4",
            "titleJa": "14.4 現代強化学習の応用（LLMのRLHF、バンディット配信）",
            "titleEn": "14.4 Real-World RL & AI Alignment"
          }
        ]
      }
    ]
  }
];

const quizData = {
  "1": [
    [
      {
        "id": "ch1_1_1_q1_v1",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": "LOAD  R1, [100]   # メモリ番地100のデータをR1に読込 (値: 15)\nLOAD  R2, [104]   # メモリ番地104のデータをR2に読込 (値: 25)\nADD   R1, R2      # R1とR2を加算してR1に格納\nSTORE [108], R1   # 結果をメモリ番地108に書込",
        "ja": {
          "question": "教科書1.1.1に記載されたCPUの機械語命令の動作例です。番地100に15、番地104に25が格納されているとき、命令列が完了した後のメモリ番地108の値とレジスタR1の値の組み合わせとして正しいものはどれですか？",
          "options": [
            "メモリ番地108: 40 / レジスタR1: 40",
            "メモリ番地108: 40 / レジスタR1: 15",
            "メモリ番地108: 25 / レジスタR1: 40",
            "メモリ番地108: 15 / レジスタR1: 25"
          ],
          "explanation": "ADD R1, R2 により、レジスタR1（15）とR2（25）の和である40がR1に上書き保存されます。続く STORE [108], R1 により、R1の値（40）がメモリ番地108へ書き込まれるため、両者とも40となります。"
        },
        "en": {
          "question": "Based on the CPU instruction example in §1.1.1, if memory address 100 holds 15 and address 104 holds 25, what are the values of memory address 108 and register R1 after this sequence finishes?",
          "options": [
            "Memory [108]: 40 / Register R1: 40",
            "Memory [108]: 40 / Register R1: 15",
            "Memory [108]: 25 / Register R1: 40",
            "Memory [108]: 15 / Register R1: 25"
          ],
          "explanation": "ADD R1, R2 calculates 15 + 25 = 40 and stores the sum into R1. STORE [108], R1 then copies R1 (40) into memory location 108, leaving both with the value 40."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q1_v2",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "CPUの内部構造において、「四則演算や値の大小比較（論理演算）」を行う部位と、「プログラムの命令を順番に取り出して解読し各ハードウェアへ指示を送る」部位の組み合わせとして正しいものはどれですか？",
          "options": [
            "演算部（ALU）と 制御部",
            "制御部 と レジスタ",
            "主記憶（RAM）と 演算部（ALU）",
            "キャッシュメモリ と 補助記憶装置"
          ],
          "explanation": "教科書1.1.1より、CPUの演算部（ALU: Arithmetic Logic Unit）が四則演算や大小比較などの論理演算を担当し、制御部が命令の取り出し・解読・各部への指示を担当します。"
        },
        "en": {
          "question": "Within the internal architecture of the CPU, which pair correctly identifies the unit that performs arithmetic/logic operations and the unit that fetches, decodes, and directs hardware?",
          "options": [
            "ALU (Arithmetic Logic Unit) and Control Unit",
            "Control Unit and Register",
            "Main Memory (RAM) and ALU",
            "Cache Memory and Secondary Storage"
          ],
          "explanation": "As covered in §1.1.1, the ALU executes calculations and comparisons, while the Control Unit fetches, decodes instructions, and orchestrates the other components."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q1_v3",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "CPUの内部にあり、演算途中のデータやメモリアドレスを極めて高速に一時保持する最も小容量・最速の記憶領域は何ですか？",
          "options": [
            "レジスタ（Register）",
            "主記憶（RAM）",
            "SSD（Solid State Drive）",
            "ROM（Read Only Memory）"
          ],
          "explanation": "教科書1.1.1に「CPU内部の記憶場所（レジスタ）に対して...極めて細かい命令が与えられます」とある通り、CPU内部で直接演算に使われる最速の作業場所はレジスタです。"
        },
        "en": {
          "question": "What is the smallest and fastest storage area located directly inside the CPU used to hold immediate data and operands during execution?",
          "options": [
            "Registers",
            "Main Memory (RAM)",
            "SSD (Solid State Drive)",
            "ROM (Read Only Memory)"
          ],
          "explanation": "Registers are microscopic, ultrafast storage locations inside the CPU that directly feed operands into the ALU as described in §1.1.1."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_1_q2_v1",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "CPUがプログラムを1行ずつ実行する際に毎秒数十億回繰り返している「基本サイクル」の正しい実行順序はどれですか？",
          "options": [
            "命令の取り出し（Fetch）→ 命令の解読（Decode）→ 命令の実行（Execute）→ 結果の書き戻し（Write Back）",
            "命令の解読（Decode）→ 命令の取り出し（Fetch）→ 命令の実行（Execute）→ 結果の書き戻し（Write Back）",
            "命令の実行（Execute）→ 結果の書き戻し（Write Back）→ 命令の取り出し（Fetch）→ 命令の解読（Decode）",
            "命令の取り出し（Fetch）→ 命令の実行（Execute）→ 命令の解読（Decode）→ 結果の書き戻し（Write Back）"
          ],
          "explanation": "教科書1.1.1に明記されている通り、CPUは「①命令の取り出し（Fetch）→ ②命令の解読（Decode）→ ③命令の実行（Execute）→ ④結果の書き戻し（Write Back）」を1秒間に数十億回（GHz）繰り返します。"
        },
        "en": {
          "question": "What is the correct sequential order of the fundamental instruction cycle that the CPU repeats billions of times per second?",
          "options": [
            "Fetch → Decode → Execute → Write Back",
            "Decode → Fetch → Execute → Write Back",
            "Execute → Write Back → Fetch → Decode",
            "Fetch → Execute → Decode → Write Back"
          ],
          "explanation": "As stated in §1.1.1, the CPU repeats: 1. Fetch instruction from memory, 2. Decode instruction, 3. Execute instruction, 4. Write back results to registers/memory."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q2_v2",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "CPUの性能表記で見られる「クロック周波数（単位: GHz）」が表しているものとして、最も適切な説明はどれですか？",
          "options": [
            "CPUが命令実行の基本サイクルを刻む信号の毎秒あたりの振動回数（1GHzなら毎秒約10億回）",
            "CPU内部にある主記憶装置の記憶容量の合計サイズ",
            "CPUがインターネットからデータをダウンロードする際の通信速度",
            "CPUが冷却ファンの回転数を制御する電気信号の電圧"
          ],
          "explanation": "教科書1.1.1に「毎秒数十億回（GHzの単位）繰り返しています」とある通り、クロック周波数はCPUの動作タイミングを同期させるクロック信号の周波数を表します。"
        },
        "en": {
          "question": "Which statement best describes what the CPU 'clock speed' (measured in GHz) signifies?",
          "options": [
            "The number of clock cycles per second synchronizing the CPU's instruction cycle (1 GHz = ~1 billion cycles/sec)",
            "The total storage capacity of memory chips installed inside the CPU",
            "The network transmission rate when downloading data from the internet",
            "The electric voltage regulating cooling fan revolutions"
          ],
          "explanation": "In §1.1.1, GHz represents billions of synchronization cycles per second driving the CPU fetch-decode-execute loops."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q2_v3",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "命令サイクルのうち「取り出し（Fetch）」段階において、CPUはどこから命令を1個読み込みますか？",
          "options": [
            "主記憶（メインメモリ）",
            "補助記憶装置（SSD / HDD）",
            "キーボード（入力装置）",
            "ディスプレイ（出力装置）"
          ],
          "explanation": "教科書1.1.2に「CPUが命令を読み込むのは主記憶から。補助記憶は読み書きが遅いため、CPUが補助記憶から直接命令を1個ずつ読み込んで実行することはできません」と明記されています。"
        },
        "en": {
          "question": "During the 'Fetch' stage of the CPU instruction cycle, where does the CPU fetch the next instruction from?",
          "options": [
            "Main Memory (RAM)",
            "Secondary Storage (SSD / HDD)",
            "Keyboard (Input Device)",
            "Display (Output Device)"
          ],
          "explanation": "As stated in §1.1.2, secondary storage is too slow for direct execution, so the CPU strictly fetches instructions from Main Memory (RAM)."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_1_q3_v1",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "主記憶（メインメモリ）と補助記憶（SSD / HDD）の違いに関する記述として、教科書1.1.2の内容に合致する正しいものはどれですか？",
          "options": [
            "主記憶は高速だが電源を切ると内容が消える（揮発性）。プログラム実行時は補助記憶から主記憶にコピーされてからCPUが実行する。",
            "補助記憶の方が主記憶よりも高速であるため、CPUはSSDから直接命令を読み込んで実行する。",
            "主記憶は電源を切ってもデータが半永久的に保持される（不揮発性）ため、ファイル保存場所に用いられる。",
            "CPUは主記憶と補助記憶の両方から同時に等しい速度で命令を読み込むことができる。"
          ],
          "explanation": "教科書1.1.2より、主記憶は高速・小容量・揮発性、補助記憶は低速・大容量・不揮発性です。CPUは速度差のためSSDから直接実行できず、主記憶にコピーしてから命令を読み込みます。"
        },
        "en": {
          "question": "Which statement accurately describes the distinction between Main Memory (RAM) and Secondary Storage (SSD/HDD) according to §1.1.2?",
          "options": [
            "Main memory is fast and volatile (loses data on power loss). Programs must be copied from SSD into RAM before the CPU executes them.",
            "Secondary storage is faster than main memory, enabling the CPU to execute commands directly from the SSD.",
            "Main memory permanently retains data without electric power (non-volatile), making it ideal for permanent file storage.",
            "The CPU executes instructions from RAM and SSD simultaneously at identical bandwidths."
          ],
          "explanation": "As documented in §1.1.2, main memory is fast and volatile; programs stored on slower secondary storage must be copied into main memory for CPU execution."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q3_v2",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "PCの電源を切った（シャットダウンした）とき、記憶内容がすべて消失する装置と、データがそのまま保持される装置の組み合わせとして正しいものはどれですか？",
          "options": [
            "消失する: メインメモリ（RAM） / 保持される: SSD・HDD",
            "消失する: SSD・HDD / 保持される: メインメモリ（RAM）",
            "消失する: USBメモリ / 保持される: キャッシュメモリ",
            "消失する: ハードディスク / 保持される: レジスタ"
          ],
          "explanation": "主記憶（メインメモリ / RAM）は通電中のみデータを保持する「揮発性」を持ち、SSDやHDDなどの補助記憶装置は電源を切ってもデータを保持する「不揮発性」を持ちます。"
        },
        "en": {
          "question": "When a computer is powered down, which pair correctly matches the storage that loses all content versus the storage that retains its content?",
          "options": [
            "Loses content: Main Memory (RAM) / Retains content: SSD & HDD",
            "Loses content: SSD & HDD / Retains content: Main Memory (RAM)",
            "Loses content: USB Flash Drive / Retains content: Cache Memory",
            "Loses content: Hard Disk / Retains content: CPU Registers"
          ],
          "explanation": "Main memory is volatile (erased when power ceases), whereas secondary storage like SSDs and hard disks are non-volatile and retain saved files."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q3_v3",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "ユーザーがデスクトップ上のPythonスクリプトファイル（.py）をダブルクリックして起動したとき、コンピュータ内部で行われる処理の流れとして正しいものはどれですか？",
          "options": [
            "補助記憶（SSD）内のファイルが主記憶（メモリ）にロードされ、CPUが主記憶から命令を1個ずつフェッチして実行する",
            "CPUが補助記憶（SSD）に直接アクセスし、SSD内部で命令を解読・実行して画面に出力する",
            "ファイルが直接CPUのレジスタに全体コピーされ、主記憶を経由せずにすべて実行される",
            "ファイルが一度インターネットサーバーへ送信されてから、結果だけが主記憶に書き戻される"
          ],
          "explanation": "教科書1.1.2に「プログラムを実行するときは、まず補助記憶（SSD等）に保存されているプログラムファイルが主記憶（メモリ）上にコピーされ、CPUはその主記憶から命令を1個ずつ読み込んで実行します」と明記されています。"
        },
        "en": {
          "question": "When a user runs a Python script saved on an SSD, what is the actual hardware sequence that occurs?",
          "options": [
            "The program file in secondary storage (SSD) is copied into main memory (RAM), and the CPU fetches and executes instructions from RAM",
            "The CPU accesses the SSD directly and executes raw bytes inside the SSD without involving RAM",
            "The entire program file is loaded directly into CPU registers, bypassing main memory completely",
            "The file must be sent to an internet cloud server before execution results are written back"
          ],
          "explanation": "According to §1.1.2, secondary storage files are copied into main memory, from which the CPU fetches instructions one by one."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_1_q4_v1",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "教科書1.1で触れられている、コンピュータを構成する主要な「5大機能」の組み合わせとして正しいものはどれですか？",
          "options": [
            "演算機能・制御機能・記憶機能・入力機能・出力機能",
            "演算機能・通信機能・検索機能・表示機能・印刷機能",
            "CPU機能・GPU機能・メモリ機能・SSD機能・WiFi機能",
            "順次機能・分岐機能・反復機能・代入機能・出力機能"
          ],
          "explanation": "教科書1.1冒頭のコンピュータ・アーキテクチャの基本として、コンピュータは「演算・制御・記憶・入力・出力」の5大機能で構成されます（CPUが演算と制御、主記憶/補助記憶が記憶を担当）。"
        },
        "en": {
          "question": "What are the classic five fundamental functions of computer architecture introduced in §1.1?",
          "options": [
            "Arithmetic (Calculation), Control, Memory (Storage), Input, Output",
            "Arithmetic, Networking, Searching, Displaying, Printing",
            "CPU, GPU, RAM, SSD, Wi-Fi",
            "Sequence, Branching, Iteration, Assignment, Output"
          ],
          "explanation": "Classic computer architecture divides capabilities into Arithmetic, Control, Storage, Input, and Output."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q4_v2",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "CPUが直接理解できる「機械語（マシン語）」に関する説明として、教科書1.1.1および1.2.2の内容に合致する正しいものはどれですか？",
          "options": [
            "0と1のビット列で構成され、CPUのアーキテクチャ（Intel/AMDのx86_64やApple SiliconのARMなど）によって仕様が異なる。",
            "すべてのコンピュータで世界共通の1種類のみが存在し、どのCPUでも同じ0と1の並びが全く同じ動作をする。",
            "人間が直接英語のように読み書きできるようにアルファベット単語で設計されている。",
            "高水準言語よりも新しい時代に発明された、AI専用のプログラミング言語である。"
          ],
          "explanation": "教科書1.1.1および1.2.2より、機械語は0と1の数字の羅列であり、CPUの種類（Intel x86_64、ARMなど）によって機械語の仕様が物理的に異なります。"
        },
        "en": {
          "question": "Which statement regarding 'Machine Language' is accurate based on §1.1.1 and §1.2.2?",
          "options": [
            "It consists of raw binary 0s and 1s, and its instruction specifications vary across CPU architectures (e.g., x86_64 vs ARM).",
            "There is only one universal binary dialect shared identically across all microprocessors globally.",
            "It was designed specifically with English keywords so humans can read and edit it easily.",
            "It is a modern AI-specific high-level language invented after Python."
          ],
          "explanation": "Machine code represents raw bit patterns tailored to specific CPU instruction set architectures (such as x86_64 or ARM)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_1_q4_v3",
        "sectionId": "1.1",
        "sectionTitleJa": "1.1 コンピュータの動作",
        "sectionTitleEn": "1.1 Computer Architecture & Hardware",
        "code": null,
        "ja": {
          "question": "キーボードで文字を入力し、Pythonプログラムが計算を行い、結果がディスプレイに表示されるまでのハードウェア間データの流れとして正しいものはどれですか？",
          "options": [
            "入力装置（キーボード）→ 主記憶 → CPU（演算・制御）→ 主記憶 → 出力装置（ディスプレイ）",
            "入力装置 → CPU → 補助記憶 → 入力装置 → ディスプレイ",
            "キーボード → ディスプレイ → CPU → 主記憶",
            "入力装置 → 補助記憶（SSD）→ 出力装置（ディスプレイ）"
          ],
          "explanation": "入力装置から入ったデータは主記憶に置かれ、CPUがそれを取り出して演算し、結果を主記憶に書き戻した上で出力装置へと送られます。"
        },
        "en": {
          "question": "What is the correct logical flow of data between hardware components when a program takes keyboard input, computes, and prints to the screen?",
          "options": [
            "Input device (Keyboard) → Main memory → CPU (Compute/Control) → Main memory → Output device (Display)",
            "Input device → CPU → SSD → Input device → Display",
            "Keyboard → Display → CPU → Main memory",
            "Input device → Secondary storage (SSD) → Output device (Display)"
          ],
          "explanation": "Input flows to main memory, is processed by the CPU, writes output back to main memory, and is displayed by the output device."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_2_q1_v1",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": "total = 0\nfor x in [3, 7, 2]:\n    if x > 4:\n        total = total + x\nprint(total)",
        "ja": {
          "question": "教科書1.2.1で復習されている高校「情報I」の3つの基本制御構造（順次・分岐・反復）に関する問題です。このコードを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "7",
            "12",
            "10",
            "14"
          ],
          "explanation": "リスト [3, 7, 2] を反復（for）し、x > 4 の条件分岐（if）を満たすのは x = 7 のみです。順次処理により total = 0 + 7 = 7 となり、最終的に 7 が出力されます。"
        },
        "en": {
          "question": "Reviewing the 3 fundamental control structures from §1.2.1 (Sequence, Selection, Iteration), what is the output of this Python code snippet?",
          "options": [
            "7",
            "12",
            "10",
            "14"
          ],
          "explanation": "Iterating through [3, 7, 2], only 7 satisfies if x > 4. Thus total becomes 0 + 7 = 7, and 7 is printed."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q1_v2",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "高校「情報I」で扱われたアルゴリズムの基礎であり、あらゆるプログラムを組み立てる3つの基本制御構造の正しい組み合わせはどれですか？",
          "options": [
            "順次（上から下へ実行）・分岐（if文など）・反復（for/while文など）",
            "代入・入力・出力",
            "演算・制御・記憶",
            "コンパイル・リンク・実行"
          ],
          "explanation": "教科書1.2.1に「1. 順次: 上から下へ順番に命令を1つずつ実行」「2. 分岐: 条件に応じて処理を切り替える」「3. 反復: 条件を満たす間繰り返す」と明記されています。"
        },
        "en": {
          "question": "What are the three fundamental algorithm control structures reviewed in §1.2.1 that compose virtually all programs?",
          "options": [
            "Sequence (top-to-bottom), Selection (branching via if), Iteration (looping via for/while)",
            "Assignment, Input, Output",
            "Arithmetic, Control, Storage",
            "Compile, Link, Execute"
          ],
          "explanation": "As stated in §1.2.1, algorithms are fundamentally composed of Sequence, Selection (branching), and Iteration (loops)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q1_v3",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": "a = 10\nb = 20\nif a < b:\n    a = a + 5\nelse:\n    b = b + 5\nprint(a, b)",
        "ja": {
          "question": "このコードを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "15 20",
            "10 25",
            "15 25",
            "10 20"
          ],
          "explanation": "初期値は a=10, b=20 です。a < b (10 < 20) は真なので if ブロックが実行され、a = 10 + 5 = 15 となります。else ブロックはスキップされるため b は 20 のままであり、'15 20' が出力されます。"
        },
        "en": {
          "question": "What is the output after executing this conditional branch code?",
          "options": [
            "15 20",
            "10 25",
            "15 25",
            "10 20"
          ],
          "explanation": "Since 10 < 20 evaluates to True, the if-suite executes: a = 15. The else-suite is skipped, leaving b = 20. Output is '15 20'."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_2_q2_v1",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "人間が高水準言語（Pythonなど）で書いたプログラム（ソースコード）がコンピュータで実行される仕組みとして、教科書1.2.2に合致する正しい説明はどれですか？",
          "options": [
            "コンパイラやインタプリタといった翻訳ソフトウェアによって、CPUが直接理解できる機械語に変換されてから実行される。",
            "CPU自体が英単語を直接解読できるため、翻訳を行わずにそのままハードウェア内部で実行される。",
            "ソースコードは自動的に画像データに変換され、ディスプレイの描画機能を使って計算される。",
            "インターネット上のクラウドAIがリアルタイムに代行計算し、結果だけをPCへ返送している。"
          ],
          "explanation": "教科書1.2.2に「人間が高水準言語で書いたプログラム（ソースコード）は、コンパイラやインタプリタといった翻訳ソフトウェアによって機械語へと変換されてから実行されます」と明記されています。"
        },
        "en": {
          "question": "According to §1.2.2, how does a high-level source code file (like Python) get executed by computer hardware?",
          "options": [
            "Translation software (interpreters or compilers) converts the human-readable source code into machine language that the CPU can execute.",
            "Modern CPUs understand English keywords natively and execute code text without translation.",
            "Source code is converted into bitmap images computed by the graphics card.",
            "An internet cloud AI continuously translates and runs every script remotely."
          ],
          "explanation": "High-level source code must be translated into machine code by an interpreter or compiler before CPU hardware can run it."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q2_v2",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "プログラマが直接0と1の機械語を書くのではなく、Pythonのような高水準言語を使用する最大の利点は何ですか？",
          "options": [
            "英単語や数式に近い形で記述でき、人間にとって理解しやすく間違い（バグ）の発見や保守が容易であること",
            "機械語よりもプログラムの実行速度が100倍以上速くなること",
            "CPUやメモリなどのハードウェアを一切消費せずに計算できること",
            "コンピュータの電源を切ってもプログラムが永久に動き続けること"
          ],
          "explanation": "教科書1.2.2に「人間が理解しやすい英単語や数式に近い形で記述できるように工夫された言語です。0と1の数字の羅列を人間が読み書きしたり間違いを探したりするのは極めて困難です」とあります。"
        },
        "en": {
          "question": "What is the primary benefit of developing software in a high-level language like Python rather than writing raw machine code?",
          "options": [
            "Programs are written with readable English-like syntax and mathematical expressions, making development, debugging, and maintenance far easier.",
            "High-level languages execute 100 times faster than raw machine instructions.",
            "High-level languages consume zero CPU cycles and zero memory.",
            "High-level programs run perpetually even when electricity is disconnected."
          ],
          "explanation": "High-level languages bridge human logic and hardware capability, eliminating the cognitive burden and error rate of raw binary coding."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q2_v3",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "同じPythonスクリプトファイルが、異なるCPU（Intel x86_64とApple Silicon ARMなど）を搭載したPCで同様に動作する理由として正しいものはどれですか？",
          "options": [
            "それぞれのPCに導入されたPythonインタプリタが、各CPUに対応した機械語へ適切に翻訳して実行するため",
            "Intel製CPUもApple製CPUも、物理的に完全に同一の機械語仕様を持っているため",
            "PythonスクリプトはCPUではなくディスプレイの液晶画面が直接実行しているため",
            "高水準言語は機械語に変換されることなく電子回路を直接流れるため"
          ],
          "explanation": "各プラットフォーム用のPythonインタプリタが存在し、同一のソースコードをそのマシンのCPUに合った機械語に翻訳してくれるため、高いポータビリティ（移植性）が実現されます。"
        },
        "en": {
          "question": "Why can the same Python script run seamlessly on both an Intel x86_64 PC and an Apple Silicon ARM Mac?",
          "options": [
            "The respective Python interpreter installed on each machine translates the high-level Python code into that CPU's specific machine language.",
            "Intel and ARM chips share physically identical machine language instructions.",
            "Python scripts bypass the CPU and are interpreted directly by the monitor screen.",
            "High-level code flows directly as electrical waves without machine translation."
          ],
          "explanation": "The interpreter acts as an abstraction layer: each platform's interpreter translates standard Python into the target CPU's native instruction set."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_2_q3_v1",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "教科書1.2.3で解説されている「目的に適したプログラミング言語の使い分け」として、正しい組み合わせはどれですか？",
          "options": [
            "ハードウェア制御・極限の高速性: C言語/Rust / Webブラウザ上での動作: JavaScript / 統計・機械学習: Python",
            "ハードウェア制御: JavaScript / Webブラウザ動作: C言語 / 統計・機械学習: C#",
            "Webブラウザ動作: Python / 大規模基幹システム: Scratch / 機械学習: HTML",
            "ハードウェア制御: Python / Webブラウザ動作: C++ / 統計解析: アセンブリ言語"
          ],
          "explanation": "教科書1.2.3に明記されている通り、C/C++/Rustはハードウェア直接制御と高速性、JavaScriptはブラウザ標準、Java/C#は大企業基幹システム、Python/Rは機械学習やデータ分析に最適化されています。"
        },
        "en": {
          "question": "According to §1.2.3, which combination correctly pairs programming languages with their primary domain specialties?",
          "options": [
            "Hardware control & extreme speed: C/Rust / Browser execution: JavaScript / Machine learning: Python",
            "Hardware control: JavaScript / Browser execution: C / Machine learning: C#",
            "Browser execution: Python / Enterprise backends: Scratch / Machine learning: HTML",
            "Hardware control: Python / Browser execution: C++ / Statistical analysis: Assembly"
          ],
          "explanation": "Different tools suit different purposes: C/Rust for low-level performance, JavaScript for browsers, and Python for data science and AI."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q3_v2",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "世界共通のプログラミング言語が1つだけ存在しない理由として、教科書1.2.3で述べられている「トレードオフ」の説明として適切なものはどれですか？",
          "options": [
            "「極限の実行速度を得るために記述が難しくなる言語」と「簡潔に書けて開発しやすいが実行速度が譲歩される言語」など、目的によって優先すべき性質が異なるため",
            "各国の政府が自国の母語以外のプログラミング言語の使用を法律で禁止しているため",
            "古いコンピュータ言語はすべて使用期限（賞味期限）が決まっており、毎年新しい言語を作らなければならないため",
            "すべてのプログラミング言語が全く同じ性能・機能を持っており、名前だけが異なっているため"
          ],
          "explanation": "教科書1.2.3に「大工道具にノコギリ、金づち、かんながあるように、言語にはそれぞれ得意な用途や設計思想のトレードオフがあります」と説明されています。"
        },
        "en": {
          "question": "Why isn't there just a single universal programming language, as explained in §1.2.3?",
          "options": [
            "Different goals involve design tradeoffs: e.g., low-level memory control versus rapid developer iteration and concise syntax.",
            "National governments legally prohibit cross-border programming languages.",
            "Programming languages have mandatory expiration dates requiring annual redesigns.",
            "All languages possess identical execution characteristics, differing only in branding."
          ],
          "explanation": "Design involves tradeoffs: maximizing raw execution speed requires tedious manual memory management, whereas maximizing developer ergonomics prioritizes dynamic interpretation."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q3_v3",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "データ分析や機械学習の分野において、世界中の研究者や開発者がPythonを好んで採用している主な理由は何ですか？",
          "options": [
            "コードが簡潔に記述でき、NumPyやpandas、PyTorchなどの高度な数値計算・機械学習ライブラリが豊富に整備されているから",
            "他のあらゆる言語よりも機械語へのコンパイル後の実行速度が常に速いから",
            "Webブラウザの画面を描画できる唯一のプログラミング言語だから",
            "CPUを使わずにキーボードだけで計算を行える特殊な言語だから"
          ],
          "explanation": "教科書1.2.3および1.2.4より、Pythonは簡潔で読みやすく、NumPy、pandas、PyTorch、Gymnasiumなどの強力なエコシステムとライブラリが揃っているため選ばれています。"
        },
        "en": {
          "question": "What is the primary reason researchers and engineers overwhelmingly select Python for data science and machine learning?",
          "options": [
            "Concise, readable syntax coupled with world-class libraries such as NumPy, pandas, PyTorch, and Gymnasium.",
            "It compiles to faster raw machine code than C or assembly in all benchmarks.",
            "It is the only programming language that web browsers can render natively.",
            "It calculates exclusively inside keyboard chips without CPU utilization."
          ],
          "explanation": "Python combines rapid prototyping ergonomics with a massive ecosystem of high-performance scientific libraries."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_2_q4_v1",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "教科書1.2.4に記載されているPythonの言語的特徴に関する説明として、正しいものはどれですか？",
          "options": [
            "コードのブロック（まとまり）を中カッコ { } ではなく「インデント（字下げ）」で表すため、可読性に優れる",
            "実行前にプログラム全体を一括で機械語に変換する「コンパイラ型言語」である",
            "行末には必ずセミコロン（;）を記述しなければ文法エラーになる",
            "大文字と小文字を全く区別しない言語である"
          ],
          "explanation": "教科書1.2.4に「1. シンプルで読みやすい文法: コードのブロック（まとまり）を { } ではなくインデント（字下げ）で表すため、誰が書いても読みやすく統一感のあるコードになります」「2. インタプリタ型言語」と明記されています。"
        },
        "en": {
          "question": "Which statement accurately describes Python's syntactic design as outlined in §1.2.4?",
          "options": [
            "Code blocks are defined by indentation (whitespace) rather than curly braces { }, fostering readable and consistent code.",
            "It is a strict ahead-of-time compiled language requiring complete binary generation before running.",
            "Every line must terminate with a mandatory semicolon (;) or syntax errors occur.",
            "It is completely case-insensitive regarding variable and function names."
          ],
          "explanation": "Python famously enforces block structure through whitespace indentation rather than { }, ensuring uniform readability."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q4_v2",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "Pythonが「インタプリタ型言語」であることの利点として、教科書1.2.4で挙げられているものはどれですか？",
          "options": [
            "事前の一括機械語変換（コンパイル）を必要とせず、プログラムを1行ずつ対話的に実行・試行錯誤できる",
            "CPUのメモリを一切消費せずに無限ループを実行し続けられる",
            "一度書いたプログラムは修正不可能な電子回路として半永久的に固定される",
            "インターネットに接続していなければプログラムの構文エラーを検出できない"
          ],
          "explanation": "教科書1.2.4に「2. インタプリタ型言語: コンパイル（事前の一括機械語変換）を必要とせず、プログラムを1行ずつ解釈しながら対話的に実行できます。試行錯誤が容易で、初学者の学習やデータ分析に最適です」と明記されています。"
        },
        "en": {
          "question": "What is an educational and workflow benefit of Python being an interpreted language as highlighted in §1.2.4?",
          "options": [
            "It does not require prior ahead-of-time compilation, allowing line-by-line interactive execution and rapid trial-and-error experimentation.",
            "It consumes zero RAM while running infinite recursion.",
            "Programs are permanently etched onto ROM circuits upon typing.",
            "It requires constant broadband internet connectivity to evaluate simple additions."
          ],
          "explanation": "As an interpreted language, Python allows immediate interactive execution without prior build or compile steps."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_2_q4_v3",
        "sectionId": "1.2",
        "sectionTitleJa": "1.2 プログラミング言語",
        "sectionTitleEn": "1.2 Programming Languages & Python",
        "code": null,
        "ja": {
          "question": "教科書で言及されているPythonの代表的な機械学習・データ分析ライブラリのうち、強化学習環境の標準インターフェースを提供するツールはどれですか？",
          "options": [
            "Gymnasium",
            "Excel",
            "Photoshop",
            "WordPress"
          ],
          "explanation": "教科書1.2.4に「機械学習（PyTorch、TensorFlow、Gymnasiumなど）、科学技術計算（NumPy、SciPy）、データ分析（pandas、matplotlib）」と記載されています。"
        },
        "en": {
          "question": "Among the libraries mentioned in §1.2.4, which one provides the standardized API for reinforcement learning environments used later in this course?",
          "options": [
            "Gymnasium",
            "Excel",
            "Photoshop",
            "WordPress"
          ],
          "explanation": "Section 1.2.4 highlights Gymnasium alongside PyTorch and TensorFlow as the core reinforcement learning toolkit."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_3_q1_v1",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "Pythonの公式インストーラに標準付属する初心者向け開発ツール「IDLE（統合開発・学習環境）」に備わっている3つの機能として、教科書1.3.1に記載されているものはどれですか？",
          "options": [
            "対話型シェル（Python Shell）・プログラムエディタ・キー1つで連携する実行環境",
            "動画編集機能・3Dモデリング機能・Webブラウザ機能",
            "電子メール送受信・ウイルススキャン・ディスク暗号化",
            "自動翻訳機能・音声認識機能・クラウドストレージ"
          ],
          "explanation": "教科書1.3.1に「①対話型シェル（Python Shell: REPL）」「②プログラムエディタ（.py作成・編集）」「③実行環境（キー1つで実行し結果をシェルに表示）」の3つがあらかじめ備わっていると明記されています。"
        },
        "en": {
          "question": "According to §1.3.1, what are the three built-in capabilities bundled inside Python's official IDLE environment?",
          "options": [
            "Interactive Python Shell (REPL), Program Editor (.py), and Integrated Execution Environment",
            "Video Editor, 3D Modeler, and Web Browser",
            "Email Client, Antivirus Scanner, and Disk Encryption",
            "Machine Translation, Speech Recognition, and Cloud Storage"
          ],
          "explanation": "Section 1.3.1 details IDLE's three integrated components: the Python Shell (REPL), the script file editor, and the single-keystroke execution runner."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q1_v2",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "教科書1.3.1で「別途Visual Studio Codeなどの外部エディタを導入しなくても学習を始められる」と説明されている理由はどれですか？",
          "options": [
            "Pythonの公式インストーラを導入するだけで、編集から実行までが完結するIDLEが最初から一緒にインストールされるから",
            "Pythonはブラウザのメモ帳でしかプログラムを記述できない仕様だから",
            "VS Codeを使うとPythonのコードがすべて消去されてしまうから",
            "大学の講義では外部エディタの使用が法律で禁止されているから"
          ],
          "explanation": "教科書1.3.1に「別途Visual Studio Codeなどの外部エディタを導入・設定しなくても、Pythonをインストールするだけで、すぐにプログラミングの学習を始めることができます」と説明されています。"
        },
        "en": {
          "question": "Why does §1.3.1 emphasize that beginners can learn immediately without installing third-party editors like VS Code?",
          "options": [
            "Installing official Python automatically bundles IDLE, providing an out-of-the-box editor and runner without extra configuration.",
            "Python can only ever run inside browser notepad plugins.",
            "VS Code causes all Python files to self-delete.",
            "External IDEs are strictly prohibited by Japanese educational statutes."
          ],
          "explanation": "Official Python distributions bundle IDLE out of the box, allowing students to edit and run scripts without complex plugin setups."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q1_v3",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "すでにPC内にAnaconda環境が存在する場合のPython導入について、教科書1.3で注意喚起されている推奨事項はどれですか？",
          "options": [
            "環境変数の競合やパッケージ管理トラブルを防ぐため、Anacondaを使い続けるか、アンインストールしてから公式を入れる",
            "必ず公式インストーラとAnacondaの両方を同じフォルダに上書きインストールする",
            "Anacondaを入れている場合はPCを初期化しなければPythonは一切動かない",
            "Anacondaと公式インストーラは全く同じファイルであるため気にする必要はない"
          ],
          "explanation": "教科書1.3に「すでにPC内にPython環境が存在しているのに、別の方法で導入すると環境変数の競合やトラブルの原因になることがあります。Anaconda導入済みの場合は使い続けるかアンインストールして入れ直すかを推奨します」とあります。"
        },
        "en": {
          "question": "If Anaconda is already installed on a student's machine, what precaution does §1.3 advise regarding the official Python installer?",
          "options": [
            "To prevent PATH variable conflicts and package collisions, either stick with Anaconda or uninstall Anaconda before installing official Python.",
            "Install both tools simultaneously inside the same folder to merge them.",
            "Format the computer hard drive entirely or Python will crash.",
            "Both tools are identical binary copies, so no conflicts can ever happen."
          ],
          "explanation": "Having multiple disparate Python installations (e.g., Anaconda and python.org) can cause environment variable collisions."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_3_q2_v1",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "WindowsでPython公式サイト（python.org）からダウンロードする際、教科書1.3.2.1で強く注意されている操作はどれですか？",
          "options": [
            "「Download Python install manager」ボタン（.msix）は押さず、下のリンクから「スタンドアロンインストーラ（.exe）」を選ぶ",
            "必ず一番大きな黄色いボタンをクリックして.msixファイルをダウンロードする",
            "Windows版ではなくmacOS用の.pkgパッケージをダウンロードして実行する",
            "インストーラはダウンロードせず、ブラウザ上で全コードを手作業でビルドする"
          ],
          "explanation": "教科書1.3.2.1に「Download Python install managerボタンをクリックすると.msixがダウンロードされ混乱の原因となります。必ずその下にあるスタンドアロンインストーラ（.exe）をダウンロードしてください」と警告されています。"
        },
        "en": {
          "question": "What critical installation warning for Windows users is highlighted in §1.3.2.1?",
          "options": [
            "Do NOT click 'Download Python install manager' (.msix); instead, click the standalone installer link to download the .exe file.",
            "Always click the big yellow .msix button regardless of OS.",
            "Download the macOS .pkg file and force it to run on Windows.",
            "Never download installers; manually compile source code in notepad."
          ],
          "explanation": "Section 1.3.2.1 explicitly cautions Windows users against the .msix store package, instructing them to choose the standalone .exe installer instead."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q2_v2",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "WindowsでPythonのインストーラ（.exe）を実行した際、画面下部で必ずチェックを入れるよう指示されている設定項目は何ですか？",
          "options": [
            "Add python.exe to PATH（PATHにPythonを追加する）",
            "Install for guest users only（ゲストユーザーのみにインストール）",
            "Disable 64-bit architecture（64ビット動作を無効化する）",
            "Delete all existing files（既存のファイルをすべて削除する）"
          ],
          "explanation": "教科書1.3.2.2に「画面下部にある『Add python.exe to PATH』（PATHにPythonを追加する）にチェックを入れます（将来コマンドラインツール等を利用する際にも役立ちます）」と明記されています。"
        },
        "en": {
          "question": "During the Windows Python installer setup screen, which crucial checkbox must be enabled as instructed in §1.3.2.2?",
          "options": [
            "Add python.exe to PATH",
            "Install for guest users only",
            "Disable 64-bit architecture",
            "Delete all personal documents"
          ],
          "explanation": "Enabling 'Add python.exe to PATH' configures system environment variables so python commands can be invoked globally from terminal/shell."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q2_v3",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "macOSで公式サイト（python.org）からPythonを導入する場合のファイル形式と手順として、教科書1.3.2.2に記載されているものはどれですか？",
          "options": [
            ".pkg パッケージファイルを起動し、画面の指示に従って「続ける」をクリックして完了する",
            ".exe ファイルをターミナルで無理やり解凍して実行する",
            "App Storeで「Python 3」を有料購入してダウンロードする",
            "パソコンの電源を長押ししてセーフモードで起動してからインストールする"
          ],
          "explanation": "教科書1.3.2.2に「macOSの場合: ダウンロードしたパッケージ（.pkgファイル）を起動し、画面の指示に従って『続ける』をクリックしてインストールを完了させます」とあります。"
        },
        "en": {
          "question": "What is the standard installation procedure for macOS users documented in §1.3.2.2?",
          "options": [
            "Open the downloaded .pkg package file and follow the setup wizard by clicking 'Continue'.",
            "Execute a Windows .exe installer via command-line force flags.",
            "Purchase Python as a paid proprietary subscription from the Mac App Store.",
            "Boot into hardware diagnostics mode before copying files."
          ],
          "explanation": "On macOS, the official installer is provided as an Apple installer package (.pkg) that guides users through a standard wizard."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_3_q3_v1",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "IDLEを起動した直後、画面に表示されてユーザーからの入力を待機しているプロンプト記号はどれですか？",
          "options": [
            ">>>",
            "$",
            "#",
            "?"
          ],
          "explanation": "教科書1.3.2.3に「ウィンドウ上部に Python 3.x.x のようにバージョン情報が表示され、>>> というプロンプトが表示されていれば、PythonおよびIDLEの導入は成功です！」とあります。"
        },
        "en": {
          "question": "Which prompt symbol appears in the Python Shell inside IDLE indicating that it is ready to receive user code?",
          "options": [
            ">>>",
            "$",
            "#",
            "?"
          ],
          "explanation": "The standard Python interactive REPL prompt is '>>>' as noted in §1.3.2.3."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q3_v2",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "macOSでインストール済みのIDLEを起動する一般的な操作として、教科書1.3.2.3で案内されている方法はどれですか？",
          "options": [
            "Finderの「アプリケーション」フォルダ内の「Python 3.x」フォルダにある「IDLE」を起動する（またはSpotlight検索で「IDLE」と入力）",
            "ゴミ箱を開いて中身のファイルを復元する",
            "Safariを起動してトップページに「idle://open」と入力する",
            "システム設定からキーボード配列を英語（US）に変更する"
          ],
          "explanation": "教科書1.3.2.3に「macOSの場合: Finderの『アプリケーション』フォルダを開き、『Python 3.x』フォルダ内にある『IDLE』をダブルクリックして起動します（または Spotlight 検索で『IDLE』と入力）」とあります。"
        },
        "en": {
          "question": "How should macOS users launch IDLE according to §1.3.2.3?",
          "options": [
            "Open Finder > Applications > 'Python 3.x' folder and double-click 'IDLE' (or search 'IDLE' in Spotlight).",
            "Restore cached files from the operating system Trash can.",
            "Type 'idle://open' directly into the Safari URL bar.",
            "Switch system keyboard layout to Dvorak."
          ],
          "explanation": "Section 1.3.2.3 instructs Mac users to launch IDLE from the Python 3.x folder inside Applications or via Spotlight."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q3_v3",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "IDLEを起動した直後に表示される画面の名称は何ですか？",
          "options": [
            "Python Shell（対話型シェル）",
            "Python Terminal",
            "Command Prompt",
            "Python Compiler Window"
          ],
          "explanation": "教科書1.3.2.3および1.4に「起動すると、『Python Shell』というウィンドウが表示されます」と記載されています。"
        },
        "en": {
          "question": "What is the exact window title and interface displayed immediately when launching IDLE?",
          "options": [
            "Python Shell (Interactive Shell)",
            "Python Terminal",
            "Command Prompt",
            "Python Compiler Window"
          ],
          "explanation": "The initial interactive window opened by IDLE is titled 'Python Shell' (§1.3.2.3)."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_3_q4_v1",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "Pythonの公式インストーラが正常に完了したことを確認し、IDLEを起動したときにウィンドウ最上部に表示される「Python 3.x.x」という表記の意味として正しいものはどれですか？",
          "options": [
            "現在PCにインストールされ実行されているPythonのバージョン番号（メジャー・マイナーバージョン）",
            "IDLEを起動した通算の回数カウント",
            "PC内部の空きハードディスク容量のギガバイト数",
            "インターネット接続のセキュリティ暗号化キー"
          ],
          "explanation": "教科書1.3.2.3に「ウィンドウ上部に Python 3.x.x のようにバージョン情報が表示され、>>> というプロンプトが表示されていれば、PythonおよびIDLEの導入は成功です」とあります。これはPython言語自体のバージョン番号を表します。"
        },
        "en": {
          "question": "When IDLE launches successfully, what does the 'Python 3.x.x' string displayed at the top of the Python Shell represent (§1.3.2.3)?",
          "options": [
            "The exact release version number (major and minor release) of the Python runtime currently executing.",
            "The cumulative number of times IDLE has been opened on this computer.",
            "The remaining free storage space in gigabytes on the local drive.",
            "The active internet encryption security token."
          ],
          "explanation": "Section 1.3.2.3 notes that 'Python 3.x.x' indicates the installed release version of the Python runtime."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q4_v2",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "WindowsでPythonの公式インストーラ（.exe）を実行してインストールを進める際、教科書1.3.2.2でクリックするよう指示されている標準のボタンは何ですか？",
          "options": [
            "Install Now",
            "Customize installation",
            "Cancel",
            "Repair"
          ],
          "explanation": "教科書1.3.2.2に「『Add python.exe to PATH』にチェックを入れます。『Install Now』をクリックしてインストールを進めます」と明記されています。"
        },
        "en": {
          "question": "Which button does §1.3.2.2 instruct Windows users to click during the installer screen after checking 'Add python.exe to PATH'?",
          "options": [
            "Install Now",
            "Customize installation",
            "Cancel",
            "Repair"
          ],
          "explanation": "Section 1.3.2.2 instructs users to enable the PATH checkbox and click 'Install Now' to proceed."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_3_q4_v3",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": null,
        "ja": {
          "question": "WindowsのスタートメニューでIDLEを検索して起動する際、表示されるアプリ名（例: IDLE (Python 3.x 64-bit)）に含まれる「64-bit」が意味するものは何ですか？",
          "options": [
            "現代の64ビットCPUのメモリ空間や高速処理にネイティブ対応したPython環境であること",
            "プログラムが64文字までしか記述できない制限があること",
            "64日間のみ利用できる期間限定の体験版であること",
            "64台のPCを同時に接続して通信するネットワーク機能"
          ],
          "explanation": "教科書1.3.2.3に「『IDLE (Python 3.x 64-bit)』をクリックして起動します」とあります。64-bitは現代のCPUアーキテクチャのビット幅（大容量メモリ空間を扱えるネイティブ仕様）を表します。"
        },
        "en": {
          "question": "What does the '64-bit' notation in 'IDLE (Python 3.x 64-bit)' (§1.3.2.3) signify?",
          "options": [
            "The Python environment is compiled natively for modern 64-bit CPU processor architectures.",
            "Scripts are strictly limited to a maximum length of 64 characters.",
            "It is a temporary trial edition expiring after 64 calendar days.",
            "It connects up to 64 computers simultaneously over LAN."
          ],
          "explanation": "64-bit indicates native 64-bit architecture support allowing access to modern memory spaces."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_4_q1_v1",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": ">>> 123 + 456\n579\n>>> print(\"Hello, Python!\")\nHello, Python!",
        "ja": {
          "question": "教科書1.4.1で説明されている対話型シェル「Python Shell（REPL）」の特徴として、正しいものはどれですか？",
          "options": [
            "コードを1行入力してEnterを押すと即座に評価・実行されて結果が表示される（Read-Eval-Print Loop）",
            "すべてのコードを100行以上書き溜めなければ一切計算を実行できない",
            "入力したコードは自動的にデスクトップにファイル保存されるため、保存ダイアログが毎回開く",
            "一度入力した計算結果はコンピュータを再起動するまで二度と変更できない"
          ],
          "explanation": "教科書1.4.1に「入力したコードをその場で1行ずつ評価・実行して結果を返す対話型の実行環境（REPL: Read-Eval-Print Loop）です」と明記されています。"
        },
        "en": {
          "question": "Which statement accurately captures how the interactive Python Shell (REPL) functions according to §1.4.1?",
          "options": [
            "It evaluates and executes each single line of code immediately upon pressing Enter, printing results on the spot (Read-Eval-Print Loop).",
            "It refuses to evaluate until at least 100 consecutive lines of code have been entered.",
            "It forces an automatic disk save dialog after every single keystroke.",
            "Once a variable is evaluated, its memory cannot be reset without a full OS reinstall."
          ],
          "explanation": "REPL stands for Read-Eval-Print Loop: it reads input, evaluates it immediately, prints the result, and loops back."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q1_v2",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "IDLEの対話型シェル（Python Shell）をキーボード入力によって終了させる正しいコマンドはどれですか？",
          "options": [
            "exit()",
            "stop()",
            "close()",
            "kill"
          ],
          "explanation": "教科書1.4.1に「終了したいときは、ウィンドウの閉じるボタンをクリックするか、メニューバーから『File』→『Exit』を選択します（または exit() と入力して Enter キーを押します）」と記載されています。"
        },
        "en": {
          "question": "Which Python command terminates the interactive Python Shell session when typed at the prompt?",
          "options": [
            "exit()",
            "stop()",
            "close()",
            "kill"
          ],
          "explanation": "Typing exit() (or selecting File > Exit) closes the interactive Python Shell (§1.4.1)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q1_v3",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "対話型シェルで `>>> 123 + 456` と入力した場合と、スクリプトファイルに `123 + 456` とだけ書いて実行した場合の挙動の違いとして正しいものはどれですか？",
          "options": [
            "対話型シェルでは計算結果（579）が自動表示されるが、スクリプトファイルでは print() を書かないと画面に出力されない",
            "スクリプトファイルでは自動表示されるが、対話型シェルではエラーになる",
            "両者とも全く同じように画面に何も表示されない",
            "スクリプトファイルではコンピュータから警告音が鳴る"
          ],
          "explanation": "対話型シェル（REPL）は式の評価値を自動で出力（Print）しますが、スクリプトファイル実行時は `print()` 関数を呼び出さない限り標準出力には何も現れません。"
        },
        "en": {
          "question": "What is the key output difference between typing '123 + 456' into the interactive shell versus writing '123 + 456' inside a script file?",
          "options": [
            "The interactive shell prints the evaluated value (579) automatically, whereas script files require explicit print() calls to output anything to screen.",
            "Script files output automatically, whereas the interactive shell throws a SyntaxError.",
            "Both environments suppress all output identically.",
            "Script files trigger an audible motherboard beep alarm."
          ],
          "explanation": "The interactive REPL automatically prints evaluated expressions; in a script file, unprinted expressions are computed and discarded silently."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_4_q2_v1",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "IDLEで新しいプログラムファイル（スクリプトファイル）を作成するために白紙のエディタウィンドウを開くメニュー操作とショートカットキーの組み合わせとして正しいものはどれですか？",
          "options": [
            "「File」→「New File」（Windows: Ctrl + N / macOS: Cmd + N）",
            "「File」→「Open」（Windows: Ctrl + O / macOS: Cmd + O）",
            "「Run」→「Run Module」（Windows: F5 / macOS: Fn + F5）",
            "「Edit」→「Undo」（Windows: Ctrl + Z / macOS: Cmd + Z）"
          ],
          "explanation": "教科書1.4.2.1に「Python Shell のメニューバーから『File』→『New File』を選択します。ショートカットキー: Windows は Ctrl + N、macOS は Cmd + N」と明記されています。"
        },
        "en": {
          "question": "What menu item and shortcut opens a clean editor window to compose a new script in IDLE (§1.4.2.1)?",
          "options": [
            "File > New File (Windows: Ctrl + N / macOS: Cmd + N)",
            "File > Open (Windows: Ctrl + O / macOS: Cmd + O)",
            "Run > Run Module (Windows: F5 / macOS: Fn + F5)",
            "Edit > Undo (Windows: Ctrl + Z / macOS: Cmd + Z)"
          ],
          "explanation": "Selecting File > New File (Ctrl+N / Cmd+N) opens an Untitled script editor window in IDLE."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q2_v2",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "教科書1.4.2.3で「ファイル名の末尾に必ず半角で付けて保存してください」と強く指示されている拡張子は何ですか？",
          "options": [
            ".py",
            ".txt",
            ".html",
            ".doc"
          ],
          "explanation": "教科書1.4.2.3に「※ ファイル名の末尾に必ず半角で .py を付けてください」と注意書きがあります。Pythonスクリプトファイルであることをシステムが認識するために必須です。"
        },
        "en": {
          "question": "Which file extension is strictly mandated when saving script files in §1.4.2.3?",
          "options": [
            ".py",
            ".txt",
            ".html",
            ".doc"
          ],
          "explanation": "Section 1.4.2.3 notes: 'Always append .py in half-width characters to the end of the filename.'"
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q2_v3",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "IDLEのエディタウィンドウで作成中のプログラムを上書き保存するショートカットキーはどれですか？",
          "options": [
            "Windows: Ctrl + S / macOS: Cmd + S",
            "Windows: Ctrl + P / macOS: Cmd + P",
            "Windows: Alt + F4 / macOS: Cmd + Q",
            "Windows: Shift + S / macOS: Option + S"
          ],
          "explanation": "教科書1.4.2.3に「エディタウィンドウのメニューバーから『File』→『Save』を選択します。ショートカットキー: Windows は Ctrl + S、macOS は Cmd + S」と記載されています。"
        },
        "en": {
          "question": "What keyboard shortcut saves the active script file inside IDLE's editor?",
          "options": [
            "Windows: Ctrl + S / macOS: Cmd + S",
            "Windows: Ctrl + P / macOS: Cmd + P",
            "Windows: Alt + F4 / macOS: Cmd + Q",
            "Windows: Shift + S / macOS: Option + S"
          ],
          "explanation": "Ctrl+S on Windows and Cmd+S on macOS trigger the File > Save action (§1.4.2.3)."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_4_q3_v1",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "IDLEのエディタで作成したスクリプトファイルを実行するためのキーボードのショートカットキーは何ですか？",
          "options": [
            "F5（ノートPC等では Fn + F5）",
            "Enter",
            "Ctrl + R",
            "Escape"
          ],
          "explanation": "教科書1.4.2.4に「メニューバーから『Run』→『Run Module』を選択します。ショートカットキー: F5 キーを押すだけでも実行できます（ノートPC等では Fn + F5）」とあります。"
        },
        "en": {
          "question": "Which function key executes the open script module from IDLE's editor window (§1.4.2.4)?",
          "options": [
            "F5 (or Fn + F5 on laptops)",
            "Enter",
            "Ctrl + R",
            "Escape"
          ],
          "explanation": "F5 (Run > Run Module) launches script execution inside IDLE (§1.4.2.4)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q3_v2",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": "==================== RESTART: /Users/.../hello.py ====================\nHello, World!\n>>>",
        "ja": {
          "question": "エディタウィンドウで F5 キーを押してスクリプトを実行したとき、画面の遷移と実行結果の表示場所として正しいものはどれですか？",
          "options": [
            "元の Python Shell ウィンドウに画面が切り替わり、RESTART行とともに結果が出力される",
            "エディタウィンドウのコードの真下に赤字で直接書き込まれる",
            "Webブラウザが新しく起動してGoogleの検索結果画面に表示される",
            "Windowsのコマンドプロンプトが新しく別ウィンドウで起動する"
          ],
          "explanation": "教科書1.4.2.4に「プログラムが実行され、元の Python Shell ウィンドウに切り替わって、次のように結果が表示されます：==================== RESTART: .../hello.py ==================== Hello, World!」と記載されています。"
        },
        "en": {
          "question": "What visual transition happens when you press F5 in IDLE's editor to run hello.py?",
          "options": [
            "Focus switches to the Python Shell window, displaying a RESTART header followed by script output.",
            "The output text is inserted directly into the source code text inside the editor window.",
            "A web browser opens automatically with search engine results.",
            "A separate standalone Windows command prompt window is spawned."
          ],
          "explanation": "Execution switches focus back to the Python Shell, printing a RESTART separator before executing the script."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q3_v3",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": "print(\"Hello, World!\")",
        "ja": {
          "question": "教科書1.4.2.2に書かれた最初のプログラムです。このスクリプトを実行したときに Python Shell に出力される文字列として正確なものはどれですか？",
          "options": [
            "Hello, World!",
            "\"Hello, World!\"",
            "print(Hello, World!)",
            "Hello, World"
          ],
          "explanation": "print() 関数にダブルクォーテーションで囲まれた文字列を渡すと、クォーテーションの内側の文字だけが画面に出力されるため、'Hello, World!' となります。"
        },
        "en": {
          "question": "When print(\"Hello, World!\") is executed, what exact string appears on standard output?",
          "options": [
            "Hello, World!",
            "\"Hello, World!\"",
            "print(Hello, World!)",
            "Hello, World"
          ],
          "explanation": "The print() function outputs the literal text content within the quotation marks without quotes."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_4_q4_v1",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": null,
        "ja": {
          "question": "IDLEのエディタでスクリプトのコードを編集した後、ファイルを保存（Ctrl+S / Cmd+S）せずに F5 キーを押して実行しようとしたとき、どのような挙動になりますか？",
          "options": [
            "「Source Must Be Saved - OK to Save?」という確認ダイアログが表示され、OKを押すと保存されてから実行される",
            "未保存の変更内容はすべて破棄されてエディタが初期化される",
            "保存されていない場合でも前回の古いコードがそのまま自動実行される",
            "警告なしにパソコンが自動的に再起動される"
          ],
          "explanation": "IDLEではエディタで未保存の変更がある状態で F5（Run Module）を押すと、実行前に必ず「Source Must Be Saved」ダイアログが表示され、ユーザーがOKを押すことで最新コードが保存された上で実行されます。"
        },
        "en": {
          "question": "What happens in IDLE if you press F5 to run a script after modifying code without saving first?",
          "options": [
            "A confirmation dialog ('Source Must Be Saved - OK to Save?') prompts you to save the file before execution proceeds.",
            "All unsaved code modifications are immediately deleted.",
            "The previous saved version runs silently without prompting or updating.",
            "The operating system restarts abruptly."
          ],
          "explanation": "IDLE prompts 'Source Must Be Saved' whenever uncommitted editor modifications exist prior to running."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q4_v2",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": "==================== RESTART: .../hello.py ====================",
        "ja": {
          "question": "F5 でスクリプトを実行するたびに Python Shell に表示される「RESTART」という仕切り線の重要な意味は何ですか？",
          "options": [
            "前回の実行で定義された変数や関数などのメモリ状態がリセットされ、クリーンな状態でプログラムが最初から実行されること",
            "パソコンの電源が一度切れてから再起動したこと",
            "Pythonのバージョンが自動的に最新版へアップデートされたこと",
            "プログラムコードにエラーがあり最初から書き直しが必要であること"
          ],
          "explanation": "IDLEはスクリプト実行ごとにシェル環境を「RESTART（再起動・初期化）」し、以前の実行で残った古い変数や定義が新しい実行に混入してバグを引き起こすのを防いでいます。"
        },
        "en": {
          "question": "What is the crucial technical purpose of the 'RESTART' line printed in the Python Shell every time F5 is pressed?",
          "options": [
            "The interpreter resets previous variable and function states in memory so the script executes in a clean, isolated environment.",
            "The physical computer hardware suffered a power cycle reboot.",
            "Python automatically upgraded itself to a newer version.",
            "The script crashed and must be rewritten from scratch."
          ],
          "explanation": "RESTART ensures an isolated execution context, preventing lingering state from prior runs from creating unexpected side effects."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_4_q4_v3",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": "print(\"Step 1\")\nprint(undefined_variable)\nprint(\"Step 2\")",
        "ja": {
          "question": "このスクリプトを F5 で実行したときの挙動として正しいものはどれですか？",
          "options": [
            "'Step 1' が出力された後、2行目で未定義変数エラー（NameError）が発生して実行が中断され、'Step 2' は出力されない",
            "エラー行を自動で読み飛ばして 'Step 1' と 'Step 2' だけが出力される",
            "実行前に全体がキャンセルされ、'Step 1' も含めて画面に何も出力されない",
            "未定義変数が自動的に 0 に置き換えられて全行が正常終了する"
          ],
          "explanation": "Pythonはインタプリタとして上から下へ順番に1行ずつ実行するため、1行目の print(\"Step 1\") は正常に出力されます。しかし2行目で未定義変数を参照した瞬間に NameError で中断するため、3行目は実行されません。"
        },
        "en": {
          "question": "What is the output and behavior when executing this 3-line script?",
          "options": [
            "'Step 1' prints; then line 2 raises NameError on the undefined variable, halting execution before 'Step 2' can run.",
            "Line 2 is automatically skipped, printing 'Step 1' and 'Step 2'.",
            "Nothing prints because execution is aborted prior to line 1.",
            "The undefined variable defaults to 0 and all lines succeed."
          ],
          "explanation": "Because Python interprets top-to-bottom sequentially, line 1 executes and prints, then line 2 halts execution upon raising a NameError."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_5_q1_v1",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(20 / 4)\nprint(20 // 4)\nprint(17 % 5)\nprint(2 ** 3)",
        "ja": {
          "question": "教科書1.5.1の演算子（/、//、%、**）に関する問題です。このコードを実行したときの4行の出力として正しいものはどれですか？",
          "options": [
            "5.0\n5\n2\n8",
            "5\n5\n3\n6",
            "5.0\n5.0\n2\n6",
            "4\n4\n2\n8"
          ],
          "explanation": "Pythonの通常除算 '/' は割り切れても浮動小数点数（5.0）を返します。'//' は商の整数部分（5）、'%' は割り算の余り（17÷5の余り=2）、'**' はべき乗（2^3=8）です。"
        },
        "en": {
          "question": "Based on §1.5.1 arithmetic operators (/, //, %, **), what is the exact output of these four print statements?",
          "options": [
            "5.0\n5\n2\n8",
            "5\n5\n3\n6",
            "5.0\n5.0\n2\n6",
            "4\n4\n2\n8"
          ],
          "explanation": "Division / always yields a float (5.0). Floor division // returns the integer quotient 5. Modulo % returns remainder 2. Exponentiation ** calculates 2^3 = 8."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q1_v2",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(29 // 7)\nprint(29 % 7)",
        "ja": {
          "question": "教科書1.5.1で説明されている「整数の商（//）」と「剰余（%）」を計算するコードです。出力結果の組み合わせとして正しいものはどれですか？",
          "options": [
            "4\n1",
            "4.14\n1",
            "4\n4",
            "3\n8"
          ],
          "explanation": "29 ÷ 7 = 4 あまり 1 です。したがって 29 // 7 は商の 4 となり、29 % 7 は余りの 1 となります。"
        },
        "en": {
          "question": "What is printed by these two lines computing floor quotient (//) and remainder (%)?",
          "options": [
            "4\n1",
            "4.14\n1",
            "4\n4",
            "3\n8"
          ],
          "explanation": "29 divided by 7 is 4 with remainder 1. Therefore 29 // 7 is 4 and 29 % 7 is 1."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q1_v3",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(3 + 2 ** 3 * 2)",
        "ja": {
          "question": "四則演算子の優先順位に関する問題です。このコードを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "19",
            "25",
            "250",
            "13"
          ],
          "explanation": "演算子の優先順位は「べき乗 (**) ＞ 乗除 (*, /, //, %) ＞ 加減 (+, -)」です。まず 2 ** 3 = 8 が計算され、次に 8 * 2 = 16、最後に 3 + 16 = 19 となります。"
        },
        "en": {
          "question": "What is the evaluated output of this expression based on operator precedence rules?",
          "options": [
            "19",
            "25",
            "250",
            "13"
          ],
          "explanation": "Exponentiation (**) takes precedence over multiplication (*), which precedes addition (+). Thus: 2**3 = 8 -> 8*2 = 16 -> 3 + 16 = 19."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_5_q2_v1",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": " print(\"Hello\")",
        "ja": {
          "question": "理由なく行の先頭にスペースを1文字入れてこのコードを実行したとき、Pythonが発生させるエラーとして正しいものはどれですか？",
          "options": [
            "IndentationError: unexpected indent",
            "SyntaxError: invalid character",
            "NameError: name 'print' is not defined",
            "TypeError: unsupported operand"
          ],
          "explanation": "教科書1.5.3に「行の先頭にスペースを置くこと（インデント）は、Pythonではプログラムの構造を表す文法的な意味を持ちます。理由なく行の先頭にスペースを入れると、IndentationError というエラーになります」とあります。"
        },
        "en": {
          "question": "If you inadvertently insert an unneeded leading space at the start of a top-level line, which Python error occurs?",
          "options": [
            "IndentationError: unexpected indent",
            "SyntaxError: invalid character",
            "NameError: name 'print' is not defined",
            "TypeError: unsupported operand"
          ],
          "explanation": "In §1.5.3, leading whitespace defines block scope; an unexpected leading space triggers IndentationError: unexpected indent."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q2_v2",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(\"Hello\")　# 文字列の外に全角スペース混入",
        "ja": {
          "question": "教科書1.5.3およびノート練習問題01-04で確認する「日本語入力の全角スペース（U+3000）」がコード中に混入した際のエラーとして正しいものはどれですか？",
          "options": [
            "SyntaxError: invalid character '　' (U+3000)",
            "IndentationError: tab error",
            "ValueError: invalid literal",
            "ZeroDivisionError: division by zero"
          ],
          "explanation": "教科書1.5.3に「全角空白（日本語入力のスペース）が含まれていると、文法エラー（SyntaxError）の原因になります」と明記されています。Pythonインタプリタは全角文字スペースを認識できず SyntaxError となります。"
        },
        "en": {
          "question": "As warned in §1.5.3 and notebook exercise 01-04, what error is thrown when a full-width Japanese space (U+3000) is placed outside quotes in code?",
          "options": [
            "SyntaxError: invalid character '　' (U+3000)",
            "IndentationError: tab error",
            "ValueError: invalid literal",
            "ZeroDivisionError: division by zero"
          ],
          "explanation": "A full-width space outside strings is treated as an illegal foreign character, raising SyntaxError: invalid character '　'."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q2_v3",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(10   +   5)",
        "ja": {
          "question": "文の途中（演算子 '+' の前後など）に半角スペースを複数個空けて記述した場合の挙動について、教科書1.5.3の説明として正しいものはどれですか？",
          "options": [
            "文法エラーにはならず正しく実行され、15 が出力される（コードの可読性を高めるために適度に空けることが一般的）",
            "演算子の前後にスペースを入れると即座に IndentationError となる",
            "スペースの個数分だけ計算結果に余分な 0 が付加されて 15000 となる",
            "スペースがあるとその行の計算は無視されて何も出力されない"
          ],
          "explanation": "教科書1.5.3に「文の途中（演算子の前後など）に置く半角スペースは、コードを読みやすく区切るために使われます。演算子の前後に半角スペースを空けて記述しても、文法エラーにはならず正しく実行されます」とあります。"
        },
        "en": {
          "question": "What happens according to §1.5.3 if you place multiple half-width spaces around arithmetic operators such as 'print(10   +   5)'?",
          "options": [
            "It executes normally without error, computing 15 (spaces improve human code legibility).",
            "It immediately triggers an IndentationError.",
            "Spaces append trailing zeroes to numerical results, outputting 15000.",
            "The expression is completely skipped without output."
          ],
          "explanation": "Mid-line whitespace between operators and operands is ignored by the parser and encouraged for legibility."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_5_q3_v1",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "# print(\"A\")\nprint(\"B\") # print(\"C\")\n# print(\"D\")\nprint(\"E\")",
        "ja": {
          "question": "教科書1.5.4（コメント #）のルールに従ったコードです。このプログラムを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "B\nE",
            "A\nB\nC\nD\nE",
            "B\nC\nE",
            "B"
          ],
          "explanation": "行頭の '#' はその行全体をコメント化し、行の途中の '#' はその位置から行末までをコメント化します。実行されるのは 2行目の print(\"B\") と 4行目の print(\"E\") のみです。"
        },
        "en": {
          "question": "Following the comment rules in §1.5.4, what is the output of this code?",
          "options": [
            "B\nE",
            "A\nB\nC\nD\nE",
            "B\nC\nE",
            "B"
          ],
          "explanation": "Any text following # on that line is ignored by Python. Only print('B') on line 2 and print('E') on line 4 execute."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q3_v2",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(\"1番目\")\nprint(\"2番目\")\nprint(\"3番目\")",
        "ja": {
          "question": "教科書1.5.2で説明されている「プログラムの実行の順序」に関する原則として、正しいものはどれですか？",
          "options": [
            "条件分岐やループ、関数呼び出しなどがなければ、上から下へ書かれた順に1行ずつ実行される",
            "ファイルの下から上へ向かって逆順に1行ずつ実行される",
            "コードの文字数が短い行から順に優先して実行される",
            "すべての文が同時に並列実行されるため出力順序は毎回ランダムである"
          ],
          "explanation": "教科書1.5.2に「プログラムは複数の『文（statement）』から成り立っています。特に指定がなければ、上から下へ書かれた順に1行ずつ実行されます」と明記されています。"
        },
        "en": {
          "question": "What is the foundational principle of execution order detailed in §1.5.2?",
          "options": [
            "Unless branching, looping, or functions dictate otherwise, statements execute sequentially from top to bottom, line by line.",
            "Statements are always parsed backwards from the bottom line upwards.",
            "Statements with shorter string lengths take precedence and execute first.",
            "All statements execute simultaneously in random order."
          ],
          "explanation": "Sequential flow executes instructions top to bottom, one statement after another."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q3_v3",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(\"START\")\n# 10 / 0\nprint(\"FINISH\")",
        "ja": {
          "question": "2行目にゼロ除算エラーを引き起こす式がありますが、行頭に '#' が付いています。このプログラムの実行結果として正しいものはどれですか？",
          "options": [
            "START\nFINISH",
            "ZeroDivisionError が発生して何も出力されない",
            "START のみが出力された後にエラー停止する",
            "FINISH のみが出力される"
          ],
          "explanation": "2行目は '#' によってコメントアウトされているため、Pythonインタプリタに完全に無視されます。そのためエラーは発生せず、1行目と3行目が正常に出力されます。"
        },
        "en": {
          "question": "Line 2 contains a division-by-zero expression preceded by '#'. What happens when running this script?",
          "options": [
            "START\nFINISH are both printed normally without error.",
            "A ZeroDivisionError crashes the program before printing anything.",
            "Only START prints before crashing with an error.",
            "Only FINISH prints."
          ],
          "explanation": "Because line 2 is preceded by #, the interpreter treats it as a non-executable comment, avoiding any ZeroDivisionError."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_5_q4_v1",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "x = 10\nx = x + 5\nx = x * 2\nprint(x)",
        "ja": {
          "question": "教科書1.5.6（代入文と再代入）のルールに従ったコードです。このプログラムを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "30",
            "20",
            "15",
            "10"
          ],
          "explanation": "まず x に 10 が代入されます。次に右辺の x + 5 (10 + 5 = 15) が計算され x に再代入されます。最後に x * 2 (15 * 2 = 30) が計算され x に再代入されるため、最終出力は 30 です。"
        },
        "en": {
          "question": "Tracing variable reassignment as taught in §1.5.6, what is the final printed value of x?",
          "options": [
            "30",
            "20",
            "15",
            "10"
          ],
          "explanation": "x starts at 10. Then x = 10 + 5 = 15. Then x = 15 * 2 = 30. The final value printed is 30."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q4_v2",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": null,
        "ja": {
          "question": "プログラミング言語における等号記号 '=' の正確な意味として、教科書1.5.6に合致する正しい説明はどれですか？",
          "options": [
            "数学の「等しい」ではなく、「右辺の計算結果を左辺の変数に入れる（代入する）」という意味である",
            "左辺と右辺の値が一致しているかどうかを検査する比較演算である",
            "右辺のデータを完全に消去して左辺の変数を初期化する命令である",
            "左辺と右辺の文字数を一致させる自動フォーマット記号である"
          ],
          "explanation": "教科書1.5.6に「プログラミングにおける = は、数学の『等しい』ではなく、『右辺の計算結果を左辺の変数に入れる』という意味です」と明記されています。"
        },
        "en": {
          "question": "What is the precise meaning of the '=' operator in Python as defined in §1.5.6?",
          "options": [
            "It is an assignment statement: evaluate the expression on the right-hand side and store the resulting value into the variable on the left.",
            "It is a boolean comparison checking whether the left and right sides are mathematically equal.",
            "It destroys both sides to reset memory.",
            "It formats code by matching string character lengths."
          ],
          "explanation": "As explained in §1.5.6, '=' is the assignment operator that assigns the right-hand value into the left-hand variable."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q4_v3",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": null,
        "ja": {
          "question": "教科書1.5.5で説明されているPythonの「変数の命名規則」として、文法エラー（SyntaxError）になる不正な変数名はどれですか？",
          "options": [
            "1st_point（数字から始まっている）",
            "user_score（アンダースコアを含む）",
            "count2（末尾に数字を含む）",
            "total_sum（小文字英字とアンダースコア）"
          ],
          "explanation": "教科書1.5.5に「名前に使える文字はアルファベット・数字・アンダースコアです。ただし最初の文字は数字以外でなければなりません」とあります。'1st_point' は先頭が数字のためエラーになります。"
        },
        "en": {
          "question": "According to the identifier naming rules in §1.5.5, which variable name causes a SyntaxError?",
          "options": [
            "1st_point (starts with a digit)",
            "user_score (contains underscore)",
            "count2 (ends with a digit)",
            "total_sum (contains letters and underscore)"
          ],
          "explanation": "Section 1.5.5 states identifiers may use letters, digits, and underscores, but cannot begin with a numeric digit."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_5_q5_v1",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "def double_plus_one(n):\n    return n * 2 + 1\n\nresult = double_plus_one(4)\nprint(result)",
        "ja": {
          "question": "教科書1.5.8（関数定義 def と return）に従ったコードです。このプログラムを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "9",
            "8",
            "10",
            "None"
          ],
          "explanation": "関数呼び出し double_plus_one(4) により引数 n に 4 が渡されます。n * 2 + 1 = 4 * 2 + 1 = 9 が計算され、return で呼び出し元に返されて result に代入されるため 9 が出力されます。"
        },
        "en": {
          "question": "Following the function definition syntax (def and return) in §1.5.8, what does this program print?",
          "options": [
            "9",
            "8",
            "10",
            "None"
          ],
          "explanation": "Passing 4 into double_plus_one evaluates 4 * 2 + 1 = 9. The return statement passes 9 back to result, which is printed."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q5_v2",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "print(len(\"Tokyo 2026\"))\nprint(max(3, 8, 1, 6))",
        "ja": {
          "question": "教科書1.5.7で解説されている組み込み関数 len() と max() の動作に関する問題です。このコードを実行したときの2行の出力として正しいものはどれですか？",
          "options": [
            "10\n8",
            "9\n8",
            "10\n6",
            "9\n3"
          ],
          "explanation": "len(\"Tokyo 2026\") は半角スペースを含めて文字数を数えるため、T-o-k-y-o- -2-0-2-6 の計10文字となります。max(3, 8, 1, 6) は引数の中の最大値である 8 を返します。"
        },
        "en": {
          "question": "Evaluating the built-in functions len() and max() (§1.5.7), what are the two printed outputs?",
          "options": [
            "10\n8",
            "9\n8",
            "10\n6",
            "9\n3"
          ],
          "explanation": "'Tokyo 2026' contains 10 characters (including the space). max(3, 8, 1, 6) evaluates to 8."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_5_q5_v3",
        "sectionId": "1.5",
        "sectionTitleJa": "1.5 Python言語の文法",
        "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
        "code": "import math\nprint(math.sqrt(16))\nprint(type(math.sqrt(16)))",
        "ja": {
          "question": "教科書1.5.9のモジュール（import math）に関する問題です。このコードを実行したときの出力として正しいものはどれですか？",
          "options": [
            "4.0\n<class 'float'>",
            "4\n<class 'int'>",
            "16\n<class 'int'>",
            "256\n<class 'float'>"
          ],
          "explanation": "教科書1.5.9.2に「import math; print(math.sqrt(16)) # 4.0」とある通り、math.sqrt() は平方根を浮動小数点数（float型の 4.0）として返します。"
        },
        "en": {
          "question": "What is printed by these lines using the math module (§1.5.9)?",
          "options": [
            "4.0\n<class 'float'>",
            "4\n<class 'int'>",
            "16\n<class 'int'>",
            "256\n<class 'float'>"
          ],
          "explanation": "As noted in §1.5.9.2, math.sqrt(16) returns the square root as a float: 4.0 of type float."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_6_q1_v1",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "print(365 * 24 * 60 * 60)",
        "ja": {
          "question": "教科書の「ノート練習問題 01-03：1年間の秒数を計算する」で作成するプログラムです。平年（365日）の1年間が何秒であるかを計算した出力結果として正しいものはどれですか？",
          "options": [
            "31536000",
            "31622400",
            "86400",
            "525600"
          ],
          "explanation": "1日は 24時間 × 60分 × 60秒 = 86,400秒です。平年（365日）は 365 × 86,400 = 31,536,000秒 となります。"
        },
        "en": {
          "question": "From 'Notebook Exercise 01-03: Calculate seconds in a year', what is the exact output of calculating seconds in a non-leap year (365 days)?",
          "options": [
            "31536000",
            "31622400",
            "86400",
            "525600"
          ],
          "explanation": "1 day = 24 * 60 * 60 = 86,400 seconds. 365 days = 365 * 86,400 = 31,536,000 seconds."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q1_v2",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "days = 366\nseconds_per_day = 24 * 60 * 60\nprint(days * seconds_per_day)",
        "ja": {
          "question": "ノート練習問題01-03の発展として、うるう年（366日）の1年間の秒数を計算したときの出力結果はどれですか？",
          "options": [
            "31622400",
            "31536000",
            "31557600",
            "36600000"
          ],
          "explanation": "1日は 86,400秒です。うるう年（366日）は 366 × 86,400 = 31,622,400秒 となり、平年よりちょうど1日分（86,400秒）多くなります。"
        },
        "en": {
          "question": "Extending Exercise 01-03 to a leap year (366 days), what is the output of this code?",
          "options": [
            "31622400",
            "31536000",
            "31557600",
            "36600000"
          ],
          "explanation": "366 * (24 * 60 * 60) = 366 * 86,400 = 31,622,400 seconds (exactly 86,400 seconds more than a regular year)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q1_v3",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "hours = 24\nminutes = 60\nseconds = 60\nprint(hours * minutes * seconds)",
        "ja": {
          "question": "1日（24時間）が何秒であるかを計算して表示するこのプログラムの出力結果として正しいものはどれですか？",
          "options": [
            "86400",
            "1440",
            "3600",
            "864000"
          ],
          "explanation": "24 × 60 = 1,440分、1,440 × 60 = 86,400秒 です。"
        },
        "en": {
          "question": "What is the output of computing the total seconds in a single 24-hour day?",
          "options": [
            "86400",
            "1440",
            "3600",
            "864000"
          ],
          "explanation": "24 hours * 60 minutes * 60 seconds = 86,400 seconds."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_6_q2_v1",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "count = 5\nprint(count)\ncount = count + 3\nprint(count)\ncount = count * 2\nprint(count)",
        "ja": {
          "question": "教科書の「ノート練習問題 01-05：複数の代入文で変数の値を変更する」そのもののコードです。このプログラムを実行したときに出力される3行の数値として正しいものはどれですか？",
          "options": [
            "5\n8\n16",
            "5\n8\n10",
            "5\n15\n30",
            "5\n3\n2"
          ],
          "explanation": "① count = 5 で 5 が出力されます。② count = count + 3 で 5 + 3 = 8 となり 8 が出力されます。③ count = count * 2 で 8 * 2 = 16 となり 16 が出力されます。"
        },
        "en": {
          "question": "From 'Notebook Exercise 01-05: Modify variable across multiple assignments', what are the three lines output by this program?",
          "options": [
            "5\n8\n16",
            "5\n8\n10",
            "5\n15\n30",
            "5\n3\n2"
          ],
          "explanation": "1. count is 5 (prints 5). 2. count = 5 + 3 = 8 (prints 8). 3. count = 8 * 2 = 16 (prints 16)."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q2_v2",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "count = 5\ncount = count * 2\ncount = count + 3\nprint(count)",
        "ja": {
          "question": "ノート練習問題01-05の計算順序を入れ替えたコードです。このプログラムを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "13",
            "16",
            "10",
            "25"
          ],
          "explanation": "初期値は 5 です。次に count = 5 * 2 = 10 となり、その次に count = 10 + 3 = 13 となります。代入文の順序によって計算結果が変わる点を確認してください。"
        },
        "en": {
          "question": "If the order of operations from Exercise 01-05 is flipped as shown, what is printed?",
          "options": [
            "13",
            "16",
            "10",
            "25"
          ],
          "explanation": "Starting at 5: count = 5 * 2 = 10. Then count = 10 + 3 = 13."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q2_v3",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "count = 4\ncount = count * 3\ncount = count - 2\nprint(count)",
        "ja": {
          "question": "この代入文トレースコードを実行したときの出力結果として正しいものはどれですか？",
          "options": [
            "10",
            "12",
            "14",
            "6"
          ],
          "explanation": "count = 4 から始まり、count = 4 * 3 = 12 となり、続いて count = 12 - 2 = 10 となるため、10 が出力されます。"
        },
        "en": {
          "question": "What is the output after executing these three assignment statements?",
          "options": [
            "10",
            "12",
            "14",
            "6"
          ],
          "explanation": "Initial count is 4. Next count = 4 * 3 = 12. Next count = 12 - 2 = 10. Output is 10."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_6_q3_v1",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "print(max(len(\"horse\"), len(\"elephant\"), len(\"hippopotamus\"), len(\"dolphin\")))",
        "ja": {
          "question": "教科書の「ノート練習問題 01-06：horse, elephant, hippopotamus, dolphinの中で一番長い単語は何文字か表示する」プログラムです。出力される数値として正しいものはどれですか？",
          "options": [
            "12",
            "8",
            "10",
            "7"
          ],
          "explanation": "各単語の文字数は horse(5), elephant(8), hippopotamus(12), dolphin(7) です。max() はこの中で最大の 12 を返します。"
        },
        "en": {
          "question": "From 'Notebook Exercise 01-06', what is the output of finding the maximum word length among 'horse', 'elephant', 'hippopotamus', and 'dolphin'?",
          "options": [
            "12",
            "8",
            "10",
            "7"
          ],
          "explanation": "Lengths are horse(5), elephant(8), hippopotamus(12), dolphin(7). The max() function returns 12."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q3_v2",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "w1 = len(\"cat\")\nw2 = len(\"crocodile\")\nprint(max(w1, w2))",
        "ja": {
          "question": "ノート練習問題01-06と同様に変数を用いて単語の長さを比較するコードです。出力結果として正しいものはどれですか？",
          "options": [
            "9",
            "3",
            "6",
            "crocodile"
          ],
          "explanation": "'cat' は 3文字、'crocodile'（c-r-o-c-o-d-i-l-e）は 9文字です。max(3, 9) により 9 が出力されます。"
        },
        "en": {
          "question": "What is printed by this variable-based word-length comparison code?",
          "options": [
            "9",
            "3",
            "6",
            "crocodile"
          ],
          "explanation": "len('cat') is 3, len('crocodile') is 9. max(3, 9) returns 9."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q3_v3",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "print(max(len(\"AI\"), len(\"Machine Learning\"), len(\"Python\")))",
        "ja": {
          "question": "このコードを実行したときの出力結果として正しいものはどれですか？（スペースを含めてカウントします）",
          "options": [
            "16",
            "15",
            "6",
            "2"
          ],
          "explanation": "AI(2), Machine Learning(M-a-c-h-i-n-e- -L-e-a-r-n-i-n-g: 空白含め16文字), Python(6) です。最大値は 16 です。"
        },
        "en": {
          "question": "What is the evaluated output of this expression (counting spaces)?",
          "options": [
            "16",
            "15",
            "6",
            "2"
          ],
          "explanation": "Lengths are AI(2), 'Machine Learning' (16 including space), Python(6). The maximum is 16."
        },
        "correctIndex": 0
      }
    ],
    [
      {
        "id": "ch1_1_6_q4_v1",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "def calc_bmi(height, weight):\n    return weight / (height ** 2)\n\nprint(calc_bmi(2.0, 80))",
        "ja": {
          "question": "教科書の「ノート練習問題 01-07：身長と体重を引数としてBMIを計算して返す関数を定義する」プログラムです。身長2.0m、体重80kgのときの出力結果として正しいものはどれですか？",
          "options": [
            "20.0",
            "40.0",
            "20",
            "0.05"
          ],
          "explanation": "BMIの計算式は 体重 / (身長 ** 2) です。80 / (2.0 ** 2) = 80 / 4.0 = 20.0（float型）となります。"
        },
        "en": {
          "question": "From 'Notebook Exercise 01-07: Define a function that calculates and returns BMI', what is the output for height = 2.0m and weight = 80kg?",
          "options": [
            "20.0",
            "40.0",
            "20",
            "0.05"
          ],
          "explanation": "BMI formula is weight / (height ** 2). Thus 80 / (2.0 ** 2) = 80 / 4.0 = 20.0."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q4_v2",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "import math\n\ndef circle_area(r):\n    return math.pi * (r ** 2)\n\nprint(round(circle_area(10), 2))",
        "ja": {
          "question": "教科書の「ノート練習問題 01-08：円の半径を引数とし、円の面積を計算して返す関数を定義する」プログラムです。半径 r = 10 のとき、小数第2位まで四捨五入した出力結果として正しいものはどれですか？",
          "options": [
            "314.16",
            "31.42",
            "62.83",
            "100.00"
          ],
          "explanation": "円の面積は π × r^2 です。math.pi は約 3.14159265... なので、3.14159265... × 100 = 314.159265... となり、小数第2位で四捨五入すると 314.16 になります。"
        },
        "en": {
          "question": "From 'Notebook Exercise 01-08: Define a function that calculates circle area', what is the rounded output for radius r = 10?",
          "options": [
            "314.16",
            "31.42",
            "62.83",
            "100.00"
          ],
          "explanation": "Area = pi * r^2. For r = 10, pi * 100 = 314.159265..., which rounds to 314.16."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_1_6_q4_v3",
        "sectionId": "1.6",
        "sectionTitleJa": "1.6 まとめとノート練習問題",
        "sectionTitleEn": "1.6 Exercises & Review",
        "code": "def calc_bmi(height, weight):\n    # 身長が cm 単位（例: 170cm）で渡される場合の修正\n    h_meter = height / 100\n    return weight / (h_meter ** 2)\n\nprint(calc_bmi(100, 20))",
        "ja": {
          "question": "身長がセンチメートル単位（例: 100cm）で渡された場合に対応したBMI計算関数です。身長100cm、体重20kgのときの出力結果として正しいものはどれですか？",
          "options": [
            "20.0",
            "0.002",
            "2.0",
            "200.0"
          ],
          "explanation": "h_meter = 100 / 100 = 1.0m です。return 20 / (1.0 ** 2) = 20 / 1.0 = 20.0 となります。"
        },
        "en": {
          "question": "What is the output of this modified BMI function when height is passed in centimeters (height=100cm, weight=20kg)?",
          "options": [
            "20.0",
            "0.002",
            "2.0",
            "200.0"
          ],
          "explanation": "h_meter = 100 / 100 = 1.0m. BMI = 20 / (1.0 ** 2) = 20.0."
        },
        "correctIndex": 0
      }
    ]
  ],
  "2": [
    [
      {
        "id": "ch2_q1_v1",
        "code": "val = input()\nprint(val + val)",
        "ja": {
          "question": "キーボードから「5」と入力した場合、以下のコードの出力結果はどうなりますか？",
          "options": [
            "10",
            "'55'",
            "エラーになる",
            "None"
          ],
          "explanation": "input()関数は入力を常に文字列（str型）として返します。文字列同士の「+」演算は文字列連結となるため、'5' + '5' は '55' となります。数値として足すには int(val) の型変換が必要です。"
        },
        "en": {
          "question": "If the user inputs '5', what will the following code output?",
          "options": [
            "10",
            "'55'",
            "A TypeError is raised",
            "None"
          ],
          "explanation": "input() always returns user input as a string (str). The '+' operator between two strings concatenates them, yielding '55'. To perform arithmetic addition, cast it using int(val)."
        },
        "correctIndex": 1,
        "sectionId": "2.1",
        "sectionTitleJa": "2.1 キーボードからの入力（input・型変換・IDLE）",
        "sectionTitleEn": "2.1 User Input & Type Casting"
      },
      {
        "id": "ch2_q1_v2",
        "code": "a = input()\nb = input()\nprint(int(a) + int(b))",
        "ja": {
          "question": "1行目に「3」、2行目に「4」と入力した場合、以下のコードの出力結果は何ですか？",
          "options": [
            "'34'",
            "7",
            "34",
            "エラーになる"
          ],
          "explanation": "int()関数によって文字列 '3' と '4' が整数型 3 と 4 に変換されるため、足し算が行われて 7 が出力されます。"
        },
        "en": {
          "question": "If the user enters '3' on the first prompt and '4' on the second, what is the output?",
          "options": [
            "'34'",
            "7",
            "34",
            "An error occurs"
          ],
          "explanation": "int() casts the strings '3' and '4' into integers 3 and 4, so the addition evaluates to 7."
        },
        "correctIndex": 1,
        "sectionId": "2.1",
        "sectionTitleJa": "2.1 キーボードからの入力（input・型変換・IDLE）",
        "sectionTitleEn": "2.1 User Input & Type Casting"
      },
      {
        "id": "ch2_q1_v3",
        "code": "num = int(\"abc\")",
        "ja": {
          "question": "上記のコードを実行したとき、Pythonはどのような動作をしますか？",
          "options": [
            "num に 0 が代入される",
            "ValueError が発生してプログラムが停止する",
            "TypeError が発生してプログラムが停止する",
            "num に None が代入される"
          ],
          "explanation": "十進数の数字として解釈できない文字列（'abc'など）を int() に渡すと、ValueError（値のエラー）が発生します。"
        },
        "en": {
          "question": "What happens when the code snippet above is executed in Python?",
          "options": [
            "num is assigned 0",
            "A ValueError is raised and execution halts",
            "A TypeError is raised and execution halts",
            "num is assigned None"
          ],
          "explanation": "Passing a non-numeric string like 'abc' to int() raises a ValueError because it cannot parse it as an integer base 10."
        },
        "correctIndex": 1,
        "sectionId": "2.1",
        "sectionTitleJa": "2.1 キーボードからの入力（input・型変換・IDLE）",
        "sectionTitleEn": "2.1 User Input & Type Casting"
      }
    ],
    [
      {
        "id": "ch2_q2_v1",
        "code": "score = 85\nif score >= 60:\n    print(\"合格\")\nelif score >= 80:\n    print(\"優秀\")\nelse:\n    print(\"不合格\")",
        "ja": {
          "question": "上記のコードを実行したとき、画面に出力される文字列は何ですか？",
          "options": [
            "合格",
            "優秀",
            "合格 優秀（両方）",
            "不合格"
          ],
          "explanation": "if文は上から順に条件が評価されます。score（85）は最初の「score >= 60」を満たすため直ちに「合格」が出力され、後続のelifは一切評価されずにスキップされます。"
        },
        "en": {
          "question": "What does the code above output?",
          "options": [
            "合格",
            "優秀",
            "Both '合格' and '優秀'",
            "不合格"
          ],
          "explanation": "In an if-elif-else construct, Python evaluates conditions top to bottom and executes only the first matching branch. Since 85 >= 60 is True, it prints '合格' and skips the rest."
        },
        "correctIndex": 0,
        "sectionId": "2.2",
        "sectionTitleJa": "2.2 場合分け（if / elif / else・真偽値・比較演算子）",
        "sectionTitleEn": "2.2 Conditionals & Booleans"
      },
      {
        "id": "ch2_q2_v2",
        "code": "x = 10\ny = 5\nif x > 5 and y < 3:\n    print(\"A\")\nelif x > 5 or y < 3:\n    print(\"B\")\nelse:\n    print(\"C\")",
        "ja": {
          "question": "上記のコードを実行したときに出力される文字は何ですか？",
          "options": [
            "A",
            "B",
            "C",
            "A と B の両方"
          ],
          "explanation": "最初の条件「x > 5 and y < 3」は True and False で False となります。次の elif「x > 5 or y < 3」は True or False で True となるため、「B」が出力されます。"
        },
        "en": {
          "question": "What will be printed when the code executes?",
          "options": [
            "A",
            "B",
            "C",
            "Both A and B"
          ],
          "explanation": "The first check requires both conditions to hold (True and False -> False). The elif requires at least one condition to hold (True or False -> True), printing 'B'."
        },
        "correctIndex": 1,
        "sectionId": "2.2",
        "sectionTitleJa": "2.2 場合分け（if / elif / else・真偽値・比較演算子）",
        "sectionTitleEn": "2.2 Conditionals & Booleans"
      },
      {
        "id": "ch2_q2_v3",
        "code": "val = 0\nif val:\n    print(\"True判定\")\nelse:\n    print(\"False判定\")",
        "ja": {
          "question": "Pythonにおいて数値の 0 を条件式に直接渡した場合、出力はどうなりますか？",
          "options": [
            "True判定",
            "False判定",
            "エラー（SyntaxError）になる",
            "何も出力されない"
          ],
          "explanation": "Pythonでは数値の 0（または空のリスト []、空文字列 '' など）は真偽値として False（偽）とみなされます。したがって else 節が実行され「False判定」が出力されます。"
        },
        "en": {
          "question": "In Python, when the integer 0 is evaluated directly as a condition, what is printed?",
          "options": [
            "True判定",
            "False判定",
            "A SyntaxError is raised",
            "Nothing is printed"
          ],
          "explanation": "In Python truthiness rules, numeric zero (0, 0.0), empty collections ([]), and empty strings ('') evaluate to False. The else branch executes, printing 'False判定'."
        },
        "correctIndex": 1,
        "sectionId": "2.2",
        "sectionTitleJa": "2.2 場合分け（if / elif / else・真偽値・比較演算子）",
        "sectionTitleEn": "2.2 Conditionals & Booleans"
      }
    ],
    [
      {
        "id": "ch2_q3_v1",
        "code": "for i in range(2, 6):\n    print(i, end=\" \")",
        "ja": {
          "question": "上記のコードを実行したときの出力結果として、正しいものはどれですか？",
          "options": [
            "2 3 4 5 6 ",
            "2 3 4 5 ",
            "1 2 3 4 5 ",
            "2 4 6 "
          ],
          "explanation": "range(start, stop) は start から始まり、stop の直前（stop - 1）まで生成します。range(2, 6) は 2, 3, 4, 5 の4つの値を生成します（6は含まれません）。"
        },
        "en": {
          "question": "What is the exact output of the code snippet above?",
          "options": [
            "2 3 4 5 6 ",
            "2 3 4 5 ",
            "1 2 3 4 5 ",
            "2 4 6 "
          ],
          "explanation": "range(start, stop) starts at 'start' and stops before 'stop' (non-inclusive). range(2, 6) generates 2, 3, 4, 5."
        },
        "correctIndex": 1,
        "sectionId": "2.3",
        "sectionTitleJa": "2.3 繰り返し（for / while・無限ループ）",
        "sectionTitleEn": "2.3 Loops (for & while)"
      },
      {
        "id": "ch2_q3_v2",
        "code": "total = 0\nfor i in range(1, 5):\n    total += i\nprint(total)",
        "ja": {
          "question": "上記のコードを実行したとき、出力される数値は何ですか？",
          "options": [
            "10",
            "15",
            "4",
            "6"
          ],
          "explanation": "range(1, 5) は 1, 2, 3, 4 をループします。1 + 2 + 3 + 4 = 10 が total に加算され、10 が出力されます。"
        },
        "en": {
          "question": "What number is printed after running this code?",
          "options": [
            "10",
            "15",
            "4",
            "6"
          ],
          "explanation": "range(1, 5) iterates over 1, 2, 3, 4. The running sum is 1 + 2 + 3 + 4 = 10."
        },
        "correctIndex": 0,
        "sectionId": "2.3",
        "sectionTitleJa": "2.3 繰り返し（for / while・無限ループ）",
        "sectionTitleEn": "2.3 Loops (for & while)"
      },
      {
        "id": "ch2_q3_v3",
        "code": "for n in range(5, 0, -2):\n    print(n, end=\" \")",
        "ja": {
          "question": "負のステップ値を指定した以下のコードの出力結果は何ですか？",
          "options": [
            "5 3 1 ",
            "5 4 3 2 1 ",
            "5 3 1 -1 ",
            "エラーになる"
          ],
          "explanation": "range(5, 0, -2) は 5 から始まり、2ずつ減算しながら 0 の直前（0は含まない）まで進むため、5, 3, 1 が順に出力されます。"
        },
        "en": {
          "question": "What is the output of this loop with a negative step value?",
          "options": [
            "5 3 1 ",
            "5 4 3 2 1 ",
            "5 3 1 -1 ",
            "A ValueError is raised"
          ],
          "explanation": "range(5, 0, -2) starts at 5 and steps by -2 down to (but excluding) 0, yielding 5, 3, and 1."
        },
        "correctIndex": 0,
        "sectionId": "2.3",
        "sectionTitleJa": "2.3 繰り返し（for / while・無限ループ）",
        "sectionTitleEn": "2.3 Loops (for & while)"
      }
    ],
    [
      {
        "id": "ch2_q4_v1",
        "code": "x = 1\nwhile x < 5:\n    x *= 2\nprint(x)",
        "ja": {
          "question": "上記のコードを実行したとき、最終的に print(x) で出力される値は何ですか？",
          "options": [
            "4",
            "5",
            "8",
            "16"
          ],
          "explanation": "1周目: x=1 (<5) → x=2。2周目: x=2 (<5) → x=4。3周目: x=4 (<5) → x=8。4周目: x=8 は <5 を満たさないためループ終了。最終値は 8 です。"
        },
        "en": {
          "question": "What value will be printed after the while loop finishes?",
          "options": [
            "4",
            "5",
            "8",
            "16"
          ],
          "explanation": "Step 1: x=1 (<5) -> x becomes 2. Step 2: x=2 (<5) -> x becomes 4. Step 3: x=4 (<5) -> x becomes 8. Then x < 5 is False, exiting with x = 8."
        },
        "correctIndex": 2,
        "sectionId": "2.4_2.5",
        "sectionTitleJa": "2.4-2.5 range関数と多重ループ（ネスト）",
        "sectionTitleEn": "2.4-2.5 range() & Nested Loops"
      },
      {
        "id": "ch2_q4_v2",
        "code": "count = 0\nfor i in range(1, 6):\n    if i == 3:\n        break\n    count += 1\nprint(count)",
        "ja": {
          "question": "break文を含む以下のコードを実行したとき、出力される count の値は何ですか？",
          "options": [
            "2",
            "3",
            "5",
            "0"
          ],
          "explanation": "i=1 のとき count=1。i=2 のとき count=2。i=3 のとき「if i == 3: break」によってループ全体が即座に中断・終了します。したがって count は 2 のままです。"
        },
        "en": {
          "question": "What is the printed value of count when this break statement executes?",
          "options": [
            "2",
            "3",
            "5",
            "0"
          ],
          "explanation": "For i=1, count becomes 1. For i=2, count becomes 2. When i=3, the break statement terminates the entire loop immediately, leaving count at 2."
        },
        "correctIndex": 0,
        "sectionId": "2.4_2.5",
        "sectionTitleJa": "2.4-2.5 range関数と多重ループ（ネスト）",
        "sectionTitleEn": "2.4-2.5 range() & Nested Loops"
      },
      {
        "id": "ch2_q4_v3",
        "code": "res = 0\nfor n in range(1, 5):\n    if n % 2 == 0:\n        continue\n    res += n\nprint(res)",
        "ja": {
          "question": "continue文を含む以下のコードを実行したとき、出力される値は何ですか？",
          "options": [
            "4",
            "10",
            "6",
            "2"
          ],
          "explanation": "range(1, 5) は 1, 2, 3, 4 です。偶数（n=2, 4）のときは continue により足し算がスキップされます。奇数のみ（1 + 3 = 4）が加算され、4 が出力されます。"
        },
        "en": {
          "question": "What is the output of the code using the continue statement?",
          "options": [
            "4",
            "10",
            "6",
            "2"
          ],
          "explanation": "For even numbers (n=2, 4), continue skips the remainder of the iteration. Only odd numbers are added: 1 + 3 = 4."
        },
        "correctIndex": 0,
        "sectionId": "2.4_2.5",
        "sectionTitleJa": "2.4-2.5 range関数と多重ループ（ネスト）",
        "sectionTitleEn": "2.4-2.5 range() & Nested Loops"
      }
    ]
  ],
  "3": [
    [
      {
        "id": "ch3_q1_v1",
        "code": "fruits = [\"apple\", \"banana\", \"cherry\", \"date\"]\nprint(fruits[-1])",
        "ja": {
          "question": "負のインデックス fruits[-1] を指定したとき、何が出力されますか？",
          "options": [
            "'apple'",
            "'banana'",
            "'date'",
            "IndexError が発生する"
          ],
          "explanation": "Pythonのリストでは負のインデックスを使うと末尾から要素を参照できます。fruits[-1] は末尾の要素 'date' を返します。"
        },
        "en": {
          "question": "What is printed when accessing fruits[-1]?",
          "options": [
            "'apple'",
            "'banana'",
            "'date'",
            "An IndexError is raised"
          ],
          "explanation": "Negative indices count backwards from the end of a list. Index -1 refers to the last element, 'date'."
        },
        "correctIndex": 2,
        "sectionId": "3.1",
        "sectionTitleJa": "3.1 データ型の基礎（int, float, str, bool, list, dict）",
        "sectionTitleEn": "3.1 Fundamental Data Types"
      },
      {
        "id": "ch3_q1_v2",
        "code": "nums = [10, 20, 30]\nprint(nums[3])",
        "ja": {
          "question": "要素数が3のリストに対して nums[3] を実行するとどうなりますか？",
          "options": [
            "30 が出力される",
            "None が出力される",
            "IndexError が発生する",
            "0 が出力される"
          ],
          "explanation": "要素数が3のリストのインデックスは 0, 1, 2 です。nums[3] は範囲外アクセスとなり IndexError（インデックスの範囲外エラー）が発生します。"
        },
        "en": {
          "question": "What happens when executing nums[3] on a 3-element list?",
          "options": [
            "30 is printed",
            "None is printed",
            "An IndexError is raised",
            "0 is printed"
          ],
          "explanation": "Because Python uses 0-based indexing, valid indices for a list of length 3 are 0, 1, and 2. Accessing index 3 raises an IndexError: list index out of range."
        },
        "correctIndex": 2,
        "sectionId": "3.1",
        "sectionTitleJa": "3.1 データ型の基礎（int, float, str, bool, list, dict）",
        "sectionTitleEn": "3.1 Fundamental Data Types"
      },
      {
        "id": "ch3_q1_v3",
        "code": "vals = [100, 200, 300]\nvals[1] = 999\nprint(vals)",
        "ja": {
          "question": "上記のコードを実行したとき、出力されるリストは何ですか？",
          "options": [
            "[100, 999, 300]",
            "[999, 200, 300]",
            "[100, 200, 300, 999]",
            "エラーになる（リストは変更不可）"
          ],
          "explanation": "リストは可変（ミュータブル）なデータ構造であるため、特定のインデックスを指定して直接要素を上書き代入できます。インデックス 1 の要素が 200 から 999 に置き換わります。"
        },
        "en": {
          "question": "What will be printed after modifying vals[1]?",
          "options": [
            "[100, 999, 300]",
            "[999, 200, 300]",
            "[100, 200, 300, 999]",
            "An error occurs because lists are immutable"
          ],
          "explanation": "Python lists are mutable. Assigning to vals[1] directly updates the element at index 1 in place, resulting in [100, 999, 300]."
        },
        "correctIndex": 0,
        "sectionId": "3.1",
        "sectionTitleJa": "3.1 データ型の基礎（int, float, str, bool, list, dict）",
        "sectionTitleEn": "3.1 Fundamental Data Types"
      }
    ],
    [
      {
        "id": "ch3_q2_v1",
        "code": "nums = [10, 20, 30, 40, 50]\nprint(nums[1:4])",
        "ja": {
          "question": "スライス nums[1:4] の出力結果として正しいものはどれですか？",
          "options": [
            "[20, 30, 40, 50]",
            "[20, 30, 40]",
            "[10, 20, 30]",
            "[10, 20, 30, 40]"
          ],
          "explanation": "スライス nums[start:stop] は start 以上 stop 未満の範囲を取り出します。インデックス 1（20）、2（30）、3（40）の3要素が取り出され、インデックス 4（50）は含まれません。"
        },
        "en": {
          "question": "What is the exact output of nums[1:4]?",
          "options": [
            "[20, 30, 40, 50]",
            "[20, 30, 40]",
            "[10, 20, 30]",
            "[10, 20, 30, 40]"
          ],
          "explanation": "Slicing lst[start:stop] extracts items from index start up to, but not including, stop. Indices 1, 2, and 3 are taken, producing [20, 30, 40]."
        },
        "correctIndex": 1,
        "sectionId": "3.2",
        "sectionTitleJa": "3.2 リストの詳細（インデックス・スライス・append）",
        "sectionTitleEn": "3.2 Lists & Slicing"
      },
      {
        "id": "ch3_q2_v2",
        "code": "items = [\"A\", \"B\", \"C\", \"D\", \"E\"]\nprint(items[:3])",
        "ja": {
          "question": "開始インデックスを省略した items[:3] は何を返しますか？",
          "options": [
            "['A', 'B', 'C']",
            "['A', 'B', 'C', 'D']",
            "['B', 'C', 'D']",
            "['D', 'E']"
          ],
          "explanation": "開始インデックスを省略すると先頭（インデックス 0）から開始されます。[:3] はインデックス 0, 1, 2 の要素、つまり ['A', 'B', 'C'] を返します。"
        },
        "en": {
          "question": "What does items[:3] evaluate to when the start index is omitted?",
          "options": [
            "['A', 'B', 'C']",
            "['A', 'B', 'C', 'D']",
            "['B', 'C', 'D']",
            "['D', 'E']"
          ],
          "explanation": "Omitting the start index in a slice defaults to index 0. [:3] extracts indices 0, 1, and 2: ['A', 'B', 'C']."
        },
        "correctIndex": 0,
        "sectionId": "3.2",
        "sectionTitleJa": "3.2 リストの詳細（インデックス・スライス・append）",
        "sectionTitleEn": "3.2 Lists & Slicing"
      },
      {
        "id": "ch3_q2_v3",
        "code": "arr = [1, 2, 3, 4, 5, 6]\nprint(arr[::2])",
        "ja": {
          "question": "ステップ幅に 2 を指定した arr[::2] の出力結果は何ですか？",
          "options": [
            "[1, 3, 5]",
            "[2, 4, 6]",
            "[1, 2]",
            "[1, 4, 6]"
          ],
          "explanation": "arr[::2] は先頭から末尾まで 2 つ飛ばし（1つおき）に要素を取得します。インデックス 0 (1), 2 (3), 4 (5) が選ばれ、[1, 3, 5] となります。"
        },
        "en": {
          "question": "What is the output when step 2 is provided in arr[::2]?",
          "options": [
            "[1, 3, 5]",
            "[2, 4, 6]",
            "[1, 2]",
            "[1, 4, 6]"
          ],
          "explanation": "The slice [::2] steps through the whole list taking every second item starting from index 0: elements at index 0, 2, and 4 yield [1, 3, 5]."
        },
        "correctIndex": 0,
        "sectionId": "3.2",
        "sectionTitleJa": "3.2 リストの詳細（インデックス・スライス・append）",
        "sectionTitleEn": "3.2 Lists & Slicing"
      }
    ],
    [
      {
        "id": "ch3_q3_v1",
        "code": "a = [1, 2]\nb = a.append(3)\nprint(b)",
        "ja": {
          "question": "上記のコードを実行したとき、画面に出力される値は何ですか？",
          "options": [
            "[1, 2, 3]",
            "3",
            "None",
            "エラーになる"
          ],
          "explanation": "リストの append() メソッドは元のリストを直接変更（破壊的更新）し、戻り値としては None を返します。新しいリストを返すわけではないため、変数 b には None が代入されます。"
        },
        "en": {
          "question": "What is printed when running this code snippet?",
          "options": [
            "[1, 2, 3]",
            "3",
            "None",
            "A TypeError is raised"
          ],
          "explanation": "The list .append() method modifies the list in place and returns None. Assigning its return value to 'b' results in None."
        },
        "correctIndex": 2,
        "sectionId": "3.3",
        "sectionTitleJa": "3.3 辞書（キーと値・KeyError・in演算子）",
        "sectionTitleEn": "3.3 Dictionaries (dict)"
      },
      {
        "id": "ch3_q3_v2",
        "code": "stack = [10, 20, 30]\nval = stack.pop()\nprint(val, stack)",
        "ja": {
          "question": "pop() メソッドを実行した後の出力結果はどうなりますか？",
          "options": [
            "30 [10, 20]",
            "10 [20, 30]",
            "None [10, 20]",
            "30 [10, 20, 30]"
          ],
          "explanation": "pop() メソッドはリストの末尾の要素を取り出して返し、かつ元のリストからその要素を削除します。val には 30 が入り、stack は [10, 20] になります。"
        },
        "en": {
          "question": "What is printed after calling pop()?",
          "options": [
            "30 [10, 20]",
            "10 [20, 30]",
            "None [10, 20]",
            "30 [10, 20, 30]"
          ],
          "explanation": ".pop() removes and returns the last element of the list. val receives 30, and stack is reduced to [10, 20]."
        },
        "correctIndex": 0,
        "sectionId": "3.3",
        "sectionTitleJa": "3.3 辞書（キーと値・KeyError・in演算子）",
        "sectionTitleEn": "3.3 Dictionaries (dict)"
      },
      {
        "id": "ch3_q3_v3",
        "code": "text = \"python\"\ntext[0] = \"P\"",
        "ja": {
          "question": "上記のコードを実行したとき、Pythonはどのようなエラーを出しますか？",
          "options": [
            "TypeError: 'str' object does not support item assignment",
            "IndexError: string index out of range",
            "ValueError: invalid literal",
            "エラーは起きず 'Python' に変更される"
          ],
          "explanation": "文字列（str）は不変（イミュータブル）なオブジェクトであるため、インデックスを指定して文字を上書きしようとすると TypeError が発生します。"
        },
        "en": {
          "question": "What happens when attempting to modify text[0] on a string object?",
          "options": [
            "TypeError: 'str' object does not support item assignment",
            "IndexError: string index out of range",
            "ValueError: invalid literal",
            "No error occurs and text becomes 'Python'"
          ],
          "explanation": "Strings in Python are immutable. Attempting in-place item assignment raises a TypeError."
        },
        "correctIndex": 0,
        "sectionId": "3.3",
        "sectionTitleJa": "3.3 辞書（キーと値・KeyError・in演算子）",
        "sectionTitleEn": "3.3 Dictionaries (dict)"
      }
    ],
    [
      {
        "id": "ch3_q4_v1",
        "code": "d = {\"a\": 10, \"b\": 20}\nprint(d[\"c\"])",
        "ja": {
          "question": "存在しないキー 'c' を角括弧で参照したとき、何が発生しますか？",
          "options": [
            "None が出力される",
            "KeyError が発生する",
            "0 が出力される",
            "IndexError が発生する"
          ],
          "explanation": "辞書に存在しないキーを d[key] で直接参照すると、KeyError（キーのエラー）が発生します。安全に取り出すには d.get('c') を使用します。"
        },
        "en": {
          "question": "What happens when accessing a non-existent key 'c' with bracket notation d['c']?",
          "options": [
            "None is printed",
            "A KeyError is raised",
            "0 is printed",
            "An IndexError is raised"
          ],
          "explanation": "Accessing a missing key with square brackets raises a KeyError. Use d.get('c') to return None or a default value safely."
        },
        "correctIndex": 1,
        "sectionId": "3.4",
        "sectionTitleJa": "3.4 可変性と参照（ミュータブル vs イミュータブル）",
        "sectionTitleEn": "3.4 Mutability & References"
      },
      {
        "id": "ch3_q4_v2",
        "code": "d = {\"x\": 1, \"y\": 2}\nd[\"x\"] = 99\nprint(d)",
        "ja": {
          "question": "既存のキー 'x' に対して新しい値を代入したとき、辞書はどうなりますか？",
          "options": [
            "{'x': 99, 'y': 2}",
            "{'x': 1, 'y': 2, 'x': 99}",
            "KeyError が発生する",
            "{'y': 2}"
          ],
          "explanation": "辞書は同一のキーを重複して持つことはできません。既存のキーに代入すると、そのキーの値が 99 に上書き更新されます。"
        },
        "en": {
          "question": "What does the dictionary look like after assigning d['x'] = 99?",
          "options": [
            "{'x': 99, 'y': 2}",
            "{'x': 1, 'y': 2, 'x': 99}",
            "A KeyError is raised",
            "{'y': 2}"
          ],
          "explanation": "Dictionary keys must be unique. Assigning to an existing key overwrites its associated value, yielding {'x': 99, 'y': 2}."
        },
        "correctIndex": 0,
        "sectionId": "3.4",
        "sectionTitleJa": "3.4 可変性と参照（ミュータブル vs イミュータブル）",
        "sectionTitleEn": "3.4 Mutability & References"
      },
      {
        "id": "ch3_q4_v3",
        "code": "scores = {\"math\": 80, \"eng\": 75}\nprint(scores.get(\"sci\", 0))",
        "ja": {
          "question": "get() メソッドを使用した上記のコードの出力結果は何ですか？",
          "options": [
            "0",
            "None",
            "KeyError が発生する",
            "77.5"
          ],
          "explanation": "dict.get(key, default) は、指定したキーが存在しない場合に第2引数のデフォルト値を返します。'sci' は存在しないため 0 が出力されます。"
        },
        "en": {
          "question": "What does scores.get('sci', 0) output when 'sci' is missing from the dictionary?",
          "options": [
            "0",
            "None",
            "A KeyError is raised",
            "77.5"
          ],
          "explanation": "dict.get(key, default) returns the specified fallback default if the key is not found, returning 0 without raising an error."
        },
        "correctIndex": 0,
        "sectionId": "3.4",
        "sectionTitleJa": "3.4 可変性と参照（ミュータブル vs イミュータブル）",
        "sectionTitleEn": "3.4 Mutability & References"
      }
    ]
  ],
  "4": [
    [
      {
        "id": "ch4_q1_v1",
        "code": null,
        "ja": {
          "question": "生成AIを活用したコーディング（vibe coding等）を行う際、人間側が担うべき最も重要な役割は何ですか？",
          "options": [
            "AIが生成したコードの動作確認・テストや仕様の妥当性検証",
            "コードを一切読まずにAIの出力をそのまま本番環境にデプロイすること",
            "文法チェックをすべて手動で行い、AIの利用を最小限に制限すること",
            "構文規則を無視して直感だけでコードを記述すること"
          ],
          "explanation": "コーディングエージェントは高度なコードを生成できますが、ハルシネーション（嘘の記述）や予期しないバグを含み得ます。要件定義、テスト作成、コードレビューによる動作検証は人間が不可欠な役割として担う必要があります。"
        },
        "en": {
          "question": "When utilizing AI coding agents (e.g. 'vibe coding'), what is the most critical responsibility of the human programmer?",
          "options": [
            "Verifying code correctness, edge cases, and testing specification validity",
            "Deploying all generated code straight to production without auditing",
            "Refusing to use automated tooling and inspecting machine code manually",
            "Relying entirely on intuition while discarding algorithm principles"
          ],
          "explanation": "AI agents can introduce subtle logic bugs or hallucinations. The human developer remains accountable for defining exact requirements, writing automated test suites, and verifying edge-case behavior."
        },
        "correctIndex": 0,
        "sectionId": "4.1",
        "sectionTitleJa": "4.1 アルゴリズムの基礎と要件",
        "sectionTitleEn": "4.1 Algorithm Fundamentals"
      },
      {
        "id": "ch4_q1_v2",
        "code": null,
        "ja": {
          "question": "コーディングエージェントが生成したコードに潜むリスクとして、最も注意すべきものはどれですか？",
          "options": [
            "文法上は正しくエラーなく動いて見えるが、特定の境界値やセキュリティ面で不具合を含むリスク",
            "Pythonが勝手にC言語に変換されて実行できなくなるリスク",
            "コードを実行するとPCのハードディスクが物理的に破損するリスク",
            "一度実行したコードを二度と修正できなくなるリスク"
          ],
          "explanation": "AIエージェントの出力は「一見すると整っていて動く」ように見えますが、境界値（空リストや負数など）での例外処理の欠落やセキュリティ上の脆弱性が紛れ込みやすいという特徴があります。"
        },
        "en": {
          "question": "What is the most insidious risk when incorporating code written by an AI coding agent?",
          "options": [
            "The code appears syntactically clean and runs, yet harbors subtle edge-case or security vulnerabilities",
            "The code silently rewrites the host OS kernel and locks the hard drive",
            "Python files permanently lock themselves against further edits once saved",
            "The interpreter automatically converts the script into an incompatible language"
          ],
          "explanation": "Generated code often looks convincing and passes basic smoke tests, yet can fail under corner-case conditions or introduce critical security flaws unless systematically verified."
        },
        "correctIndex": 0,
        "sectionId": "4.1",
        "sectionTitleJa": "4.1 アルゴリズムの基礎と要件",
        "sectionTitleEn": "4.1 Algorithm Fundamentals"
      },
      {
        "id": "ch4_q1_v3",
        "code": null,
        "ja": {
          "question": "AIが生成した関数の正しさを客観的かつ継続的に検証するために、開発者が整備すべきものとして最も適切なものはどれですか？",
          "options": [
            "自動テスト（単体テスト / Unit Test）",
            "手動で print 文を何百行も挿入して目視確認し続けること",
            "AIに対して「本当にバグはないか？」と何度も質問し直すこと",
            "プログラムのファイル名を変更すること"
          ],
          "explanation": "入力と期待される出力を明確に定義した自動単体テスト（Unit Test）を実行することで、AI生成コードが要求仕様を満たしているかを客観的かつ再現性高く検証できます。"
        },
        "en": {
          "question": "What is the most reliable engineering method to objectively verify and safeguard AI-generated code?",
          "options": [
            "Automated unit tests with concrete input/output assertions",
            "Repeatedly asking the AI prompt if any bugs exist",
            "Manually inserting hundreds of temporary print statements by eye",
            "Renaming the file extension to a different language"
          ],
          "explanation": "Automated unit test suites provide verifiable, reproducible proof that generated functions conform to explicit specifications and handle edge inputs correctly."
        },
        "correctIndex": 0,
        "sectionId": "4.1",
        "sectionTitleJa": "4.1 アルゴリズムの基礎と要件",
        "sectionTitleEn": "4.1 Algorithm Fundamentals"
      }
    ],
    [
      {
        "id": "ch4_q2_v1",
        "code": "def process(n):\n    for i in range(n):\n        for j in range(n):\n            print(i, j)",
        "ja": {
          "question": "上記の二重ループ関数の時間計算量を表すオーダー記法として、最も適切なものはどれですか？",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
          ],
          "explanation": "外側のループが n 回、内側のループが各周で n 回回るため、処理回数は n × n = n^2 回に比例します。したがって時間計算量は O(n^2) です。"
        },
        "en": {
          "question": "What is the time complexity (Big-O notation) of the nested loop function above?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
          ],
          "explanation": "The outer loop runs n times and the inner loop runs n times per outer iteration, yielding n * n operations, which is O(n^2)."
        },
        "correctIndex": 3,
        "sectionId": "4.2",
        "sectionTitleJa": "4.2 アラン・チューリングと停止問題（Halting Problem）",
        "sectionTitleEn": "4.2 Turing & The Halting Problem"
      },
      {
        "id": "ch4_q2_v2",
        "code": null,
        "ja": {
          "question": "入力データサイズ n が大きくなったとき、実行時間が最も急激に増加する（最も効率が悪い）計算量はどれですか？",
          "options": [
            "O(1)",
            "O(n)",
            "O(n^2)",
            "O(log n)"
          ],
          "explanation": "計算量の増加速度は O(1) < O(log n) < O(n) < O(n^2) の順となります。選択肢の中では O(n^2)（二次時間）が最も急激に増大します。"
        },
        "en": {
          "question": "As input size n grows large, which of the following complexities scales the worst (takes the most time)?",
          "options": [
            "O(1)",
            "O(n)",
            "O(n^2)",
            "O(log n)"
          ],
          "explanation": "The order of growth from best to worst is O(1) < O(log n) < O(n) < O(n^2). O(n^2) exhibits quadratic growth, exploding fastest as n increases."
        },
        "correctIndex": 2,
        "sectionId": "4.2",
        "sectionTitleJa": "4.2 アラン・チューリングと停止問題（Halting Problem）",
        "sectionTitleEn": "4.2 Turing & The Halting Problem"
      },
      {
        "id": "ch4_q2_v3",
        "code": "def find_item(lst, target):\n    for x in lst:\n        if x == target:\n            return True\n    return False",
        "ja": {
          "question": "長さ n の整列されていないリストから特定の値を線形探索（先頭から順に走査）する最悪時間計算量はどれですか？",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
          ],
          "explanation": "最悪の場合（探している値が末尾にあるか、または存在しない場合）、n 個の要素をすべて1つずつ調べる必要があるため、時間計算量は O(n) です。"
        },
        "en": {
          "question": "What is the worst-case time complexity of linear search across an unsorted list of length n?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
          ],
          "explanation": "In the worst case (the target is at the very end or absent), linear search must inspect every single element, running in O(n) time."
        },
        "correctIndex": 2,
        "sectionId": "4.2",
        "sectionTitleJa": "4.2 アラン・チューリングと停止問題（Halting Problem）",
        "sectionTitleEn": "4.2 Turing & The Halting Problem"
      }
    ],
    [
      {
        "id": "ch4_q3_v1",
        "code": null,
        "ja": {
          "question": "アラン・チューリングが証明した「停止性問題（Halting Problem）」の結論として正しいものはどれですか？",
          "options": [
            "あらゆる任意のプログラムが有限時間内に停止するか否かを判定できる汎用アルゴリズムは存在しない",
            "どんなプログラムでも最適化すれば必ず O(1) で停止させることができる",
            "while文を使ったプログラムはすべて無限ループに陥る",
            "コンピュータは足し算と引き算以外の計算を行うことができない"
          ],
          "explanation": "チューリングの停止性問題の証明により、「任意のプログラムとその入力が与えられたとき、それが有限時間で停止するか永久ループするかを常に正しく判定する単一のアルゴリズム」は論理的に存在し得ない（決定不能である）ことが示されています。"
        },
        "en": {
          "question": "What is the core conclusion of Alan Turing's proof of the Halting Problem?",
          "options": [
            "No general algorithm can exist that decides whether every arbitrary program halts or runs forever",
            "Every program can be mathematically optimized to halt in O(1) time",
            "All while loops inevitably result in infinite loops",
            "Computers cannot compute operations beyond addition and subtraction"
          ],
          "explanation": "Turing mathematically proved that the Halting Problem is undecidable: there cannot exist a universal program that correctly determines if any arbitrary program halts on a given input."
        },
        "correctIndex": 0,
        "sectionId": "4.3",
        "sectionTitleJa": "4.3 計算量（Big-O記法・線形探索 vs 二分探索）",
        "sectionTitleEn": "4.3 Computational Complexity (Big-O)"
      },
      {
        "id": "ch4_q3_v2",
        "code": null,
        "ja": {
          "question": "「停止性問題が決定不能である」という事実は、現代のソフトウェア工学において何を意味していますか？",
          "options": [
            "すべてのプログラムのバグや無限ループを100%完全に自動検出する静的解析ツールは原理的に作成できない",
            "コンピュータでプログラムを作成すること自体が無意味である",
            "AIが将来的にすべての人間を完全に代替できる",
            "Python言語は無限ループを禁止している"
          ],
          "explanation": "停止性問題の決定不能性により、任意のソースコードを事前にスキャンして「絶対に無限ループしないこと」を100%完璧に保証する自動検証ツールは原理上作成不可能です。"
        },
        "en": {
          "question": "What practical implication does the undecidability of the Halting Problem have for modern software engineering?",
          "options": [
            "It is mathematically impossible to build a tool that perfectly detects all infinite loops across all programs",
            "Writing software code on digital computers is fundamentally meaningless",
            "Static linters can never identify simple syntax errors",
            "All modern programming languages legally forbid while loops"
          ],
          "explanation": "Because the general halting problem is undecidable, automated static analysis tools must rely on heuristics; no automated validator can guarantee 100% complete detection of all infinite loops without false positives or negatives."
        },
        "correctIndex": 0,
        "sectionId": "4.3",
        "sectionTitleJa": "4.3 計算量（Big-O記法・線形探索 vs 二分探索）",
        "sectionTitleEn": "4.3 Computational Complexity (Big-O)"
      },
      {
        "id": "ch4_q3_v3",
        "code": null,
        "ja": {
          "question": "プログラムの構文エラー（SyntaxError）の検出と、停止性問題の決定の違いとして正しいものはどれですか？",
          "options": [
            "構文エラーは文法規則に基づき有限時間で確実に判定可能だが、任意コードの実行時停止性は一般に判定不能である",
            "構文エラーも停止性問題と同様に原理的に判定不可能である",
            "停止性問題はコンパイラが1秒以内に完全に解くことができる",
            "構文エラーは実行してみるまで絶対に検知できない"
          ],
          "explanation": "構文エラー（文法違反）は明確な文法規則（文脈自由文法等）に基づいてパーサーが決定的に判定できます。一方、文法的に正しいコードが「いつか停止するか」は実行時セマンティクスの問題であり、一般には決定不能です。"
        },
        "en": {
          "question": "What is the fundamental difference between detecting a SyntaxError versus solving the Halting Problem?",
          "options": [
            "Syntax errors follow formal grammar and are deterministically decidable, whereas general termination is undecidable",
            "Syntax errors are also mathematically undecidable under all conditions",
            "Modern compilers solve the general Halting Problem in constant time",
            "Syntax errors can only be discovered after a program finishes execution"
          ],
          "explanation": "A parser deterministically identifies grammatical syntax errors in finite time. In contrast, whether an arbitrary syntactically valid program eventually halts is undecidable."
        },
        "correctIndex": 0,
        "sectionId": "4.3",
        "sectionTitleJa": "4.3 計算量（Big-O記法・線形探索 vs 二分探索）",
        "sectionTitleEn": "4.3 Computational Complexity (Big-O)"
      }
    ],
    [
      {
        "id": "ch4_q4_v1",
        "code": null,
        "ja": {
          "question": "計算機科学において「アルゴリズム」が満たすべき必須の要件として、最も適切な組み合わせはどれですか？",
          "options": [
            "明確性（曖昧さのない手順）、有限性（必ず有限回で停止する）、正当性（正しい出力を出す）",
            "複雑性（コードが長い）、不透明性（解読しにくい）、高速性",
            "永久性（一度動いたら絶対に停止しないこと）",
            "英語のみで書かれていること"
          ],
          "explanation": "アルゴリズムは「明確性（各ステップが曖昧でないこと）」「有限性（有限ステップで必ず停止すること）」「入力・出力の規定」「正当性（目的の答えを得ること）」を満たす計算手順です。"
        },
        "en": {
          "question": "Which combination of characteristics defines a valid algorithm in computer science?",
          "options": [
            "Definiteness (unambiguous steps), Finiteness (terminates in finite steps), Correctness (produces correct output)",
            "Complexity (lengthy code), Obscurity (difficult to decipher), Extreme speed",
            "Permanence (must run in an endless loop without ever halting)",
            "Requirement to be authored strictly in the English language"
          ],
          "explanation": "A formal algorithm must have definite and unambiguous operations, terminate within a finite number of steps, and correctly map inputs to expected outputs."
        },
        "correctIndex": 0,
        "sectionId": "4.4",
        "sectionTitleJa": "4.4 コーディングエージェントと検証責任（単体テスト）",
        "sectionTitleEn": "4.4 Coding Agents & Verification"
      },
      {
        "id": "ch4_q4_v2",
        "code": null,
        "ja": {
          "question": "アルゴリズムの性能を評価する際、「時間計算量」と「空間計算量」はそれぞれ何を測る指標ですか？",
          "options": [
            "時間計算量は実行にかかる計算ステップ数、空間計算量は実行に必要な追加メモリ使用量",
            "時間計算量はコードを書くのにかかった時間、空間計算量はファイルの保存容量",
            "時間計算量はCPUの温度、空間計算量はPCの物理的な大きさ",
            "両者とも全く同じ指標であり区別はない"
          ],
          "explanation": "時間計算量（Time Complexity）は入力サイズに対する処理ステップ数（実行時間）の増加度合いを測り、空間計算量（Space Complexity）はアルゴリズムが必要とする作業用メモリ領域の増加度合いを測ります。"
        },
        "en": {
          "question": "When analyzing algorithms, what do 'Time Complexity' and 'Space Complexity' measure respectively?",
          "options": [
            "Time complexity measures computational step scaling; space complexity measures extra memory usage scaling",
            "Time complexity measures developer typing speed; space complexity measures hard drive file size",
            "Time complexity measures processor temperature; space complexity measures the physical volume of the computer",
            "They are completely identical terms with no distinction"
          ],
          "explanation": "Time complexity quantifies how operation count scales with input size n. Space complexity quantifies how auxiliary memory consumption scales with n."
        },
        "correctIndex": 0,
        "sectionId": "4.4",
        "sectionTitleJa": "4.4 コーディングエージェントと検証責任（単体テスト）",
        "sectionTitleEn": "4.4 Coding Agents & Verification"
      },
      {
        "id": "ch4_q4_v3",
        "code": null,
        "ja": {
          "question": "アルゴリズムの最悪時間計算量（Worst-Case Complexity）を評価することが特に重視される理由はどれですか？",
          "options": [
            "どんな最悪の入力が与えられた場合でも、処理時間がその上限を超えないという安全な保証を得るため",
            "最悪計算量さえ良ければ、平均的な処理時間は悪くても問題ないため",
            "最悪の場合だけをテストすれば、すべてのバグが自動的に消えるため",
            "コンピュータは常に最悪の入力しか処理できないため"
          ],
          "explanation": "最悪時間計算量を知ることで、どんな極端なデータが入力されてもシステムが許容時間内に処理を完了できるという「上限の保証（上界）」を得ることができます。"
        },
        "en": {
          "question": "Why is analyzing worst-case time complexity particularly important in software engineering?",
          "options": [
            "It provides an upper-bound guarantee that execution time will never exceed this threshold for any valid input",
            "It guarantees that average-case performance will never matter in practice",
            "Testing only the worst case automatically removes all logic bugs",
            "Computers can only ever execute instructions under worst-case scenarios"
          ],
          "explanation": "Worst-case analysis establishes an upper bound, ensuring that the system will predictably complete within acceptable time limits even under adversarial or worst-case input data."
        },
        "correctIndex": 0,
        "sectionId": "4.4",
        "sectionTitleJa": "4.4 コーディングエージェントと検証責任（単体テスト）",
        "sectionTitleEn": "4.4 Coding Agents & Verification"
      }
    ]
  ],
  "5": [
    [
      {
        "id": "ch5_q1_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.1",
        "sectionTitleJa": "5.1 AI・機械学習・深層学習の包含関係",
        "sectionTitleEn": "5.1 AI, ML & Deep Learning Hierarchy"
      },
      {
        "id": "ch5_q1_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.1",
        "sectionTitleJa": "5.1 AI・機械学習・深層学習の包含関係",
        "sectionTitleEn": "5.1 AI, ML & Deep Learning Hierarchy"
      },
      {
        "id": "ch5_q1_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.1",
        "sectionTitleJa": "5.1 AI・機械学習・深層学習の包含関係",
        "sectionTitleEn": "5.1 AI, ML & Deep Learning Hierarchy"
      }
    ],
    [
      {
        "id": "ch5_q2_v1",
        "code": null,
        "ja": {
          "question": "入力データと正解ラベルのペアを与え、未知のデータに対して正しい出力を予測できるように学習する手法はどれですか？",
          "options": [
            "教師あり学習（Supervised Learning）",
            "教師なし学習（Unsupervised Learning）",
            "強化学習（Reinforcement Learning）",
            "進化的計算（Evolutionary Computing）"
          ],
          "explanation": "教師あり学習（Supervised Learning）は、「入力と正解ラベル（教師信号）」のペアをもとに、新しい入力に対して正解を推論・分類・回帰できるようにモデルを訓練します。"
        },
        "en": {
          "question": "Which machine learning paradigm trains models using pairs of input data and ground-truth output labels?",
          "options": [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
            "Evolutionary Computing"
          ],
          "explanation": "Supervised Learning provides the model with labeled pairs (input x and target y), training it to approximate a mapping function for classification or regression."
        },
        "correctIndex": 0,
        "sectionId": "5.2",
        "sectionTitleJa": "5.2 3大学習パラダイム（教師あり・教師なし・強化学習）",
        "sectionTitleEn": "5.2 3 Paradigms of Machine Learning"
      },
      {
        "id": "ch5_q2_v2",
        "code": null,
        "ja": {
          "question": "正解ラベルを与えずに、データ自体の統計的性質や類似度に基づいてグループ分け（クラスタリング）を行う学習手法はどれですか？",
          "options": [
            "教師なし学習（Unsupervised Learning）",
            "教師あり学習（Supervised Learning）",
            "強化学習（Reinforcement Learning）",
            "転移学習（Transfer Learning）"
          ],
          "explanation": "教師なし学習（Unsupervised Learning）はラベルのないデータから潜在的な構造、クラスタ、主成分などを自動的に抽出します（k-meansクラスタリングやPCAなど）。"
        },
        "en": {
          "question": "Which machine learning paradigm groups data points based on inherent statistical similarities without using any target labels?",
          "options": [
            "Unsupervised Learning",
            "Supervised Learning",
            "Reinforcement Learning",
            "Transfer Learning"
          ],
          "explanation": "Unsupervised Learning discovers underlying patterns, groupings, or low-dimensional manifolds from unlabeled inputs (e.g. k-means clustering, PCA)."
        },
        "correctIndex": 0,
        "sectionId": "5.2",
        "sectionTitleJa": "5.2 3大学習パラダイム（教師あり・教師なし・強化学習）",
        "sectionTitleEn": "5.2 3 Paradigms of Machine Learning"
      },
      {
        "id": "ch5_q2_v3",
        "code": null,
        "ja": {
          "question": "エージェントが環境との相互作用を通じて試行錯誤し、得られる「報酬」の総和を最大化するように行動方針を学習する枠組みは何ですか？",
          "options": [
            "強化学習（Reinforcement Learning）",
            "教師あり学習（Supervised Learning）",
            "教師なし学習（Unsupervised Learning）",
            "ルールベース推論"
          ],
          "explanation": "強化学習（Reinforcement Learning）は、正解の行動を直接教えられる代わりに、行動によって環境から返される「報酬（Reward）」を手がかりに最適な行動方針（方策）を獲得します。"
        },
        "en": {
          "question": "Which paradigm involves an agent learning a behavioral policy through trial-and-error to maximize cumulative rewards?",
          "options": [
            "Reinforcement Learning",
            "Supervised Learning",
            "Unsupervised Learning",
            "Rule-Based Expert Systems"
          ],
          "explanation": "Reinforcement Learning centers on an autonomous agent interacting with an environment, guided by scalar reward feedback rather than labeled correct actions."
        },
        "correctIndex": 0,
        "sectionId": "5.2",
        "sectionTitleJa": "5.2 3大学習パラダイム（教師あり・教師なし・強化学習）",
        "sectionTitleEn": "5.2 3 Paradigms of Machine Learning"
      }
    ],
    [
      {
        "id": "ch5_q3_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.3",
        "sectionTitleJa": "5.3 強化学習の特徴（試行錯誤・遅延報酬）",
        "sectionTitleEn": "5.3 Key Characteristics of RL"
      },
      {
        "id": "ch5_q3_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.3",
        "sectionTitleJa": "5.3 強化学習の特徴（試行錯誤・遅延報酬）",
        "sectionTitleEn": "5.3 Key Characteristics of RL"
      },
      {
        "id": "ch5_q3_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.3",
        "sectionTitleJa": "5.3 強化学習の特徴（試行錯誤・遅延報酬）",
        "sectionTitleEn": "5.3 Key Characteristics of RL"
      }
    ],
    [
      {
        "id": "ch5_q4_v1",
        "code": null,
        "ja": {
          "question": "Gitにおいて、変更したファイルを「コミット対象として登録（ステージング）」するための基本コマンドはどれですか？",
          "options": [
            "git add",
            "git commit",
            "git push",
            "git init"
          ],
          "explanation": "「git add ファイル名」を実行することで、作業ディレクトリの変更内容がステージングエリア（インデックス）に追加され、次のコミットの対象となります。"
        },
        "en": {
          "question": "In Git, which command stages modified files in preparation for a commit?",
          "options": [
            "git add",
            "git commit",
            "git push",
            "git init"
          ],
          "explanation": "'git add <file>' moves modified working files into the staging area (index) so they can be bundled into the next snapshot."
        },
        "correctIndex": 0,
        "sectionId": "5.4",
        "sectionTitleJa": "5.4 Gitによるバージョン管理（add, commit, リポジトリ）",
        "sectionTitleEn": "5.4 Git Version Control Fundamentals"
      },
      {
        "id": "ch5_q4_v2",
        "code": null,
        "ja": {
          "question": "ステージングエリアにある変更履歴を、メッセージとともにリポジトリへ永続記録するコマンドはどれですか？",
          "options": [
            "git commit",
            "git add",
            "git status",
            "git clone"
          ],
          "explanation": "「git commit -m \"メッセージ\"」によって、ステージングされた変更がリポジトリのコミット履歴として永続的に記録されます。"
        },
        "en": {
          "question": "Which Git command permanently records staged changes into the local repository history along with a descriptive message?",
          "options": [
            "git commit",
            "git add",
            "git status",
            "git clone"
          ],
          "explanation": "'git commit -m \"message\"' takes the staged snapshot and creates a new permanent commit node in the repository tree."
        },
        "correctIndex": 0,
        "sectionId": "5.4",
        "sectionTitleJa": "5.4 Gitによるバージョン管理（add, commit, リポジトリ）",
        "sectionTitleEn": "5.4 Git Version Control Fundamentals"
      },
      {
        "id": "ch5_q4_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "5.4",
        "sectionTitleJa": "5.4 Gitによるバージョン管理（add, commit, リポジトリ）",
        "sectionTitleEn": "5.4 Git Version Control Fundamentals"
      }
    ]
  ],
  "6": [
    [
      {
        "id": "ch6_q1_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.1",
        "sectionTitleJa": "6.1 多腕バンディット問題の定式化",
        "sectionTitleEn": "6.1 Multi-Armed Bandit Formulation"
      },
      {
        "id": "ch6_q1_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.1",
        "sectionTitleJa": "6.1 多腕バンディット問題の定式化",
        "sectionTitleEn": "6.1 Multi-Armed Bandit Formulation"
      },
      {
        "id": "ch6_q1_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.1",
        "sectionTitleJa": "6.1 多腕バンディット問題の定式化",
        "sectionTitleEn": "6.1 Multi-Armed Bandit Formulation"
      }
    ],
    [
      {
        "id": "ch6_q2_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.2",
        "sectionTitleJa": "6.2 探索と活用のトレードオフ",
        "sectionTitleEn": "6.2 Exploration vs Exploitation"
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
        "correctIndex": 0,
        "sectionId": "6.2",
        "sectionTitleJa": "6.2 探索と活用のトレードオフ",
        "sectionTitleEn": "6.2 Exploration vs Exploitation"
      },
      {
        "id": "ch6_q2_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.2",
        "sectionTitleJa": "6.2 探索と活用のトレードオフ",
        "sectionTitleEn": "6.2 Exploration vs Exploitation"
      }
    ],
    [
      {
        "id": "ch6_q3_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.3",
        "sectionTitleJa": "6.3 標本平均法と逐次更新式",
        "sectionTitleEn": "6.3 Sample-Average Method"
      },
      {
        "id": "ch6_q3_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.3",
        "sectionTitleJa": "6.3 標本平均法と逐次更新式",
        "sectionTitleEn": "6.3 Sample-Average Method"
      },
      {
        "id": "ch6_q3_v3",
        "code": "# 4本腕バンディット、ε = 0.2 の設定\n# 確率 0.8 で最高Q値の腕を選択\n# 確率 0.2 で全4本の腕からランダム選択",
        "ja": {
          "question": "上記の設定において、現在「最高Q値を持つ腕」が選ばれるトータルの確率はいくつですか？",
          "options": [
            "0.85 (85%)",
            "0.80 (80%)",
            "0.20 (20%)",
            "0.25 (25%)"
          ],
          "explanation": "活用時に選ばれる確率 0.80 に加え、探索時（確率 0.20）に4本の中からランダムに選ばれる確率 0.20 × (1/4) = 0.05 が加算されるため、合計確率は 0.80 + 0.05 = 0.85 (85%) になります。"
        },
        "en": {
          "question": "In a 4-armed bandit with ε = 0.2, what is the total probability that the currently greedy arm is selected?",
          "options": [
            "0.85 (85%)",
            "0.80 (80%)",
            "0.20 (20%)",
            "0.25 (25%)"
          ],
          "explanation": "The greedy action is chosen directly during exploitation (probability 1 - ε = 0.80), plus during exploration when randomly picking among 4 arms (0.20 * 1/4 = 0.05), totaling 0.85."
        },
        "correctIndex": 0,
        "sectionId": "6.3",
        "sectionTitleJa": "6.3 標本平均法と逐次更新式",
        "sectionTitleEn": "6.3 Sample-Average Method"
      }
    ],
    [
      {
        "id": "ch6_q4_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.4",
        "sectionTitleJa": "6.4 ε-greedy法（探索率εの調整）",
        "sectionTitleEn": "6.4 ε-greedy Action Selection"
      },
      {
        "id": "ch6_q4_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.4",
        "sectionTitleJa": "6.4 ε-greedy法（探索率εの調整）",
        "sectionTitleEn": "6.4 ε-greedy Action Selection"
      },
      {
        "id": "ch6_q4_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "6.4",
        "sectionTitleJa": "6.4 ε-greedy法（探索率εの調整）",
        "sectionTitleEn": "6.4 ε-greedy Action Selection"
      }
    ]
  ],
  "7": [
    [
      {
        "id": "ch7_q1_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.1",
        "sectionTitleJa": "7.1 エージェントと環境の相互作用ループ",
        "sectionTitleEn": "7.1 Agent-Environment Interaction Loop"
      },
      {
        "id": "ch7_q1_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.1",
        "sectionTitleJa": "7.1 エージェントと環境の相互作用ループ",
        "sectionTitleEn": "7.1 Agent-Environment Interaction Loop"
      },
      {
        "id": "ch7_q1_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.1",
        "sectionTitleJa": "7.1 エージェントと環境の相互作用ループ",
        "sectionTitleEn": "7.1 Agent-Environment Interaction Loop"
      }
    ],
    [
      {
        "id": "ch7_q2_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.2",
        "sectionTitleJa": "7.2 マルコフ決定プロセス（MDP）とマルコフ性",
        "sectionTitleEn": "7.2 Markov Decision Processes (MDP)"
      },
      {
        "id": "ch7_q2_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.2",
        "sectionTitleJa": "7.2 マルコフ決定プロセス（MDP）とマルコフ性",
        "sectionTitleEn": "7.2 Markov Decision Processes (MDP)"
      },
      {
        "id": "ch7_q2_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.2",
        "sectionTitleJa": "7.2 マルコフ決定プロセス（MDP）とマルコフ性",
        "sectionTitleEn": "7.2 Markov Decision Processes (MDP)"
      }
    ],
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
        "correctIndex": 0,
        "sectionId": "7.3",
        "sectionTitleJa": "7.3 収益 G_t と割引率 γ",
        "sectionTitleEn": "7.3 Return G_t & Discount Factor γ"
      },
      {
        "id": "ch7_q3_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.3",
        "sectionTitleJa": "7.3 収益 G_t と割引率 γ",
        "sectionTitleEn": "7.3 Return G_t & Discount Factor γ"
      },
      {
        "id": "ch7_q3_v3",
        "code": "R1 = 10\nR2 = 10\ngamma = 0.5\n# G = R1 + gamma * R2",
        "ja": {
          "question": "1ステップ後に報酬 10、2ステップ後に報酬 10 を受け取り終了したとき、γ = 0.5 での累積収益 G はいくらですか？",
          "options": [
            "15.0",
            "20.0",
            "10.5",
            "5.0"
          ],
          "explanation": "G = R_1 + γ * R_2 = 10 + 0.5 * 10 = 10 + 5 = 15.0 となります。"
        },
        "en": {
          "question": "If an agent receives reward 10 at step 1 and reward 10 at step 2, what is the discounted return G with γ = 0.5?",
          "options": [
            "15.0",
            "20.0",
            "10.5",
            "5.0"
          ],
          "explanation": "G = R_1 + γ * R_2 = 10 + 0.5 * 10 = 10 + 5.0 = 15.0."
        },
        "correctIndex": 0,
        "sectionId": "7.3",
        "sectionTitleJa": "7.3 収益 G_t と割引率 γ",
        "sectionTitleEn": "7.3 Return G_t & Discount Factor γ"
      }
    ],
    [
      {
        "id": "ch7_q4_v1",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.4",
        "sectionTitleJa": "7.4 状態価値関数 V(s) と行動価値関数 Q(s, a)",
        "sectionTitleEn": "7.4 Value Functions V(s) & Q(s,a)"
      },
      {
        "id": "ch7_q4_v2",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.4",
        "sectionTitleJa": "7.4 状態価値関数 V(s) と行動価値関数 Q(s, a)",
        "sectionTitleEn": "7.4 Value Functions V(s) & Q(s,a)"
      },
      {
        "id": "ch7_q4_v3",
        "code": null,
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
        "correctIndex": 0,
        "sectionId": "7.4",
        "sectionTitleJa": "7.4 状態価値関数 V(s) と行動価値関数 Q(s, a)",
        "sectionTitleEn": "7.4 Value Functions V(s) & Q(s,a)"
      }
    ]
  ],
  "8": [
    [
      {
        "id": "ch8_q1_v1",
        "code": "obs, info = env.reset()\nnext_obs, reward, terminated, truncated, info = env.step(action)",
        "ja": {
          "question": "Gymnasium (v0.26以降) における `env.step(action)` の返り値の個数と、各要素の順序として正しいものはどれですか？",
          "options": [
            "4個: (observation, reward, done, info)",
            "5個: (observation, reward, terminated, truncated, info)",
            "3個: (state, action, reward)",
            "5個: (reward, observation, terminated, truncated, info)"
          ],
          "explanation": "Gymnasium (v0.26+) では、従来1つだった終了フラグ `done` が、タスク自体の自然終了を表す `terminated`（崖落下やゴール到達など）と、時間制限・ステップ上限による打ち切りを表す `truncated`（500ステップ超過など）の2値に明確に分離され、5つのタプル `(observation, reward, terminated, truncated, info)` を返します。"
        },
        "en": {
          "question": "In Gymnasium (v0.26+), what is the correct return signature and order of values returned by `env.step(action)`?",
          "options": [
            "4 items: (observation, reward, done, info)",
            "5 items: (observation, reward, terminated, truncated, info)",
            "3 items: (state, action, reward)",
            "5 items: (reward, observation, terminated, truncated, info)"
          ],
          "explanation": "Gymnasium separated the legacy `done` boolean into `terminated` (environment reached terminal state like goal or cliff) and `truncated` (horizon/step limit reached), returning a 5-tuple: `(observation, reward, terminated, truncated, info)`."
        },
        "correctIndex": 1,
        "sectionId": "8.1",
        "sectionTitleJa": "8.1 Gymnasium Core API（reset, step 5要素）",
        "sectionTitleEn": "8.1 Gymnasium Core API (reset & step)"
      },
      {
        "id": "ch8_q1_v2",
        "code": "env = gym.make('CliffWalking-v0')\nres = env.reset()\nprint(type(res), len(res))",
        "ja": {
          "question": "Gymnasium環境において `env.reset()` を呼び出した際、返り値 `res` の構造として正しいものはどれですか？",
          "options": [
            "整数または配列としての初期観測値単体（obs のみ）",
            "初期観測値と診断用辞書情報のタプル `(obs, info)`",
            "観測値と即時報酬のタプル `(obs, reward)`",
            "初期状態と利用可能な行動リストのタプル `(obs, actions)`"
          ],
          "explanation": "Gymnasium (v0.26以降) の `reset()` は初期観測値 `obs` だけでなく、環境の補助情報を含む辞書 `info` も同時に返すため、タプル `(obs, info)` となります。"
        },
        "en": {
          "question": "What is the return structure of `env.reset()` in modern Gymnasium?",
          "options": [
            "Only the initial observation scalar or array `obs`",
            "A 2-tuple containing the initial observation and auxiliary info: `(obs, info)`",
            "A tuple of observation and initial reward: `(obs, reward)`",
            "A tuple of state and list of legal actions: `(obs, actions)`"
          ],
          "explanation": "In Gymnasium (v0.26+), `env.reset()` returns a 2-tuple: `(obs, info)`, where `obs` is the initial observation and `info` is a dictionary containing diagnostic metrics."
        },
        "correctIndex": 1,
        "sectionId": "8.1",
        "sectionTitleJa": "8.1 Gymnasium Core API（reset, step 5要素）",
        "sectionTitleEn": "8.1 Gymnasium Core API (reset & step)"
      },
      {
        "id": "ch8_q1_v3",
        "code": "obs, reward, terminated, truncated, info = env.step(action)\ndone = terminated or truncated",
        "ja": {
          "question": "強化学習のエピソードループにおいて、`terminated` と `truncated` を両方判定して `terminated or truncated` とする理由は何ですか？",
          "options": [
            "2つの値は常に反対の真偽値をとるため、OR演算で必ずTrueにするため",
            "エージェントが目標達成/失敗した時（terminated）だけでなく、規定ステップ上限に達した時（truncated）もエピソードを正しくリセットするため",
            "どちらか一方のみを判定すると、Pythonの型エラーが発生するため",
            "Gymnasiumでは terminated が True の時、truncated は常に None になるため"
          ],
          "explanation": "環境が終了する原因には「目標到達や崖転落（自然終了: terminated）」と「1エピソードの最大許容ステップ数到達（タイムアウト: truncated）」の2種類があります。どちらの場合も次のエピソードを開始するため `reset()` を呼ぶ必要があり、`terminated or truncated` でループを抜けます。"
        },
        "en": {
          "question": "Why does standard RL training loop code check `done = terminated or truncated`?",
          "options": [
            "Because the two flags always have opposite boolean values",
            "To reset the episode whether the agent finished naturally (goal/death) or exceeded maximum step limit (timeout)",
            "Omitting one of them raises a runtime TypeError in Python",
            "Because terminated is True only when truncated is None"
          ],
          "explanation": "Episodes can conclude either through natural task completion/failure (`terminated`) or through an arbitrary horizon timeout (`truncated`). In both scenarios, the episode must end and trigger `env.reset()`."
        },
        "correctIndex": 1,
        "sectionId": "8.1",
        "sectionTitleJa": "8.1 Gymnasium Core API（reset, step 5要素）",
        "sectionTitleEn": "8.1 Gymnasium Core API (reset & step)"
      }
    ],
    [
      {
        "id": "ch8_q2_v1",
        "code": "# CliffWalking-v0: 4 rows x 12 columns (48 states)\n# Start at index 36 (row 3, col 0)\n# Goal at index 47 (row 3, col 11)\n# Cliff spans indices 37 through 46",
        "ja": {
          "question": "CliffWalking-v0 環境において、エージェントが「崖（Cliff）」に足を踏み入れた場合の即時報酬とエージェントの状態変化はどうなりますか？",
          "options": [
            "報酬 0 を受け取り、その場でエピソードが完全終了する",
            "報酬 -100 を受け取り、スタート位置（マス36）に即座に戻される",
            "報酬 -10 を受け取り、1マス前の安全なマスに戻される",
            "報酬 +100 を受け取り、次のランダムなマスへテレポートする"
          ],
          "explanation": "CliffWalkingでは、崖マス（インデックス37〜46）に侵入すると即座に大きなペナルティである報酬 `-100` が与えられ、エージェントはスタート地点（左下マス36）へと強制送還されます（通常の一歩移動の報酬は `-1`）。"
        },
        "en": {
          "question": "In the `CliffWalking-v0` environment, what happens to the agent and reward when stepping into a cliff tile?",
          "options": [
            "Receives reward 0 and the episode terminates permanently",
            "Receives reward -100 and is immediately reset back to the start tile (index 36)",
            "Receives reward -10 and steps back one tile",
            "Receives reward +100 and teleports to a random state"
          ],
          "explanation": "Stepping onto any cliff cell (indices 37 to 46) yields an immediate harsh penalty of -100 reward and sends the agent straight back to the starting cell (index 36)."
        },
        "correctIndex": 1,
        "sectionId": "8.2",
        "sectionTitleJa": "8.2 Cliff Walking環境の構造と崖転落ペナルティ",
        "sectionTitleEn": "8.2 Cliff Walking Grid Dynamics"
      },
      {
        "id": "ch8_q2_v2",
        "code": "# Standard movement: Reward = -1 per step\n# Cliff drop: Reward = -100 and reset to start\n# Optimal direct path along the cliff edge: 13 steps without falling\n# Safe detour path around the top boundary: 17 steps without falling",
        "ja": {
          "question": "崖の真上スレスレを通り一度も落ちずに13手でゴールした場合の累積報酬と、安全に上部を大回りして17手でゴールした場合の累積報酬の組み合わせはどれですか？",
          "options": [
            "スレスレルート: -13、大回りルート: -17",
            "スレスレルート: +87、大回りルート: +83",
            "スレスレルート: -100、大回りルート: -17",
            "スレスレルート: 0、大回りルート: -17"
          ],
          "explanation": "通常移動は1歩ごとに `-1` の報酬（コスト）を受けます。一度も崖に落ちなければ、13歩でゴール到達した場合は `13 * (-1) = -13`、大回りして17歩かかった場合は `17 * (-1) = -17` となります。"
        },
        "en": {
          "question": "If an agent reaches the goal without falling in 13 steps along the cliff edge vs 17 steps along a safe top detour, what are the respective cumulative returns?",
          "options": [
            "Edge route: -13, Detour route: -17",
            "Edge route: +87, Detour route: +83",
            "Edge route: -100, Detour route: -17",
            "Edge route: 0, Detour route: -17"
          ],
          "explanation": "Each regular step incurs a -1 reward. With zero falls into the cliff, a 13-step path accumulates 13 * (-1) = -13, and a 17-step path accumulates 17 * (-1) = -17."
        },
        "correctIndex": 0,
        "sectionId": "8.2",
        "sectionTitleJa": "8.2 Cliff Walking環境の構造と崖転落ペナルティ",
        "sectionTitleEn": "8.2 Cliff Walking Grid Dynamics"
      },
      {
        "id": "ch8_q2_v3",
        "code": "# Agent attempts: Right, Right (falls into cliff!), Up, Right, ...\n# Step 1: Right -> safe (Reward -1)\n# Step 2: Right -> Cliff! (Reward -100, reset to start)\n# Step 3: Up -> safe (Reward -1)",
        "ja": {
          "question": "CliffWalkingにおいて、エージェントが1手目に安全に右へ移動、2手目に崖に転落してスタートに戻され、3手目に上へ移動した場合、3手目までの累積報酬はいくらですか？",
          "options": [
            "-102 （-1 + -100 + -1）",
            "-100",
            "-98",
            "-3"
          ],
          "explanation": "1手目は通常移動で `-1`、2手目は崖転落ペナルティで `-100`、3手目は通常移動で `-1` なので、合計は `(-1) + (-100) + (-1) = -102` です。"
        },
        "en": {
          "question": "In CliffWalking, an agent steps Right (safe), steps Right (falls into cliff, reset to start), then steps Up (safe). What is the total accumulated reward after these 3 steps?",
          "options": [
            "-102 (-1 + -100 + -1)",
            "-100",
            "-98",
            "-3"
          ],
          "explanation": "Step 1 yields -1 (normal move), Step 2 yields -100 (cliff penalty), and Step 3 yields -1 (normal move), summing up to -1 + -100 + -1 = -102."
        },
        "correctIndex": 0,
        "sectionId": "8.2",
        "sectionTitleJa": "8.2 Cliff Walking環境の構造と崖転落ペナルティ",
        "sectionTitleEn": "8.2 Cliff Walking Grid Dynamics"
      }
    ],
    [
      {
        "id": "ch8_q3_v1",
        "code": "# Q-learning vs SARSA in Cliff Walking:\n# Q-learning learns the optimal greedy policy (edge route: -13)\n# SARSA takes exploration risk into account and prefers the safe detour",
        "ja": {
          "question": "Cliff Walking環境において、学習中に ε-greedy 探索を行う場合、Q-learning と SARSA の方策選択の違いとして正しいものはどれですか？",
          "options": [
            "SARSAは探索による崖落下の危険を考慮して安全な大回りルートを選び、Q-learningは理論上最短の崖際ルートを学習する",
            "Q-learningは大回りルートを選び、SARSAは必ず崖から落ち続ける",
            "両者とも全く同一の歩行ルートに収束し、方策に一切の違いは現れない",
            "SARSAは崖のマスをすべて壁と誤認して進行不能になる"
          ],
          "explanation": "Q-learningはOff-policy（方策オフ型）であり「次の最善手 max Q」で更新するため探索行動のリスクを評価値に含めず最短の崖際ルートを学習します。対してSARSAはOn-policy（方策オン型）であり探索で選ばれる実際の行動（εによる転落事故）を学習に織り込むため、崖から離れた安全な上部ルートを学習します。"
        },
        "en": {
          "question": "When learning with ε-greedy exploration in Cliff Walking, what is the behavioral difference between Q-learning and SARSA?",
          "options": [
            "SARSA learns the safe upper detour accounting for exploration fall risk, while Q-learning learns the optimal cliff-edge route",
            "Q-learning chooses the wide detour while SARSA continually falls into the cliff",
            "Both algorithms converge to identical policies with no trajectory difference",
            "SARSA mistakes cliff tiles for solid walls and becomes permanently stuck"
          ],
          "explanation": "Q-learning is off-policy and optimizes assuming greedy future actions, choosing the edge path. SARSA is on-policy and takes the agent's ε-exploration mistakes into account, thus favoring the safe detour away from the deadly cliff."
        },
        "correctIndex": 0,
        "sectionId": "8.3",
        "sectionTitleJa": "8.3 最短崖際ルート vs 安全大回りルート（Q vs SARSA）",
        "sectionTitleEn": "8.3 Optimal vs Safe Detour (Q vs SARSA)"
      },
      {
        "id": "ch8_q3_v2",
        "code": "actions = {0: 'UP', 1: 'RIGHT', 2: 'DOWN', 3: 'LEFT'}\n# Boundary check: stepping UP at row 0 (top row)",
        "ja": {
          "question": "Cliff Walkingのグリッドにおいて、最上段（row 0）にいるエージェントが「UP」行動を選択した場合の環境の挙動はどうなりますか？",
          "options": [
            "エラーが発生してプログラムが強制終了する",
            "グリッド外には出られず、現在のマスに留まり報酬 -1 を受ける",
            "最下段（row 3）へワープする",
            "報酬 0 を受けて行動が無効化される"
          ],
          "explanation": "Gymnasiumのグリッドワールド環境では、外壁に向かって移動しようとした場合、壁に阻まれて現在位置に留まります。ただし1ステップを消費したことにはなるため、通常のステップ報酬 `-1` が科されます。"
        },
        "en": {
          "question": "In Cliff Walking, what happens if an agent located at the topmost row (row 0) selects the 'UP' action?",
          "options": [
            "An IndexError occurs crashing the simulation",
            "The agent bumps into the outer wall, remains in place, and incurs the normal -1 reward",
            "The agent warps around to the bottom row (row 3)",
            "The action is cancelled and zero reward is incurred"
          ],
          "explanation": "Attempting to move outside the grid boundary leaves the agent in its current position while still consuming a step and incurring the standard -1 reward penalty."
        },
        "correctIndex": 1,
        "sectionId": "8.3",
        "sectionTitleJa": "8.3 最短崖際ルート vs 安全大回りルート（Q vs SARSA）",
        "sectionTitleEn": "8.3 Optimal vs Safe Detour (Q vs SARSA)"
      },
      {
        "id": "ch8_q3_v3",
        "code": "V = np.zeros((4, 12))\n# Near the goal: tile (2, 11) is right above the goal (3, 11)\n# Moving DOWN from (2, 11) enters the Goal directly.",
        "ja": {
          "question": "ゴールの真上にあるマス (2, 11) から下（DOWN）へ進んでゴールに到達した瞬間、返される `terminated` と `reward` はどれですか？",
          "options": [
            "terminated = True, reward = -1",
            "terminated = False, reward = +100",
            "terminated = True, reward = 0",
            "terminated = False, reward = -100"
          ],
          "explanation": "CliffWalkingにおいて、ゴールマス（3, 11）への移動は最後の1歩として通常通り報酬 `-1` を受け取り、目標到達により `terminated = True` となります（特別な +100 などのボーナスは与えられず、早く着くほど合計マイナスが少ない設計です）。"
        },
        "en": {
          "question": "When stepping DOWN from tile (2, 11) directly into the Goal tile (3, 11), what are the returned `terminated` and `reward` values?",
          "options": [
            "terminated = True, reward = -1",
            "terminated = False, reward = +100",
            "terminated = True, reward = 0",
            "terminated = False, reward = -100"
          ],
          "explanation": "Stepping into the goal tile incurs the final -1 step cost and sets `terminated = True`. The environment does not give an artificial positive reward; maximizing return naturally drives the agent to take the minimum number of -1 steps."
        },
        "correctIndex": 0,
        "sectionId": "8.3",
        "sectionTitleJa": "8.3 最短崖際ルート vs 安全大回りルート（Q vs SARSA）",
        "sectionTitleEn": "8.3 Optimal vs Safe Detour (Q vs SARSA)"
      }
    ],
    [
      {
        "id": "ch8_q4_v1",
        "code": "env = gym.make('CliffWalking-v0')\nprint(env.action_space)\nprint(env.observation_space)",
        "ja": {
          "question": "`CliffWalking-v0` の行動空間（action_space）と状態空間（observation_space）の定義として正しいものはどれですか？",
          "options": [
            "Discrete(4), Discrete(48)",
            "Box(4,), Box(48,)",
            "Discrete(2), Discrete(12)",
            "Discrete(4), Box(4, 12)"
          ],
          "explanation": "行動は上・右・下・左の4通りなので `Discrete(4)`、状態は4行×12列＝48マスのグリッド位置なので `Discrete(48)` です。"
        },
        "en": {
          "question": "What are the action space and observation space types for `CliffWalking-v0`?",
          "options": [
            "Discrete(4), Discrete(48)",
            "Box(4,), Box(48,)",
            "Discrete(2), Discrete(12)",
            "Discrete(4), Box(4, 12)"
          ],
          "explanation": "Actions are {UP, RIGHT, DOWN, LEFT} represented as `Discrete(4)`. Observations are discrete integer indices from 0 to 47 (4x12 grid), represented as `Discrete(48)`."
        },
        "correctIndex": 0,
        "sectionId": "8.4",
        "sectionTitleJa": "8.4 行動空間・観測空間と環境レンダリング",
        "sectionTitleEn": "8.4 Observation & Action Spaces"
      },
      {
        "id": "ch8_q4_v2",
        "code": "env = gym.make('CliffWalking-v0')\nrandom_action = env.action_space.sample()\nprint(random_action)",
        "ja": {
          "question": "`env.action_space.sample()` を実行した時に得られる値としてあり得ないものはどれですか？",
          "options": [
            "0",
            "2",
            "3",
            "4"
          ],
          "explanation": "`Discrete(4)` の空間は 0 から 3 までの 4 個の整数 `{0, 1, 2, 3}` をサンプリングします。4 は範囲外（インデックス外）となるため返されません。"
        },
        "en": {
          "question": "Which of the following values can NEVER be produced by `env.action_space.sample()` in CliffWalking?",
          "options": [
            "0",
            "2",
            "3",
            "4"
          ],
          "explanation": "`Discrete(4)` draws uniformly from the discrete set {0, 1, 2, 3}. 4 is out of bounds."
        },
        "correctIndex": 3,
        "sectionId": "8.4",
        "sectionTitleJa": "8.4 行動空間・観測空間と環境レンダリング",
        "sectionTitleEn": "8.4 Observation & Action Spaces"
      },
      {
        "id": "ch8_q4_v3",
        "code": "env = gym.make('CliffWalking-v0', render_mode='ansi')\nenv.reset()\nprint(env.render())",
        "ja": {
          "question": "Gymnasiumで環境の画面描画やテキスト可視化を行うために、`gym.make` 時に指定する引数として正しいものはどれですか？",
          "options": [
            "display_type='text'",
            "render_mode='ansi' または 'human'",
            "visualize=True",
            "screen='window'"
          ],
          "explanation": "Gymnasiumでは `gym.make('...', render_mode='...')` のように `render_mode` 引数（'human' や 'ansi', 'rgb_array' など）を指定して初期化します。"
        },
        "en": {
          "question": "In Gymnasium, which parameter keyword is passed to `gym.make` to specify the rendering display output?",
          "options": [
            "display_type='text'",
            "render_mode='ansi' or 'human'",
            "visualize=True",
            "screen='window'"
          ],
          "explanation": "Gymnasium requires setting `render_mode` (such as `'human'`, `'ansi'`, or `'rgb_array'`) during `gym.make` initialization to enable visual or terminal rendering."
        },
        "correctIndex": 1,
        "sectionId": "8.4",
        "sectionTitleJa": "8.4 行動空間・観測空間と環境レンダリング",
        "sectionTitleEn": "8.4 Observation & Action Spaces"
      }
    ]
  ],
  "9": [
    [
      {
        "id": "ch9_q1_v1",
        "code": "# Monte Carlo update: Q(s, a) <- average of returns G\n# No model P(s' | s, a) needed, but requires complete episodes",
        "ja": {
          "question": "強化学習における「モンテカルロ法（Monte Carlo method）」の最大の特徴として最も適切なものはどれですか？",
          "options": [
            "1ステップごとに途中で価値を推定して更新する（ブートストラップする）",
            "環境の遷移確率 P(s'|s,a) を必要とせず、エピソードが最後まで完了した実際の収益 G_t を用いて価値を学習する",
            "状態空間が連続値で無限個ある問題でしか使用できない",
            "エピソードの途中で報酬が得られないと一切学習が進まない"
          ],
          "explanation": "モンテカルロ法は環境モデル（遷移確率など）を必要としないモデルフリー手法であり、エピソードを終端まで実際にサンプリングして得られたトータルの収益 $G_t$ の平均値として状態・行動価値を推定します（ブートストラップは行いません）。"
        },
        "en": {
          "question": "What is the defining characteristic of the Monte Carlo method in reinforcement learning?",
          "options": [
            "It updates value estimates at every intermediate step using bootstrapping",
            "It does not require transition dynamics P(s'|s,a) and updates values from actual full episode returns G_t",
            "It can only be applied to continuous infinite state spaces",
            "It requires immediate non-zero rewards at every single step to function"
          ],
          "explanation": "Monte Carlo is a model-free approach that learns directly from complete episodes of experience by averaging observed returns $G_t$ after termination, without bootstrapping intermediate estimates."
        },
        "correctIndex": 1,
        "sectionId": "9.1",
        "sectionTitleJa": "9.1 モンテカルロ法の基本原理（エピソード収益平均化）",
        "sectionTitleEn": "9.1 Monte Carlo Principle"
      },
      {
        "id": "ch9_q1_v2",
        "code": "# Monte Carlo vs Dynamic Programming:\n# DP requires P(s'|s,a) and R(s,a)\n# MC learns from simulated experience rollouts",
        "ja": {
          "question": "ブラックジャックのように「山札の残り枚数や確率分布が不明・複雑」なゲームで、動的計画法（DP）ではなくモンテカルロ法が適している理由は何ですか？",
          "options": [
            "モンテカルロ法は計算量が常に O(1) で瞬時に終了するため",
            "動的計画法には環境の完全な遷移確率 P(s'|s,a) が必須だが、モンテカルロ法はプレイ経験のシミュレーションだけで学習できるため",
            "ブラックジャックは1エピソードが永久に終わらないゲームだから",
            "動的計画法は勝敗の判定ができないため"
          ],
          "explanation": "動的計画法（DP）は環境のすべての状態遷移確率 $P(s'|s,a)$ が数式で分かっている必要があります。一方、モンテカルロ法はゲームのシミュレータさえあれば実際にプレイした結果の標本から学習できます。"
        },
        "en": {
          "question": "Why is Monte Carlo well-suited for games like Blackjack compared to Dynamic Programming (DP)?",
          "options": [
            "Monte Carlo has constant O(1) complexity and terminates instantaneously",
            "DP requires complete explicit knowledge of transition probabilities P(s'|s,a), whereas MC only requires simulated game rollouts",
            "Blackjack episodes never terminate",
            "DP is fundamentally incapable of scoring game outcomes"
          ],
          "explanation": "DP requires an explicit mathematical transition model $P(s'|s, a)$. Monte Carlo is model-free, requiring only simulated sample interactions without explicit transition matrices."
        },
        "correctIndex": 1,
        "sectionId": "9.1",
        "sectionTitleJa": "9.1 モンテカルロ法の基本原理（エピソード収益平均化）",
        "sectionTitleEn": "9.1 Monte Carlo Principle"
      },
      {
        "id": "ch9_q1_v3",
        "code": "# Episodic vs Continuing tasks:\n# MC requires episodic tasks with guaranteed termination.",
        "ja": {
          "question": "モンテカルロ法を適用する環境の前提条件として必須な性質はどれですか？",
          "options": [
            "必ず終端状態（terminal state）が存在し、有限ステップでエピソードが終了すること（エピソード的タスク）",
            "行動空間が連続空間であること",
            "割引率 γ が必ず 0 でなければならないこと",
            "毎ステップ正の報酬が与えられ続けること"
          ],
          "explanation": "モンテカルロ法はエピソードが終了した後に得られる収益 $G_t$ を集計するため、エピソードが有限ステップで確実に終了する「エピソード的タスク（Episodic Task）」である必要があります。"
        },
        "en": {
          "question": "Which of the following is a mandatory prerequisite for applying standard Monte Carlo methods?",
          "options": [
            "The task must be episodic and guaranteed to terminate in finite steps",
            "The action space must be continuous",
            "The discount factor γ must be strictly 0",
            "Positive rewards must be awarded at every intermediate step"
          ],
          "explanation": "Because Monte Carlo updates value functions using empirical episode returns $G_t$, the environment must eventually terminate in finite steps (episodic task)."
        },
        "correctIndex": 0,
        "sectionId": "9.1",
        "sectionTitleJa": "9.1 モンテカルロ法の基本原理（エピソード収益平均化）",
        "sectionTitleEn": "9.1 Monte Carlo Principle"
      }
    ],
    [
      {
        "id": "ch9_q2_v1",
        "code": "env = gym.make('Blackjack-v1')\nobs, info = env.reset()\nprint(obs)\n# Output example: (18, 10, False)",
        "ja": {
          "question": "Gymnasiumの `Blackjack-v1` 環境における観測値（observationタプル）の3つの要素として正しいものはどれですか？",
          "options": [
            "(プレイヤーの手札合計, ディーラーの見えているカード, 11として使えるAの有無)",
            "(ディーラーの手札合計, プレイヤーの手札枚数, 現在の所持金)",
            "(プレイヤーの持ち点, 山札の残り枚数, 経過ターン数)",
            "(プレイヤーの手札合計, 賭け金, 勝率の予測値)"
          ],
          "explanation": "Blackjack-v1 の状態空間は `(player_score, dealer_face_up_card, usable_ace)` の3つ組で表されます。例えば `(18, 10, False)` は「プレイヤー合計18、ディーラーの見せ札10、バーストせず11と数えられるAは無し」を意味します。"
        },
        "en": {
          "question": "What are the 3 elements of the observation tuple in `Blackjack-v1`?",
          "options": [
            "(Player current sum, Dealer's face-up card value, Usable Ace boolean)",
            "(Dealer total sum, Player card count, Current chip bankroll)",
            "(Player score, Remaining cards in deck, Elapsed turns)",
            "(Player hand total, Current bet amount, Predicted win probability)"
          ],
          "explanation": "Observations in `Blackjack-v1` are tuples `(player_sum, dealer_showing_card, usable_ace)`, conveying player points (4-21), dealer face card (1-10), and whether player holds an Ace counted as 11 without busting."
        },
        "correctIndex": 0,
        "sectionId": "9.2",
        "sectionTitleJa": "9.2 Blackjackの状態表現（手札合計, 見せ札, 使えるA）",
        "sectionTitleEn": "9.2 Blackjack State Tuple"
      },
      {
        "id": "ch9_q2_v2",
        "code": "# State: (14, 8, True)\n# Action 0: Stick (Stand)\n# Action 1: Hit (Draw card)",
        "ja": {
          "question": "状態が `(14, 8, True)` であるとき、「usable_ace（使えるA）が True」とはどういう意味ですか？",
          "options": [
            "プレイヤーの手札にAが4枚すべて揃っている状態",
            "手札のAを11と数えても21を超えておらず、必要なら後で1として数え直してバーストを回避できる状態",
            "ディーラーの手札にAが存在すること",
            "次に引くカードが必ずAになるイカサマ状態"
          ],
          "explanation": "「Usable Ace（使えるA）」とは、Aを11点と計算しても合計21を超えていない状態のことです。もし次のカードを引いて21を超えそうになった場合、このAを1点として計算し直すことでバーストを回避できます。"
        },
        "en": {
          "question": "In state `(14, 8, True)`, what does `usable_ace = True` specifically signify?",
          "options": [
            "The player currently holds all four Aces in the deck",
            "The player holds an Ace counted as 11 without exceeding 21, which can later convert to 1 if needed to prevent a bust",
            "The dealer's face-up card is an Ace",
            "The next card drawn from the deck is guaranteed to be an Ace"
          ],
          "explanation": "A usable ace is an ace that counts as 11 points without causing the player to bust (sum > 21). If drawing an additional card threatens to bust, it can be demoted to value 1."
        },
        "correctIndex": 1,
        "sectionId": "9.2",
        "sectionTitleJa": "9.2 Blackjackの状態表現（手札合計, 見せ札, 使えるA）",
        "sectionTitleEn": "9.2 Blackjack State Tuple"
      },
      {
        "id": "ch9_q2_v3",
        "code": "env = gym.make('Blackjack-v1')\n# Available actions:\n# 0 = Stand / Stick (stop drawing)\n# 1 = Hit (draw another card)",
        "ja": {
          "question": "`Blackjack-v1` における行動空間 `Discrete(2)` の行動 0 と 1 の意味として正しいものはどれですか？",
          "options": [
            "0: スタンド（引くのをやめる）, 1: ヒット（もう1枚引く）",
            "0: フォールド（降伏）, 1: レイズ（賭け金を倍にする）",
            "0: ヒット（もう1枚引く）, 1: スタンド（引くのをやめる）",
            "0: パス, 1: ディーラー交代"
          ],
          "explanation": "Blackjack-v1の行動は2種類のみで、`0` はスタンド（Stick: カードを引かずに勝負する）、`1` はヒット（Hit: もう1枚カードを引く）です。"
        },
        "en": {
          "question": "In `Blackjack-v1`, what do actions `0` and `1` represent in `Discrete(2)`?",
          "options": [
            "0: Stick/Stand (stop drawing), 1: Hit (draw another card)",
            "0: Surrender/Fold, 1: Double down",
            "0: Hit (draw another card), 1: Stick/Stand (stop drawing)",
            "0: Pass, 1: Switch dealers"
          ],
          "explanation": "In Gymnasium's Blackjack, action 0 is Stick (stand / stop drawing) and action 1 is Hit (request another card)."
        },
        "correctIndex": 0,
        "sectionId": "9.2",
        "sectionTitleJa": "9.2 Blackjackの状態表現（手札合計, 見せ札, 使えるA）",
        "sectionTitleEn": "9.2 Blackjack State Tuple"
      }
    ],
    [
      {
        "id": "ch9_q3_v1",
        "code": "# Episode rollout:\n# (s1, a1) -> r1=0\n# (s2, a2) -> r2=0\n# (s3, a3) -> r3=+1 (Win!)\n# gamma = 1.0 (no discount)",
        "ja": {
          "question": "割引率 γ = 1.0 のブラックジャックにおいて、3手目に勝利して報酬 +1 を得て終了した場合、各ステップの収益 G1, G2, G3 の値はどうなりますか？",
          "options": [
            "G1 = 1, G2 = 1, G3 = 1",
            "G1 = 0, G2 = 0, G3 = 1",
            "G1 = 0.33, G2 = 0.5, G3 = 1.0",
            "G1 = 3, G2 = 2, G3 = 1"
          ],
          "explanation": "割引率 $\\gamma = 1$ の場合、時刻 $t$ の収益 $G_t$ はその時刻以降に得られた全報酬の単純合計 $G_t = \\sum_{k=t}^T R_k$ です。途中報酬はすべて0で最終報酬が +1 なので、$G_1 = 0 + 0 + 1 = 1$、$G_2 = 0 + 1 = 1$、$G_3 = 1$ となります。"
        },
        "en": {
          "question": "In an undiscounted (γ = 1.0) Blackjack episode where r1=0, r2=0, and r3=+1 (player wins), what are the empirical returns G1, G2, G3?",
          "options": [
            "G1 = 1, G2 = 1, G3 = 1",
            "G1 = 0, G2 = 0, G3 = 1",
            "G1 = 0.33, G2 = 0.5, G3 = 1.0",
            "G1 = 3, G2 = 2, G3 = 1"
          ],
          "explanation": "With $\\gamma = 1$, return $G_t = \\sum_{k=t}^T R_k$. Since intermediate rewards are 0 and the final outcome reward is +1, every state-action pair in the winning trajectory receives return $G_t = 1$."
        },
        "correctIndex": 0,
        "sectionId": "9.3",
        "sectionTitleJa": "9.3 収益 G_t 計算トレースとQ値標本平均更新",
        "sectionTitleEn": "9.3 Return Calculation & Sample-Average"
      },
      {
        "id": "ch9_q3_v2",
        "code": "# Sample-average update:\nreturns = [1, -1, 1, 1]\n# What is the estimated Q(s, a)?",
        "ja": {
          "question": "ある状態・行動対 (s, a) について、過去4回のエピソードで得られた収益が `[+1, -1, +1, +1]` であった場合、標本平均法による Q(s, a) の推定値はいくらですか？",
          "options": [
            "0.5",
            "0.25",
            "1.0",
            "2.0"
          ],
          "explanation": "標本平均法では観測された収益の算術平均をとります。`(1 + (-1) + 1 + 1) / 4 = 2 / 4 = 0.5` です。"
        },
        "en": {
          "question": "If state-action pair (s, a) accumulated returns `[+1, -1, +1, +1]` across four completed episodes, what is the sample-average estimate of Q(s, a)?",
          "options": [
            "0.5",
            "0.25",
            "1.0",
            "2.0"
          ],
          "explanation": "The sample average is the arithmetic mean of returns: $(1 + (-1) + 1 + 1) / 4 = 2 / 4 = 0.5$."
        },
        "correctIndex": 0,
        "sectionId": "9.3",
        "sectionTitleJa": "9.3 収益 G_t 計算トレースとQ値標本平均更新",
        "sectionTitleEn": "9.3 Return Calculation & Sample-Average"
      },
      {
        "id": "ch9_q3_v3",
        "code": "# Incremental average update formula:\n# Q_new = Q_old + (1 / N) * (G - Q_old)\n# Current Q = 0.2, N = 5, new return G = 0.8",
        "ja": {
          "question": "現在の Q(s, a) が 0.2 で、訪問回数が 5 回目（N=5）のときに新しい収益 G = 0.8 が得られた場合、逐次平均更新後の新しい Q 値はいくらですか？",
          "options": [
            "0.32",
            "0.50",
            "0.25",
            "0.80"
          ],
          "explanation": "$Q_{new} = Q_{old} + \\frac{1}{N} (G - Q_{old}) = 0.2 + \\frac{1}{5}(0.8 - 0.2) = 0.2 + \\frac{0.6}{5} = 0.2 + 0.12 = 0.32$ と計算されます。"
        },
        "en": {
          "question": "Using the incremental average formula `Q_new = Q_old + (1/N) * (G - Q_old)`, if `Q_old = 0.2`, `N = 5`, and `G = 0.8`, what is `Q_new`?",
          "options": [
            "0.32",
            "0.50",
            "0.25",
            "0.80"
          ],
          "explanation": "$Q_{new} = 0.2 + \\frac{1}{5}(0.8 - 0.2) = 0.2 + 0.12 = 0.32$."
        },
        "correctIndex": 0,
        "sectionId": "9.3",
        "sectionTitleJa": "9.3 収益 G_t 計算トレースとQ値標本平均更新",
        "sectionTitleEn": "9.3 Return Calculation & Sample-Average"
      }
    ],
    [
      {
        "id": "ch9_q4_v1",
        "code": "# First-visit MC vs Every-visit MC",
        "ja": {
          "question": "モンテカルロ法における「初回訪問MC法（First-visit MC）」と「全訪問MC法（Every-visit MC）」の違いとして正しいものはどれですか？",
          "options": [
            "同一エピソード内で同じ状態 s に複数回訪れた場合、初回訪問MCは最初の1回目のみ収益を集計し、全訪問MCは訪れるたび毎回集計する",
            "初回訪問MCは最初のエピソードだけ学習し、全訪問MCは全エピソードを学習する",
            "初回訪問MCはプレイヤーの最初の手札のみ記録し、全訪問MCは相手の手札も記録する",
            "初回訪問MCは強化学習ではなく教師あり学習である"
          ],
          "explanation": "同一エピソード内で同じ状態（または状態・行動対）に何度もループして戻ってくるような問題において、最初の訪問時の収益のみをデータとして採用するのが初回訪問MC（First-visit）、すべての訪問時の収益を個別データとして平均に加えるのが全訪問MC（Every-visit）です。"
        },
        "en": {
          "question": "What is the key distinction between First-visit MC and Every-visit MC?",
          "options": [
            "If state s is visited multiple times in an episode, First-visit MC only tallies returns from the very first visit, whereas Every-visit MC tallies returns from every occurrence",
            "First-visit MC only trains on episode 1, while Every-visit MC trains on all episodes",
            "First-visit MC only observes player cards, while Every-visit MC inspects dealer cards",
            "First-visit MC is supervised learning rather than reinforcement learning"
          ],
          "explanation": "First-visit MC averages returns following the initial encounter with state s within each episode. Every-visit MC averages returns following every visit to state s."
        },
        "correctIndex": 0,
        "sectionId": "9.4",
        "sectionTitleJa": "9.4 初回訪問MC vs 全訪問MC、最適方策抽出",
        "sectionTitleEn": "9.4 First-visit vs Every-visit MC"
      },
      {
        "id": "ch9_q4_v2",
        "code": "# Optimal policy extraction from Q-table:\n# For state s: Q[s, 0] (Stick) = 0.15, Q[s, 1] (Hit) = -0.42",
        "ja": {
          "question": "プレイヤーの手札合計が20のとき、学習済みの行動価値が `Q[s, 0] (Stick) = 0.15`、`Q[s, 1] (Hit) = -0.42` でした。グリーディ方策が選択する行動は何ですか？",
          "options": [
            "行動 0（Stick / スタンド）",
            "行動 1（Hit / もう1枚引く）",
            "ランダムにどちらか一方",
            "ゲームをリタイアする"
          ],
          "explanation": "グリーディ方策（最適方策）は $\\arg\\max_a Q(s, a)$ を選びます。$Q(s, 0) = 0.15 > -0.42 = Q(s, 1)$ なので、期待収益が高い行動 0（Stick）を選択します（合計20でヒットするとバースト確率が高いため妥当です）。"
        },
        "en": {
          "question": "For player hand sum 20, the learned Q-values are `Q[s, 0] (Stick) = 0.15` and `Q[s, 1] (Hit) = -0.42`. Which action does the greedy policy select?",
          "options": [
            "Action 0 (Stick / Stand)",
            "Action 1 (Hit / draw another card)",
            "A random 50/50 choice",
            "Surrender and forfeit the hand"
          ],
          "explanation": "The greedy action is $\\arg\\max_a Q(s, a)$. Since $0.15 > -0.42$, action 0 (Stick) has higher expected return and is selected."
        },
        "correctIndex": 0,
        "sectionId": "9.4",
        "sectionTitleJa": "9.4 初回訪問MC vs 全訪問MC、最適方策抽出",
        "sectionTitleEn": "9.4 First-visit vs Every-visit MC"
      },
      {
        "id": "ch9_q4_v3",
        "code": "# Blackjack outcome rewards:\n# Win: +1.0, Loss: -1.0, Draw/Push: 0.0",
        "ja": {
          "question": "Blackjack-v1 環境において、ディーラーとプレイヤーの手札合計が同点（プッシュ / 引き分け）で終わったときの報酬（reward）はいくらですか？",
          "options": [
            "0.0",
            "+1.0",
            "-1.0",
            "-0.5"
          ],
          "explanation": "Blackjack-v1 では勝利時に `+1.0`、敗北時に `-1.0`、引き分け（Push）時には `0.0` の報酬が返されます。"
        },
        "en": {
          "question": "In `Blackjack-v1`, what reward is returned when an episode ends in a tie/draw (Push)?",
          "options": [
            "0.0",
            "+1.0",
            "-1.0",
            "-0.5"
          ],
          "explanation": "The reward structure in Gymnasium's Blackjack is: Win = +1.0, Loss = -1.0, Draw/Push = 0.0."
        },
        "correctIndex": 0,
        "sectionId": "9.4",
        "sectionTitleJa": "9.4 初回訪問MC vs 全訪問MC、最適方策抽出",
        "sectionTitleEn": "9.4 First-visit vs Every-visit MC"
      }
    ]
  ],
  "10": [
    [
      {
        "id": "ch10_q1_v1",
        "code": "# TD Target: R + gamma * V(s')\n# TD Error: delta = R + gamma * V(s') - V(s)",
        "ja": {
          "question": "TD学習（時間的差分学習）がモンテカルロ法と異なり、「1ステップ進むごとに価値を即座に更新できる」数学的な理由（ブートストラップ）は何ですか？",
          "options": [
            "エピソードの最後まで待たず、次の状態の推定価値 V(s') を使って現在の価値を更新するから",
            "TD学習は過去の全エピソードをメモリに保存しているから",
            "TD学習では乱数を一切使用しないから",
            "TD学習は常に正解の報酬関数が事前に与えられているから"
          ],
          "explanation": "TD学習は「ブートストラップ（推定量を用いて推定量を更新すること）」を行います。エピソード終端まで待たずに、得られた即時報酬 $R$ と遷移先状態の現在の推定価値 $V(s')$ の組み合わせ $R + \\gamma V(s')$（TDターゲット）を目標として価値を更新します。"
        },
        "en": {
          "question": "Why can Temporal Difference (TD) learning update values immediately after a single step without waiting for episode completion (bootstrapping)?",
          "options": [
            "Because it updates current value estimates toward a target composed of the immediate reward R plus the estimated value of the next state V(s')",
            "Because TD learning caches all past episodes permanently in memory",
            "Because TD learning never utilizes random numbers",
            "Because TD learning requires exact analytical knowledge of the reward function upfront"
          ],
          "explanation": "TD learning bootstraps: it updates its estimate $V(s)$ based on another estimate $R + \\gamma V(s')$ (the TD target) after just one step, rather than waiting for empirical episode returns."
        },
        "correctIndex": 0,
        "sectionId": "10.1",
        "sectionTitleJa": "10.1 TD学習（時間的差分学習）とブートストラップ",
        "sectionTitleEn": "10.1 TD Learning & Bootstrapping"
      },
      {
        "id": "ch10_q1_v2",
        "code": "# TD Error formula:\n# delta = r + gamma * V(s_next) - V(s_curr)\n# r = 1.0, gamma = 0.9, V(s_next) = 2.0, V(s_curr) = 1.5",
        "ja": {
          "question": "即時報酬 r = 1.0、割引率 γ = 0.9、次の状態の推定価値 V(s_next) = 2.0、現在の推定価値 V(s_curr) = 1.5 のとき、TD誤差（TD error）δ はいくらですか？",
          "options": [
            "1.3 （1.0 + 0.9*2.0 - 1.5 = 2.8 - 1.5）",
            "1.5",
            "0.5",
            "2.8"
          ],
          "explanation": "TD誤差 $\\delta = R + \\gamma V(s_{next}) - V(s_{curr})$ です。$1.0 + (0.9 \\times 2.0) - 1.5 = 1.0 + 1.8 - 1.5 = 2.8 - 1.5 = 1.3$ となります。"
        },
        "en": {
          "question": "Given r = 1.0, γ = 0.9, V(s_next) = 2.0, and V(s_curr) = 1.5, what is the TD error δ?",
          "options": [
            "1.3 (1.0 + 0.9*2.0 - 1.5 = 2.8 - 1.5)",
            "1.5",
            "0.5",
            "2.8"
          ],
          "explanation": "TD error is $\\delta = R + \\gamma V(s') - V(s) = 1.0 + 0.9(2.0) - 1.5 = 2.8 - 1.5 = 1.3$."
        },
        "correctIndex": 0,
        "sectionId": "10.1",
        "sectionTitleJa": "10.1 TD学習（時間的差分学習）とブートストラップ",
        "sectionTitleEn": "10.1 TD Learning & Bootstrapping"
      },
      {
        "id": "ch10_q1_v3",
        "code": "# Bias-Variance tradeoff:\n# Monte Carlo: Zero bias, High variance\n# TD Learning: Some bias, Low variance",
        "ja": {
          "question": "強化学習におけるモンテカルロ法とTD学習の「バイアス（偏り）」と「バリアンス（分散）」のトレードオフに関する記述として正しいものはどれですか？",
          "options": [
            "モンテカルロ法は実際の収益を使うため不偏（バイアスなし）だが分散が大きい。TD学習は推定値を使うため初期にバイアスがあるがステップごとの分散は小さい",
            "モンテカルロ法はバイアスが非常に大きく、TD学習はバイアスがゼロである",
            "両者ともバイアスもバリアンスも完全にゼロである",
            "TD学習はエピソードが完了するまで分散が無限大に発散する"
          ],
          "explanation": "モンテカルロ法は実際の完全なエピソード収益を使うため期待値に偏りがありません（不偏 / Zero bias）が、試行ごとの乱数や軌道のブレによる分散（High variance）が大きくなります。TD法はブートストラップするため初期推定値の偏り（Bias）を持ちますが、1手ごとの分散（Low variance）は小さく抑えられます。"
        },
        "en": {
          "question": "Which statement correctly describes the bias-variance tradeoff between Monte Carlo and TD learning?",
          "options": [
            "Monte Carlo is unbiased but has high variance; TD has initial bias due to bootstrapping but lower variance",
            "Monte Carlo has severe bias while TD has zero bias",
            "Both methods have zero bias and zero variance",
            "TD variance diverges to infinity until the episode concludes"
          ],
          "explanation": "Monte Carlo relies on actual rollout returns (unbiased, but high variance across stochastic paths). TD bootstraps on estimated values (introduces bias initially, but achieves significantly lower variance per step)."
        },
        "correctIndex": 0,
        "sectionId": "10.1",
        "sectionTitleJa": "10.1 TD学習（時間的差分学習）とブートストラップ",
        "sectionTitleEn": "10.1 TD Learning & Bootstrapping"
      }
    ],
    [
      {
        "id": "ch10_q2_v1",
        "code": "# Q-Learning update rule:\n# Q(s, a) <- Q(s, a) + alpha * [r + gamma * max_a' Q(s', a') - Q(s, a)]",
        "ja": {
          "question": "Q-learningが「Off-policy（方策オフ型）」アルゴリズムと呼ばれる決定的な理由は何ですか？",
          "options": [
            "行動選択には ε-greedy などの方策を使いながら、更新目標の計算には常に最大価値の最善手 max Q(s', a') を仮定するから",
            "学習中に環境から報酬を一切受け取らないから",
            "方策（ポリシー）をメモリ上に保存しないから",
            "ニューラルネットワークを使わないと実行できないから"
          ],
          "explanation": "Q-learningでは、実際に行動を選ぶ挙動方策（Behavior policy: 例えばε-greedy）と、価値を更新する目標方策（Target policy: 常に $\\max_{a'} Q(s', a')$ をとるグリーディ方策）が異なるため、「方策オフ型（Off-policy）」と呼ばれます。"
        },
        "en": {
          "question": "Why is Q-learning classified as an 'off-policy' reinforcement learning algorithm?",
          "options": [
            "Because it selects actions using an exploratory behavior policy (e.g., ε-greedy) while updating toward the greedy target max_a' Q(s', a')",
            "Because it does not receive rewards from the environment during training",
            "Because it stores no policy in memory",
            "Because it requires deep neural networks to operate"
          ],
          "explanation": "Q-learning is off-policy because the policy used to generate actions (behavior policy, such as ε-greedy) differs from the policy being evaluated and improved (target policy, greedy $\\max_{a'} Q(s', a')$)."
        },
        "correctIndex": 0,
        "sectionId": "10.2",
        "sectionTitleJa": "10.2 Q-learning更新式（Off-policy, TD誤差, 学習率α）",
        "sectionTitleEn": "10.2 Q-Learning Update Equation"
      },
      {
        "id": "ch10_q2_v2",
        "code": "# SARSA update:\n# Q(s, a) <- Q(s, a) + alpha * [r + gamma * Q(s', a') - Q(s, a)]\n# where a' is the actual next action chosen by policy",
        "ja": {
          "question": "Q-learningとSARSAの更新式における最も本質的な違いは何ですか？",
          "options": [
            "Q-learningは次の状態の最大値 max Q(s', a') を使うのに対し、SARSAは実際にポリシーに従って選ばれた次の行動 a' の Q(s', a') を使う",
            "Q-learningは報酬 r を足さないが、SARSAは足す",
            "Q-learningは割引率 γ を使えないが、SARSAは使える",
            "SARSAは状態数4以下の環境でしか動作しない"
          ],
          "explanation": "Q-learningは遷移先で可能な最大行動価値 $\\max_{a'} Q(s', a')$ を使って更新します（Off-policy）。SARSAはエージェントが実際に次の方策で選んだ行動 $a'$ の価値 $Q(s', a')$ を使って更新します（On-policy: State-Action-Reward-State-Action）。"
        },
        "en": {
          "question": "What is the core difference between the update formulas of Q-learning and SARSA?",
          "options": [
            "Q-learning uses max_a' Q(s', a') regardless of next action, while SARSA uses Q(s', a') for the actual action a' chosen by the policy",
            "Q-learning ignores reward r while SARSA adds it",
            "Q-learning does not support discount factor γ while SARSA does",
            "SARSA only operates in environments with 4 or fewer states"
          ],
          "explanation": "Q-learning is off-policy, bootstrapping using $\\max_{a'} Q(s', a')$. SARSA is on-policy, bootstrapping using $Q(s', a')$ where $a'$ is the specific action chosen by the current policy."
        },
        "correctIndex": 0,
        "sectionId": "10.2",
        "sectionTitleJa": "10.2 Q-learning更新式（Off-policy, TD誤差, 学習率α）",
        "sectionTitleEn": "10.2 Q-Learning Update Equation"
      },
      {
        "id": "ch10_q2_v3",
        "code": "# Hyperparameters in Q-learning:\n# alpha = learning rate (0 < alpha <= 1)\n# gamma = discount factor (0 <= gamma <= 1)",
        "ja": {
          "question": "Q-learningの学習率 α を `1.0` に設定した場合の更新式の振る舞いとして正しいものはどれですか？",
          "options": [
            "過去の推定値 Q(s, a) を完全に上書きし、新しいターゲット `r + gamma * max Q` そのものに置き換わる",
            "学習が完全に停止し、Q値が一切変化しなくなる",
            "Q値がステップごとに無限大に発散する",
            "エージェントが常にランダム行動をとるようになる"
          ],
          "explanation": "$\\alpha = 1.0$ のとき、式は $Q(s, a) \\leftarrow Q(s, a) + 1.0 \\times [\\text{target} - Q(s, a)] = \\text{target}$ となります。つまり過去の経験の重み付けを残さず、最新のターゲット値で直接上書きされます。"
        },
        "en": {
          "question": "If the learning rate α in Q-learning is set to exactly 1.0, how does the update behave?",
          "options": [
            "It completely overwrites the prior Q(s, a) with the current target `r + gamma * max Q`",
            "Learning halts completely and Q-values never change",
            "Q-values instantly diverge to infinity",
            "The agent is forced to take purely random actions"
          ],
          "explanation": "When $\\alpha = 1$, $Q(s, a) + 1.0 \\cdot [Target - Q(s, a)] = Target$. Prior estimates are discarded and fully overwritten by the newly observed target."
        },
        "correctIndex": 0,
        "sectionId": "10.2",
        "sectionTitleJa": "10.2 Q-learning更新式（Off-policy, TD誤差, 学習率α）",
        "sectionTitleEn": "10.2 Q-Learning Update Equation"
      }
    ],
    [
      {
        "id": "ch10_q3_v1",
        "code": "# Q-Learning step calculation:\n# Q(s, a) = 0.0\n# r = 1.0 (reached Goal!)\n# alpha = 0.5, gamma = 0.9\n# s' is terminal, so max_a' Q(s', a') = 0.0",
        "ja": {
          "question": "Q(s, a) = 0.0 の状態でゴールに到達して即時報酬 r = 1.0 を得ました（s'は終端状態のため max Q = 0）。α = 0.5 のとき、更新後の Q(s, a) の値はいくらですか？",
          "options": [
            "0.5",
            "1.0",
            "0.0",
            "0.45"
          ],
          "explanation": "更新式：$Q \\leftarrow 0.0 + 0.5 \\times [1.0 + 0.9 \\times 0.0 - 0.0] = 0.0 + 0.5 \\times 1.0 = 0.5$ となります。"
        },
        "en": {
          "question": "Given initial Q(s, a) = 0.0, reaching the goal with reward r = 1.0 (s' is terminal, so max Q(s', a') = 0.0), and α = 0.5, what is the updated Q(s, a)?",
          "options": [
            "0.5",
            "1.0",
            "0.0",
            "0.45"
          ],
          "explanation": "$Q \\leftarrow 0.0 + 0.5 \\times [1.0 + 0.9(0.0) - 0.0] = 0.5 \\times 1.0 = 0.5$."
        },
        "correctIndex": 0,
        "sectionId": "10.3",
        "sectionTitleJa": "10.3 Q値更新の数値計算トレース",
        "sectionTitleEn": "10.3 Q-Table Calculation Trace"
      },
      {
        "id": "ch10_q3_v2",
        "code": "# Intermediate step:\n# Q(s, a) = 0.4\n# r = 0.0 (stepped onto normal ice)\n# max_a' Q(s', a') = 0.8\n# alpha = 0.2, gamma = 0.9",
        "ja": {
          "question": "現在の Q(s, a) = 0.4、即時報酬 r = 0.0、次の状態の最大価値 max Q(s', a') = 0.8、α = 0.2、γ = 0.9 のとき、更新後の Q(s, a) はいくらですか？",
          "options": [
            "0.464",
            "0.720",
            "0.320",
            "0.544"
          ],
          "explanation": "ターゲット $= r + \\gamma \\max Q = 0.0 + 0.9 \\times 0.8 = 0.72$。\nTD誤差 $= 0.72 - 0.4 = 0.32$。\n更新値 $= 0.4 + 0.2 \\times 0.32 = 0.4 + 0.064 = 0.464$ です。"
        },
        "en": {
          "question": "Given current Q(s, a) = 0.4, r = 0.0, max Q(s', a') = 0.8, α = 0.2, and γ = 0.9, what is the new Q(s, a)?",
          "options": [
            "0.464",
            "0.720",
            "0.320",
            "0.544"
          ],
          "explanation": "Target = $0.0 + 0.9(0.8) = 0.72$. TD error = $0.72 - 0.4 = 0.32$. Updated Q = $0.4 + 0.2(0.32) = 0.4 + 0.064 = 0.464$."
        },
        "correctIndex": 0,
        "sectionId": "10.3",
        "sectionTitleJa": "10.3 Q値更新の数値計算トレース",
        "sectionTitleEn": "10.3 Q-Table Calculation Trace"
      },
      {
        "id": "ch10_q3_v3",
        "code": "# Penalty transition:\n# Q(s, a) = 0.5\n# r = -1.0 (fell into a hole)\n# s' is terminal (max Q(s', a') = 0)\n# alpha = 0.1, gamma = 0.9",
        "ja": {
          "question": "現在の Q(s, a) = 0.5 の状態で落とし穴に落ちて r = -1.0 を受けました（s'は終端）。α = 0.1 のとき、更新後の Q(s, a) はいくらですか？",
          "options": [
            "0.35",
            "-0.10",
            "0.45",
            "-0.50"
          ],
          "explanation": "ターゲット $= -1.0 + 0 = -1.0$。\nTD誤差 $= -1.0 - 0.5 = -1.5$。\n新Q値 $= 0.5 + 0.1 \\times (-1.5) = 0.5 - 0.15 = 0.35$ です。"
        },
        "en": {
          "question": "Given Q(s, a) = 0.5, the agent falls into a hole receiving r = -1.0 (terminal state, max Q = 0), with α = 0.1. What is the updated Q(s, a)?",
          "options": [
            "0.35",
            "-0.10",
            "0.45",
            "-0.50"
          ],
          "explanation": "Target = -1.0. TD error = $-1.0 - 0.5 = -1.5$. New Q = $0.5 + 0.1(-1.5) = 0.5 - 0.15 = 0.35$."
        },
        "correctIndex": 0,
        "sectionId": "10.3",
        "sectionTitleJa": "10.3 Q値更新の数値計算トレース",
        "sectionTitleEn": "10.3 Q-Table Calculation Trace"
      }
    ],
    [
      {
        "id": "ch10_q4_v1",
        "code": "env = gym.make('FrozenLake-v1', is_slippery=True)\n# Default behavior: stochastic transitions",
        "ja": {
          "question": "FrozenLake-v1 で `is_slippery=True`（デフォルト）のとき、エージェントが「右」を選択したときの確率的挙動として正しいものはどれですか？",
          "options": [
            "指定した「右」に確率 1/3 で進み、直角方向の「上」に 1/3、「下」に 1/3 の確率で滑って移動する",
            "常に 100% の確率で「右」に進む",
            "確率 50% で「右」に進み、確率 50% で穴にテレポートする",
            "すべての行動が等確率 1/4 で上下左右に散らばる"
          ],
          "explanation": "FrozenLake の滑る氷（`is_slippery=True`）では、意図した進行方向に進む確率が 1/3、直角の左右2方向に滑る確率がそれぞれ 1/3 ずつとなります（真逆へ進む確率は0）。このため決定論的ではなく確率的MDPとなります。"
        },
        "en": {
          "question": "In `FrozenLake-v1` with `is_slippery=True`, what are the transition probabilities when selecting 'Right'?",
          "options": [
            "Moves 'Right' with 1/3 probability, slips 'Up' with 1/3, and slips 'Down' with 1/3",
            "Deterministically moves 'Right' with 100% probability",
            "50% chance to move 'Right' and 50% chance to fall in a hole",
            "Uniform 1/4 probability across all four directions"
          ],
          "explanation": "With slippery ice enabled, the agent moves in the intended direction with probability 1/3, and slips into the two perpendicular orthogonal directions with probability 1/3 each."
        },
        "correctIndex": 0,
        "sectionId": "10.4",
        "sectionTitleJa": "10.4 滑る氷の確率的遷移（is_slippery=True）",
        "sectionTitleEn": "10.4 Slippery Surface Dynamics"
      },
      {
        "id": "ch10_q4_v2",
        "code": "# FrozenLake 4x4 Grid:\n# S F F F    (S: Start, F: Frozen surface)\n# F H F H    (H: Hole, trap with reward 0 and terminated)\n# F F F H    \n# H F F G    (G: Goal, reward 1.0 and terminated)",
        "ja": {
          "question": "FrozenLake-v1 において、エージェントが落とし穴（Hole）に落ちた場合に得られる報酬（reward）はいくらですか？",
          "options": [
            "0.0 （terminated = True）",
            "-100.0",
            "-1.0",
            "+0.5"
          ],
          "explanation": "標準の FrozenLake-v1 では、落とし穴（H）に落ちてもペナルティ（マイナス報酬）は設定されておらず報酬 `0.0` でエピソードが終了（terminated=True）します。ゴール（G）に到達した時のみ `1.0` が与えられる疎な報酬（Sparse reward）設計です。"
        },
        "en": {
          "question": "In standard `FrozenLake-v1`, what reward does the agent receive upon falling into a Hole (H)?",
          "options": [
            "0.0 (with terminated = True)",
            "-100.0",
            "-1.0",
            "+0.5"
          ],
          "explanation": "Standard FrozenLake uses sparse rewards: reaching the goal yields 1.0, while falling into a hole or moving across ice yields 0.0."
        },
        "correctIndex": 0,
        "sectionId": "10.4",
        "sectionTitleJa": "10.4 滑る氷の確率的遷移（is_slippery=True）",
        "sectionTitleEn": "10.4 Slippery Surface Dynamics"
      },
      {
        "id": "ch10_q4_v3",
        "code": "env = gym.make('FrozenLake-v1', is_slippery=False)\n# Deterministic mode",
        "ja": {
          "question": "`is_slippery=False` で FrozenLake を初期化した場合、学習の難易度やエージェントの挙動はどう変化しますか？",
          "options": [
            "滑る偶然性がなくなり決定論的（指定した方向に100%進む）になるため、Q-learningが容易かつ素早く最短経路を学習できる",
            "氷が溶けて進行不能になる",
            "報酬がすべてマイナスに反転して学習が困難になる",
            "行動空間が Discrete(4) から Box(4,) に変化する"
          ],
          "explanation": "`is_slippery=False` にするとスリップが発生せず、選択した方向へ確実に移動する決定論的環境となります。状態遷移の不確実性が排除されるため、Q学習の収束は極めて高速になります。"
        },
        "en": {
          "question": "How does setting `is_slippery=False` alter the FrozenLake environment and learning difficulty?",
          "options": [
            "Transitions become deterministic (100% moving in chosen direction), allowing Q-learning to converge much faster",
            "The lake melts and becomes impassable",
            "All rewards invert to negative values causing divergence",
            "The action space changes from Discrete(4) to Box(4,)"
          ],
          "explanation": "Disabling slipperiness makes transitions 100% deterministic, eliminating environment stochasticity and drastically simplifying value convergence."
        },
        "correctIndex": 0,
        "sectionId": "10.4",
        "sectionTitleJa": "10.4 滑る氷の確率的遷移（is_slippery=True）",
        "sectionTitleEn": "10.4 Slippery Surface Dynamics"
      }
    ]
  ],
  "11": [
    [
      {
        "id": "ch11_q1_v1",
        "code": "env = gym.make('CartPole-v1')\nprint(env.observation_space)\n# Box([-4.8, -inf, -0.418, -inf], [4.8, inf, 0.418, inf], (4,), float32)",
        "ja": {
          "question": "CartPole-v1 環境における観測空間（状態）を構成する4つの物理量として正しいものはどれですか？",
          "options": [
            "[カートの位置, カートの速度, ポールの角度, ポールの角速度]",
            "[カートの重量, ポールの長さ, 重力加速度, 風速]",
            "[現在の得点, 残り時間, ボタン押下回数, 失敗回数]",
            "[台車のX座標, Y座標, Z座標, 加速度]"
          ],
          "explanation": "CartPoleの状態ベクトルは4次元の実数値であり、それぞれ「カート位置（Cart Position）」「カート速度（Cart Velocity）」「ポールの傾き角度（Pole Angle）」「ポールの角速度（Pole Angular Velocity）」を表します。"
        },
        "en": {
          "question": "What are the 4 physical variables comprising the observation vector in `CartPole-v1`?",
          "options": [
            "[Cart Position, Cart Velocity, Pole Angle, Pole Angular Velocity]",
            "[Cart Mass, Pole Length, Gravity, Wind Velocity]",
            "[Current Score, Remaining Time, Keypress Count, Failure Count]",
            "[Cart X, Cart Y, Cart Z, Acceleration]"
          ],
          "explanation": "The 4 continuous observation variables in CartPole are: cart position, cart velocity, pole angle (radians), and pole angular velocity at tip."
        },
        "correctIndex": 0,
        "sectionId": "11.1",
        "sectionTitleJa": "11.1 CartPole-v1の4連続物理状態と行動空間",
        "sectionTitleEn": "11.1 CartPole 4D Continuous State"
      },
      {
        "id": "ch11_q1_v2",
        "code": "env = gym.make('CartPole-v1')\nprint(env.action_space)\n# Discrete(2)",
        "ja": {
          "question": "CartPole-v1 における行動空間（action_space）の選択肢 `0` と `1` は何を意味していますか？",
          "options": [
            "0: カートを左へ押す、1: カートを右へ押す",
            "0: ポールを上に引っ張る、1: ポールを下に落とす",
            "0: モーター停止、1: モーター最高速回転",
            "0: ブレーキをかける、1: 何もしない"
          ],
          "explanation": "CartPole-v1 の行動空間は `Discrete(2)` であり、`0` は台車に左向きの力を加える（Push cart to the left）、`1` は右向きの力を加える（Push cart to the right）を表します。"
        },
        "en": {
          "question": "What do the actions `0` and `1` represent in `CartPole-v1`?",
          "options": [
            "0: Push cart to the left, 1: Push cart to the right",
            "0: Pull pole up, 1: Drop pole down",
            "0: Stop motor, 1: Max speed rotation",
            "0: Apply brake, 1: Do nothing"
          ],
          "explanation": "CartPole has two discrete action choices: 0 applies a force pushing the cart leftwards, and 1 pushes the cart rightwards."
        },
        "correctIndex": 0,
        "sectionId": "11.1",
        "sectionTitleJa": "11.1 CartPole-v1の4連続物理状態と行動空間",
        "sectionTitleEn": "11.1 CartPole 4D Continuous State"
      },
      {
        "id": "ch11_q1_v3",
        "code": "# CartPole reward scheme:\n# Reward = +1.0 for every step the pole remains upright",
        "ja": {
          "question": "CartPole-v1 環境において、エージェントが受け取る報酬（reward）のルールとして正しいものはどれですか？",
          "options": [
            "ポールが倒れずに立ち続けている限り、1ステップ経過するごとに +1.0 の報酬が与えられる",
            "ポールが完全に静止した瞬間のみ +100 の報酬が与えられる",
            "ステップごとにポールの角度に応じたマイナス報酬（コスト）が引かれる",
            "ゴール地点に到達した瞬間に +500 の報酬が一度だけ与えられる"
          ],
          "explanation": "CartPoleでは、ポールが倒れず倒立状態を維持できている間、1ステップ生き延びるごとに `+1.0` の報酬を受け取ります。最大500ステップ維持できれば合計報酬500点（ゲームクリア）となります。"
        },
        "en": {
          "question": "How is reward distributed in `CartPole-v1`?",
          "options": [
            "A reward of +1.0 is granted for every step the pole remains upright",
            "A reward of +100 is given only when the pole comes to a complete halt",
            "Negative penalties proportional to angle are deducted per step",
            "A lump-sum reward of +500 is awarded upon reaching a goal destination"
          ],
          "explanation": "In CartPole-v1, the agent earns +1.0 reward for every time step the pole remains balanced within the acceptable angle and position thresholds (up to 500 steps)."
        },
        "correctIndex": 0,
        "sectionId": "11.1",
        "sectionTitleJa": "11.1 CartPole-v1の4連続物理状態と行動空間",
        "sectionTitleEn": "11.1 CartPole 4D Continuous State"
      }
    ],
    [
      {
        "id": "ch11_q2_v1",
        "code": "# Continuous observation: [0.023412, -0.194821, 0.041289, 0.281942]\n# Attempting Q[obs, action] directly as Python dict or 2D array",
        "ja": {
          "question": "CartPoleのような連続値の状態空間を持つ問題で、従来の「表形式（Tabular）Q学習」をそのまま適用できない最大の理由は何ですか？",
          "options": [
            "状態が無限に細かな実数値であるため、全く同一の観測値に二度と遭遇せず、Qテーブルの行数が無限に発散して学習経験が共有されないため",
            "PythonのNumPy配列が浮動小数点数（float）を格納できないため",
            "連続値環境ではベルマン方程式が数学的に定義できないため",
            "Gymnasiumが連続空間の環境ではstepメソッドを実行させない仕様だから"
          ],
          "explanation": "実数値（連続値）の状態空間では、状態の組み合わせが実質的に無限通り存在します。表形式Q学習では「過去に訪問したマス（インデックス）のQ値を更新する」前提であるため、未訪問のわずかに異なる状態に対して経験を共有（汎化）できず、表形式の手法は破綻します。"
        },
        "en": {
          "question": "Why does standard tabular Q-learning fail when applied directly to continuous state environments like CartPole?",
          "options": [
            "Continuous float states produce infinite unique states, meaning identical states are rarely revisited and tabular experiences cannot generalize",
            "NumPy arrays cannot store floating-point values",
            "The Bellman equation is mathematically undefined for continuous spaces",
            "Gymnasium forbids calling the step method on Box spaces"
          ],
          "explanation": "Continuous spaces contain an infinite continuum of states. A discrete table cannot represent infinite states, and an exact table lookup cannot generalize knowledge to nearby unvisited states."
        },
        "correctIndex": 0,
        "sectionId": "11.2",
        "sectionTitleJa": "11.2 連続状態空間における表形式手法の限界と次元の呪い",
        "sectionTitleEn": "11.2 Curse of Dimensionality"
      },
      {
        "id": "ch11_q2_v2",
        "code": "# State space explosion:\n# If we divide each of the 4 dimensions into 10 bins:\n# 10 * 10 * 10 * 10 = 10,000 states\n# If 10 dimensions with 10 bins: 10^10 = 10,000,000,000 states!",
        "ja": {
          "question": "状態の次元数が増えるにつれて、離散化（ビニング）後の総状態数が指数関数的に爆発し、メモリや学習データが不足する現象を何と呼びますか？",
          "options": [
            "次元の呪い（Curse of Dimensionality）",
            "勾配消失問題（Vanishing Gradient Problem）",
            "過学習（Overfitting）",
            "ブートストラップ問題（Bootstrapping Dilemma）"
          ],
          "explanation": "各次元を $K$ 個に分割するとき、$D$ 次元の空間では $K^D$ 個の状態が生まれます。次元数 $D$ が増えるにつれて状態数が指数関数的に急増するこの問題を「次元の呪い（Curse of Dimensionality）」と呼びます。"
        },
        "en": {
          "question": "What is the phenomenon where the number of discrete states explodes exponentially as the state dimension increases?",
          "options": [
            "Curse of Dimensionality",
            "Vanishing Gradient Problem",
            "Overfitting",
            "Bootstrapping Dilemma"
          ],
          "explanation": "The Curse of Dimensionality describes how state space volume and necessary sample counts grow exponentially with the number of state dimensions ($K^D$)."
        },
        "correctIndex": 0,
        "sectionId": "11.2",
        "sectionTitleJa": "11.2 連続状態空間における表形式手法の限界と次元の呪い",
        "sectionTitleEn": "11.2 Curse of Dimensionality"
      },
      {
        "id": "ch11_q2_v3",
        "code": "# Function approximation:\n# Tabular: Q(s, a) stored in table of shape (S, A)\n# Deep RL (DQN): Q(s, a; theta) approximated by Neural Network",
        "ja": {
          "question": "表形式の離散化の限界を超えて、高次元・連続値の状態空間を扱うために現代の強化学習（DQN等）で採用されているアプローチは何ですか？",
          "options": [
            "ニューラルネットワークを価値関数の近似器（関数近似）として利用する",
            "状態空間をすべてランダムに削除して1次元に圧縮する",
            "エピソードの途中で報酬計算をすべて打ち切る",
            "学習率 α を 0.0 に固定する"
          ],
          "explanation": "連続値や高次元画像などの入力を扱うため、深層強化学習（DQNなど）ではニューラルネットワークを「関数近似器（Function Approximator）」として用い、似たような状態の特徴から価値を補間・汎化して推定します。"
        },
        "en": {
          "question": "What primary approach is adopted by modern Deep RL (such as DQN) to overcome the limits of state discretization in continuous spaces?",
          "options": [
            "Using neural networks as function approximators to generalize value predictions across continuous states",
            "Randomly discarding state dimensions down to a single scalar",
            "Terminating all episodes after the first step",
            "Freezing the learning rate α to 0.0"
          ],
          "explanation": "Deep RL employs deep neural networks as function approximators $Q(s, a; \\theta)$, enabling the agent to generalize patterns across an infinite continuous state continuum without lookup tables."
        },
        "correctIndex": 0,
        "sectionId": "11.2",
        "sectionTitleJa": "11.2 連続状態空間における表形式手法の限界と次元の呪い",
        "sectionTitleEn": "11.2 Curse of Dimensionality"
      }
    ],
    [
      {
        "id": "ch11_q3_v1",
        "code": "import numpy as np\nbins = np.linspace(-2.4, 2.4, 5)\n# bins = [-2.4, -1.2, 0.0, 1.2, 2.4]\nval = 0.5\nidx = np.digitize(val, bins)",
        "ja": {
          "question": "`bins = [-2.4, -1.2, 0.0, 1.2, 2.4]` のとき、`val = 0.5` を `np.digitize(val, bins)` でビニングした結果のインデックスとして正しいものはどれですか？",
          "options": [
            "3 （0.0 より大きく 1.2 以下の区間）",
            "0",
            "1",
            "5"
          ],
          "explanation": "`np.digitize` は値がどの区間に属するか（何番目の境界より上か）を判定します。`val = 0.5` は `-2.4`、`-1.2`、`0.0` の3つの境界を超えており、`1.2` 未満であるため、インデックス `3` となります。"
        },
        "en": {
          "question": "Given `bins = [-2.4, -1.2, 0.0, 1.2, 2.4]`, what bin index is returned by `np.digitize(0.5, bins)`?",
          "options": [
            "3 (interval between 0.0 and 1.2)",
            "0",
            "1",
            "5"
          ],
          "explanation": "`np.digitize` returns the 1-based bucket index. Since 0.5 is greater than bins[0] (-2.4), bins[1] (-1.2), and bins[2] (0.0), but less than bins[3] (1.2), it falls into bin 3."
        },
        "correctIndex": 0,
        "sectionId": "11.3",
        "sectionTitleJa": "11.3 離散化（ビニング）と np.digitize 計算トレース",
        "sectionTitleEn": "11.3 Discretization via np.digitize"
      },
      {
        "id": "ch11_q3_v2",
        "code": "# Discretize 4 continuous variables into 6 bins each:\n# State index = (b1, b2, b3, b4) where each b in [0..5]\n# Total table size: 6 * 6 * 6 * 6 * 2 (actions) = ?",
        "ja": {
          "question": "4変数をそれぞれ6分割（6 bins）し、行動が2種類のとき、作成すべき Qテーブルの要素数（総セル数）はいくつですか？",
          "options": [
            "2,592 （6^4 * 2 = 1,296 * 2）",
            "48 （6 * 4 * 2）",
            "10,000",
            "1,296"
          ],
          "explanation": "状態の組み合わせは $6 \\times 6 \\times 6 \\times 6 = 6^4 = 1296$ 通りです。各状態に対して2つの行動（左/右）のQ値を持つため、総要素数は $1296 \\times 2 = 2592$ 個となります。"
        },
        "en": {
          "question": "If each of the 4 variables is discretized into 6 bins with 2 possible actions, what is the total number of cells in the Q-table?",
          "options": [
            "2,592 (6^4 * 2 = 1,296 * 2)",
            "48 (6 * 4 * 2)",
            "10,000",
            "1,296"
          ],
          "explanation": "The number of discrete states is $6^4 = 1,296$. Multiplying by 2 available actions yields $1,296 \\times 2 = 2,592$ Q-values."
        },
        "correctIndex": 0,
        "sectionId": "11.3",
        "sectionTitleJa": "11.3 離散化（ビニング）と np.digitize 計算トレース",
        "sectionTitleEn": "11.3 Discretization via np.digitize"
      },
      {
        "id": "ch11_q3_v3",
        "code": "# Binning clipping strategy:\n# What happens when cart position exceeds the predefined bin boundaries?",
        "ja": {
          "question": "連続値をビニングする際、あらかじめ定めた最小値・最大値の外側の値（外れ値）が発生した場合の対処法として最も安全なものはどれですか？",
          "options": [
            "`np.clip` 等を用いて最小ビン（0）または最大ビン（N-1）の範囲内に値を丸める",
            "即座に Python の例外をスローしてプロセスを終了させる",
            "配列のサイズをその場で無限大に拡張する",
            "外れ値が出た瞬間は常にQ値を 0.0 にリセットする"
          ],
          "explanation": "外れ値が `np.digitize` に渡されると想定外のインデックス（0 や N）を返し配列外参照（IndexError）の原因になります。そのため、あらかじめ `np.clip(val, min_val, max_val)` で許容範囲内にクランプしてからビニングするのが標準的な実装です。"
        },
        "en": {
          "question": "When binning continuous observations, what is the standard practice for handling extreme values outside the defined boundaries?",
          "options": [
            "Clamping/clipping observations using `np.clip` to ensure bin indices remain strictly within table bounds",
            "Raising an unhandled exception to terminate the runtime",
            "Dynamically resizing the NumPy array to infinity",
            "Resetting the entire Q-table to 0.0"
          ],
          "explanation": "Clipping observation values with `np.clip` prevents out-of-bounds indices from causing `IndexError` exceptions when indexing fixed-size Q-tables."
        },
        "correctIndex": 0,
        "sectionId": "11.3",
        "sectionTitleJa": "11.3 離散化（ビニング）と np.digitize 計算トレース",
        "sectionTitleEn": "11.3 Discretization via np.digitize"
      }
    ],
    [
      {
        "id": "ch11_q4_v1",
        "code": "# Termination in CartPole-v1:\n# 1. Pole angle > ~12 degrees (0.2095 rad)\n# 2. Cart position > 2.4 (cart off screen)\n# 3. Episode length reaches 500 steps",
        "ja": {
          "question": "CartPole-v1 において `terminated = True`（失敗によるエピソード自然終了）となる条件として正しいものはどれですか？",
          "options": [
            "ポールの傾き角度が約 ±12度（約0.2095 rad）を超えた、またはカート位置が画面端（±2.4）を超えたとき",
            "カートの移動速度が時速 100km を超えたとき",
            "ポールが完全に真直ぐ垂直に立ったとき",
            "20ステップ連続で同じ行動を選択したとき"
          ],
          "explanation": "CartPole-v1 の物理シミュレーションでは、ポールの傾きが $\\pm 12^\\circ$（約 $\\pm 0.2095$ ラジアン）を超えて倒れた場合、または台車が画面外（$\\pm 2.4$）に飛び出した場合に失敗と判定され `terminated = True` となります。"
        },
        "en": {
          "question": "Under what condition does `terminated = True` occur in `CartPole-v1`?",
          "options": [
            "Pole angle exceeds approximately ±12 degrees (±0.2095 rad) or cart position exceeds boundaries (±2.4)",
            "Cart velocity exceeds 100 km/h",
            "Pole becomes perfectly vertical",
            "The same action is chosen 20 consecutive times"
          ],
          "explanation": "In CartPole-v1, an episode terminates as failed when the pole angle exceeds $\\pm 12^\\circ$ ($\\approx \\pm 0.2095$ rad) or the cart position strays beyond $\\pm 2.4$."
        },
        "correctIndex": 0,
        "sectionId": "11.4",
        "sectionTitleJa": "11.4 終了条件（角度 ±12度, 500ステップ, 攻略基準）",
        "sectionTitleEn": "11.4 CartPole Termination & Solved Criteria"
      },
      {
        "id": "ch11_q4_v2",
        "code": "# Step limit:\n# max_episode_steps = 500 in CartPole-v1\n# When step count reaches 500: truncated = True",
        "ja": {
          "question": "エージェントがポールを倒さずに安定させ続け、最大制限の 500 ステップに到達した時、返されるフラグはどうなりますか？",
          "options": [
            "terminated = False, truncated = True",
            "terminated = True, truncated = False",
            "terminated = False, truncated = False",
            "両方 False でプログラムが停止する"
          ],
          "explanation": "500ステップ到達は「ポールが倒れた失敗（自然終了）」ではなく「規定ステップ上限による打ち切り（時間切れ）」であるため、`terminated = False`、`truncated = True` となります。"
        },
        "en": {
          "question": "When the agent successfully balances the pole up to the maximum 500 steps, which flags are returned at step 500?",
          "options": [
            "terminated = False, truncated = True",
            "terminated = True, truncated = False",
            "terminated = False, truncated = False",
            "Both are False and execution freezes"
          ],
          "explanation": "Surviving until step 500 is a horizon cutoff (timeout), so `terminated` remains `False` and `truncated` becomes `True`."
        },
        "correctIndex": 0,
        "sectionId": "11.4",
        "sectionTitleJa": "11.4 終了条件（角度 ±12度, 500ステップ, 攻略基準）",
        "sectionTitleEn": "11.4 CartPole Termination & Solved Criteria"
      },
      {
        "id": "ch11_q4_v3",
        "code": "# Benchmark solved criteria:\n# CartPole-v1 is traditionally considered 'solved' when\n# average reward over 100 consecutive trials is >= 475.0",
        "ja": {
          "question": "CartPole-v1 において、一般に強化学習エージェントが「環境を攻略（Solved）した」と判定される客観的基準はどれですか？",
          "options": [
            "連続100エピソードの平均獲得スコアが 475.0 点以上を達成したとき",
            "1度でも 500点 を獲得できた瞬間",
            "Qテーブルのすべての値が正の整数になったとき",
            "1エピソードで消費した時間が 1秒 未満のとき"
          ],
          "explanation": "強化学習のベンチマークにおいて、CartPole-v1 は「直近100エピソード連続の平均報酬が 475.0点 以上」に達した時点でタスクをクリア（Solved）したと公式に判定されます。"
        },
        "en": {
          "question": "What is the standard benchmark criteria for considering `CartPole-v1` officially 'solved'?",
          "options": [
            "Achieving an average score of >= 475.0 over 100 consecutive episodes",
            "Hitting 500 points on a single lucky trial",
            "Every entry in the Q-table turning positive",
            "Finishing an episode in under 1 second"
          ],
          "explanation": "Gymnasium benchmark standards define `CartPole-v1` as solved when the agent achieves an average return of $\\ge 475.0$ over 100 consecutive evaluation episodes."
        },
        "correctIndex": 0,
        "sectionId": "11.4",
        "sectionTitleJa": "11.4 終了条件（角度 ±12度, 500ステップ, 攻略基準）",
        "sectionTitleEn": "11.4 CartPole Termination & Solved Criteria"
      }
    ]
  ],
  "12": [
    [
      {
        "id": "ch12_q1_v1",
        "code": "import gymnasium as gym\nfrom gymnasium import spaces\n\nclass CustomGridEnv(gym.Env):\n    metadata = {'render_modes': ['human', 'ansi']}\n    def __init__(self):\n        super().__init__()\n        # define spaces",
        "ja": {
          "question": "独自の強化学習環境を作成する際、クラス定義で継承すべき基底クラスと、実装が必須とされるコアメソッドの組み合わせはどれですか？",
          "options": [
            "基底クラス: `gym.Env`、コアメソッド: `reset()` と `step()`",
            "基底クラス: `gym.Algorithm`、コアメソッド: `fit()` と `predict()`",
            "基底クラス: `torch.nn.Module`、コアメソッド: `forward()`",
            "基底クラス: `threading.Thread`、コアメソッド: `run()`"
          ],
          "explanation": "Gymnasiumでカスタム環境を作るには `gym.Env` を継承し、環境の初期化を行う `reset()` メソッドと、行動を受け取り1ステップ時間を進める `step()` メソッドを実装することが必須です。"
        },
        "en": {
          "question": "When authoring a custom RL environment in Gymnasium, which base class must be inherited and which core methods are mandatory?",
          "options": [
            "Base class: `gym.Env`, Core methods: `reset()` and `step()`",
            "Base class: `gym.Algorithm`, Core methods: `fit()` and `predict()`",
            "Base class: `torch.nn.Module`, Core methods: `forward()`",
            "Base class: `threading.Thread`, Core methods: `run()`"
          ],
          "explanation": "Subclassing `gymnasium.Env` requires defining `reset()` (to re-initialize state) and `step()` (to advance the environment transition given an action)."
        },
        "correctIndex": 0,
        "sectionId": "12.1",
        "sectionTitleJa": "12.1 gymnasium.Env のサブクラス化とメソッド",
        "sectionTitleEn": "12.1 Subclassing gym.Env"
      },
      {
        "id": "ch12_q1_v2",
        "code": "def reset(self, seed=None, options=None):\n    super().reset(seed=seed)\n    self.state = 0\n    return self.state, {}",
        "ja": {
          "question": "Gymnasium (v0.26以降) のカスタム環境における `reset()` メソッドの仕様として正しい記述はどれですか？",
          "options": [
            "引数として `seed=None` を受け取り、返り値として `(observation, info)` のタプルを返さなければならない",
            "返り値は観測値の数値1つだけであり、タプルを返すとエラーになる",
            "引数は一切受け取ってはならず、常に固定の初期状態のみを返す",
            "`step()` が100回呼ばれるごとに自動的に呼び出される"
          ],
          "explanation": "Gymnasiumの標準仕様では、再現性確保のためのシード初期化に対応するため `def reset(self, seed=None, options=None):` を受け取り、返り値は観測値と辞書のタプル `(observation, info)` である必要があります。"
        },
        "en": {
          "question": "In Gymnasium (v0.26+), what is the compliant signature and return structure for a custom `reset()` method?",
          "options": [
            "It must accept `seed=None` (and `options=None`), returning a 2-tuple `(observation, info)`",
            "It must return only the observation scalar, raising an error if returning a tuple",
            "It must accept zero arguments and always produce fixed states",
            "It is automatically invoked by Python every 100 steps"
          ],
          "explanation": "Gymnasium specs require `reset(self, seed=None, options=None)` which seeds PRNG via `super().reset(seed=seed)` and returns `(obs, info)`."
        },
        "correctIndex": 0,
        "sectionId": "12.1",
        "sectionTitleJa": "12.1 gymnasium.Env のサブクラス化とメソッド",
        "sectionTitleEn": "12.1 Subclassing gym.Env"
      },
      {
        "id": "ch12_q1_v3",
        "code": "class MyGameEnv(gym.Env):\n    def render(self):\n        if self.render_mode == 'ansi':\n            return self._render_text()\n        elif self.render_mode == 'human':\n            self._render_gui()",
        "ja": {
          "question": "環境の可視化を行う `render()` メソッドにおいて、`render_mode == 'ansi'` と `'human'` の役割の違いとして正しいものはどれですか？",
          "options": [
            "`'ansi'` はターミナル用の文字列（ASCIIアート）を返し、`'human'` はGUIウィンドウにリアルタイム画面を描画する",
            "`'ansi'` は音声を再生し、`'human'` はテキストを出力する",
            "`'human'` はAIではなく人間がプレイするモードであり、AIは操作できなくなる",
            "両者に違いはなく、単なる別名である"
          ],
          "explanation": "`render_mode='ansi'` は文字列（ターミナル表示用）を返すモードであり、`'human'` は Pygame や OpenCV 等のウィンドウを開いて人間の目に見える形で直接描画するモードです。"
        },
        "en": {
          "question": "What is the distinction between `render_mode == 'ansi'` and `'human'` in custom environment design?",
          "options": [
            "`'ansi'` returns string ASCII art for terminal output, while `'human'` renders a real-time GUI window (e.g., via Pygame)",
            "`'ansi'` produces audio, while `'human'` prints plain text",
            "`'human'` is reserved for human gameplay only and blocks AI agents",
            "There is no difference; they are identical aliases"
          ],
          "explanation": "`ansi` render mode returns a formatted string representation of the grid, while `human` mode displays an interactive graphical window."
        },
        "correctIndex": 0,
        "sectionId": "12.1",
        "sectionTitleJa": "12.1 gymnasium.Env のサブクラス化とメソッド",
        "sectionTitleEn": "12.1 Subclassing gym.Env"
      }
    ],
    [
      {
        "id": "ch12_q2_v1",
        "code": "from gymnasium import spaces\nimport numpy as np\n\n# 5x5 grid position (x, y)\nobservation_space = spaces.Box(low=0, high=4, shape=(2,), dtype=np.int32)\naction_space = spaces.Discrete(4)",
        "ja": {
          "question": "5×5 グリッド上の (x, y) 座標を観測値とし、上下左右の4方向を行動とする場合の空間定義として正しいものはどれですか？",
          "options": [
            "行動空間: `spaces.Discrete(4)`、観測空間: `spaces.Box(low=0, high=4, shape=(2,), dtype=np.int32)`",
            "行動空間: `spaces.Box(4)`、観測空間: `spaces.Discrete(2)`",
            "行動空間: `spaces.Tuple(4)`、観測空間: `spaces.Dict(5, 5)`",
            "行動空間: `spaces.Discrete(5)`、観測空間: `spaces.Box(0, 25)`"
          ],
          "explanation": "行動は4通りの離散値なので `Discrete(4)`、観測値は0から4までの整数値が2個並ぶ2次元ベクトルなので `Box(low=0, high=4, shape=(2,), dtype=np.int32)` が適切です（マス目を 0〜24 の単一整数とするなら `Discrete(25)` も可能）。"
        },
        "en": {
          "question": "When representing 4 directional moves and (x, y) coordinates on a 5x5 grid, how should the spaces be initialized?",
          "options": [
            "Action: `spaces.Discrete(4)`, Observation: `spaces.Box(low=0, high=4, shape=(2,), dtype=np.int32)`",
            "Action: `spaces.Box(4)`, Observation: `spaces.Discrete(2)`",
            "Action: `spaces.Tuple(4)`, Observation: `spaces.Dict(5, 5)`",
            "Action: `spaces.Discrete(5)`, Observation: `spaces.Box(0, 25)`"
          ],
          "explanation": "Actions are 4 discrete values (`Discrete(4)`). A 2D integer coordinate vector bounded between 0 and 4 is specified as `Box(low=0, high=4, shape=(2,), dtype=np.int32)`."
        },
        "correctIndex": 0,
        "sectionId": "12.2",
        "sectionTitleJa": "12.2 行動空間・観測空間の定義（Discrete, Box）",
        "sectionTitleEn": "12.2 Action & Observation Spaces"
      },
      {
        "id": "ch12_q2_v2",
        "code": "space = spaces.Discrete(4)\n# Checking if action is valid:\nprint(space.contains(3))\nprint(space.contains(4))",
        "ja": {
          "question": "`spaces.Discrete(4)` に対して `space.contains(3)` と `space.contains(4)` を評価したときの出力の組み合わせはどれですか？",
          "options": [
            "True, False",
            "True, True",
            "False, True",
            "False, False"
          ],
          "explanation": "`Discrete(4)` は `{0, 1, 2, 3}` の4つの値を含みます。したがって 3 は含まれるため `True`、4 は範囲外のため `False` となります。"
        },
        "en": {
          "question": "For `space = spaces.Discrete(4)`, what are the outputs of `space.contains(3)` and `space.contains(4)`?",
          "options": [
            "True, False",
            "True, True",
            "False, True",
            "False, False"
          ],
          "explanation": "`Discrete(4)` represents {0, 1, 2, 3}. 3 is valid (True), but 4 is outside the range (False)."
        },
        "correctIndex": 0,
        "sectionId": "12.2",
        "sectionTitleJa": "12.2 行動空間・観測空間の定義（Discrete, Box）",
        "sectionTitleEn": "12.2 Action & Observation Spaces"
      },
      {
        "id": "ch12_q2_v3",
        "code": "# Converting 2D (row, col) on a 4x4 grid into a 1D discrete state index:\n# def get_state_index(row, col, width=4):\n#     return row * width + col",
        "ja": {
          "question": "4×4 のグリッドワールドにおいて、エージェントが 2行目・3列目 `(row=2, col=3)`（0始まり）にいるとき、1次元の状態インデックス番号はいくつですか？",
          "options": [
            "11 （2 * 4 + 3 = 8 + 3）",
            "7",
            "14",
            "5"
          ],
          "explanation": "行優先（Row-major）のインデックス変換式は `state = row * width + col` です。`2 * 4 + 3 = 8 + 3 = 11` となります。"
        },
        "en": {
          "question": "On a 4x4 grid, if an agent is at row 2, column 3 (0-indexed), what is the flattened 1D state index using `row * width + col`?",
          "options": [
            "11 (2 * 4 + 3 = 8 + 3)",
            "7",
            "14",
            "5"
          ],
          "explanation": "Converting 2D grid coordinates to a 1D index uses row-major formula: $2 \\times 4 + 3 = 11$."
        },
        "correctIndex": 0,
        "sectionId": "12.2",
        "sectionTitleJa": "12.2 行動空間・観測空間の定義（Discrete, Box）",
        "sectionTitleEn": "12.2 Action & Observation Spaces"
      }
    ],
    [
      {
        "id": "ch12_q3_v1",
        "code": "import numpy as np\n# Grid size: 5 (indices 0 to 4)\n# Agent at x = 0\n# Action LEFT: dx = -1\nnew_x = int(np.clip(0 + (-1), 0, 4))",
        "ja": {
          "question": "グリッドの端（x=0）にいるエージェントがさらに左へ移動しようとしたとき、`np.clip` を用いた境界判定処理による `new_x` の値はどうなりますか？",
          "options": [
            "0 （最小値 0 にクリップされ、壁に阻まれて留まる）",
            "-1 （グリッドの外へ飛び出す）",
            "4 （反対側の右端へワープする）",
            "None"
          ],
          "explanation": "`np.clip(val, min_val, max_val)` は値が最小値未満になった場合に最小値へ丸めます。`0 + (-1) = -1` は 0 にクリップされるため、壁の外に出ず現在のセル `0` に留まります。"
        },
        "en": {
          "question": "When an agent at boundary x=0 attempts to move LEFT (dx = -1), what is the resulting `new_x` after `np.clip(0 - 1, 0, 4)`?",
          "options": [
            "0 (clipped to lower bound 0, bumping into the wall)",
            "-1 (wanders outside grid boundaries)",
            "4 (wraps around to the opposite edge)",
            "None"
          ],
          "explanation": "`np.clip(-1, 0, 4)` clamps values below 0 up to the minimum bound 0, preventing the agent from walking through walls."
        },
        "correctIndex": 0,
        "sectionId": "12.3",
        "sectionTitleJa": "12.3 グリッド座標更新と np.clip 境界クリッピング",
        "sectionTitleEn": "12.3 Grid Step & Boundary Clipping"
      },
      {
        "id": "ch12_q3_v2",
        "code": "# Custom step logic with obstacle and goal:\ntrap_pos = (1, 1)\ngoal_pos = (2, 2)\n# If next_pos == trap_pos: reward = -10, terminated = True\n# If next_pos == goal_pos: reward = +50, terminated = True\n# Else: reward = -1, terminated = False",
        "ja": {
          "question": "エージェントが通常マスを一歩移動したとき（罠でもゴールでもない）、`reward` と `terminated` の値はどう設定するのが一般的ですか？",
          "options": [
            "reward = -1, terminated = False （歩数ペナルティを与え、探索を継続）",
            "reward = 0, terminated = True （即座にゲームオーバー）",
            "reward = +50, terminated = False",
            "reward = None, terminated = None"
          ],
          "explanation": "通常マスへの移動には `-1` などの小さなステップコスト（ペナルティ）を与え、`terminated = False` でエピソードを継続させることで、最短経路でゴールを目指すインセンティブを作ります。"
        },
        "en": {
          "question": "In a grid-world custom step implementation, what are the typical reward and terminated values when moving to a safe regular tile?",
          "options": [
            "reward = -1, terminated = False (incurs a small step cost to incentivize shortest paths)",
            "reward = 0, terminated = True (ends the game instantly)",
            "reward = +50, terminated = False",
            "reward = None, terminated = None"
          ],
          "explanation": "Giving a -1 step cost with `terminated = False` encourages the agent to find the shortest trajectory to the goal without lingering indefinitely."
        },
        "correctIndex": 0,
        "sectionId": "12.3",
        "sectionTitleJa": "12.3 グリッド座標更新と np.clip 境界クリッピング",
        "sectionTitleEn": "12.3 Grid Step & Boundary Clipping"
      },
      {
        "id": "ch12_q3_v3",
        "code": "def step(self, action):\n    self.step_count += 1\n    truncated = self.step_count >= self.max_steps\n    terminated = self.is_goal() or self.is_trap()\n    return self.state, reward, terminated, truncated, {}",
        "ja": {
          "question": "カスタム環境において、エージェントが無限ループに陥って永遠に彷徨うのを防ぐために設定すべき打ち切りフラグは何ですか？",
          "options": [
            "一定ステップ数に達した際に `truncated = True` を返す",
            "`reward` を `-infinity` に設定する",
            "Python の `sys.exit()` を呼び出す",
            "`terminated = False` を永久に維持する"
          ],
          "explanation": "Gymnasiumではステップ数が上限（例: 100歩）に達した際に `truncated = True` を返すことで、安全にエピソードを打ち切ってリセットさせる設計が標準です。"
        },
        "en": {
          "question": "To prevent an agent from wandering infinitely in custom environments, which flag should be raised upon exceeding maximum allowed steps?",
          "options": [
            "Set `truncated = True` when step count exceeds the horizon limit",
            "Assign `reward = -infinity`",
            "Invoke `sys.exit()` in Python",
            "Keep `terminated = False` permanently"
          ],
          "explanation": "`truncated = True` signals that the episode hit a maximum step cutoff rather than a natural terminal goal, cleanly triggering episode termination."
        },
        "correctIndex": 0,
        "sectionId": "12.3",
        "sectionTitleJa": "12.3 グリッド座標更新と np.clip 境界クリッピング",
        "sectionTitleEn": "12.3 Grid Step & Boundary Clipping"
      }
    ],
    [
      {
        "id": "ch12_q4_v1",
        "code": "# Validating Gymnasium step return types:\nobs, reward, terminated, truncated, info = env.step(action)\nassert isinstance(reward, (int, float))\nassert isinstance(terminated, bool)\nassert isinstance(truncated, bool)\nassert isinstance(info, dict)",
        "ja": {
          "question": "Gymnasiumの規格において、`env.step()` が返す各要素のPythonデータ型として誤っているものはどれですか？",
          "options": [
            "info は文字列（str）型でなければならない",
            "reward は数値（int または float）型である",
            "terminated は真偽値（bool）型である",
            "truncated は真偽値（bool）型である"
          ],
          "explanation": "`info` は必ず辞書型（`dict`）でなければならず、文字列やリストなどを直接返すと Gymnasium の環境チェッカー（`check_env`）で例外エラーが発生します。"
        },
        "en": {
          "question": "According to Gymnasium specifications, which statement about `step()` return types is INCORRECT?",
          "options": [
            "`info` must be a string (`str`)",
            "`reward` must be numeric (`int` or `float`)",
            "`terminated` must be a boolean (`bool`)",
            "`truncated` must be a boolean (`bool`)"
          ],
          "explanation": "`info` must always be a dictionary (`dict`), containing diagnostic metadata. Passing a string violates the Gymnasium API contract."
        },
        "correctIndex": 0,
        "sectionId": "12.4",
        "sectionTitleJa": "12.4 step戻り値型仕様と check_env 検証",
        "sectionTitleEn": "12.4 Step Signature & check_env"
      },
      {
        "id": "ch12_q4_v2",
        "code": "from gymnasium.utils.env_checker import check_env\n\nenv = CustomGridEnv()\ncheck_env(env)",
        "ja": {
          "question": "自作した環境が Gymnasium の公式API仕様に正しく準拠しているかを自動テストする便利なユーティリティ関数はどれですか？",
          "options": [
            "`gymnasium.utils.env_checker.check_env(env)`",
            "`gymnasium.validate_all(env)`",
            "`env.assert_correct()`",
            "`gymnasium.debug.run_diagnostics()`"
          ],
          "explanation": "Gymnasiumには `check_env(env)` という公式チェッカー関数が用意されており、空間の整合性や `reset()` / `step()` の戻り値の型・形状を網羅的に自動検証してくれます。"
        },
        "en": {
          "question": "Which official utility function validates whether a custom environment conforms strictly to Gymnasium API standards?",
          "options": [
            "`gymnasium.utils.env_checker.check_env(env)`",
            "`gymnasium.validate_all(env)`",
            "`env.assert_correct()`",
            "`gymnasium.debug.run_diagnostics()`"
          ],
          "explanation": "`check_env(env)` inspects action/observation spaces, verifies `step` and `reset` return types, and catches common compliance bugs."
        },
        "correctIndex": 0,
        "sectionId": "12.4",
        "sectionTitleJa": "12.4 step戻り値型仕様と check_env 検証",
        "sectionTitleEn": "12.4 Step Signature & check_env"
      },
      {
        "id": "ch12_q4_v3",
        "code": "# Registering custom env with Gymnasium:\nimport gymnasium as gym\ngym.register(\n    id='CustomTreasure-v0',\n    entry_point='my_module:CustomTreasureEnv',\n    max_episode_steps=100\n)",
        "ja": {
          "question": "`gym.register()` を用いて自作環境を登録する最大のメリットは何ですか？",
          "options": [
            "他の標準環境と同様に `gym.make('CustomTreasure-v0')` でどこからでも簡単にインスタンス化できるようになる",
            "エージェントの学習速度が自動的に10倍になる",
            "Pythonのソースコードが暗号化されて外部から見えなくなる",
            "報酬の計算が不要になる"
          ],
          "explanation": "`gym.register` に環境IDとエントリポイントを登録しておくことで、`gym.make('ID名')` を呼び出すだけで環境を簡単に呼び出せるようになり、コードの再利用性とモジュール性が大幅に向上します。"
        },
        "en": {
          "question": "What is the primary benefit of registering a custom environment using `gym.register()`?",
          "options": [
            "It enables instantiating the environment anywhere via `gym.make('CustomTreasure-v0')` just like built-in benchmarks",
            "It automatically accelerates training speed by 10x",
            "It encrypts Python bytecode",
            "It eliminates the need for calculating rewards"
          ],
          "explanation": "Registering with Gymnasium assigns a standardized environment ID, permitting instantiation via `gym.make(...)` with built-in wrapper wrappers and step limits."
        },
        "correctIndex": 0,
        "sectionId": "12.4",
        "sectionTitleJa": "12.4 step戻り値型仕様と check_env 検証",
        "sectionTitleEn": "12.4 Step Signature & check_env"
      }
    ]
  ],
  "13": [
    [
      {
        "id": "ch13_q1_v1",
        "code": "for episode in range(total_episodes):\n    obs, info = env.reset()\n    done = False\n    while not done:\n        action = choose_action(obs, epsilon)\n        next_obs, reward, terminated, truncated, info = env.step(action)\n        update_q_table(obs, action, reward, next_obs)\n        obs = next_obs\n        done = terminated or truncated",
        "ja": {
          "question": "強化学習の学習ループにおいて、`obs = next_obs` の代入を行わなかった場合に発生する致命的な不具合は何ですか？",
          "options": [
            "エージェントが移動したにもかかわらず、Qテーブルの更新や次の行動選択が常に最初の状態に基づいて行われてしまい、学習が崩壊する",
            "Python の文法エラーが発生して1行目で停止する",
            "環境が自動的にリセットされて報酬が無限に増える",
            "NumPyのメモリが枯渇する"
          ],
          "explanation": "`obs = next_obs` を忘れると、エージェントが環境内で移動した後の新しい状態が変数に反映されず、前の古い状態に基づいて次の行動選択と学習を続けてしまうため、正しい状態遷移が学習できなくなります。"
        },
        "en": {
          "question": "In an RL training loop, what fatal bug occurs if the assignment `obs = next_obs` is accidentally omitted?",
          "options": [
            "The agent advances in the environment but updates and chooses future actions using stale state data, breaking learning",
            "A Python SyntaxError halts execution on line 1",
            "The environment continuously auto-resets granting infinite rewards",
            "NumPy runs out of memory"
          ],
          "explanation": "Without updating `obs = next_obs`, the agent perpetually perceives itself at the old state, generating invalid transition updates."
        },
        "correctIndex": 0,
        "sectionId": "13.1",
        "sectionTitleJa": "13.1 強化学習トレーニングループの実装",
        "sectionTitleEn": "13.1 RL Training Loop Architecture"
      },
      {
        "id": "ch13_q1_v2",
        "code": "# Tracking training progress:\nepisode_rewards = []\nfor ep in range(1000):\n    # ... episode rollout ...\n    episode_rewards.append(total_reward)\n\n# How to visualize learning convergence?",
        "ja": {
          "question": "強化学習エージェントが順調に学習（成長）しているかを確認するための最も標準的な可視化グラフは何ですか？",
          "options": [
            "横軸に「エピソード番号」、縦軸に「1エピソードあたりの合計獲得報酬（およびその移動平均）」をプロットした学習曲線",
            "横軸に「CPU使用率」、縦軸に「メモリ残量」をプロットした棒グラフ",
            "Qテーブルのすべての数値を円グラフにしたもの",
            "エージェントの現在位置のヒストグラム"
          ],
          "explanation": "強化学習の進捗確認には、エピソード経過に伴って合計獲得報酬が上昇し安定するかを観察する「学習曲線（Learning Curve: 横軸エピソード、縦軸累積報酬の移動平均）」をプロットするのが標準です。"
        },
        "en": {
          "question": "What is the standard diagnostic plot used to verify whether an RL agent is successfully learning?",
          "options": [
            "A learning curve plotting episode index on the horizontal axis and cumulative episode return (or moving average) on the vertical axis",
            "A bar chart of CPU usage against available RAM",
            "A pie chart of all raw Q-table entries",
            "A histogram of spatial agent coordinates"
          ],
          "explanation": "Plotting episode return (with a moving average smoothing window) over episode index reveals whether the agent's policy is improving and converging."
        },
        "correctIndex": 0,
        "sectionId": "13.1",
        "sectionTitleJa": "13.1 強化学習トレーニングループの実装",
        "sectionTitleEn": "13.1 RL Training Loop Architecture"
      },
      {
        "id": "ch13_q1_v3",
        "code": "# Batching vs Online RL:\n# Online Q-learning updates Q after every step env.step(action)\n# Offline/Batch RL learns from a fixed dataset of transitions without interaction",
        "ja": {
          "question": "自作環境で1ステップ行動するごとにリアルタイムにQ値を更新していく学習形態を何と呼びますか？",
          "options": [
            "オンライン強化学習（Online Reinforcement Learning）",
            "オフライン強化学習（Offline Reinforcement Learning）",
            "教師あり学習（Supervised Learning）",
            "蒸留（Distillation）"
          ],
          "explanation": "エージェントが環境と対話しながら、その場で得られた直近の経験 `(s, a, r, s')` を用いて即座にモデルを更新するスタイルを「オンライン学習（Online RL）」と呼びます。"
        },
        "en": {
          "question": "What term describes the training paradigm where the agent updates its value function step-by-step during live environment interaction?",
          "options": [
            "Online Reinforcement Learning",
            "Offline Reinforcement Learning",
            "Supervised Learning",
            "Knowledge Distillation"
          ],
          "explanation": "Online RL involves continuously updating policies or value estimates directly from real-time transitions acquired through ongoing environment interaction."
        },
        "correctIndex": 0,
        "sectionId": "13.1",
        "sectionTitleJa": "13.1 強化学習トレーニングループの実装",
        "sectionTitleEn": "13.1 RL Training Loop Architecture"
      }
    ],
    [
      {
        "id": "ch13_q2_v1",
        "code": "# Exponential epsilon decay:\n# epsilon = max(epsilon_min, epsilon * decay_rate)\nepsilon = 1.0\ndecay_rate = 0.90\nepsilon_min = 0.05\n# After 2 episodes, what is epsilon?",
        "ja": {
          "question": "初期 ε = 1.0、減衰率 decay_rate = 0.90、下限 ε_min = 0.05 のとき、2エピソード終了後の ε の値はいくらですか？",
          "options": [
            "0.81 （1.0 * 0.9 = 0.9, 0.9 * 0.9 = 0.81）",
            "0.90",
            "0.05",
            "0.70"
          ],
          "explanation": "1エピソード終了後: $\\epsilon = 1.0 \\times 0.90 = 0.90$。\n2エピソード終了後: $\\epsilon = 0.90 \\times 0.90 = 0.81$ です。いずれも下限 0.05 より大きいため 0.81 となります。"
        },
        "en": {
          "question": "Starting with ε = 1.0, decay rate = 0.90, and ε_min = 0.05, what is ε after 2 completed episodes using multiplicative decay?",
          "options": [
            "0.81 (1.0 * 0.9 = 0.9, then 0.9 * 0.9 = 0.81)",
            "0.90",
            "0.05",
            "0.70"
          ],
          "explanation": "After episode 1: $1.0 \\times 0.9 = 0.90$. After episode 2: $0.90 \\times 0.9 = 0.81$. Both exceed $\\epsilon_{min} = 0.05$."
        },
        "correctIndex": 0,
        "sectionId": "13.2",
        "sectionTitleJa": "13.2 ε-decay（減衰）スケジュール計算トレース",
        "sectionTitleEn": "13.2 ε-Decay Schedules"
      },
      {
        "id": "ch13_q2_v2",
        "code": "# Why decay epsilon?\n# Early stage: High epsilon (e.g. 1.0)\n# Late stage: Low epsilon (e.g. 0.01)",
        "ja": {
          "question": "学習初期には ε を高く保ち、エピソードが進むにつれて ε を小さく減衰（decay）させる目的は何ですか？",
          "options": [
            "序盤は様々なルートを積極的に探索して良い行動を発見させ、終盤は学習した最善の知識を活用して行動を安定・収束させるため",
            "コンピュータの計算速度を高速化するため",
            "エピソード終盤にQテーブルのサイズを縮小させるため",
            "Gymnasiumのバージョン警告を回避するため"
          ],
          "explanation": "初期はまだ何も環境を知らないためランダムに行動して広く地図を探索（Exploration）させ、学習が進んで価値テーブルが育ってきた終盤には活用（Exploitation）へと重心を移して高スコアを獲得・定着させるためです。"
        },
        "en": {
          "question": "Why do reinforcement learning practitioners decay epsilon (ε) from a high initial value down to a small minimum?",
          "options": [
            "To prioritize exploration of unvisited states early on, transitioning toward exploiting learned high-value knowledge as training converges",
            "To accelerate computer floating-point calculations",
            "To shrink the physical size of the Q-table in memory",
            "To suppress Gymnasium library deprecation warnings"
          ],
          "explanation": "Decaying $\\epsilon$ balances the exploration-exploitation tradeoff: high exploration initially builds comprehensive state knowledge, followed by high exploitation to refine and stabilize optimal behavior."
        },
        "correctIndex": 0,
        "sectionId": "13.2",
        "sectionTitleJa": "13.2 ε-decay（減衰）スケジュール計算トレース",
        "sectionTitleEn": "13.2 ε-Decay Schedules"
      },
      {
        "id": "ch13_q2_v3",
        "code": "# Linear epsilon decay:\n# epsilon = max(eps_min, eps_start - (eps_start - eps_min) * (ep / decay_episodes))\n# eps_start = 1.0, eps_min = 0.1, decay_episodes = 100\n# At ep = 50 (halfway), what is epsilon?",
        "ja": {
          "question": "線形減衰において、開始 ε = 1.0、最小 ε = 0.1、減衰完了エピソード数 = 100 のとき、50エピソード時点での ε の値はいくらですか？",
          "options": [
            "0.55 （1.0 - 0.9 * 0.5 = 1.0 - 0.45）",
            "0.50",
            "0.10",
            "0.45"
          ],
          "explanation": "全体で $1.0 - 0.1 = 0.9$ 減少します。半分（50エピソード）進行した時点では $0.9 \\times 0.5 = 0.45$ 減少するため、$1.0 - 0.45 = 0.55$ となります。"
        },
        "en": {
          "question": "Using linear decay with start ε = 1.0, min ε = 0.1, and decay window = 100 episodes, what is ε at episode 50?",
          "options": [
            "0.55 (1.0 - 0.9 * 0.5 = 1.0 - 0.45)",
            "0.50",
            "0.10",
            "0.45"
          ],
          "explanation": "The total span to decay is $1.0 - 0.1 = 0.9$. At $ep = 50$, half the span has decayed ($0.9 \\times 0.5 = 0.45$). Therefore $\\epsilon = 1.0 - 0.45 = 0.55$."
        },
        "correctIndex": 0,
        "sectionId": "13.2",
        "sectionTitleJa": "13.2 ε-decay（減衰）スケジュール計算トレース",
        "sectionTitleEn": "13.2 ε-Decay Schedules"
      }
    ],
    [
      {
        "id": "ch13_q3_v1",
        "code": "# Evaluation mode after training:\ndef evaluate_agent(env, Q_table, num_test_episodes=10):\n    for _ in range(num_test_episodes):\n        obs, _ = env.reset()\n        done = False\n        while not done:\n            # Which action selection should be used?\n            action = np.argmax(Q_table[obs])\n            obs, r, term, trunc, _ = env.step(action)\n            done = term or trunc",
        "ja": {
          "question": "学習完了後にエージェントの「真の実力（性能評価）」をテストする際、行動選択コードとして最も適切なものはどれですか？",
          "options": [
            "探索（ランダム性）を完全に排除したグリーディ選択 `action = np.argmax(Q_table[obs])`",
            "完全にランダムな行動選択 `action = env.action_space.sample()`",
            "ε = 0.5 の ε-greedy 選択",
            "常に `action = 0` を固定で選ぶ"
          ],
          "explanation": "テスト（評価）フェーズでは、学習したQ値の中で最大の期待収益をもつ最善手のみを一貫して選ぶ純粋なグリーディ選択（`epsilon = 0`、`np.argmax`）を行い、Qテーブルの更新も停止させて評価します。"
        },
        "en": {
          "question": "When benchmarking the true policy performance of a trained agent during testing, how should actions be selected?",
          "options": [
            "Pure greedy selection without random exploration: `action = np.argmax(Q_table[obs])`",
            "Uniformly random actions: `action = env.action_space.sample()`",
            "ε-greedy exploration with ε = 0.5",
            "Always hardcoding action 0"
          ],
          "explanation": "In evaluation mode, exploration is eliminated (setting $\\epsilon = 0$ or selecting $\\arg\\max_a Q(s, a)$) to test the deterministic quality of the learned policy."
        },
        "correctIndex": 0,
        "sectionId": "13.3",
        "sectionTitleJa": "13.3 評価フェーズにおけるグリーディ方策適用",
        "sectionTitleEn": "13.3 Greedy Evaluation Mode"
      },
      {
        "id": "ch13_q3_v2",
        "code": "# Ties in np.argmax:\n# Q = [0.5, 0.5, 0.2, 0.1]\n# np.argmax(Q) returns the first maximum index: 0",
        "ja": {
          "question": "複数の行動で最大Q値が同点（例: `[0.5, 0.5, 0.2, 0.1]`）のとき、単純に `np.argmax(Q)` を使うとどのような偏り（バイアス）が生じますか？",
          "options": [
            "同点の中で常に先頭のインデックス（0番）が優先して選ばれるため、同等に優れた別の行動が無視される偏りが生じる",
            "NumPyがランダムにシャッフルして選ぶ",
            "IndexError がスローされる",
            "すべての値が 0 にリセットされる"
          ],
          "explanation": "Pythonの `np.argmax` は最大値が複数ある場合、常に最小のインデックス番号を返します。この偏りを防ぐには、最大値を持つインデックス候補をすべて抽出し、その中からランダムに1つ選ぶ実装が推奨されます。"
        },
        "en": {
          "question": "When multiple actions share identical maximum Q-values (e.g. `[0.5, 0.5, 0.2, 0.1]`), what bias does standard `np.argmax` introduce?",
          "options": [
            "It deterministically selects the lowest index (action 0), ignoring other equally optimal actions",
            "NumPy randomly samples among the tied maximums",
            "An IndexError exception is raised",
            "All values in the array are reset to 0"
          ],
          "explanation": "Default `np.argmax` breaks ties deterministically by returning the first index occurrence. To break ties uniformly, one should randomly sample among all maximizing actions."
        },
        "correctIndex": 0,
        "sectionId": "13.3",
        "sectionTitleJa": "13.3 評価フェーズにおけるグリーディ方策適用",
        "sectionTitleEn": "13.3 Greedy Evaluation Mode"
      },
      {
        "id": "ch13_q3_v3",
        "code": "# Saving and loading learned Q-table:\nimport numpy as np\nnp.save('q_table.npy', Q_table)\nloaded_Q = np.load('q_table.npy')",
        "ja": {
          "question": "学習したQテーブル（NumPy配列）をディスクに保存し、次回起動時に再利用するための最も標準的なファイル形式と関数はどれですか？",
          "options": [
            "`.npy` 形式（`np.save` / `np.load`）",
            "`.txt` ファイルに1文字ずつ文字列として書き込む",
            "`pickle` ではなく HTMLファイルとしてエクスポートする",
            "Gymnasiumの内部クラウドに送信する"
          ],
          "explanation": "NumPy配列の永続化には、バイナリ形式で高速かつデータ型・形状を正確に保持できる `.npy` 形式（`np.save` / `np.load`）が標準的に用いられます。"
        },
        "en": {
          "question": "What is the standard, efficient method to persist and reload a learned NumPy Q-table on disk?",
          "options": [
            "Using `.npy` binary files with `np.save` and `np.load`",
            "Writing the array element-by-element into a plaintext `.txt` file",
            "Exporting the table as an HTML file",
            "Streaming the tensor to Gymnasium cloud servers"
          ],
          "explanation": "NumPy's native `.npy` binary serialization (`np.save` / `np.load`) preserves multidimensional array shapes, floating-point precision, and loads instantaneously."
        },
        "correctIndex": 0,
        "sectionId": "13.3",
        "sectionTitleJa": "13.3 評価フェーズにおけるグリーディ方策適用",
        "sectionTitleEn": "13.3 Greedy Evaluation Mode"
      }
    ],
    [
      {
        "id": "ch13_q4_v1",
        "code": "# Bad reward design example:\n# Goal reward = +10\n# Small coin reward = +2 on tile (1, 2)\n# Coin respawns every step!\n# What does the agent learn?",
        "ja": {
          "question": "ゴール報酬が +10 である環境で、途中のマスに踏むたび無制限に +2 を獲得できるコインを配置したとき、エージェントが学習してしまう想定外の行動は何ですか？",
          "options": [
            "ゴールに向かうのをやめ、コインのマスを行き来して無限に +2 を稼ぎ続けるループ行動（報酬ハッキング）",
            "コインを避けて最短距離でゴールへ直行する",
            "エージェントが直ちに自滅する",
            "Qテーブルがゼロクリアされる"
          ],
          "explanation": "エージェントは設計者の「意図」ではなく「与えられた報酬の総和の最大化」だけを追求します。ゴールで1度きりの +10 を得るより、コインを何十回も往復して +20, +40 と稼ぐ方が高得点になるため、永久ループ行動を学習してしまいます（報酬ハッキング）。"
        },
        "en": {
          "question": "In an environment offering +10 for the goal, if an intermediate tile awards a respawning +2 coin every step, what pathological behavior does the agent learn?",
          "options": [
            "It abandons the goal and oscillates indefinitely on the coin tile to amass infinite +2 rewards (reward hacking)",
            "It ignores the coin and rushes to the goal",
            "It immediately terminates itself",
            "The Q-table collapses to zeros"
          ],
          "explanation": "RL agents optimize cumulative scalar reward, not designer intent. Lingering to collect an unbounded stream of small bonuses yields far higher return than terminating at the goal."
        },
        "correctIndex": 0,
        "sectionId": "13.4",
        "sectionTitleJa": "13.4 報酬設計（Reward Shaping）と報酬ハッキング防止",
        "sectionTitleEn": "13.4 Reward Shaping & Hacking Prevention"
      },
      {
        "id": "ch13_q4_v2",
        "code": "# Sparse reward vs Dense reward:\n# Sparse: 0 at all intermediate steps, +1 only at Goal\n# Dense: step_cost + distance_to_goal heuristic",
        "ja": {
          "question": "報酬が「ゴール時のみ +1、それ以外はすべて 0」という疎な報酬（Sparse Reward）の環境において、学習が困難になる根本的な原因は何ですか？",
          "options": [
            "偶然ゴールに到達するまで一度も正のフィードバックが得られず、どの行動が良いかの情報がQテーブルに逆伝播しないため",
            "計算量が多すぎてCPUが過熱するため",
            "エピソードが1ステップで必ず強制終了するため",
            "エージェントが逆方向にしか進めなくなるため"
          ],
          "explanation": "疎な報酬環境では、エージェントがランダム探索で奇跡的にゴールを踏むまで全ステップで報酬0となりTD誤差が発生しません。そのためQ値が全く更新されず、広大な環境では探索が迷子になります。"
        },
        "en": {
          "question": "Why is training notoriously challenging under a sparse reward structure (0 everywhere except +1 at goal)?",
          "options": [
            "Until the agent randomly stumbles onto the goal, TD errors are 0 and no gradient or value updates propagate to early states",
            "It incurs prohibitive CPU floating-point overhead",
            "Episodes terminate after one step",
            "The agent is constrained to backwards movement"
          ],
          "explanation": "With sparse rewards, all unguided trajectories receive identical zero rewards, providing zero informational signal to differentiate good moves from bad moves until the goal is found by chance."
        },
        "correctIndex": 0,
        "sectionId": "13.4",
        "sectionTitleJa": "13.4 報酬設計（Reward Shaping）と報酬ハッキング防止",
        "sectionTitleEn": "13.4 Reward Shaping & Hacking Prevention"
      },
      {
        "id": "ch13_q4_v3",
        "code": "# Discount factor gamma tuning:\n# gamma = 0.0 -> purely myopic (immediate reward only)\n# gamma = 0.99 -> far-sighted (values long-term future rewards)",
        "ja": {
          "question": "自作ゲームにおいて割引率 γ を `0.0` に設定した場合、エージェントの意思決定はどうなりますか？",
          "options": [
            "次の1手で得られる即時報酬のみを最大化する極端な近視眼的（Myopic）エージェントになる",
            "無限の未来の報酬を均等に考慮する遠見的エージェントになる",
            "すべての行動の価値が等しく 0 になる",
            "エージェントが動かなくなる"
          ],
          "explanation": "収益の定義式 $G_t = R_{t+1} + \\gamma R_{t+2} + \\dots$ において $\\gamma = 0$ とすると、$G_t = R_{t+1}$ となり直後の即時報酬しか評価しなくなります。将来のゴール報酬を見据えた迂回や戦略的行動が不可能になります。"
        },
        "en": {
          "question": "If the discount factor γ is set to exactly 0.0 in custom game training, how does the agent make decisions?",
          "options": [
            "It becomes completely myopic, optimizing solely for the immediate reward of the very next step",
            "It becomes infinitely far-sighted, weighting distant future rewards equally",
            "All state-action values become identically 0",
            "The agent ceases moving entirely"
          ],
          "explanation": "With $\\gamma = 0$, return $G_t = R_{t+1}$. The agent ignores all future consequences and cares solely about the immediate one-step payoff."
        },
        "correctIndex": 0,
        "sectionId": "13.4",
        "sectionTitleJa": "13.4 報酬設計（Reward Shaping）と報酬ハッキング防止",
        "sectionTitleEn": "13.4 Reward Shaping & Hacking Prevention"
      }
    ]
  ],
  "14": [
    [
      {
        "id": "ch14_q1_v1",
        "code": "# Tabular Q-learning: Q[state, action] as matrix/table\n# Deep Q-Network: Q(s, a; theta) approximated by Neural Network parameterized by weights theta",
        "ja": {
          "question": "Atariのゲーム画面（画像入力）や自動運転のような複雑なタスクにおいて、表形式Q学習に代わって深層強化学習（DQN）が必要とされる理由は何ですか？",
          "options": [
            "状態数が膨大・無限（ピクセルの組み合わせなど）であり、表形式ではメモリ不足かつ未訪問状態への汎化ができないため、ニューラルネットによる特徴抽出と関数近似が必要だから",
            "表形式Q学習はPythonで動かすことが禁止されているから",
            "DQNは報酬を一切定義しなくても自動的に正解を導き出せるから",
            "ディープラーニングを使うと必ず1エピソードで学習が完了するから"
          ],
          "explanation": "画像などの高次元入力では、状態の組み合わせ数が宇宙の原子数よりも多くなり表として保持できません。ニューラルネットワークを関数近似器として用いることで、似たような状態の特徴を圧縮・汎化して未知の状態でも適切なQ値を推論できるようになります。"
        },
        "en": {
          "question": "Why are Deep Q-Networks (DQN) required instead of tabular Q-learning for complex tasks like Atari screen playing or autonomous driving?",
          "options": [
            "State combinations (e.g., pixel grids) are vast or continuous, making table storage impossible and requiring neural networks for representation and generalization",
            "Python prohibits execution of tabular Q-learning algorithms",
            "DQN eliminates the need to specify reward functions",
            "DQN converges to optimal policy within a single episode"
          ],
          "explanation": "High-dimensional visual state spaces contain far too many configurations for table lookups. Deep neural networks approximate $Q(s, a; \\theta)$, generalizing across unseen but semantically similar states."
        },
        "correctIndex": 0,
        "sectionId": "14.1",
        "sectionTitleJa": "14.1 表形式の限界と深層強化学習（DQN: 関数近似）",
        "sectionTitleEn": "14.1 Tabular Limits & DQN"
      },
      {
        "id": "ch14_q1_v2",
        "code": "# DQN Loss Function:\n# Loss(theta) = E [ ( r + gamma * max_a' Q(s', a'; theta_target) - Q(s, a; theta) )^2 ]",
        "ja": {
          "question": "DQN（Deep Q-Network）のニューラルネットワークの学習（重み更新）は、機械学習のどのような枠組みで行われますか？",
          "options": [
            "TDターゲットと現在のネットワーク出力との平均二乗誤差（MSE）を最小化する勾配降下法（回帰問題）",
            "正解ラベルと予測確率のクロスエントロピー損失を用いた分類問題",
            "教師なし学習としての主成分分析（PCA）",
            "遺伝的アルゴリズムによる突然変異"
          ],
          "explanation": "DQNでは、ベルマン更新目標であるTDターゲット $y = r + \\gamma \\max Q(s', a')$ を疑似的な教師信号（目標値）とし、現在のQネットワークの出力 $Q(s, a)$ との差の二乗誤差 $(y - Q)^2$ を損失関数として勾配降下法（誤差逆伝播法）で最適化します。"
        },
        "en": {
          "question": "How is the neural network in a DQN trained to update its weights?",
          "options": [
            "Via gradient descent minimizing the Mean Squared Error (MSE) between the TD target and predicted Q(s, a) (regression framework)",
            "As a classification problem using categorical cross-entropy loss against ground-truth labels",
            "Via unsupervised Principal Component Analysis (PCA)",
            "Using biological genetic mutation algorithms"
          ],
          "explanation": "DQN formulates learning as a regression problem: treating the bootstrapped TD target $r + \\gamma \\max_{a'} Q(s', a')$ as the pseudo-label and minimizing mean squared Bellman error via backpropagation."
        },
        "correctIndex": 0,
        "sectionId": "14.1",
        "sectionTitleJa": "14.1 表形式の限界と深層強化学習（DQN: 関数近似）",
        "sectionTitleEn": "14.1 Tabular Limits & DQN"
      },
      {
        "id": "ch14_q1_v3",
        "code": "# Policy Gradient methods vs Value-based methods:\n# Value-based (Q-learning, DQN): Learn Q(s, a), act greedily\n# Policy-based (REINFORCE, PPO): Directly parameterize policy pi(a | s; theta)",
        "ja": {
          "question": "ロボットのアーム制御のように「行動が離散的（ボタン）ではなく連続的なトルク・角度」であるタスクに適した強化学習の手法分類はどれですか？",
          "options": [
            "方策勾配法（Policy Gradient法 / PPOやSACなど）",
            "表形式Q学習",
            "多腕バンディット問題",
            "動的計画法（値反復法）"
          ],
          "explanation": "Q-learningやDQNなどの価値ベース手法は離散的な $\\max_a Q(s, a)$ を探すため連続行動空間を直接扱いにくい弱点があります。一方、方策勾配法（Policy Gradient）は確率分布や平均・分散を直接出力するため、連続的な行動（ロボット制御など）の扱いに非常に適しています。"
        },
        "en": {
          "question": "Which family of RL algorithms is naturally suited for continuous action spaces, such as controlling robotic motor torque angles?",
          "options": [
            "Policy Gradient methods (e.g., PPO, SAC)",
            "Tabular Q-learning",
            "Multi-armed bandit algorithms",
            "Value iteration dynamic programming"
          ],
          "explanation": "Value-based methods struggle with continuous action spaces because computing $\\max_a Q(s, a)$ requires solving an optimization problem at every step. Policy gradient methods parameterize actions directly as continuous probability distributions."
        },
        "correctIndex": 0,
        "sectionId": "14.1",
        "sectionTitleJa": "14.1 表形式の限界と深層強化学習（DQN: 関数近似）",
        "sectionTitleEn": "14.1 Tabular Limits & DQN"
      }
    ],
    [
      {
        "id": "ch14_q2_v1",
        "code": "# Experience Replay Buffer:\n# memory.append((state, action, reward, next_state, done))\n# batch = random.sample(memory, batch_size)",
        "ja": {
          "question": "DQNにおいて、過去の経験 (s, a, r, s', done) をバッファに保存し、ランダムにサンプリングして学習する「経験再生（Experience Replay）」の主な目的は何ですか？",
          "options": [
            "連続した時系列ステップ間のデータの相関を断ち切り、サンプルの独立同分布（i.i.d.）性を高めてニューラルネットの学習を安定させるため",
            "メモリの使用量を極限まで削減するため",
            "エージェントが過去の失敗をすべて忘れるようにするため",
            "ゲームのFPS（フレームレート）を向上させるため"
          ],
          "explanation": "連続したステップのデータは直前の状態と極めて強い相関があり、そのまま順に学習するとニューラルネットの重みが特定の局所解に偏り発散しやすくなります。Experience Replayによって時系列の相関をシャッフルして独立同分布（i.i.d.）に近づけることで学習を安定化させます。"
        },
        "en": {
          "question": "What is the primary motivation for using an Experience Replay buffer in DQN?",
          "options": [
            "To break strong temporal correlations between sequential transitions and provide independently distributed (i.i.d.) minibatches for stable neural network training",
            "To minimize GPU memory consumption",
            "To ensure the agent forgets all past failures",
            "To increase game frame rendering rates"
          ],
          "explanation": "Sequential transitions are heavily correlated, which destabilizes gradient descent. Randomly sampling mini-batches from an experience buffer breaks correlation and reuses transitions efficiently."
        },
        "correctIndex": 0,
        "sectionId": "14.2",
        "sectionTitleJa": "14.2 DQNの安定化技術（Experience Replay と Target Network）",
        "sectionTitleEn": "14.2 Experience Replay & Target Network"
      },
      {
        "id": "ch14_q2_v2",
        "code": "# Target Network:\n# Main Q-network: Q(s, a; theta)  <- updated every step\n# Target network: Q(s, a; theta_target) <- weights copied periodically (e.g. every 1000 steps)",
        "ja": {
          "question": "DQNで「ターゲットネットワーク（Target Network）」を別に用意し、その重みを一定周期ごとにコピーして固定する理由は何ですか？",
          "options": [
            "更新目標（TDターゲット）がステップごとに変動する「動く標的問題（Moving Target Problem）」を防ぎ、学習の振動や発散を抑えるため",
            "2台のGPUで別々にゲームを実行するため",
            "Q値が常に正の数になるように制限するため",
            "ネットワークの層数を2倍に増やすため"
          ],
          "explanation": "同じネットワークで現在値の推定と更新目標の算出を同時に行うと、犬が自分の尻尾を追いかけるように目標が毎ステップ激しく動き学習が発散します。目標計算用のターゲットネットワークの重みを一時的に固定することで、学習を安定させます。"
        },
        "en": {
          "question": "Why does DQN maintain a separate Target Network with periodically updated parameters?",
          "options": [
            "To stabilize training by mitigating the 'moving target problem', where the update target changes constantly as weights update",
            "To split game computation across two independent GPUs",
            "To force all Q-values to remain strictly positive",
            "To double the number of layers in the model"
          ],
          "explanation": "Updating weights while simultaneously using the same weights to generate targets causes instability (chasing a moving target). Periodically freezing target network parameters provides a fixed, stable regression target."
        },
        "correctIndex": 0,
        "sectionId": "14.2",
        "sectionTitleJa": "14.2 DQNの安定化技術（Experience Replay と Target Network）",
        "sectionTitleEn": "14.2 Experience Replay & Target Network"
      },
      {
        "id": "ch14_q2_v3",
        "code": "# Nature DQN (Mnih et al., 2015):\n# Combines:\n# 1. Convolutional Neural Networks (CNN) for raw pixels\n# 2. Experience Replay\n# 3. Target Network",
        "ja": {
          "question": "2015年にDeepMindがNature誌で発表し、Atariゲームで人間のトッププレイヤーを凌駕したDQN論文の画期的な意義は何ですか？",
          "options": [
            "ゲームごとの専用ルールを手動プログラミングせず、生の画面ピクセルとスコアのみを入力として単一の深層強化学習アルゴリズムで超人的プレイを達成したこと",
            "チェスのルールをすべてデータベースに記録したこと",
            "量子コンピュータを用いて瞬時に最適解を計算したこと",
            "AIが感情を持ってゲームを楽しむようになったこと"
          ],
          "explanation": "Nature DQNの画期的な点は、ゲームごとの特徴量を人間が手作業で設計する（Feature engineering）ことなく、生画面のピクセル（画像）と報酬シグナルだけをエンドツーエンド（端から端まで）で深層学習させて人間以上のスコアを叩き出した汎用性の高さにあります。"
        },
        "en": {
          "question": "What was the landmark breakthrough demonstrated by DeepMind's Nature DQN paper (Mnih et al., 2015)?",
          "options": [
            "Achieving human-level performance across diverse Atari games end-to-end from raw pixels using the same algorithm without handcrafted game features",
            "Hardcoding complete lookup tables for every chess permutation",
            "Solving reinforcement learning on quantum computers",
            "Endowing AI models with biological emotion"
          ],
          "explanation": "Nature DQN demonstrated that a single deep reinforcement learning architecture could master human-level skills directly from raw screen pixels and game scores across dozens of Atari 2600 games without handcrafted features."
        },
        "correctIndex": 0,
        "sectionId": "14.2",
        "sectionTitleJa": "14.2 DQNの安定化技術（Experience Replay と Target Network）",
        "sectionTitleEn": "14.2 Experience Replay & Target Network"
      }
    ],
    [
      {
        "id": "ch14_q3_v1",
        "code": "# Vibe coding trap:\n# AI generates: Q[s, a] = r + gamma * max(Q[s'])  # Missing learning rate alpha and Q[s, a] blending!\n# Output looks plausible, but learning diverges.",
        "ja": {
          "question": "AIコーディング支援（CopilotやLLM）を活用して強化学習コードを作成する際、「バイブスコーディング（雰囲気実装）」に頼ると特に陥りやすい危険性は何ですか？",
          "options": [
            "数式やインデックスの微妙なミス（学習率αの抜けやOff/On-policyの混同）があっても文法エラーにならずプログラムが動いてしまうため、静かに学習が失敗することに気づけない危険",
            "AIが生成したコードはPythonインタープリタで実行できない危険",
            "AIが自動的にGPUを購入してしまう危険",
            "AIを使うとコードの文字数が常に10倍に増える危険"
          ],
          "explanation": "機械学習・強化学習では、数式のわずかな誤り（αの適用忘れ、インデックスずれ、即時報酬の符号反転など）があってもエラーが出ずにコードが完走してしまいます。エンジニア自身が数学的背景と状態遷移をトレースして検証する能力が不可欠です。"
        },
        "en": {
          "question": "What is the critical danger of 'vibe coding' (blindly accepting generated code) when developing reinforcement learning algorithms?",
          "options": [
            "Subtle mathematical bugs (e.g. omitted learning rate α or shifted index) execute without syntax errors, failing silently during training without obvious crashes",
            "AI-generated code is inherently rejected by Python interpreters",
            "The model automatically purchases cloud GPU hardware",
            "AI outputs always inflate code length by 10x"
          ],
          "explanation": "RL implementations fail silently: buggy equations still produce executable code and loss curves, but converge to degenerate policies. Developers must mathematically verify state traces rather than relying on vibes."
        },
        "correctIndex": 0,
        "sectionId": "14.3",
        "sectionTitleJa": "14.3 AI生成コードの検証責任と単体テスト",
        "sectionTitleEn": "14.3 Code Verification & Unit Testing"
      },
      {
        "id": "ch14_q3_v2",
        "code": "# Verification checklist for RL implementations:\n# 1. State/Action dimensions match\n# 2. Reward signs (+/-) are aligned with goals\n# 3. Terminal state handling: max Q(s', a') = 0 when terminated\n# 4. Learning rate 0 < alpha <= 1",
        "ja": {
          "question": "強化学習アルゴリズムの実装検証において、「終端状態（terminal state）」の遷移におけるTDターゲット計算で必ず満たすべき重要な原則はどれですか？",
          "options": [
            "`terminated = True` のとき、次の状態の将来価値 `max Q(s', a')` は 0 として計算し、即時報酬 `r` のみをターゲットにすること",
            "終端状態の次の状態のQ値を 1,000,000 にすること",
            "終端状態では `reward` を必ず 0 に書き換えること",
            "終端状態に達したら直ちにQテーブルを削除すること"
          ],
          "explanation": "終端状態（ゲームオーバーやゴール到達）の後は将来が存在しないため、将来価値 $\\gamma \\max Q(s', a')$ は数学的に存在せず 0 になります。これを怠って未定義の次状態のQ値を足し続けると、エピソード終了の価値が過大評価されて学習が破綻します。"
        },
        "en": {
          "question": "In an RL verification checklist, what is the mandatory mathematical condition for TD target computation at terminal states?",
          "options": [
            "When `terminated = True`, future value `max Q(s', a')` must be set to 0, leaving only immediate reward `r` as the target",
            "Next-state value must be set to 1,000,000",
            "The immediate reward must be overwritten to 0",
            "The Q-table must be deleted upon termination"
          ],
          "explanation": "Because no transitions exist after termination, the discounted future value $\\gamma \\max_{a'} Q(s', a')$ is identically 0. Failing to mask terminal targets severely biases the value function."
        },
        "correctIndex": 0,
        "sectionId": "14.3",
        "sectionTitleJa": "14.3 AI生成コードの検証責任と単体テスト",
        "sectionTitleEn": "14.3 Code Verification & Unit Testing"
      },
      {
        "id": "ch14_q3_v3",
        "code": "# Unit test for Q-update:\ndef test_q_update():\n    Q = {('s1', 0): 0.0}\n    # apply update with r=1.0, alpha=0.5, gamma=0.9, max_next=0.0\n    # expected: 0.5\n    assert Q[('s1', 0)] == 0.5",
        "ja": {
          "question": "AIが生成した強化学習コードの正しさを保証するために、ソフトウェアエンジニアが最初に行うべきテスト手法として最も効果的なものはどれですか？",
          "options": [
            "簡単な手計算可能な数値（例: Q=0, r=1, α=0.5）を与えて更新後の値が期待値と一致するか検証する単体テスト（Unit Test）を書く",
            "いきなり100万エピソード学習を実行して放置する",
            "コードのコメント文をすべて削除する",
            "テストを一切書かずに本番環境にデプロイする"
          ],
          "explanation": "機械学習コードのバグを特定する最も迅速かつ確実な方法は、計算結果が自明な少数の数値を与えて数式の挙動を確かめる単体テスト（Unit Test）を書くことです。"
        },
        "en": {
          "question": "What is the most effective engineering practice to verify AI-generated RL update logic before training on full environments?",
          "options": [
            "Writing a targeted unit test with known, hand-calculated values (e.g. Q=0, r=1, α=0.5) to assert that the updated value matches analytical expectation",
            "Launching an unverified 1,000,000-episode run immediately",
            "Deleting all code comments",
            "Deploying unverified scripts directly to production"
          ],
          "explanation": "Testing mathematical update equations using deterministic hand-calculated test assertions quickly isolates arithmetic and indexing bugs without expensive debugging runs."
        },
        "correctIndex": 0,
        "sectionId": "14.3",
        "sectionTitleJa": "14.3 AI生成コードの検証責任と単体テスト",
        "sectionTitleEn": "14.3 Code Verification & Unit Testing"
      }
    ],
    [
      {
        "id": "ch14_q4_v1",
        "code": "# RL in Modern LLMs:\n# RLHF: Reinforcement Learning from Human Feedback\n# Uses PPO / DPO to align model outputs with human preferences",
        "ja": {
          "question": "ChatGPTなどの現代の大規模言語モデル（LLM）のファインチューニングで利用されている「RLHF（人間のフィードバックによる強化学習）」の役割として正しいものはどれですか？",
          "options": [
            "人間の好みに基づく報酬モデルのスコアを最大化するように方策（LLM）を強化学習し、有用で安全な回答を出力するよう調整（アライメント）すること",
            "LLMにPythonの文法を一から教え込むこと",
            "インターネット上の全ウェブページをクロールして保存すること",
            "GPUの消費電力を0ワットに削減すること"
          ],
          "explanation": "RLHF（Reinforcement Learning from Human Feedback）は、人間が評価した回答の良し悪しから報酬モデルを学習し、その報酬を最大化するように強化学習（PPOなど）で言語モデルのパラメータを微調整するアライメント技術です。"
        },
        "en": {
          "question": "What is the role of Reinforcement Learning from Human Feedback (RLHF) in modern Large Language Models (LLMs)?",
          "options": [
            "Optimizing model output policies via RL to maximize a reward model trained on human preference rankings (alignment for helpfulness and safety)",
            "Teaching Python syntax to language models from scratch",
            "Crawling and archiving the entire public internet",
            "Reducing server power consumption to 0 Watts"
          ],
          "explanation": "RLHF employs reinforcement learning algorithms (like PPO or DPO) to guide language model generation toward outputs preferred by humans, aligning AI behavior with safety and helpfulness criteria."
        },
        "correctIndex": 0,
        "sectionId": "14.4",
        "sectionTitleJa": "14.4 現代強化学習の応用（LLMのRLHF、バンディット配信）",
        "sectionTitleEn": "14.4 Real-World RL & AI Alignment"
      },
      {
        "id": "ch14_q4_v2",
        "code": "# Real-world Bandit application:\n# News article recommendations / Ad placement\n# Arms = Articles to show\n# Reward = Click-through rate (CTR)",
        "ja": {
          "question": "第6章で学んだ「多腕バンディット（Multi-Armed Bandit）」アルゴリズムが、現代のWebサービスで最も広く実用化されている具体例はどれですか？",
          "options": [
            "ニュース記事のレコメンドやWeb広告配信におけるリアルタイムなクリック率（CTR）最適化とA/Bテストの自動化",
            "画像ファイルのJPG圧縮処理",
            "PCのハードディスクのフォーマット処理",
            "Wi-Fiルーターのパスワード暗号化"
          ],
          "explanation": "バンディットアルゴリズムは、どの広告や記事を表示すると最もクリックされるか（探索と活用のトレードオフ）を動的に判断しながら配信比率を自動最適化するWebレコメンド・配信基盤で世界中で利用されています。"
        },
        "en": {
          "question": "Where are Multi-Armed Bandit algorithms (introduced in Ch 6) most widely deployed in production web applications today?",
          "options": [
            "Dynamic recommendation engines and real-time ad serving optimizing click-through rates (CTR) alongside continuous A/B testing",
            "Lossy JPEG image compression algorithms",
            "Formatting hard disk drive partitions",
            "Wi-Fi WPA router password generation"
          ],
          "explanation": "Bandit algorithms power personalized recommendation engines, article placement, and adaptive A/B testing on major platforms by balancing exploratory content testing with exploiting top-performing items."
        },
        "correctIndex": 0,
        "sectionId": "14.4",
        "sectionTitleJa": "14.4 現代強化学習の応用（LLMのRLHF、バンディット配信）",
        "sectionTitleEn": "14.4 Real-World RL & AI Alignment"
      },
      {
        "id": "ch14_q4_v3",
        "code": "# Alignment and Reward Specification:\n# 'You get what you measure, not what you want.'\n# AI alignment focuses on ensuring AI goals strictly reflect human intent.",
        "ja": {
          "question": "強化学習やAIシステムの開発において、開発者が直面する「アライメント問題（Alignment Problem）」を端的に説明したものはどれですか？",
          "options": [
            "AIに設定した報酬関数や最適化目標が、人間社会の真の意図や倫理的価値観と完全に一致せず、意図しない副作用や有害な行動を引き起こす問題",
            "モニター画面の解像度とGPUのアスペクト比が合わない問題",
            "Pythonのバージョンがアップデートできない問題",
            "メモリのバイト列が偶数番地に配置されない問題"
          ],
          "explanation": "アライメント問題とは「AIは与えられた目的関数を忠実に最大化するが、その目的関数の設計が人間の真の願いや安全基準とずれていた場合に、破滅的・有害な手段で目的を達成してしまう」問題のことです。"
        },
        "en": {
          "question": "What is the core essence of the 'AI Alignment Problem' in reinforcement learning and artificial intelligence?",
          "options": [
            "The mismatch where an AI perfectly optimizes its specified objective/reward function, but that objective does not truly align with human values or safety intentions",
            "Mismatched display resolution aspect ratios on monitors",
            "Inability to upgrade local Python environments",
            "Memory byte alignments on non-even hardware addresses"
          ],
          "explanation": "The AI Alignment problem addresses the challenge of ensuring that an agent's objective function accurately captures the full intent, ethics, and safety considerations of human designers without dangerous loopholes."
        },
        "correctIndex": 0,
        "sectionId": "14.4",
        "sectionTitleJa": "14.4 現代強化学習の応用（LLMのRLHF、バンディット配信）",
        "sectionTitleEn": "14.4 Real-World RL & AI Alignment"
      }
    ]
  ]
};
