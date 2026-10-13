# Builder script to assemble all 14 chapters x 4 slots x 3 varieties (168 questions) into questions.js
import json
import os
from bank_part1 import PART1_DATA
from bank_part2 import PART2_DATA
from bank_part3 import PART3_DATA
from bank_part4 import PART4_DATA

course_sections = [
  {
    "partId": 1,
    "partTitleJa": "第1部：プログラミングとアルゴリズムの基礎",
    "partTitleEn": "Part 1: Programming & Algorithm Foundations",
    "chapters": [
      { "id": 1, "slug": "01_program_intro", "titleJa": "第1章 プログラムとは", "titleEn": "Ch 1: What is a Program?", "topicsJa": "コンピュータの動作、CPU、主記憶と補助記憶、Python/IDLE環境", "topicsEn": "Computer Architecture, CPU, Main/Secondary Storage, IDLE" },
      { "id": 2, "slug": "02_python_basics1", "titleJa": "第2章 場合分けと繰り返し", "titleEn": "Ch 2: Branching & Loops", "topicsJa": "input()、型キャスト、if/elif/else、for/while、range", "topicsEn": "input(), Type Casting, if/elif/else, for/while, range()" },
      { "id": 3, "slug": "03_python_basics2", "titleJa": "第3章 データ型", "titleEn": "Ch 3: Data Types & Data Structures", "topicsJa": "リスト、辞書(dict)、インデックス、スライス、可変性", "topicsEn": "Lists, Dictionaries, Indexing, Slicing, Mutability" },
      { "id": 4, "slug": "04_algorithm", "titleJa": "第4章 アルゴリズムの性質", "titleEn": "Ch 4: Nature of Algorithms & Coding Agents", "topicsJa": "coding agent、vibe coding、停止性、計算量 O(n)", "topicsEn": "Coding Agents, Vibe Coding, Halting Problem, Big-O" }
    ]
  },
  {
    "partId": 2,
    "partTitleJa": "第2部：機械学習と強化学習の概念",
    "partTitleEn": "Part 2: Machine Learning & RL Concepts",
    "chapters": [
      { "id": 5, "slug": "05_machine_learning", "titleJa": "第5章 機械学習", "titleEn": "Ch 5: Machine Learning & Git", "topicsJa": "AI・ML・DL、3大分類、強化学習の特徴、Gitバージョン管理", "topicsEn": "AI/ML/DL, 3 Major Classes, RL Traits, Git Version Control" },
      { "id": 6, "slug": "06_multi_armed_bandit", "titleJa": "第6章 多腕バンディット問題", "titleEn": "Ch 6: Multi-Armed Bandit Problem", "topicsJa": "探索と活用のトレードオフ、ε-greedy法、標本平均法", "topicsEn": "Exploration vs Exploitation, ε-greedy, Sample-average" },
      { "id": 7, "slug": "07_reinforcement_learning_basics", "titleJa": "第7章 強化学習の基礎", "titleEn": "Ch 7: Foundations of Reinforcement Learning", "topicsJa": "エージェントと環境、MDP、割引率γ、状態・行動価値関数", "topicsEn": "Agent & Environment, MDP, Discount Factor γ, V(s) & Q(s,a)" }
    ]
  },
  {
    "partId": 3,
    "partTitleJa": "第3部：Gymnasiumによる強化学習の実践",
    "partTitleEn": "Part 3: Practical RL with Gymnasium",
    "chapters": [
      { "id": 8, "slug": "08_rl_cliff_walking", "titleJa": "第8章 強化学習の例(1) - Cliff Walking", "titleEn": "Ch 8: Cliff Walking (Gymnasium Basics)", "topicsJa": "Gymnasium API、env.reset/step、崖歩き環境、状態価値可視化", "topicsEn": "Gymnasium API, env.step/reset, Cliff Walking, Value Maps" },
      { "id": 9, "slug": "09_rl_blackjack", "titleJa": "第9章 強化学習の例(2) - Blackjack", "titleEn": "Ch 9: Blackjack (Monte Carlo Method)", "topicsJa": "行動価値関数 Q(s,a)、モンテカルロ法、エピソード収益平均化", "topicsEn": "Action-Value Q(s,a), Monte Carlo Method, Episode Returns" },
      { "id": 10, "slug": "10_rl_frozen_lake", "titleJa": "第10章 強化学習の例(3) - Frozen Lake", "titleEn": "Ch 10: Frozen Lake (TD Learning & Q-Learning)", "topicsJa": "凍った湖、TD学習、Q-learning更新式、学習率α、確率的遷移", "topicsEn": "Frozen Lake, TD Learning, Q-Learning Equation, Learning Rate α" },
      { "id": 11, "slug": "11_rl_cart_pole", "titleJa": "第11章 強化学習の例(4) - Cart Pole", "titleEn": "Ch 11: Cart Pole (Continuous State & Discretization)", "topicsJa": "倒立振子、連続状態空間、表形式の限界、ビニング（離散化）", "topicsEn": "Cart Pole, Continuous States, Table Limits, Discretization/Binning" }
    ]
  },
  {
    "partId": 4,
    "partTitleJa": "第4部：自作ゲーム環境の作成と強化学習",
    "partTitleEn": "Part 4: Custom Game Environment & AI Training",
    "chapters": [
      { "id": 12, "slug": "12_custom_env", "titleJa": "第12章 自作ゲームの作成", "titleEn": "Ch 12: Creating a Custom Gymnasium Env", "topicsJa": "gymnasium.Env継承、reset/step/render、GridTreasureEnv", "topicsEn": "Subclassing gym.Env, reset/step/render, GridTreasureEnv" },
      { "id": 13, "slug": "13_train_custom_env", "titleJa": "第13章 自作ゲームのAI育成", "titleEn": "Ch 13: Training Custom Game AI", "topicsJa": "Q-learning適用、ε-decay（減衰）、ハイパーパラメータ調整", "topicsEn": "Applying Q-learning, ε-decay, Hyperparameter Tuning" },
      { "id": 14, "slug": "14_summary", "titleJa": "第14章 まとめ", "titleEn": "Ch 14: Summary & Deep RL Roadmap", "topicsJa": "表形式の限界、深層強化学習(DQN)、AI検証とエンジニアの役割", "topicsEn": "Tabular Limits, Deep Q-Networks (DQN), Verification & Ethics" }
    ]
  }
]

quiz_data = {}
quiz_data.update(PART1_DATA)
quiz_data.update(PART2_DATA)
quiz_data.update(PART3_DATA)
quiz_data.update(PART4_DATA)

# Validate integrity
assert len(quiz_data) == 14, f"Expected 14 chapters, got {len(quiz_data)}"
total_slots = sum(len(slots) for slots in quiz_data.values())
assert total_slots == 14 * 4, f"Expected 56 slots, got {total_slots}"
total_questions = sum(sum(len(v) for v in slots) for slots in quiz_data.values())
print(f"Validated: 14 chapters, 56 slots, {total_questions} total questions across varieties.")

# Generate questions.js
output_path = "/Users/rickykanai/UniStuffs/fit2/fit2_quiz_hub/questions.js"

js_content = f"""// InfoTech - In-Class Prep Quiz Bank for Chapters 1 - 14
// 168 questions across 14 chapters (4 question slots per chapter, 3 dynamic varieties per slot)
// Shuffled dynamically at runtime to prevent rote memorization and encourage conceptual understanding.

const courseSections = {json.dumps(course_sections, ensure_ascii=False, indent=2)};

const quizData = {json.dumps(quiz_data, ensure_ascii=False, indent=2)};
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {output_path} (size: {os.path.getsize(output_path)} bytes)")
