// InfoTech (Fundamentals of Information Technology / 情報技術基礎)
// Comprehensive In-Class Prep Quiz Bank for Chapters 1 - 14
// Course Curriculum & Learning Objectives

const courseSections = [
  {
    partId: 1,
    partTitleJa: "第1部：プログラミングとアルゴリズムの基礎",
    partTitleEn: "Part 1: Programming & Algorithm Foundations",
    chapters: [
      { id: 1, slug: "01_program_intro", titleJa: "第1章 プログラムとは", titleEn: "Ch 1: What is a Program?", topicsJa: "コンピュータの動作、CPU、主記憶と補助記憶、Python/IDLE環境", topicsEn: "Computer Architecture, CPU, Main/Secondary Storage, IDLE" },
      { id: 2, slug: "02_python_basics1", titleJa: "第2章 場合分けと繰り返し", titleEn: "Ch 2: Branching & Loops", topicsJa: "input()、型キャスト、if/elif/else、for/while、range", topicsEn: "input(), Type Casting, if/elif/else, for/while, range()" },
      { id: 3, slug: "03_python_basics2", titleJa: "第3章 データ型", titleEn: "Ch 3: Data Types & Data Structures", topicsJa: "リスト、辞書(dict)、インデックス、スライス、可変性", topicsEn: "Lists, Dictionaries, Indexing, Slicing, Mutability" },
      { id: 4, slug: "04_algorithm", titleJa: "第4章 アルゴリズムの性質", titleEn: "Ch 4: Nature of Algorithms & Coding Agents", topicsJa: "coding agent、vibe coding、停止性、計算量 O(n)", topicsEn: "Coding Agents, Vibe Coding, Halting Problem, Big-O" }
    ]
  },
  {
    partId: 2,
    partTitleJa: "第2部：機械学習と強化学習の概念",
    partTitleEn: "Part 2: Machine Learning & RL Concepts",
    chapters: [
      { id: 5, slug: "05_machine_learning", titleJa: "第5章 機械学習", titleEn: "Ch 5: Machine Learning & Git", topicsJa: "AI・ML・DL、3大分類、強化学習の特徴、Gitバージョン管理", topicsEn: "AI/ML/DL, 3 Major Classes, RL Traits, Git Version Control" },
      { id: 6, slug: "06_multi_armed_bandit", titleJa: "第6章 多腕バンディット問題", titleEn: "Ch 6: Multi-Armed Bandit Problem", topicsJa: "探索と活用のトレードオフ、ε-greedy法、標本平均法", topicsEn: "Exploration vs Exploitation, ε-greedy, Sample-average" },
      { id: 7, slug: "07_reinforcement_learning_basics", titleJa: "第7章 強化学習の基礎", titleEn: "Ch 7: Foundations of Reinforcement Learning", topicsJa: "エージェントと環境、MDP、割引率γ、状態・行動価値関数", topicsEn: "Agent & Environment, MDP, Discount Factor γ, V(s) & Q(s,a)" }
    ]
  },
  {
    partId: 3,
    partTitleJa: "第3部：Gymnasiumによる強化学習の実践",
    partTitleEn: "Part 3: Practical RL with Gymnasium",
    chapters: [
      { id: 8, slug: "08_rl_cliff_walking", titleJa: "第8章 強化学習の例(1) - Cliff Walking", titleEn: "Ch 8: Cliff Walking (Gymnasium Basics)", topicsJa: "Gymnasium API、env.reset/step、崖歩き環境、状態価値可視化", topicsEn: "Gymnasium API, env.step/reset, Cliff Walking, Value Maps" },
      { id: 9, slug: "09_rl_blackjack", titleJa: "第9章 強化学習の例(2) - Blackjack", titleEn: "Ch 9: Blackjack (Monte Carlo Method)", topicsJa: "行動価値関数 Q(s,a)、モンテカルロ法、エピソード収益平均化", topicsEn: "Action-Value Q(s,a), Monte Carlo Method, Episode Returns" },
      { id: 10, slug: "10_rl_frozen_lake", titleJa: "第10章 強化学習の例(3) - Frozen Lake", titleEn: "Ch 10: Frozen Lake (TD Learning & Q-Learning)", topicsJa: "凍った湖、TD学習、Q-learning更新式、学習率α、確率的遷移", topicsEn: "Frozen Lake, TD Learning, Q-Learning Equation, Learning Rate α" },
      { id: 11, slug: "11_rl_cart_pole", titleJa: "第11章 強化学習の例(4) - Cart Pole", titleEn: "Ch 11: Cart Pole (Continuous State & Discretization)", topicsJa: "倒立振子、連続状態空間、表形式の限界、ビニング（離散化）", topicsEn: "Cart Pole, Continuous States, Table Limits, Discretization/Binning" }
    ]
  },
  {
    partId: 4,
    partTitleJa: "第4部：自作ゲーム環境の作成と強化学習",
    partTitleEn: "Part 4: Custom Game Environment & AI Training",
    chapters: [
      { id: 12, slug: "12_custom_env", titleJa: "第12章 自作ゲームの作成", titleEn: "Ch 12: Creating a Custom Gymnasium Env", topicsJa: "gymnasium.Env継承、reset/step/render、GridTreasureEnv", topicsEn: "Subclassing gym.Env, reset/step/render, GridTreasureEnv" },
      { id: 13, slug: "13_train_custom_env", titleJa: "第13章 自作ゲームのAI育成", titleEn: "Ch 13: Training Custom Game AI", topicsJa: "Q-learning適用、ε-decay（減衰）、ハイパーパラメータ調整", topicsEn: "Applying Q-learning, ε-decay, Hyperparameter Tuning" },
      { id: 14, slug: "14_summary", titleJa: "第14章 まとめ", titleEn: "Ch 14: Summary & Deep RL Roadmap", topicsJa: "表形式の限界、深層強化学習(DQN)、AI検証とエンジニアの役割", topicsEn: "Tabular Limits, Deep Q-Networks (DQN), Verification & Ethics" }
    ]
  }
];

const quizData = {
  // CHAPTER 1
  1: [
    {
      id: "ch1_q1",
      code: null,
      ja: {
        question: "PCの電源を切ると記憶内容がすべて失われる主記憶（DRAMなど）の特性を何と呼ぶか、最も適切なものを選んでください。",
        options: ["不揮発性（Non-volatile）", "揮発性（Volatile）", "永続性（Persistent）", "仮想記憶性（Virtual memory）"],
        explanation: "主記憶（メインメモリ / DRAM）は通電中のみデータを保持する「揮発性（Volatile）」の性質を持ちます。これに対し、SSDやHDDなどの補助記憶（ストレージ）は電源を切ってもデータが保持される「不揮発性（Non-volatile）」です。"
      },
      en: {
        question: "Which term describes the property of main memory (e.g., DRAM) where all stored data is lost when power is turned off?",
        options: ["Non-volatile", "Volatile", "Persistent", "Virtual memory"],
        explanation: "Main memory (DRAM) is 'volatile', meaning it requires power to retain data. Secondary storage (SSD/HDD) is 'non-volatile', keeping files safely after shutdown."
      },
      correctIndex: 1
    },
    {
      id: "ch1_q2",
      code: null,
      ja: {
        question: "CPU（中央演算処理装置）内部で、四則演算や値の大小比較などの論理演算を担当する構成要素はどれですか？",
        options: ["制御部（Control Unit）", "演算部（ALU: Arithmetic Logic Unit）", "補助記憶（Secondary Storage）", "レジスタ（Register）"],
        explanation: "演算部（ALU: Arithmetic Logic Unit）が足し算や掛け算などの算術演算および真偽比較などの論理演算を行います。制御部は命令のフェッチ・解読と各装置への指示を担当します。"
      },
      en: {
        question: "Within the CPU, which component is directly responsible for arithmetic calculations and logical comparisons?",
        options: ["Control Unit", "Arithmetic Logic Unit (ALU)", "Secondary Storage", "Register"],
        explanation: "The Arithmetic Logic Unit (ALU) performs numerical math and boolean comparisons. The Control Unit coordinates instruction decoding and signals."
      },
      correctIndex: 1
    },
    {
      id: "ch1_q3",
      code: null,
      ja: {
        question: "CPUが主記憶からプログラムの命令を読み込んで実行する基本サイクルとして、正しい順序の組み合わせを選んでください。",
        options: [
          "実行 (Execute) → 取り出し (Fetch) → 解読 (Decode) → 書き戻し (Write Back)",
          "解読 (Decode) → 取り出し (Fetch) → 実行 (Execute) → 書き戻し (Write Back)",
          "取り出し (Fetch) → 解読 (Decode) → 実行 (Execute) → 書き戻し (Write Back)",
          "書き戻し (Write Back) → 実行 (Execute) → 解読 (Decode) → 取り出し (Fetch)"
        ],
        explanation: "CPUは「①命令の取り出し (Fetch) → ②命令の解読 (Decode) → ③命令の実行 (Execute) → ④結果の書き戻し (Write Back)」という命令実行サイクルを1秒間に数十億回繰り返しています。"
      },
      en: {
        question: "Which of the following correctly describes the fundamental instruction execution cycle of a CPU?",
        options: [
          "Execute → Fetch → Decode → Write Back",
          "Decode → Fetch → Execute → Write Back",
          "Fetch → Decode → Execute → Write Back",
          "Write Back → Execute → Decode → Fetch"
        ],
        explanation: "The standard CPU cycle is Fetch (retrieve instruction from memory) → Decode (interpret opcode) → Execute (run on ALU) → Write Back (save result)."
      },
      correctIndex: 2
    },
    {
      id: "ch1_q4",
      code: null,
      ja: {
        question: "Pythonのような高級プログラミング言語と、CPUが直接解読して実行する「機械語（マシン語）」の関係について、正しい説明を選んでください。",
        options: [
          "CPUはPythonのソースコードをそのまま直接解読して実行している。",
          "Pythonはインタプリタにより、ソースコードを逐次解読して機械が実行可能な形式に変換しながら動作する。",
          "高級言語は機械語よりもコンピュータが高速に処理できるように設計された言語である。",
          "一度書いたPythonコードはCPU内部のSSDに恒久的に焼き付けられる。"
        ],
        explanation: "CPUが直接理解できるのは0と1のビット列である機械語（マシン語）のみです。人間が理解しやすいPython等の高級言語は、インタプリタ（翻訳プログラム）によって逐次解釈されながら実行されます。"
      },
      en: {
        question: "Which statement accurately describes the relationship between high-level Python code and machine language executed by the CPU?",
        options: [
          "The CPU directly interprets and executes raw Python source code text.",
          "Python relies on an interpreter to translate source code into machine-executable instructions during execution.",
          "High-level languages were created because CPUs execute them faster than machine code.",
          "Python scripts are permanently burned into the CPU's internal storage."
        ],
        explanation: "CPUs only understand machine language (binary 0s and 1s). High-level languages like Python require an interpreter to parse and execute instructions."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 2
  2: [
    {
      id: "ch2_q1",
      code: `val = input("数値を入力: ")
print(val + 5)`,
      ja: {
        question: "上記のプログラムを実行し、キーボードから 10 と入力して Enter を押したとき、何が起こりますか？",
        options: ["15 と表示される", "105 と表示される", "TypeError が発生する", "プログラムが停止せずフリーズする"],
        explanation: "input() 関数が返す値は、数字を入力した場合でも必ず文字列型（str）です。文字列型と整数型の 5 を + で直接加算しようとすると、Pythonでは TypeError: can only concatenate str (not 'int') to str が発生します。正しく計算するには int(input(...)) のように型キャストが必要です。"
      },
      en: {
        question: "What happens when running the code above if the user enters 10 and presses Enter?",
        options: ["Prints 15", "Prints 105", "Raises a TypeError", "The program freezes indefinitely"],
        explanation: "input() always returns a string (str). In Python, concatenating a str with an int (val + 5) raises a TypeError. You must cast it with int(val)."
      },
      correctIndex: 2
    },
    {
      id: "ch2_q2",
      code: `for i in range(3, 10, 3):
    print(i, end=" ")`,
      ja: {
        question: "上記のプログラムを実行したときに出力される数値の並びとして正しいものを選んでください。",
        options: ["3 6 9", "3 6 9 10", "3 5 7 9", "3 6"],
        explanation: "range(start, stop, step) は start から始まり、stop の手前（stop未満）まで step 刻みで値を生成します。range(3, 10, 3) は 3, 6, 9 を生成します（次は12となり10以上になるため除外）。"
      },
      en: {
        question: "What is printed when the code above is executed?",
        options: ["3 6 9", "3 6 9 10", "3 5 7 9", "3 6"],
        explanation: "range(start, stop, step) begins at start (3) and steps by 3 while strictly less than stop (10): 3, 6, 9."
      },
      correctIndex: 0
    },
    {
      id: "ch2_q3",
      code: `count = 0
for i in range(3):
    for j in range(4):
        count += 1
print(count)`,
      ja: {
        question: "上記の二重ループが完了したとき、画面に出力される count の値として正しいものを選んでください。",
        options: ["7", "12", "14", "24"],
        explanation: "外側のループが 3 回（i = 0, 1, 2）、内側のループがそれぞれの i に対して 4 回（j = 0, 1, 2, 3）実行されるため、内側の処理は合計 3 × 4 = 12 回実行されます。"
      },
      en: {
        question: "What value of count is printed after the nested loops finish executing?",
        options: ["7", "12", "14", "24"],
        explanation: "The outer loop runs 3 times, and for each iteration, the inner loop runs 4 times. Total count increments = 3 × 4 = 12."
      },
      correctIndex: 1
    },
    {
      id: "ch2_q4",
      code: `score = 85
if score >= 90:
    print("S")
elif score >= 80:
    print("A")
elif score >= 70:
    print("B")
else:
    print("C")`,
      ja: {
        question: "上記のプログラムを実行したときに出力される文字列を選んでください。",
        options: ["S", "A", "A と B の両方", "B"],
        explanation: "if-elif-else 文では、上から順に条件が評価され、最初に真（True）となったブロックのみが実行されて構文全体を抜けます。score >= 80 が真となるため 'A' のみが出力されます。"
      },
      en: {
        question: "What is printed when the code above is executed?",
        options: ["S", "A", "Both A and B", "B"],
        explanation: "In an if-elif-else construct, Python evaluates conditions from top to bottom and executes ONLY the first matching block. Since score >= 80 is true, it prints 'A' and exits."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 3
  3: [
    {
      id: "ch3_q1",
      code: `items = ['Apple', 'Banana', 'Cherry', 'Date']
print(items[2])`,
      ja: {
        question: "上記のプログラムを実行したときに出力される要素として正しいものを選んでください。",
        options: ["Banana", "Cherry", "Date", "IndexError"],
        explanation: "Pythonのリストのインデックスは 0 から始まります（0-based index）。items[0] は 'Apple'、items[1] は 'Banana'、items[2] は 'Cherry' です。"
      },
      en: {
        question: "What item is printed by the code above?",
        options: ["Banana", "Cherry", "Date", "IndexError"],
        explanation: "Python lists are zero-indexed: index 0 is 'Apple', index 1 is 'Banana', and index 2 is 'Cherry'."
      },
      correctIndex: 1
    },
    {
      id: "ch3_q2",
      code: `nums = [10, 20, 30, 40, 50]
print(nums[1:4])`,
      ja: {
        question: "上記のスライス操作 nums[1:4] の結果として出力されるリストを選んでください。",
        options: ["[20, 30, 40]", "[10, 20, 30, 40]", "[20, 30, 40, 50]", "[10, 20, 30]"],
        explanation: "スライス lst[start:stop] は、start 番目の要素から stop の直前（stop-1 番目）までを取り出します。nums[1] は 20、nums[2] は 30、nums[3] は 40 なので、[20, 30, 40] になります。"
      },
      en: {
        question: "What is the output of the slicing expression nums[1:4]?",
        options: ["[20, 30, 40]", "[10, 20, 30, 40]", "[20, 30, 40, 50]", "[10, 20, 30]"],
        explanation: "Slicing lst[start:stop] includes elements from start up to (but not including) stop. Here, indices 1, 2, 3 give [20, 30, 40]."
      },
      correctIndex: 0
    },
    {
      id: "ch3_q3",
      code: `student = {"name": "Taro", "grade": 2}
student["grade"] = 3
student["campus"] = "East"
print(len(student))`,
      ja: {
        question: "上記のコードを実行した後の len(student) の値として正しいものを選んでください。",
        options: ["2", "3", "4", "TypeError"],
        explanation: "student['grade'] = 3 は既存キー 'grade' の値を 2 から 3 へ上書き更新します。student['campus'] = 'East' は新しいキー 'campus' を追加します。したがってキーは 'name', 'grade', 'campus' の 3 つとなり、長さは 3 です。"
      },
      en: {
        question: "What is printed by len(student) after running the code above?",
        options: ["2", "3", "4", "TypeError"],
        explanation: "Updating student['grade'] modifies an existing key. Adding student['campus'] creates a new key. The dictionary has 3 keys in total ('name', 'grade', 'campus')."
      },
      correctIndex: 1
    },
    {
      id: "ch3_q4",
      code: `data = {"a": 100, "b": 200}
print(data["c"])`,
      ja: {
        question: "存在しないキー 'c' に角括弧構文でアクセスしたとき、Pythonはどのように振る舞いますか？",
        options: ["None を返す", "0 を返す", "KeyError 例外を発生させる", "新しい空のキー 'c' を自動生成する"],
        explanation: "辞書で存在しないキーを d[key] で直接参照すると KeyError 例外が発生します。キーが存在しない場合にエラーを回避してデフォルト値（またはNone）を取得したい場合は d.get('c') を使用します。"
      },
      en: {
        question: "What happens when accessing a non-existent key with square brackets (data['c'])?",
        options: ["Returns None", "Returns 0", "Raises a KeyError", "Automatically creates an empty key 'c'"],
        explanation: "Direct dictionary indexing with a missing key raises a KeyError. Use data.get('c') to safely handle missing keys."
      },
      correctIndex: 2
    }
  ],

  // CHAPTER 4
  4: [
    {
      id: "ch4_q1",
      code: null,
      ja: {
        question: "生成AIやコーディングエージェント（coding agent）を活用した「vibe coding」を行う際、人間側が担うべき最も重要で不可欠な役割は何ですか？",
        options: [
          "AIが生成したコードの行数をできるだけ増やすように指示する。",
          "AIの出力に含まれるハルシネーションや論理の誤りを検知し、動作を検証・テストする手段を準備する。",
          "プログラミングの文法やアルゴリズムの基礎知識を一切忘れて直感に任せる。",
          "プロンプトを一度入力したらコードを実行せずに提出する。"
        ],
        explanation: "教科書（はじめに & 第4章）で強調されている通り、生成AIは極めて有用ですがハルシネーション（もっともらしい嘘やバグ）を出力することがあります。人間がアルゴリズムや文法の基礎を理解し、正しく動作しているか検証・テストすることが不可欠です。"
      },
      en: {
        question: "When practicing 'vibe coding' with AI coding agents, what is the indispensable responsibility of the human programmer?",
        options: [
          "Instructing the agent to generate as many lines of code as possible.",
          "Verifying the output, detecting hallucinations or logic bugs, and designing automated tests.",
          "Ignoring syntax rules and algorithm fundamentals to rely purely on instinct.",
          "Submitting generated scripts without ever running or inspecting them."
        ],
        explanation: "As stated in the course text, AI agents can hallucinate or introduce subtle bugs. The programmer must understand core fundamentals to audit and test the code."
      },
      correctIndex: 1
    },
    {
      id: "ch4_q2",
      code: null,
      ja: {
        question: "コンピュータ科学においてチューリングが証明した「停止問題（Halting Problem）」の結論として正しいものを選んでください。",
        options: [
          "すべてのプログラムは適切な最適化を行えば必ず有限ステップで停止する。",
          "任意のプログラムと入力が与えられたとき、それが有限時間内に停止するか無限ループに陥るかを判定できる汎用アルゴリズムは存在しない。",
          "計算量が O(n^2) 以上のプログラムは停止することが保証されない。",
          "高速な量子コンピュータを使えば、停止するか否かを常に事前に完全判定できる。"
        ],
        explanation: "アラン・チューリングは「与えられた任意のプログラムと入力に対し、それが停止するか否かを判定する万能プログラムは原理的に作成不可能である」ことを数学的に証明しました。"
      },
      en: {
        question: "What is the key conclusion of the Halting Problem proven by Alan Turing?",
        options: [
          "All computer programs can be mathematically guaranteed to halt in finite steps.",
          "No general algorithm can exist that determines whether any arbitrary program will halt or loop forever.",
          "Programs with complexity greater than O(n^2) are never guaranteed to halt.",
          "Quantum computers can deterministically solve the halting status of any program."
        ],
        explanation: "Turing proved that it is mathematically impossible to write a general algorithm that decides whether an arbitrary program halts on a given input."
      },
      correctIndex: 1
    },
    {
      id: "ch4_q3",
      code: null,
      ja: {
        question: "入力サイズ n に対して二重ループで全探索を行うアルゴリズムの計算量（時間計算量）として最も一般的な表記はどれですか？",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        explanation: "要素数 n のリストに対して外側で n 回、内側でも n 回ループを回す処理の計算量は O(n × n) = O(n^2)（二次時間）になります。"
      },
      en: {
        question: "What is the typical Big-O time complexity for an algorithm using nested loops over input of size n?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        explanation: "A nested loop where both outer and inner loops iterate n times executes n × n operations, resulting in O(n^2) quadratic time complexity."
      },
      correctIndex: 3
    },
    {
      id: "ch4_q4",
      code: null,
      ja: {
        question: "整列（ソート）済みのデータ列から目的の値を半分ずつ絞り込んで探す「二分探索（バイナリサーチ）」の計算量はどれですか？",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        explanation: "二分探索は1回のステップで探索範囲を半分（1/2）に縮小するため、ステップ数は入力サイズ n の対数に比例する O(log n) となります。"
      },
      en: {
        question: "What is the Big-O time complexity of Binary Search on a sorted array of size n?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        explanation: "Binary search divides the remaining search space in half with every step, achieving O(log n) logarithmic time complexity."
      },
      correctIndex: 0
    }
  ],

  // CHAPTER 5
  5: [
    {
      id: "ch5_q1",
      code: null,
      ja: {
        question: "人工知能（AI）、機械学習（Machine Learning: ML）、深層学習（Deep Learning: DL）の包含関係として正しいものを選んでください。",
        options: [
          "深層学習 ⊃ 機械学習 ⊃ 人工知能",
          "人工知能 ⊃ 機械学習 ⊃ 深層学習",
          "機械学習 ⊃ 人工知能 ⊃ 深層学習",
          "これら3つは互いに全く重複しない別個の技術分野である"
        ],
        explanation: "人工知能（AI）という最も広い概念の中に、データからルールを学習する「機械学習（ML）」が含まれ、さらにその中で多層ニューラルネットワークを用いる「深層学習（DL）」が含まれる同心円的な包含関係（AI ⊃ ML ⊃ DL）にあります。"
      },
      en: {
        question: "Which relationship correctly represents Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL)?",
        options: [
          "DL ⊃ ML ⊃ AI",
          "AI ⊃ ML ⊃ DL",
          "ML ⊃ AI ⊃ DL",
          "They are three completely disjoint and non-overlapping fields."
        ],
        explanation: "AI is the broad umbrella field. ML is a subset of AI focused on learning from data, and Deep Learning (DL) is a subset of ML using deep neural networks."
      },
      correctIndex: 1
    },
    {
      id: "ch5_q2",
      code: null,
      ja: {
        question: "機械学習の3大分類（教師あり学習、教師なし学習、強化学習）のうち、「強化学習（Reinforcement Learning）」を特徴付ける性質として最も適切なものはどれですか？",
        options: [
          "大量の正解ラベル付きデータ（入力と正解のペア）を与えて誤差を最小化する。",
          "正解ラベルは与えられず、データの類似度や潜在的なクラスタ構造を発見する。",
          "正解の手取り足取りの指示はなく、環境との相互作用を通じた試行錯誤と報酬（スコア）の最大化によって行動を学習する。",
          "あらかじめ人間がすべての条件分岐（if文）を辞書形式で書き下ろす。"
        ],
        explanation: "強化学習は「試行錯誤（Trial and Error）」を通じて、得られる累積報酬を最大化するように方策（行動方針）を学習します。一問一答の正解ラベルはありません。"
      },
      en: {
        question: "Which of the following is the defining characteristic of Reinforcement Learning compared to supervised or unsupervised learning?",
        options: [
          "Requires millions of input-target paired label examples to minimize classification error.",
          "Discovers latent clusters in unlabeled static datasets without any feedback.",
          "Learns optimal policies through trial-and-error interactions with an environment to maximize cumulative reward.",
          "Relies on humans hard-coding every single if-else condition upfront."
        ],
        explanation: "RL does not use explicit correct answer labels; instead, an agent learns an optimal behavior policy by interacting with an environment and collecting rewards."
      },
      correctIndex: 2
    },
    {
      id: "ch5_q3",
      code: null,
      ja: {
        question: "強化学習特有の困難さの1つである「遅延報酬（Delayed Reward）」とはどのような現象を指しますか？",
        options: [
          "コンピュータの処理速度が遅く、計算結果が画面に表示されるまで時間がかかること。",
          "現在の行動の良し悪しが即座には分からず、何手も先の勝敗やゴールに到達して初めて報酬として判明すること。",
          "エージェントが報酬を受け取るたびに行動を数秒間停止させること。",
          "報酬の数値が負の値（マイナス）になること。"
        ],
        explanation: "将棋や囲碁で王手をかける手や歩を突く手のように、その行動が本当に良かったかどうかは数十手先のゲーム終了（勝ち負け）になって初めて判明します。これを遅延報酬と呼び、信用割当問題（Credit Assignment Problem）の原因になります。"
      },
      en: {
        question: "In reinforcement learning, what does the 'Delayed Reward' problem refer to?",
        options: [
          "Network latency causing lag in rendering environment graphics.",
          "The consequence of an action is not immediately obvious; the payoff only arrives many steps later (e.g., at game over).",
          "The agent pausing for several seconds after receiving any reward signal.",
          "Rewards having negative values."
        ],
        explanation: "In games like chess or maze navigation, early moves directly impact eventual victory or loss, but the reward is only received at the end of the episode."
      },
      correctIndex: 1
    },
    {
      id: "ch5_q4",
      code: null,
      ja: {
        question: "バージョン管理システム Git において、変更したファイルを「ステージングエリア（インデックス）」に登録するコマンドはどれですか？",
        options: ["git commit", "git push", "git add", "git init"],
        explanation: "git add <ファイル名> で作業ツリーの変更をステージングエリアに載せ、その後に git commit でリポジトリのスナップショットとして確定します。"
      },
      en: {
        question: "In Git version control, which command stages modified files to the index before committing?",
        options: ["git commit", "git push", "git add", "git init"],
        explanation: "git add moves changes from the working tree to the staging area. git commit then captures a snapshot in the local repository."
      },
      correctIndex: 2
    }
  ],

  // CHAPTER 6
  6: [
    {
      id: "ch6_q1",
      code: null,
      ja: {
        question: "多腕バンディット問題における「探索と活用のトレードオフ（Exploration vs. Exploitation Trade-off）」において、「活用（Exploitation）」の説明として正しいものはどれですか？",
        options: [
          "まだ引いたことがない未知のスロットマシンを引いて情報（データ）を収集すること。",
          "現時点で最も期待値（平均報酬）が高いと推定されている行動を選択して、手堅く報酬を獲得すること。",
          "すべてのレバーを完全ランダムに等確率で引くこと。",
          "スロットマシンの当たり確率が途中で変化したときにアルゴリズムをリセットすること。"
        ],
        explanation: "「活用」はこれまでの知識の中で最善の選択肢を選んで目先の利益を刈り取ることです。「探索」はより良い選択肢が隠れていないかを調べるために未知・低頻度の行動を試すことです。"
      },
      en: {
        question: "In the Multi-Armed Bandit dilemma, what does 'Exploitation' mean?",
        options: [
          "Pulling unfamiliar slot levers to collect statistical information.",
          "Choosing the action currently estimated to have the highest average reward to secure immediate payoff.",
          "Selecting every action with equal random probability.",
          "Resetting the algorithm whenever machine payout rates change."
        ],
        explanation: "Exploitation means capitalizing on existing knowledge by choosing the best-known arm. Exploration means trying other arms to discover potentially higher payoffs."
      },
      correctIndex: 1
    },
    {
      id: "ch6_q2",
      code: null,
      ja: {
        question: "ε-greedy法（イプシロン・グリーディ法）において、ε = 0.1 に設定した場合のエージェントの行動決定ルールとして正しいものを選んでください。",
        options: [
          "常に 10% の確率で最高評価の行動を選び、90% の確率でランダムに行動する。",
          "90% の確率で現時点で最高評価の行動を選び（活用）、10% の確率でランダムに行動を選ぶ（探索）。",
          "最初の 10 回だけ探索し、以後はすべて活用を行う。",
          "すべての腕の報酬を 0.1 倍にして計算する。"
        ],
        explanation: "ε-greedy法では、確率 ε (10%) でランダムに行動を選択して探索を行い、確率 1-ε (90%) で現時点で最もQ値（平均報酬）の高い貪欲行動を選択して活用します。"
      },
      en: {
        question: "Under the ε-greedy algorithm with ε = 0.1, how does the agent select its action?",
        options: [
          "Picks the greedy action with 10% probability, and chooses randomly with 90% probability.",
          "Selects the greedy (highest estimated) action with 90% probability, and chooses a random action with 10% probability.",
          "Explores for the first 10 steps, then exploits forever after.",
          "Multiplies every reward by 0.1 before updating."
        ],
        explanation: "With probability 1 - ε (0.90), the agent exploits the current best action. With probability ε (0.10), it explores by picking a random action."
      },
      correctIndex: 1
    },
    {
      id: "ch6_q3",
      code: null,
      ja: {
        question: "ε = 0（純粋なグリーディ法）を採用した場合に起こり得る最も重大なリスクは何ですか？",
        options: [
          "計算時間が指数関数的に増大してフリーズする。",
          "初期の数回の試行で偶然当たった平凡な腕に固執し、真に勝率の高い最高の腕を一生引かなくなる。",
          "探索ばかりを繰り返して累積報酬が一切増えない。",
          "Pythonの浮動小数点数の丸め誤差でエラーが発生する。"
        ],
        explanation: "ε = 0 では一切探索を行いません。仮に最高勝率の腕が初期にたまたまハズレを引き、勝率の低い腕がたまたま当たった場合、エージェントは一生その低勝率の腕を選び続け、真の当たり台を見つけられなくなります。"
      },
      en: {
        question: "What is the most serious failure mode of pure greedy action selection (ε = 0)?",
        options: [
          "Computation time explodes exponentially and crashes.",
          "It can lock into an inferior arm that got lucky early on, completely missing the true optimal arm.",
          "It gets stuck exploring indefinitely without accumulating rewards.",
          "It causes floating-point arithmetic overflow errors."
        ],
        explanation: "Without exploration (ε = 0), if a suboptimal arm gets lucky in early trials, the agent will greedily exploit it forever and never discover better arms."
      },
      correctIndex: 1
    },
    {
      id: "ch6_q4",
      code: null,
      ja: {
        question: "標本平均法において、ある行動 a を n 回引いたときの平均報酬 Q_n から新しい報酬 R を得て Q_{n+1} に更新する逐次更新式として正しいものはどれですか？",
        options: [
          "Q_{n+1} = Q_n + (1 / n) * (R - Q_n)",
          "Q_{n+1} = Q_n + n * (R - Q_n)",
          "Q_{n+1} = (Q_n + R) / 2",
          "Q_{n+1} = Q_n + R"
        ],
        explanation: "逐次平均計算の公式は Q_{n+1} = Q_n + (1/n)[R - Q_n] です。「新推定量 = 旧推定量 + ステップサイズ × (目標値 - 旧推定量)」という構造を持ち、これは強化学習全体のTD更新式の原型となっています。"
      },
      en: {
        question: "Which formula represents the incremental sample-average update rule for action value Q after receiving reward R on step n?",
        options: [
          "Q_{n+1} = Q_n + (1 / n) * (R - Q_n)",
          "Q_{n+1} = Q_n + n * (R - Q_n)",
          "Q_{n+1} = (Q_n + R) / 2",
          "Q_{n+1} = Q_n + R"
        ],
        explanation: "The incremental sample average formula is Q_{n+1} = Q_n + (1/n)(R - Q_n), which follows the universal pattern: NewEstimate = OldEstimate + StepSize × (Target - OldEstimate)."
      },
      correctIndex: 0
    }
  ],

  // CHAPTER 7
  7: [
    {
      id: "ch7_q1",
      code: null,
      ja: {
        question: "強化学習の数学的基盤である「マルコフ決定過程（MDP）」において、「マルコフ性（Markov Property）」とは何を意味しますか？",
        options: [
          "過去のすべての行動履歴と状態遷移の全履歴を記憶していなければ次の状態を予測できない性質。",
          "次時刻の状態 S_{t+1} の生起確率は、過去の全履歴に関係なく、現在の状態 S_t と現在の行動 A_t のみに依存するという性質。",
          "報酬が常に正の整数値のみをとる性質。",
          "エージェントの行動が常にランダムに決定される性質。"
        ],
        explanation: "マルコフ性とは「現在が分かっていれば、過去の履歴は未来の予測に関係しない（将来は現在のみに依存する）」という性質です。"
      },
      en: {
        question: "In Markov Decision Processes (MDP), what does the 'Markov Property' state?",
        options: [
          "Predicting the next state requires remembering the entire historical trajectory from time 0.",
          "The future state S_{t+1} depends only upon the current state S_t and action A_t, conditionally independent of past history.",
          "Rewards are strictly positive integers at every step.",
          "The agent's policy must be completely uniform random."
        ],
        explanation: "The Markov property states that 'the future is independent of the past given the present': P(S_{t+1} | S_t, A_t, S_{t-1}, ...) = P(S_{t+1} | S_t, A_t)."
      },
      correctIndex: 1
    },
    {
      id: "ch7_q2",
      code: null,
      ja: {
        question: "割引率 γ（ガンマ: 0 ≦ γ < 1）を強化学習の収益計算に導入する主な理由として、誤っているものはどれですか？",
        options: [
          "遠い未来に得られる不確かな報酬よりも、目先の確実な報酬を高く評価するため。",
          "無限に続くタスク（継続的課題）において、累積報酬が無限大（∞）に発散するのを防ぐため。",
          "エージェントがゴールに向かわず同じ場所をぐるぐる回り続けるのを抑制するため。",
          "行動価値関数 Q(s, a) の値を常に負の数にするため。"
        ],
        explanation: "割引率 γ は未来の報酬を割り引くことで収益の無限大発散を防ぎ、目先の報酬の価値を高めるために用います。Q値を負の数にするためではありません。"
      },
      en: {
        question: "Which of the following is NOT a valid rationale for introducing the discount factor γ (0 <= γ < 1) in RL?",
        options: [
          "Valuing immediate rewards higher than distant, uncertain future rewards.",
          "Preventing the total return from diverging to infinity in continuing tasks.",
          "Discouraging the agent from wandering endlessly in circles without reaching the goal.",
          "Forcing the action-value function Q(s, a) to strictly take negative values."
        ],
        explanation: "Discounting ensures convergence and reflects economic time preference; it does not exist to force values to become negative."
      },
      correctIndex: 3
    },
    {
      id: "ch7_q3",
      code: null,
      ja: {
        question: "割引率 γ = 0.5 のとき、時刻 t から得られた即時報酬列が R_{t+1} = 4, R_{t+2} = 6, R_{t+3} = 8 で終了した場合、割引収益 G_t の値はいくつですか？",
        options: ["18.0", "9.0", "7.0", "5.5"],
        explanation: "割引収益の定義式 G_t = R_{t+1} + γ * R_{t+2} + γ^2 * R_{t+3} より、G_t = 4 + 0.5 * 6 + (0.5)^2 * 8 = 4 + 3 + 0.25 * 8 = 4 + 3 + 2 = 9.0 となります。"
      },
      en: {
        question: "With discount factor γ = 0.5 and reward sequence R_{t+1} = 4, R_{t+2} = 6, R_{t+3} = 8, what is the discounted return G_t?",
        options: ["18.0", "9.0", "7.0", "5.5"],
        explanation: "G_t = R_{t+1} + γ R_{t+2} + γ^2 R_{t+3} = 4 + (0.5)(6) + (0.25)(8) = 4 + 3 + 2 = 9.0."
      },
      correctIndex: 1
    },
    {
      id: "ch7_q4",
      code: null,
      ja: {
        question: "状態価値関数 V(s) と 行動価値関数 Q(s, a) の違いとして最も適切な説明を選んでください。",
        options: [
          "V(s) は環境の良さを表し、Q(s, a) はエージェントの賢さを表す。",
          "V(s) は「ある状態 s にいることの期待収益」を表し、Q(s, a) は「状態 s で特定の行動 a を取ったときの期待収益」を表す。",
          "V(s) は常に正の値であり、Q(s, a) は常に負の値である。",
          "V(s) は深層強化学習でのみ使われ、Q(s, a) は表形式学習でのみ使われる。"
        ],
        explanation: "V(s) は方策に従った場合に状態 s から得られる期待収益（そのマス自体の良さ）であり、Q(s, a) は状態 s で行動 a を取った後に方策に従った場合の期待収益（そのマスでその行動を取ることの良さ）です。"
      },
      en: {
        question: "What is the key difference between the state-value function V(s) and action-value function Q(s, a)?",
        options: [
          "V(s) evaluates environment quality, while Q(s, a) evaluates agent intelligence.",
          "V(s) is the expected return starting from state s, while Q(s, a) is the expected return of taking action a in state s.",
          "V(s) must be positive, while Q(s, a) must be negative.",
          "V(s) is exclusive to Deep RL, whereas Q(s, a) only applies to tabular RL."
        ],
        explanation: "V(s) measures how good it is to be in state s. Q(s, a) measures how good it is to perform action a in state s and follow the policy thereafter."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 8
  8: [
    {
      id: "ch8_q1",
      code: `import gymnasium as gym
env = gym.make("CliffWalking-v0")
state, info = env.reset()`,
      ja: {
        question: "Gymnasium で環境を最初期化し、エージェントのスタート状態を取得するメソッドはどれですか？",
        options: ["env.start()", "env.reset()", "env.init()", "env.begin()"],
        explanation: "Gymnasiumの標準APIでは env.reset() を呼び出すことで環境を初期状態にし、(observation, info) のタプルが返されます。"
      },
      en: {
        question: "In the Gymnasium API, which method resets the environment and returns the initial state observation?",
        options: ["env.start()", "env.reset()", "env.init()", "env.begin()"],
        explanation: "env.reset() is the standard method to initialize or restart an episode, returning (observation, info)."
      },
      correctIndex: 1
    },
    {
      id: "ch8_q2",
      code: `next_state, reward, terminated, truncated, info = env.step(action)`,
      ja: {
        question: "Gymnasium の env.step(action) が返す5つの戻り値のうち、terminated と truncated の違いとして正しいものはどれですか？",
        options: [
          "terminated はエラーによる強制終了を表し、truncated はゴール到達を表す。",
          "terminated はタスク本来の終了条件（ゴール到達や崖への転落など）を満たしたことを表し、truncated はステップ数上限などの外的制限による打ち切りを表す。",
          "両者に違いはなく、常に同じブール値が返る。",
          "terminated はエージェントの死亡、truncated はエージェントの勝利を表す。"
        ],
        explanation: "terminated は MDP 本来の終端状態（ゴール、死亡など）への到達を示します。truncated は「最大1000ステップ経過したため打ち切る」といった環境外のタイムリミットによる打ち切りを示します。"
      },
      en: {
        question: "In Gymnasium's env.step(action), what is the difference between terminated and truncated?",
        options: [
          "terminated means crashed with an error, while truncated means goal reached.",
          "terminated indicates an intrinsic MDP terminal condition (e.g., reached goal or fell off cliff), while truncated indicates an artificial time limit cutoff.",
          "They are synonymous and always return identical booleans.",
          "terminated means agent died, truncated means agent won."
        ],
        explanation: "terminated means the agent reached a natural terminal state. truncated indicates an artificial horizon cutoff (such as max_episode_steps reached)."
      },
      correctIndex: 1
    },
    {
      id: "ch8_q3",
      code: null,
      ja: {
        question: "Cliff Walking（崖歩き）問題において、エージェントが「崖（Cliff）」のマスに足を踏み入れたときの報酬と状態変化として正しいものはどれですか？",
        options: [
          "報酬 0 を受け取り、その場で停止する。",
          "報酬 -100 を受け取り、スタート地点（マス36）へ強制的に戻される。",
          "報酬 +100 を受け取り、ゲームクリアとなる。",
          "報酬 -1 を受け取り、次のマスへそのまま進む。"
        ],
        explanation: "Cliff Walking では、崖に落ちると大きなペナルティである報酬 -100 が与えられ、エージェントは即座にスタートマスへ戻されます。通常のマスを1歩進むごとの報酬は -1 です。"
      },
      en: {
        question: "In the Cliff Walking environment, what happens when the agent steps onto a Cliff tile?",
        options: [
          "Receives 0 reward and pauses in place.",
          "Receives -100 penalty reward and is instantly teleported back to the start tile.",
          "Receives +100 reward and wins.",
          "Receives -1 reward and continues walking forward."
        ],
        explanation: "Stepping onto the cliff gives a severe penalty of -100 and sends the agent back to the initial start position."
      },
      correctIndex: 1
    },
    {
      id: "ch8_q4",
      code: null,
      ja: {
        question: "Cliff Walking において、通常の安全なマスを1歩移動するごとの即時報酬が「-1」に設定されている設計上の狙いは何ですか？",
        options: [
          "エージェントをできるだけ早く諦めさせるため。",
          "無駄な寄り道をせず、最短歩数でゴールへ到達するように動機付けるため。",
          "報酬の合計をゼロにするため。",
          "崖に落ちた時のペナルティを目立たなくするため。"
        ],
        explanation: "1歩進むごとに -1 のコストがかかるため、エージェントは累積ペナルティを最小限に抑えようとします。その結果、「最も少ない歩数でゴールへ到達する最短経路」を自然に学習するようになります。"
      },
      en: {
        question: "Why is the per-step reward in Cliff Walking set to -1 for regular safe moves?",
        options: [
          "To encourage the agent to give up immediately.",
          "To penalize each extra step, motivating the agent to find the shortest possible path to the goal.",
          "To make the cumulative return sum to zero.",
          "To mask the cliff penalty."
        ],
        explanation: "A step cost of -1 incentivizes efficiency: every extra move lowers total return, pushing the agent to find the minimum-step optimal path."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 9
  9: [
    {
      id: "ch9_q1",
      code: null,
      ja: {
        question: "Gymnasium の Blackjack（ブラックジャック）環境において、エージェントが選択できる2つの行動（action）の組み合わせとして正しいものはどれですか？",
        options: [
          "0: Stand（これ以上カードを引かない）, 1: Hit（もう1枚カードを引く）",
          "0: Bet（賭ける）, 1: Fold（降りる）",
          "0: Up（上へ進む）, 1: Down（下へ進む）",
          "0: Pass（見送る）, 1: Double Down（倍賭けする）"
        ],
        explanation: "Blackjack 環境の行動空間は spaces.Discrete(2) であり、0 が Stand（手札を確定して勝負）、1 が Hit（カードを引く）を表します。"
      },
      en: {
        question: "In Gymnasium's Blackjack environment, what do the two discrete actions (0 and 1) represent?",
        options: [
          "0: Stand (stop taking cards), 1: Hit (draw another card)",
          "0: Bet, 1: Fold",
          "0: Up, 1: Down",
          "0: Pass, 1: Double Down"
        ],
        explanation: "Action 0 is Stand (stick with current hand), and action 1 is Hit (request an additional card from the dealer)."
      },
      correctIndex: 0
    },
    {
      id: "ch9_q2",
      code: null,
      ja: {
        question: "Gymnasium の Blackjack 環境が返す状態（observation）タプルの3つの要素として正しいものはどれですか？",
        options: [
          "(勝率, 所持金, 現在時刻)",
          "(プレイヤーの手札合計値, ディーラーの見えている表カード, 11として使えるAceの有無)",
          "(カードの総枚数, デッキの残り枚数, シャッフル回数)",
          "(プレイヤーの点数, ディーラーの手札合計値, 賭け金)"
        ],
        explanation: "Blackjackの状態は (player_sum, dealer_showing_card, usable_ace) のタプルで表現されます。例えば (18, 10, False) は「自分の手札合計18、相手の表カード10、使えるAなし」を意味します。"
      },
      en: {
        question: "What 3 elements constitute the state observation tuple in Gymnasium's Blackjack-v1?",
        options: [
          "(win_rate, chips, current_time)",
          "(player's current sum, dealer's showing face card, usable ace boolean)",
          "(total_cards, cards_left_in_deck, shuffle_count)",
          "(player_sum, dealer_sum, current_bet)"
        ],
        explanation: "The state is represented as a 3-tuple: (player_sum [4-21], dealer_showing_card [1-10], usable_ace [bool])."
      },
      correctIndex: 1
    },
    {
      id: "ch9_q3",
      code: null,
      ja: {
        question: "方策評価における「モンテカルロ法（Monte Carlo Method）」の最大の特徴として正しいものを選んでください。",
        options: [
          "環境の遷移確率や内部モデルが完全に未知でも、実際にエピソードを最後までプレイした結果のサンプル収益を平均化することで価値を学習できる。",
          "エピソードの途中で毎ステップごとにリアルタイムに価値を更新できる。",
          "ニューラルネットワークを必ず使用しなければならない。",
          "乱数を使用しない決定論的アルゴリズムである。"
        ],
        explanation: "モンテカルロ法は、環境の確率モデルを知らなくても、実際に最後まで試行（シミュレーション）して得られた収益 G の平均を取ることで価値を推定するモデルフリーな手法です。エピソード完了まで待つ必要があります。"
      },
      en: {
        question: "What is the defining characteristic of Monte Carlo policy evaluation in RL?",
        options: [
          "It learns values from sample returns by playing episodes to completion, without needing prior model transition probabilities.",
          "It updates value estimates immediately at every single step mid-episode.",
          "It strictly requires a deep neural network.",
          "It is a deterministic method that avoids random numbers."
        ],
        explanation: "Monte Carlo methods are model-free and learn from actual experience returns gathered at the conclusion of complete episodes."
      },
      correctIndex: 0
    },
    {
      id: "ch9_q4",
      code: null,
      ja: {
        question: "Blackjackでカードを引きすぎて手札合計が21を超えてしまった（バーストした）場合、エージェントが受け取る報酬として正しいものはどれですか？",
        options: ["0.0", "-1.0", "-100.0", "+1.0"],
        explanation: "Blackjack環境では、勝利時は +1.0、引き分け時は 0.0、敗北（バースト含む）時は -1.0 の報酬が返されます。"
      },
      en: {
        question: "In Blackjack-v1, what reward does the player receive upon busting (hand sum exceeds 21)?",
        options: ["0.0", "-1.0", "-100.0", "+1.0"],
        explanation: "Busting immediately ends the episode in a loss with a reward of -1.0 (win is +1.0, tie is 0.0)."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 10
  10: [
    {
      id: "ch10_q1",
      code: `Q[s, a] = Q[s, a] + alpha * (reward + gamma * np.max(Q[next_s]) - Q[s, a])`,
      ja: {
        question: "上記のQ-learning更新式において、(reward + gamma * np.max(Q[next_s])) は何と呼ばれますか？",
        options: ["TDターゲット（TD Target: 教師信号）", "TD誤差（TD Error）", "学習率（Learning Rate）", "行動価値（Q値）"],
        explanation: "「即時報酬 + 割引後の次状態の最大推定価値」である reward + gamma * max(Q[next_s]) を『TDターゲット』と呼びます。これと現在のQ[s, a]の差分分が『TD誤差』です。"
      },
      en: {
        question: "In the Q-learning update equation above, what is the term (reward + gamma * np.max(Q[next_s])) called?",
        options: ["TD Target", "TD Error", "Learning Rate", "Action-Value"],
        explanation: "reward + gamma * max(Q[next_s]) is the 'TD Target' (the estimated return). Subtracting Q[s, a] gives the 'TD Error'."
      },
      correctIndex: 0
    },
    {
      id: "ch10_q2",
      code: null,
      ja: {
        question: "TD学習（時間的差分学習）がモンテカルロ法と比較して持っている大きな利点はどれですか？",
        options: [
          "エピソードが最後まで終了するのを待たずに、1ステップ進むごとにリアルタイムで価値を更新できる（ブートストラップ）。",
          "計算に乱数を一切使用しないこと。",
          "ハイパーパラメータの調整が一切不要になること。",
          "常にモンテカルロ法よりも理論上の分散が大きくなること。"
        ],
        explanation: "TD学習は、次の状態の推定価値を利用して現在の状態の価値を更新する（ブートストラップする）ため、ゲームが終了するのを待たずに1歩進むごとにリアルタイム学習が可能です。"
      },
      en: {
        question: "What is a major advantage of TD (Temporal Difference) learning over Monte Carlo methods?",
        options: [
          "It updates estimates online after each step without waiting for the episode to complete (bootstrapping).",
          "It uses zero randomness in computation.",
          "It completely eliminates the need for hyperparameters.",
          "It always suffers from higher variance than Monte Carlo."
        ],
        explanation: "TD methods bootstrap: they update existing estimates based in part on other learned estimates, enabling step-by-step learning before an episode concludes."
      },
      correctIndex: 0
    },
    {
      id: "ch10_q3",
      code: null,
      ja: {
        question: "Frozen Lake（凍った湖）環境において、is_slippery = True（デフォルト）のとき、エージェントが「右」を選択したにもかかわらず意図しない方向に進むことがあるのはなぜですか？",
        options: [
          "エージェントのプログラムにバグがあるため。",
          "氷の上で足が滑る現象を模擬しており、意図した方向と左右90度直角方向にそれぞれ 1/3 ずつの確率で移動する確率的環境だから。",
          "エージェントの探索率 ε が常に 1.0 に固定されているから。",
          "Gymnasium のサーバーが通信遅延を起こしているから。"
        ],
        explanation: "Frozen Lake では滑る設定が有効な場合、選択した方向に 1/3、意図した向きから左右直角方向にそれぞれ 1/3 の確率で滑る確率的遷移（Stochastic Transition）が組み込まれています。"
      },
      en: {
        question: "In FrozenLake-v1 with is_slippery=True, why might the agent move sideways when selecting 'Right'?",
        options: [
          "There is a bug in the code interpreter.",
          "The surface is slippery: the agent moves in the intended direction with probability 1/3, and 1/3 each perpendicular direction.",
          "Exploration rate ε is permanently locked at 1.0.",
          "Network latency in Gymnasium."
        ],
        explanation: "FrozenLake models slippery ice stochastically: an action only moves in the chosen direction with 1/3 probability, slipping 90 degrees left or right with 1/3 probability each."
      },
      correctIndex: 1
    },
    {
      id: "ch10_q4",
      code: null,
      ja: {
        question: "Q-learningにおける学習率 α（アルファ: 0 < α ≦ 1）の役割として正しい説明を選んでください。",
        options: [
          "ランダムに行動を選択する確率を決める。",
          "未来の報酬を割り引く割合を決める。",
          "新しく観測したTD誤差を、現在のQ値にどの程度の割合で反映させるか（学習の更新ペース）を調整する。",
          "Qテーブルのメモリ割り当てサイズを決める。"
        ],
        explanation: "学習率 α は、TD誤差（新しい経験によるズレ）をどの程度の強さで既存のQ値に反映させるかを制御します。α = 0 では全く学習せず、α = 1 では最新のTDターゲットで完全に上書きされます。"
      },
      en: {
        question: "What does the learning rate α (0 < α <= 1) control in Q-learning?",
        options: [
          "The probability of selecting random exploration actions.",
          "The discount factor applied to future rewards.",
          "The weight given to newly observed TD errors when updating the existing Q-value.",
          "The memory allocation size of the Q-table."
        ],
        explanation: "Learning rate α controls step size: how much the current Q-value shifts toward the new TD target based on recent experience."
      },
      correctIndex: 2
    }
  ],

  // CHAPTER 11
  11: [
    {
      id: "ch11_q1",
      code: null,
      ja: {
        question: "Cart Pole（カートポール / 倒立振子）環境における目標として正しいものはどれですか？",
        options: [
          "カートを左右に激しく往復させて衝突させること。",
          "台車（カート）を左右に動かし、上に載っているポール（棒）が倒れないようにバランスを取り続けること。",
          "迷路のゴールマスまで最短時間で走破すること。",
          "手札の合計値を21に近づけること。"
        ],
        explanation: "Cart Pole は古典的な制御課題であり、カートを左右に操作して、蝶番で接続されたポールが一定角度以上倒れたりカートが画面外に出たりしないように立て続けることが目標です。"
      },
      en: {
        question: "What is the primary objective in the Cart Pole environment?",
        options: [
          "Crashing the cart against the screen boundary at high speed.",
          "Balancing an upright pole on a moving cart by pushing the cart left or right so it doesn't topple.",
          "Finding the shortest path in a grid maze.",
          "Getting card totals close to 21 without busting."
        ],
        explanation: "Cart Pole is an inverted pendulum task where the agent balances a vertical pole on a moving cart by applying left/right forces."
      },
      correctIndex: 1
    },
    {
      id: "ch11_q2",
      code: null,
      ja: {
        question: "Cart Pole の状態（カート位置、速度、ポールの角度、角速度）のように連続値（実数値）をとる環境において、古典的な表形式（Q-table）を直接使えない根本的な理由は何ですか？",
        options: [
          "Pythonのリストが小数を格納できないから。",
          "連続値の状態数は無限（実数）に存在するため、すべての状態を行として並べたQテーブルを作成できないから。",
          "Gymnasium が連続値環境での step() 実行を禁止しているから。",
          "連続値では報酬が必ずゼロになってしまうから。"
        ],
        explanation: "マス目や手札のような有限個の離散状態とは異なり、実数値の連続空間は無限通りの状態が存在します。そのため、状態を行・行動を列とする有限のQテーブルを作ることが原理的に不可能です。"
      },
      en: {
        question: "Why cannot traditional tabular Q-learning be applied directly to continuous state spaces like Cart Pole?",
        options: [
          "Python lists cannot store floating point values.",
          "Continuous spaces have infinite possible states, making it impossible to construct a finite Q-table with a row for every state.",
          "Gymnasium prohibits calling step() on continuous spaces.",
          "Rewards are guaranteed to be zero in continuous tasks."
        ],
        explanation: "A continuous state space consists of uncountably infinite states. A lookup table cannot have infinite rows, causing the 'curse of dimensionality'."
      },
      correctIndex: 1
    },
    {
      id: "ch11_q3",
      code: null,
      ja: {
        question: "Cart Pole の連続状態空間を表形式Q-learningで扱うために、実数値の範囲をいくつかの区間に区切って離散的なインデックスに変換する手法を何と呼びますか？",
        options: ["離散化（Discretization / ビン分割 / Binning）", "正則化（Regularization）", "標準化（Standardization）", "主成分分析（PCA）"],
        explanation: "連続変数をいくつかの区間（ビン）に分割し、例えば角度が -0.1〜0.1 rad ならビン2、のように整数インデックスに変換する手法を「離散化（Discretization / Binning）」と呼びます。"
      },
      en: {
        question: "What technique divides continuous variables into discrete intervals/bins so tabular Q-learning can be used?",
        options: ["Discretization (Binning)", "Regularization", "Standardization", "Principal Component Analysis (PCA)"],
        explanation: "Discretization (or binning) partitions continuous numerical ranges into discrete interval indices (e.g., using np.digitize)."
      },
      correctIndex: 0
    },
    {
      id: "ch11_q4",
      code: null,
      ja: {
        question: "Cart Pole-v1 において、エージェントがポールを倒さずに立て続けている限り、各ステップごとに与えられる報酬はいくつですか？",
        options: ["0", "+1", "+10", "-1"],
        explanation: "Cart Pole では、ポールが倒れずに生き残っている限り、1ステップ経過するごとに +1 の報酬が与えられます。できるだけ長く耐えるほど合計報酬が高くなります。"
      },
      en: {
        question: "In CartPole-v1, what reward does the agent receive for each step the pole remains upright?",
        options: ["0", "+1", "+10", "-1"],
        explanation: "The agent is rewarded +1 for every single time-step the pole remains upright and within bounds."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 12
  12: [
    {
      id: "ch12_q1",
      code: `import gymnasium as gym
from gymnasium import spaces

class MyCustomEnv(gym.Env):
    def __init__(self):
        super().__init__()
        ...`,
      ja: {
        question: "Gymnasium で自作の強化学習環境クラスを作成する際、継承しなければならない基底クラスはどれですか？",
        options: ["gym.Agent", "gym.Env", "gym.Game", "gym.Model"],
        explanation: "独自の強化学習環境を作るには、Gymnasiumの基本クラスである gymnasium.Env を継承（サブクラス化）します。"
      },
      en: {
        question: "Which base class must be inherited when building a custom environment in Gymnasium?",
        options: ["gym.Agent", "gym.Env", "gym.Game", "gym.Model"],
        explanation: "All custom Gymnasium environments subclass gymnasium.Env."
      },
      correctIndex: 1
    },
    {
      id: "ch12_q2",
      code: null,
      ja: {
        question: "自作環境において、エージェントが選択可能な行動が「上・下・左・右」の4種類である場合、action_space として定義する最も適切なコードはどれですか？",
        options: [
          "self.action_space = spaces.Discrete(4)",
          "self.action_space = spaces.Box(low=0, high=4)",
          "self.action_space = [0, 1, 2, 3]",
          "self.action_space = spaces.Continuous(4)"
        ],
        explanation: "離散的な4つの選択肢（0, 1, 2, 3）を持つ行動空間は spaces.Discrete(4) で定義します。"
      },
      en: {
        question: "If an agent in a custom environment can take 4 discrete actions (Up, Down, Left, Right), how should action_space be defined?",
        options: [
          "self.action_space = spaces.Discrete(4)",
          "self.action_space = spaces.Box(low=0, high=4)",
          "self.action_space = [0, 1, 2, 3]",
          "self.action_space = spaces.Continuous(4)"
        ],
        explanation: "Discrete action choices are defined using spaces.Discrete(n). Here, spaces.Discrete(4) provides actions {0, 1, 2, 3}."
      },
      correctIndex: 0
    },
    {
      id: "ch12_q3",
      code: null,
      ja: {
        question: "自作環境の reset(self, seed=None, options=None) メソッドが必ず返さなければならない戻り値の形式はどれですか？",
        options: [
          "observation のみ（単一の値）",
          "(observation, info) のタプル",
          "(observation, reward, terminated, truncated, info) の5要素タプル",
          "True または False"
        ],
        explanation: "Gymnasiumの規格では、reset() メソッドは初期状態 (observation) と付加情報辞書 (info) の2要素タプル (observation, info) を返さなければなりません。"
      },
      en: {
        question: "What must the custom environment's reset() method return according to the Gymnasium specification?",
        options: [
          "Only observation",
          "A 2-tuple of (observation, info)",
          "A 5-tuple of (observation, reward, terminated, truncated, info)",
          "A boolean (True/False)"
        ],
        explanation: "Gymnasium requires reset() to return a tuple containing (initial_observation, info_dict)."
      },
      correctIndex: 1
    },
    {
      id: "ch12_q4",
      code: null,
      ja: {
        question: "自作環境「GridTreasureEnv（宝探しゲーム）」において、エージェントが罠（Trap）マスに進入したときの適切な報酬と終了フラグの設計として最も自然なものはどれですか？",
        options: [
          "reward = +100, terminated = True",
          "reward = -10, terminated = True （またはスタート位置へ戻す）",
          "reward = 0, terminated = False",
          "reward = -1000000, 永久フリーズ"
        ],
        explanation: "罠（トラップ）はペナルティなので負の報酬（例: -10）を与え、ゲームオーバーとして terminated = True にするかスタートへ戻す設計が定石です。"
      },
      en: {
        question: "In the GridTreasureEnv (treasure hunt) game, what is the standard reward and flag design when the agent steps on a Trap tile?",
        options: [
          "reward = +100, terminated = True",
          "reward = -10 (negative penalty), terminated = True (or respawn at start)",
          "reward = 0, terminated = False",
          "reward = -1000000 and infinite freeze"
        ],
        explanation: "A trap represents a hazard: giving negative reward (e.g., -10) and terminating the episode encourages the agent to avoid it."
      },
      correctIndex: 1
    }
  ],

  // CHAPTER 13
  13: [
    {
      id: "ch13_q1",
      code: `epsilon = max(min_epsilon, epsilon * epsilon_decay)`,
      ja: {
        question: "自作ゲームAIの訓練ループにおいて、エピソードが進むにつれて探索率 ε（イプシロン）を徐々に減少させる（ε-decay）目的は何ですか？",
        options: [
          "学習初期は広くランダムに探索させて環境全体を把握させ、学習終盤は蓄積したQテーブルの知識を安定して活用させるため。",
          "エピソードごとの実行速度を高速化するため。",
          "Pythonのメモリ不足（OOM）を防ぐため。",
          "割引率 γ の値をゼロに近づけるため。"
        ],
        explanation: "初期は未知のマップを探索する必要があるため高い ε でランダム行動させ、学習が進んで最適な道筋が分かってきたら ε を小さくして活用（最短クリア）へシフトさせるためです。"
      },
      en: {
        question: "Why is epsilon decayed (ε-decay) over training episodes when teaching a custom game AI?",
        options: [
          "To explore broadly early on, and gradually shift to exploiting the learned Q-table as knowledge matures.",
          "To speed up raw CPU cycle execution.",
          "To avoid out-of-memory errors in Python.",
          "To force the discount factor γ to zero."
        ],
        explanation: "Early in training, the agent knows nothing and needs high exploration. Later, it should exploit learned values to polish the optimal trajectory."
      },
      correctIndex: 0
    },
    {
      id: "ch13_q2",
      code: null,
      ja: {
        question: "自作ゲームAIの学習が順調に成功していることを示すグラフの傾向として、正しい組み合わせを選んでください。",
        options: [
          "エピソードごとの「総報酬」が上昇して高水準で安定し、「クリアまでの歩数」が減少して最短経路に収束する。",
          "エピソードごとの「総報酬」が減少してマイナス無限大に発散する。",
          "「クリアまでの歩数」が毎回完全にランダムに乱高下し続ける。",
          "Qテーブルのすべての値が 0.0 になる。"
        ],
        explanation: "学習が成功すると、無駄な寄り道や罠への落下がなくなり、ゴールへ最短で到達するため総報酬は増加し、ステップ数は最短歩数へと減少・収束します。"
      },
      en: {
        question: "Which trend in training metrics indicates that the custom game AI is successfully learning?",
        options: [
          "Total episode reward increases to a steady plateau, while steps-to-goal decreases toward the shortest path.",
          "Total reward plunges toward negative infinity.",
          "Steps-to-goal fluctuates chaotically with high variance forever.",
          "All Q-table entries converge to exactly 0.0."
        ],
        explanation: "A learning agent avoids traps and finds shorter paths: total rewards rise while required steps drop to the optimal minimum."
      },
      correctIndex: 0
    },
    {
      id: "ch13_q3",
      code: `action = np.argmax(Q[state])`,
      ja: {
        question: "訓練が完了したAIのテストプレイ（推論モード）を行う際、探索率 ε を 0（完全な貪欲行動: argmax）にする理由は何ですか？",
        options: [
          "ランダムな誤行動を一切排除し、学習で獲得した最も賢い最適な方針のみを実行させるため。",
          "画面の描画フレームレートを上げるため。",
          "エージェントの現在位置を非表示にするため。",
          "Gymnasium環境の制約でテスト時は0にしなければならないから。"
        ],
        explanation: "テスト時は学習済みAIの実力を評価するため、探索（無作為な寄り道）を排し、常にQ値が最大となる最強の行動方針（純粋な活用）を実行させます。"
      },
      en: {
        question: "Why is ε set to 0 (pure greedy selection: np.argmax) during post-training test playback?",
        options: [
          "To eliminate random blunders and demonstrate the AI's best learned policy strictly.",
          "To increase display rendering frame rates.",
          "To hide the player's coordinate position.",
          "Gymnasium crashes if ε > 0 during testing."
        ],
        explanation: "Testing evaluates learned performance: setting ε = 0 stops exploratory moves so the agent always picks its best estimated action."
      },
      correctIndex: 0
    },
    {
      id: "ch13_q4",
      code: null,
      ja: {
        question: "自作ゲームのAIを学習させたところ、罠を全く恐れずに罠に突っ込んでゲームオーバーを繰り返しています。ハイパーパラメータや報酬設計の改善策として最も効果的なものはどれですか？",
        options: [
          "罠に落ちた時のペナルティ報酬をより大きな負の値（例: -1から-20へ）に強化する。",
          "学習率 α を 0 にする。",
          "割引率 γ を 0 にする。",
          "エピソード数を 1 回に減らす。"
        ],
        explanation: "エージェントが罠を軽視するのは、ゴールによるプラス報酬に対して罠のペナルティが小さすぎるか、または学習不足です。罠のマイナス報酬を大きく設定することで、Q値が急落して罠マスへの行動が選ばれなくなります。"
      },
      en: {
        question: "If an agent repeatedly rushes into traps without avoiding them, what is the most effective fix?",
        options: [
          "Increase the negative penalty for stepping into traps (e.g., from -1 to -20).",
          "Set learning rate α to 0.",
          "Set discount factor γ to 0.",
          "Reduce training to a single episode."
        ],
        explanation: "If the penalty is too small relative to goal rewards, the agent won't learn to fear traps. Making the penalty more negative strongly discourages entering trap states."
      },
      correctIndex: 0
    }
  ],

  // CHAPTER 14
  14: [
    {
      id: "ch14_q1",
      code: null,
      ja: {
        question: "本作戦で扱った「表形式Q学習（Tabular Q-learning）」が、Atariのゲーム画面や自動運転などの現実世界の複雑なタスクにそのまま適用できない根本的な限界は何ですか？",
        options: [
          "画面のピクセル画像や連続値など、状態の組み合わせ数が天文学的（あるいは無限）になり、テーブルとしてメモリに保持・学習できない（次元の呪い）。",
          "Python言語が画像データを読み込めないから。",
          "強化学習はゲームにしか適用できないアルゴリズムだから。",
          "表形式の学習はGPUを使うことが禁止されているから。"
        ],
        explanation: "表形式Q学習はすべての状態×行動の組み合わせを1マスずつ記憶します。画像入力（例: 210×160ピクセル）では状態数が宇宙の原子数よりも多くなるため、表として保持することが不可能です。"
      },
      en: {
        question: "What is the fundamental limitation of Tabular Q-learning that prevents it from scaling to complex real-world tasks like Atari screen pixels or self-driving cars?",
        options: [
          "The state space becomes astronomical or continuous, making it impossible to store or explore every cell in a lookup table (Curse of Dimensionality).",
          "Python is incapable of processing pixel arrays.",
          "RL algorithms are mathematically restricted to grid worlds.",
          "Tabular algorithms cannot legally execute on GPUs."
        ],
        explanation: "Lookup tables require an explicit row per state. When states are pixel images or continuous variables, the state space explodes, necessitating function approximation."
      },
      correctIndex: 0
    },
    {
      id: "ch14_q2",
      code: null,
      ja: {
        question: "深層強化学習（Deep Q-Network: DQNなど）において、巨大なQテーブルの代わりに導入される中核技術は何ですか？",
        options: [
          "深層ニューラルネットワーク（DNN）によるQ関数の関数近似 Q(s, a; θ)",
          "大量のif-else文によるルールベース分岐",
          "手動による全状態のハードコード",
          "スロットマシンの台数を100台に増やすこと"
        ],
        explanation: "DQNは、状態を入力すると各行動のQ値を出力する深層ニューラルネットワークを導入し、テーブルではなくネットワークの重みパラメータ θ を更新することで未知の状態にも汎化できるようにしました。"
      },
      en: {
        question: "In Deep Reinforcement Learning (such as DQN), what core technology replaces the tabular Q-table?",
        options: [
          "Deep Neural Networks (DNNs) that approximate the action-value function Q(s, a; θ).",
          "Massive rule-based if-else lookup trees.",
          "Hard-coding state tables manually.",
          "Increasing the number of slot machine arms to 100."
        ],
        explanation: "DQN uses Deep Neural Networks as non-linear function approximators, mapping high-dimensional states directly to Q-values."
      },
      correctIndex: 0
    },
    {
      id: "ch14_q3",
      code: null,
      ja: {
        question: "本科目「情報基礎2」を通じて学んだ、AI・コーディングエージェントが高度に発達した現代において、人間がプログラミングの基礎と論理を学ぶべき最大の意義は何ですか？",
        options: [
          "AIの出力するコードにはハルシネーションや潜在的欠陥が含まれ得るため、人間が正しさを検証し、仕様を正しく指示し、デバッグできる知見を持つ必要があるから。",
          "将来AIの利用が世界的に全面的に禁止されると予想されるから。",
          "コンピュータのキータッチ速度を測定するため。",
          "数学の公式を丸暗記するため。"
        ],
        explanation: "教科書の「はじめに」と「まとめ」で一貫して語られている通り、AIエージェントに的確な指示を出し、その出力に潜むハルシネーションや不具合を見抜いて検証・修正できる力こそが、これからのエンジニアに最も求められる本質的スキルです。"
      },
      en: {
        question: "Throughout this course, what is emphasized as the primary reason humans must still master programming foundations in the era of AI coding agents?",
        options: [
          "AI outputs can contain subtle bugs and hallucinations; humans must possess the foundational knowledge to audit, test, and guide agents effectively.",
          "AI usage is expected to be globally banned in the near future.",
          "To improve typing speeds on keyboards.",
          "To memorize arithmetic formulas by heart."
        ],
        explanation: "As highlighted in the course text, AI coding agents amplify human productivity, but humans must understand computational principles to verify correctness and guide solutions."
      },
      correctIndex: 0
    },
    {
      id: "ch14_q4",
      code: null,
      ja: {
        question: "強化学習エージェントが意図した通りに賢く育つかどうかを左右する、人間側の最も重要で繊細な設計項目は何ですか？",
        options: [
          "報酬関数（Reward Function）の設計",
          "PCディスプレイの解像度",
          "コードを保存するフォルダの名前",
          "Pythonの変数名のアルファベット大文字小文字"
        ],
        explanation: "エージェントは与えられた「報酬」を最大化することのみを忠実に追求します。人間が報酬設計を誤ると、裏技を使って点数を稼ぐだけで本来のタスクを達成しない（Reward Hacking）などの問題が起こります。"
      },
      en: {
        question: "What design choice made by human developers most decisively dictates how an RL agent behaves?",
        options: [
          "The reward function design.",
          "The monitor display resolution.",
          "The name of the folder where code is saved.",
          "The capitalization of variable names."
        ],
        explanation: "Agents ruthlessly optimize the reward signal. Crafting an effective, aligned reward function is critical to prevent unintended exploits (reward hacking)."
      },
      correctIndex: 0
    }
  ]
};
