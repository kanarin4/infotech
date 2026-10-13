# Bank Part 4: Chapters 12 - 14 (36 questions: 3 chapters x 4 slots x 3 varieties)

PART4_DATA = {
  # CHAPTER 12: Creating a Custom Gymnasium Env
  12: [
    # Slot 1: Subclassing gymnasium.Env and required methods
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 2: Action Space & Observation Space Definition
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: State Transition & Grid Boundary Clipping Logic
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: Step Method Return Values and Type Specifications
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 13: Training Custom Game AI
  13: [
    # Slot 1: Training Loop Architecture & Episode Structure
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 2: Epsilon Decay Calculation Trace
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: Evaluation vs Training Mode (Greedy Policy)
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: Reward Shaping & Alignment Pitfalls
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 14: Summary & Deep RL Roadmap
  14: [
    # Slot 1: Tabular Limits vs Deep Q-Networks (DQN)
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 2: DQN Stability Innovations (Experience Replay & Target Network)
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: Code Verification vs Blind AI Vibe-Coding
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: Modern RL Applications & Alignment
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ]
  ]
}
