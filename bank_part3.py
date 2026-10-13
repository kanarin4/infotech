# Bank Part 3: Chapters 8 - 11 (48 questions: 4 chapters x 4 slots x 3 varieties)

PART3_DATA = {
  # CHAPTER 8: Cliff Walking (Gymnasium Basics)
  8: [
    # Slot 1: Gymnasium Core API & reset/step return types
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
        "correctIndex": 1
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
        "correctIndex": 1
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
        "correctIndex": 1
      }
    ],

    # Slot 2: Cliff Walking Grid coordinates & reward structure
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
        "correctIndex": 1
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: State-value visualization & policy comparison
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
        "correctIndex": 0
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
        "correctIndex": 1
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
        "correctIndex": 0
      }
    ],

    # Slot 4: Environment inspection & action/observation space
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
        "correctIndex": 0
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
        "correctIndex": 3
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
        "correctIndex": 1
      }
    ]
  ],

  # CHAPTER 9: Blackjack (Monte Carlo Method)
  9: [
    # Slot 1: Monte Carlo Method Core Characteristics
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
        "correctIndex": 1
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
        "correctIndex": 1
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
        "correctIndex": 0
      }
    ],

    # Slot 2: Blackjack State Representation
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
        "correctIndex": 0
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
        "correctIndex": 1
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
        "correctIndex": 0
      }
    ],

    # Slot 3: Action-value Q(s, a) and Returns G_t Calculation
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: First-visit vs Every-visit & Policy Derivation
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 10: Frozen Lake (TD Learning & Q-Learning)
  10: [
    # Slot 1: TD Learning Principle & Bootstrapping
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 2: Q-Learning Update Equation
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: Q-Table Concrete Calculation Trace
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: Frozen Lake Environment Dynamics (Slippery surface)
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 11: Cart Pole (Continuous State & Discretization)
  11: [
    # Slot 1: CartPole-v1 State Space Analysis
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 2: Limitations of Tabular Q-Learning in Continuous Spaces
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: Discretization (Binning) with np.digitize
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: CartPole Termination Conditions & Success Criteria
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
        "correctIndex": 0
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ]
  ]
}
