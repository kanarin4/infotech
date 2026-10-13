# Comprehensive builder script to assemble subsection-enriched question bank for questions.js
import json
import os

from generate_subsection_banks import CH1_SUBSECTION_SLOTS
from bank_part1 import PART1_DATA
from bank_part2 import PART2_DATA
from bank_part3 import PART3_DATA
from bank_part4 import PART4_DATA

# Define complete syllabus subsection metadata for all 14 chapters
course_sections = [
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
          { "id": "1.1", "titleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）", "titleEn": "1.1 Computer Architecture (CPU & Memory)" },
          { "id": "1.2", "titleJa": "1.2 プログラミング言語とPythonの特徴", "titleEn": "1.2 Programming Languages & Python" },
          { "id": "1.3_1.4", "titleJa": "1.3-1.4 IDLE環境・対話型シェル・スクリプト実行", "titleEn": "1.3-1.4 IDLE, Shell & Script Execution" },
          { "id": "1.5.1", "titleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）", "titleEn": "1.5.1 print() & Arithmetic Operators" },
          { "id": "1.5.2_1.5.4", "titleJa": "1.5.2-1.5.4 実行順序・空白・全角スペース・コメント", "titleEn": "1.5.2-1.5.4 Execution Order & Whitespace" },
          { "id": "1.5.5_1.5.6", "titleJa": "1.5.5-1.5.6 変数・代入文・再代入", "titleEn": "1.5.5-1.5.6 Variables & Reassignment" },
          { "id": "1.5.7_1.5.9", "titleJa": "1.5.7-1.5.9 関数呼び出し・関数定義(def/return)・モジュール", "titleEn": "1.5.7-1.5.9 Functions & Modules" },
          { "id": "1.6", "titleJa": "1.6 まとめとノート練習問題（秒数計算・BMI等）", "titleEn": "1.6 Practice Exercises (Seconds/Year, BMI, etc.)" }
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
          { "id": "2.1", "titleJa": "2.1 キーボードからの入力（input・型変換・IDLE）", "titleEn": "2.1 User Input & Type Casting" },
          { "id": "2.2", "titleJa": "2.2 場合分け（if / elif / else・真偽値・比較演算子）", "titleEn": "2.2 Conditionals & Booleans" },
          { "id": "2.3", "titleJa": "2.3 繰り返し（for / while・無限ループ）", "titleEn": "2.3 Loops (for & while)" },
          { "id": "2.4_2.5", "titleJa": "2.4-2.5 range関数と多重ループ（ネスト）", "titleEn": "2.4-2.5 range() & Nested Loops" }
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
          { "id": "3.1", "titleJa": "3.1 データ型の基礎（int, float, str, bool, list, dict）", "titleEn": "3.1 Fundamental Data Types" },
          { "id": "3.2", "titleJa": "3.2 リストの詳細（インデックス・スライス・append）", "titleEn": "3.2 Lists & Slicing" },
          { "id": "3.3", "titleJa": "3.3 辞書（キーと値・KeyError・in演算子）", "titleEn": "3.3 Dictionaries (dict)" },
          { "id": "3.4", "titleJa": "3.4 可変性と参照（ミュータブル vs イミュータブル）", "titleEn": "3.4 Mutability & References" }
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
          { "id": "4.1", "titleJa": "4.1 アルゴリズムの基礎と要件", "titleEn": "4.1 Algorithm Fundamentals" },
          { "id": "4.2", "titleJa": "4.2 アラン・チューリングと停止問題（Halting Problem）", "titleEn": "4.2 Turing & The Halting Problem" },
          { "id": "4.3", "titleJa": "4.3 計算量（Big-O記法・線形探索 vs 二分探索）", "titleEn": "4.3 Computational Complexity (Big-O)" },
          { "id": "4.4", "titleJa": "4.4 コーディングエージェントと検証責任（単体テスト）", "titleEn": "4.4 Coding Agents & Verification" }
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
          { "id": "5.1", "titleJa": "5.1 AI・機械学習・深層学習の包含関係", "titleEn": "5.1 AI, ML & Deep Learning Hierarchy" },
          { "id": "5.2", "titleJa": "5.2 3大学習パラダイム（教師あり・教師なし・強化学習）", "titleEn": "5.2 3 Paradigms of Machine Learning" },
          { "id": "5.3", "titleJa": "5.3 強化学習の特徴（試行錯誤・遅延報酬）", "titleEn": "5.3 Key Characteristics of RL" },
          { "id": "5.4", "titleJa": "5.4 Gitによるバージョン管理（add, commit, リポジトリ）", "titleEn": "5.4 Git Version Control Fundamentals" }
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
          { "id": "6.1", "titleJa": "6.1 多腕バンディット問題の定式化", "titleEn": "6.1 Multi-Armed Bandit Formulation" },
          { "id": "6.2", "titleJa": "6.2 探索と活用のトレードオフ", "titleEn": "6.2 Exploration vs Exploitation" },
          { "id": "6.3", "titleJa": "6.3 標本平均法と逐次更新式", "titleEn": "6.3 Sample-Average Method" },
          { "id": "6.4", "titleJa": "6.4 ε-greedy法（探索率εの調整）", "titleEn": "6.4 ε-greedy Action Selection" }
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
          { "id": "7.1", "titleJa": "7.1 エージェントと環境の相互作用ループ", "titleEn": "7.1 Agent-Environment Interaction Loop" },
          { "id": "7.2", "titleJa": "7.2 マルコフ決定プロセス（MDP）とマルコフ性", "titleEn": "7.2 Markov Decision Processes (MDP)" },
          { "id": "7.3", "titleJa": "7.3 収益 G_t と割引率 γ", "titleEn": "7.3 Return G_t & Discount Factor γ" },
          { "id": "7.4", "titleJa": "7.4 状態価値関数 V(s) と行動価値関数 Q(s, a)", "titleEn": "7.4 Value Functions V(s) & Q(s,a)" }
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
          { "id": "8.1", "titleJa": "8.1 Gymnasium Core API（reset, step 5要素）", "titleEn": "8.1 Gymnasium Core API (reset & step)" },
          { "id": "8.2", "titleJa": "8.2 Cliff Walking環境の構造と崖転落ペナルティ", "titleEn": "8.2 Cliff Walking Grid Dynamics" },
          { "id": "8.3", "titleJa": "8.3 最短崖際ルート vs 安全大回りルート（Q vs SARSA）", "titleEn": "8.3 Optimal vs Safe Detour (Q vs SARSA)" },
          { "id": "8.4", "titleJa": "8.4 行動空間・観測空間と環境レンダリング", "titleEn": "8.4 Observation & Action Spaces" }
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
          { "id": "9.1", "titleJa": "9.1 モンテカルロ法の基本原理（エピソード収益平均化）", "titleEn": "9.1 Monte Carlo Principle" },
          { "id": "9.2", "titleJa": "9.2 Blackjackの状態表現（手札合計, 見せ札, 使えるA）", "titleEn": "9.2 Blackjack State Tuple" },
          { "id": "9.3", "titleJa": "9.3 収益 G_t 計算トレースとQ値標本平均更新", "titleEn": "9.3 Return Calculation & Sample-Average" },
          { "id": "9.4", "titleJa": "9.4 初回訪問MC vs 全訪問MC、最適方策抽出", "titleEn": "9.4 First-visit vs Every-visit MC" }
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
          { "id": "10.1", "titleJa": "10.1 TD学習（時間的差分学習）とブートストラップ", "titleEn": "10.1 TD Learning & Bootstrapping" },
          { "id": "10.2", "titleJa": "10.2 Q-learning更新式（Off-policy, TD誤差, 学習率α）", "titleEn": "10.2 Q-Learning Update Equation" },
          { "id": "10.3", "titleJa": "10.3 Q値更新の数値計算トレース", "titleEn": "10.3 Q-Table Calculation Trace" },
          { "id": "10.4", "titleJa": "10.4 滑る氷の確率的遷移（is_slippery=True）", "titleEn": "10.4 Slippery Surface Dynamics" }
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
          { "id": "11.1", "titleJa": "11.1 CartPole-v1の4連続物理状態と行動空間", "titleEn": "11.1 CartPole 4D Continuous State" },
          { "id": "11.2", "titleJa": "11.2 連続状態空間における表形式手法の限界と次元の呪い", "titleEn": "11.2 Curse of Dimensionality" },
          { "id": "11.3", "titleJa": "11.3 離散化（ビニング）と np.digitize 計算トレース", "titleEn": "11.3 Discretization via np.digitize" },
          { "id": "11.4", "titleJa": "11.4 終了条件（角度 ±12度, 500ステップ, 攻略基準）", "titleEn": "11.4 CartPole Termination & Solved Criteria" }
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
          { "id": "12.1", "titleJa": "12.1 gymnasium.Env のサブクラス化とメソッド", "titleEn": "12.1 Subclassing gym.Env" },
          { "id": "12.2", "titleJa": "12.2 行動空間・観測空間の定義（Discrete, Box）", "titleEn": "12.2 Action & Observation Spaces" },
          { "id": "12.3", "titleJa": "12.3 グリッド座標更新と np.clip 境界クリッピング", "titleEn": "12.3 Grid Step & Boundary Clipping" },
          { "id": "12.4", "titleJa": "12.4 step戻り値型仕様と check_env 検証", "titleEn": "12.4 Step Signature & check_env" }
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
          { "id": "13.1", "titleJa": "13.1 強化学習トレーニングループの実装", "titleEn": "13.1 RL Training Loop Architecture" },
          { "id": "13.2", "titleJa": "13.2 ε-decay（減衰）スケジュール計算トレース", "titleEn": "13.2 ε-Decay Schedules" },
          { "id": "13.3", "titleJa": "13.3 評価フェーズにおけるグリーディ方策適用", "titleEn": "13.3 Greedy Evaluation Mode" },
          { "id": "13.4", "titleJa": "13.4 報酬設計（Reward Shaping）と報酬ハッキング防止", "titleEn": "13.4 Reward Shaping & Hacking Prevention" }
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
          { "id": "14.1", "titleJa": "14.1 表形式の限界と深層強化学習（DQN: 関数近似）", "titleEn": "14.1 Tabular Limits & DQN" },
          { "id": "14.2", "titleJa": "14.2 DQNの安定化技術（Experience Replay と Target Network）", "titleEn": "14.2 Experience Replay & Target Network" },
          { "id": "14.3", "titleJa": "14.3 AI生成コードの検証責任と単体テスト", "titleEn": "14.3 Code Verification & Unit Testing" },
          { "id": "14.4", "titleJa": "14.4 現代強化学習の応用（LLMのRLHF、バンディット配信）", "titleEn": "14.4 Real-World RL & AI Alignment" }
        ]
      }
    ]
  }
]

# Helper to attach section tags to existing Part 1 (Ch 2-4), Part 2 (Ch 5-7), Part 3 (Ch 8-11), Part 4 (Ch 12-14)
chapter_section_mapping = {
  2: [
    ("2.1", "2.1 キーボードからの入力（input・型変換・IDLE）", "2.1 User Input & Type Casting"),
    ("2.2", "2.2 場合分け（if / elif / else・真偽値・比較演算子）", "2.2 Conditionals & Booleans"),
    ("2.3", "2.3 繰り返し（for / while・無限ループ）", "2.3 Loops (for & while)"),
    ("2.4_2.5", "2.4-2.5 range関数と多重ループ（ネスト）", "2.4-2.5 range() & Nested Loops")
  ],
  3: [
    ("3.1", "3.1 データ型の基礎（int, float, str, bool, list, dict）", "3.1 Fundamental Data Types"),
    ("3.2", "3.2 リストの詳細（インデックス・スライス・append）", "3.2 Lists & Slicing"),
    ("3.3", "3.3 辞書（キーと値・KeyError・in演算子）", "3.3 Dictionaries (dict)"),
    ("3.4", "3.4 可変性と参照（ミュータブル vs イミュータブル）", "3.4 Mutability & References")
  ],
  4: [
    ("4.1", "4.1 アルゴリズムの基礎と要件", "4.1 Algorithm Fundamentals"),
    ("4.2", "4.2 アラン・チューリングと停止問題（Halting Problem）", "4.2 Turing & The Halting Problem"),
    ("4.3", "4.3 計算量（Big-O記法・線形探索 vs 二分探索）", "4.3 Computational Complexity (Big-O)"),
    ("4.4", "4.4 コーディングエージェントと検証責任（単体テスト）", "4.4 Coding Agents & Verification")
  ],
  5: [
    ("5.1", "5.1 AI・機械学習・深層学習の包含関係", "5.1 AI, ML & Deep Learning Hierarchy"),
    ("5.2", "5.2 3大学習パラダイム（教師あり・教師なし・強化学習）", "5.2 3 Paradigms of Machine Learning"),
    ("5.3", "5.3 強化学習の特徴（試行錯誤・遅延報酬）", "5.3 Key Characteristics of RL"),
    ("5.4", "5.4 Gitによるバージョン管理（add, commit, リポジトリ）", "5.4 Git Version Control Fundamentals")
  ],
  6: [
    ("6.1", "6.1 多腕バンディット問題の定式化", "6.1 Multi-Armed Bandit Formulation"),
    ("6.2", "6.2 探索と活用のトレードオフ", "6.2 Exploration vs Exploitation"),
    ("6.3", "6.3 標本平均法と逐次更新式", "6.3 Sample-Average Method"),
    ("6.4", "6.4 ε-greedy法（探索率εの調整）", "6.4 ε-greedy Action Selection")
  ],
  7: [
    ("7.1", "7.1 エージェントと環境の相互作用ループ", "7.1 Agent-Environment Interaction Loop"),
    ("7.2", "7.2 マルコフ決定プロセス（MDP）とマルコフ性", "7.2 Markov Decision Processes (MDP)"),
    ("7.3", "7.3 収益 G_t と割引率 γ", "7.3 Return G_t & Discount Factor γ"),
    ("7.4", "7.4 状態価値関数 V(s) と行動価値関数 Q(s, a)", "7.4 Value Functions V(s) & Q(s,a)")
  ],
  8: [
    ("8.1", "8.1 Gymnasium Core API（reset, step 5要素）", "8.1 Gymnasium Core API (reset & step)"),
    ("8.2", "8.2 Cliff Walking環境の構造と崖転落ペナルティ", "8.2 Cliff Walking Grid Dynamics"),
    ("8.3", "8.3 最短崖際ルート vs 安全大回りルート（Q vs SARSA）", "8.3 Optimal vs Safe Detour (Q vs SARSA)"),
    ("8.4", "8.4 行動空間・観測空間と環境レンダリング", "8.4 Observation & Action Spaces")
  ],
  9: [
    ("9.1", "9.1 モンテカルロ法の基本原理（エピソード収益平均化）", "9.1 Monte Carlo Principle"),
    ("9.2", "9.2 Blackjackの状態表現（手札合計, 見せ札, 使えるA）", "9.2 Blackjack State Tuple"),
    ("9.3", "9.3 収益 G_t 計算トレースとQ値標本平均更新", "9.3 Return Calculation & Sample-Average"),
    ("9.4", "9.4 初回訪問MC vs 全訪問MC、最適方策抽出", "9.4 First-visit vs Every-visit MC")
  ],
  10: [
    ("10.1", "10.1 TD学習（時間的差分学習）とブートストラップ", "10.1 TD Learning & Bootstrapping"),
    ("10.2", "10.2 Q-learning更新式（Off-policy, TD誤差, 学習率α）", "10.2 Q-Learning Update Equation"),
    ("10.3", "10.3 Q値更新の数値計算トレース", "10.3 Q-Table Calculation Trace"),
    ("10.4", "10.4 滑る氷の確率的遷移（is_slippery=True）", "10.4 Slippery Surface Dynamics")
  ],
  11: [
    ("11.1", "11.1 CartPole-v1の4連続物理状態と行動空間", "11.1 CartPole 4D Continuous State"),
    ("11.2", "11.2 連続状態空間における表形式手法の限界と次元の呪い", "11.2 Curse of Dimensionality"),
    ("11.3", "11.3 離散化（ビニング）と np.digitize 計算トレース", "11.3 Discretization via np.digitize"),
    ("11.4", "11.4 終了条件（角度 ±12度, 500ステップ, 攻略基準）", "11.4 CartPole Termination & Solved Criteria")
  ],
  12: [
    ("12.1", "12.1 gymnasium.Env のサブクラス化とメソッド", "12.1 Subclassing gym.Env"),
    ("12.2", "12.2 行動空間・観測空間の定義（Discrete, Box）", "12.2 Action & Observation Spaces"),
    ("12.3", "12.3 グリッド座標更新と np.clip 境界クリッピング", "12.3 Grid Step & Boundary Clipping"),
    ("12.4", "12.4 step戻り値型仕様と check_env 検証", "12.4 Step Signature & check_env")
  ],
  13: [
    ("13.1", "13.1 強化学習トレーニングループの実装", "13.1 RL Training Loop Architecture"),
    ("13.2", "13.2 ε-decay（減衰）スケジュール計算トレース", "13.2 ε-Decay Schedules"),
    ("13.3", "13.3 評価フェーズにおけるグリーディ方策適用", "13.3 Greedy Evaluation Mode"),
    ("13.4", "13.4 報酬設計（Reward Shaping）と報酬ハッキング防止", "13.4 Reward Shaping & Hacking Prevention")
  ],
  14: [
    ("14.1", "14.1 表形式の限界と深層強化学習（DQN: 関数近似）", "14.1 Tabular Limits & DQN"),
    ("14.2", "14.2 DQNの安定化技術（Experience Replay と Target Network）", "14.2 Experience Replay & Target Network"),
    ("14.3", "14.3 AI生成コードの検証責任と単体テスト", "14.3 Code Verification & Unit Testing"),
    ("14.4", "14.4 現代強化学習の応用（LLMのRLHF、バンディット配信）", "14.4 Real-World RL & AI Alignment")
  ]
}

def annotate_slots(chapter_id, slots):
  mappings = chapter_section_mapping.get(chapter_id, [])
  annotated = []
  for idx, slot in enumerate(slots):
    sec_id, sec_title_ja, sec_title_en = mappings[idx] if idx < len(mappings) else (f"{chapter_id}.{idx+1}", f"{chapter_id}.{idx+1} 要点", f"{chapter_id}.{idx+1} Key Points")
    new_slot = []
    for q in slot:
      q_copy = dict(q)
      q_copy["sectionId"] = sec_id
      q_copy["sectionTitleJa"] = sec_title_ja
      q_copy["sectionTitleEn"] = sec_title_en
      new_slot.append(q_copy)
    annotated.append(new_slot)
  return annotated

quiz_data = {}
quiz_data[1] = CH1_SUBSECTION_SLOTS
quiz_data[2] = annotate_slots(2, PART1_DATA[2])
quiz_data[3] = annotate_slots(3, PART1_DATA[3])
quiz_data[4] = annotate_slots(4, PART1_DATA[4])

for ch_id in [5, 6, 7]:
  quiz_data[ch_id] = annotate_slots(ch_id, PART2_DATA[ch_id])

for ch_id in [8, 9, 10, 11]:
  quiz_data[ch_id] = annotate_slots(ch_id, PART3_DATA[ch_id])

for ch_id in [12, 13, 14]:
  quiz_data[ch_id] = annotate_slots(ch_id, PART4_DATA[ch_id])

total_questions = sum(sum(len(v) for v in slots) for slots in quiz_data.values())
total_slots = sum(len(slots) for slots in quiz_data.values())
print(f"Total Chapters: {len(quiz_data)}")
print(f"Total Slots: {total_slots}")
print(f"Total Questions across varieties: {total_questions}")

output_path = "/Users/rickykanai/UniStuffs/fit2/fit2_quiz_hub/questions.js"

js_content = f"""// InfoTech - In-Class Prep Quiz Bank for Chapters 1 - 14
// Subsection-Enriched Architecture: Practice by Subsection or Take Full Chapter Quizzes
// {total_questions} total questions across {len(quiz_data)} chapters and {total_slots} topic slots.
// Options and question varieties are sampled and shuffled dynamically at runtime.

const courseSections = {json.dumps(course_sections, ensure_ascii=False, indent=2)};

const quizData = {json.dumps(quiz_data, ensure_ascii=False, indent=2)};
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {output_path} ({os.path.getsize(output_path)} bytes)")
