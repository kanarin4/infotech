# Bank Part 1: Chapters 1 - 4 (48 questions: 4 chapters x 4 slots x 3 varieties)

PART1_DATA = {
  # CHAPTER 1: プログラムとは / What is a Program?
  1: [
    # Slot 1: 主記憶と補助記憶 (Main Memory vs Storage)
    [
      {
        "id": "ch1_q1_v1",
        "code": None,
        "ja": {
          "question": "PCの電源を切ると記憶内容がすべて失われる主記憶（DRAMなど）の特性を何と呼びますか？",
          "options": ["不揮発性（Non-volatile）", "揮発性（Volatile）", "永続性（Persistent）", "仮想記憶性（Virtual memory）"],
          "explanation": "主記憶（メインメモリ / DRAM）は通電中のみデータを保持する「揮発性（Volatile）」を持ちます。一方、SSDやHDDなどの補助記憶は電源を切ってもデータが残る「不揮発性（Non-volatile）」です。"
        },
        "en": {
          "question": "Which term describes the property of main memory (e.g., DRAM) where all stored data is lost when power is turned off?",
          "options": ["Non-volatile", "Volatile", "Persistent", "Virtual memory"],
          "explanation": "Main memory (DRAM) is volatile, meaning it requires continuous electric power to retain data. Secondary storage (SSD/HDD) is non-volatile, keeping data across reboots."
        },
        "correctIndex": 1
      },
      {
        "id": "ch1_q1_v2",
        "code": None,
        "ja": {
          "question": "CPUがプログラムを実行する際、SSDから直接命令を実行せず、まず主記憶（DRAM）に読み込む主な理由は何ですか？",
          "options": [
            "SSDには実行可能ファイルを保存する機能がないため",
            "主記憶はSSDと比較して読み書き速度が桁違いに高速であるため",
            "SSDのデータは揮発性であり、実行中に消失する危険があるため",
            "主記憶はSSDよりも大容量で安価であるため"
          ],
          "explanation": "主記憶（DRAM）のデータ転送速度はSSDよりもはるかに高速です。高速なCPUの演算速度に追従するため、実行するプログラムやデータはあらかじめ主記憶上に展開されます。"
        },
        "en": {
          "question": "Why does the CPU load programs into main memory (DRAM) before executing them, rather than reading directly from an SSD?",
          "options": [
            "SSDs cannot store executable binary files",
            "Main memory has substantially higher access speeds than secondary storage",
            "SSD data is volatile and risks corruption during execution",
            "Main memory provides much greater capacity at lower cost than SSDs"
          ],
          "explanation": "Main memory access speeds are orders of magnitude faster than SSD storage. Programs must reside in RAM so the CPU can fetch instructions without massive latency."
        },
        "correctIndex": 1
      },
      {
        "id": "ch1_q1_v3",
        "code": None,
        "ja": {
          "question": "PCでアプリケーションを起動したときの動作として、正しい説明はどれですか？",
          "options": [
            "補助記憶にあるプログラムのコピーが主記憶（メモリ）に読み込まれ、CPUがそれを実行する",
            "主記憶にあるデータが補助記憶に上書きされ、補助記憶上でCPUが直接実行する",
            "CPU内部のレジスタにアプリケーションの全コードが一度に保存される",
            "プログラムは保存されず、毎回インターネットから再ダウンロードされて実行される"
          ],
          "explanation": "プログラム起動時、OSは補助記憶（SSD/HDD）に保存されている実行ファイルを主記憶（メモリ）に読み込み（ロード）、CPUがその先頭番地から順に命令を実行します。"
        },
        "en": {
          "question": "Which statement accurately describes what happens when a program is launched on a computer?",
          "options": [
            "The program binary is copied from secondary storage into main memory, where the CPU executes it",
            "Data in main memory overwrites secondary storage and the CPU executes directly on the drive",
            "The entire program binary is permanently stored inside CPU registers at once",
            "The computer discards local files and re-downloads the executable over the network"
          ],
          "explanation": "When an application launches, the OS loads its instructions from secondary storage into main memory so the CPU can rapidly fetch and execute them."
        },
        "correctIndex": 0
      }
    ],

    # Slot 2: CPUの構成要素 (CPU Components)
    [
      {
        "id": "ch1_q2_v1",
        "code": None,
        "ja": {
          "question": "CPU内部で、四則演算や値の大小比較などの論理演算を担当する構成要素はどれですか？",
          "options": ["制御部（Control Unit）", "演算部（ALU: Arithmetic Logic Unit）", "補助記憶（Secondary Storage）", "バス（Bus）"],
          "explanation": "演算部（ALU: Arithmetic Logic Unit）が足し算や掛け算などの算術演算、および大小比較や真偽判定などの論理演算を担当します。"
        },
        "en": {
          "question": "Within the CPU, which component is directly responsible for arithmetic calculations and logical comparisons?",
          "options": ["Control Unit", "Arithmetic Logic Unit (ALU)", "Secondary Storage", "System Bus"],
          "explanation": "The ALU handles mathematical operations (addition, multiplication) as well as logical evaluations (comparisons, equality checks)."
        },
        "correctIndex": 1
      },
      {
        "id": "ch1_q2_v2",
        "code": None,
        "ja": {
          "question": "CPU内部の「制御部（Control Unit）」が果たす役割として、最も適切なものはどれですか？",
          "options": [
            "主記憶から命令を取り出し、解読して各装置に指示を出す",
            "画像や音声データを圧縮してストレージに書き込む",
            "浮動小数点数の掛け算を直接計算する",
            "電源のオン・オフを物理的に制御するスイッチの役割を果たす"
          ],
          "explanation": "制御部（Control Unit）は、主記憶から命令を取り出して解読（デコード）し、演算部や記憶部、入出力装置に指示信号を送って全体の動作を制御します。"
        },
        "en": {
          "question": "What is the primary responsibility of the Control Unit inside a CPU?",
          "options": [
            "Fetching instructions from memory, decoding them, and directing other components",
            "Compressing image and audio assets for storage",
            "Directly computing floating-point multiplication in hardware",
            "Acting as a mechanical power switch for the computer"
          ],
          "explanation": "The Control Unit orchestrates processor operations: it fetches instructions from memory, decodes what operation to perform, and issues control signals."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_q2_v3",
        "code": None,
        "ja": {
          "question": "CPU内部に存在し、演算の直前・直後のデータや次に実行する命令のアドレスを一時保持する超高速な記憶領域は何ですか？",
          "options": ["レジスタ（Register）", "キャッシュメモリ（L3 Cache）", "メインメモリ（DRAM）", "BIOS / UEFI"],
          "explanation": "レジスタはCPU内部に設けられた極めて小容量かつ最高速の記憶回路で、演算データの一時保持やプログラムカウンタ（次に実行する命令のアドレス保持）などに使われます。"
        },
        "en": {
          "question": "What are the ultra-fast, small temporary storage locations built directly inside the CPU called?",
          "options": ["Registers", "L3 Cache", "Main Memory (DRAM)", "BIOS / UEFI"],
          "explanation": "Registers are tiny, ultra-high-speed memory cells inside the CPU chip, holding immediate operands, intermediate calculation results, and the instruction pointer."
        },
        "correctIndex": 0
      }
    ],

    # Slot 3: 命令実行サイクル (Instruction Execution Cycle)
    [
      {
        "id": "ch1_q3_v1",
        "code": None,
        "ja": {
          "question": "CPUが主記憶からプログラムの命令を読み込んで実行する基本サイクルの正しい順序はどれですか？",
          "options": [
            "実行 (Execute) → 取り出し (Fetch) → 解読 (Decode) → 書き戻し (Write Back)",
            "解読 (Decode) → 取り出し (Fetch) → 実行 (Execute) → 書き戻し (Write Back)",
            "取り出し (Fetch) → 解読 (Decode) → 実行 (Execute) → 書き戻し (Write Back)",
            "書き戻し (Write Back) → 実行 (Execute) → 解読 (Decode) → 取り出し (Fetch)"
          ],
          "explanation": "命令実行サイクルは「①取り出し (Fetch) → ②解読 (Decode) → ③実行 (Execute) → ④書き戻し (Write Back)」の順序で繰り返されます。"
        },
        "en": {
          "question": "Which of the following correctly orders the basic CPU instruction cycle?",
          "options": [
            "Execute → Fetch → Decode → Write Back",
            "Decode → Fetch → Execute → Write Back",
            "Fetch → Decode → Execute → Write Back",
            "Write Back → Execute → Decode → Fetch"
          ],
          "explanation": "The instruction execution cycle runs: Fetch (retrieve from RAM) → Decode (interpret opcode) → Execute (perform on ALU) → Write Back (save result)."
        },
        "correctIndex": 2
      },
      {
        "id": "ch1_q3_v2",
        "code": None,
        "ja": {
          "question": "CPUが「次にフェッチ（取り出し）すべき命令のメモリアドレス」を保持している専用レジスタは何ですか？",
          "options": [
            "アキュムレータ（累算器）",
            "プログラムカウンタ（PC / 命令ポインタ）",
            "フラグレジスタ",
            "スタックポインタ"
          ],
          "explanation": "プログラムカウンタ（Program Counter / PC）は、CPUが次に実行すべき命令のアドレスを記憶しており、命令が取り出されると自動的に次のアドレスへと更新されます。"
        },
        "en": {
          "question": "Which special CPU register holds the memory address of the next instruction to be fetched?",
          "options": [
            "Accumulator",
            "Program Counter (PC / Instruction Pointer)",
            "Flag Register",
            "Stack Pointer"
          ],
          "explanation": "The Program Counter (PC) stores the memory address of the next instruction to be executed and advances after each fetch."
        },
        "correctIndex": 1
      },
      {
        "id": "ch1_q3_v3",
        "code": None,
        "ja": {
          "question": "CPUのクロック周波数が「3.0 GHz」であるとき、これは何を意味していますか？",
          "options": [
            "主記憶の容量が3ギガバイトであることを示す",
            "1秒間に約30億回のクロック信号（動作の基準タイミング）を発生させることを示す",
            "インターネットの通信速度が毎秒3ギガビットであることを示す",
            "CPU内部の温度が300度に達することを示す"
          ],
          "explanation": "クロック周波数（Hz）は1秒あたりのクロックパルス数を表します。3.0 GHzは1秒間に約30億回の周期信号を送り、各回路の動作タイミングを同期させています。"
        },
        "en": {
          "question": "What does a CPU clock speed of 3.0 GHz indicate?",
          "options": [
            "The computer has exactly 3 gigabytes of main memory installed",
            "The processor internal clock pulses roughly 3 billion times per second to synchronize operations",
            "The network connection speed transfers 3 gigabits per second",
            "The internal silicon temperature reaches 300 degrees"
          ],
          "explanation": "Clock speed measures the frequency of pulses generated by the internal clock generator. 3.0 GHz corresponds to approximately 3 billion cycles per second."
        },
        "correctIndex": 1
      }
    ],

    # Slot 4: Pythonの実行モデルと環境 (Python Execution & Environment)
    [
      {
        "id": "ch1_q4_v1",
        "code": None,
        "ja": {
          "question": "Pythonのプログラム実行方式（インタプリタ型）に関する説明として、最も適切なものはどれですか？",
          "options": [
            "ソースコードを事前にすべて機械語に一括変換してから実行ファイル（.exe等）を作成する",
            "ソースコードを1行または1ブロックずつ解読しながら順次実行する",
            "インターネット接続がないとプログラムを一切解読できない",
            "CPUを使わずGPUだけで全コードを処理する"
          ],
          "explanation": "Pythonはインタプリタ型の言語であり、事前に機械語へ一括コンパイルするのではなく、実行時にソースコードを順次解読・実行するため、手軽に対話的な動作確認ができます。"
        },
        "en": {
          "question": "Which statement correctly describes how Python executes source code as an interpreted language?",
          "options": [
            "It compiles the entire codebase into native binary machine code before producing an executable",
            "It interprets and executes instructions line by line or block by block at runtime",
            "It requires an active internet connection to evaluate any program expression",
            "It bypasses the CPU entirely and computes strictly on dedicated GPUs"
          ],
          "explanation": "Python is an interpreted language; the Python interpreter parses and executes source statements incrementally at runtime without an ahead-of-time binary build step."
        },
        "correctIndex": 1
      },
      {
        "id": "ch1_q4_v2",
        "code": None,
        "ja": {
          "question": "Python標準の開発環境であるIDLEやターミナルで表示される「>>>」は何と呼ばれますか？",
          "options": [
            "対話プロンプト（Interactive Prompt）",
            "構文エラーインジケータ",
            "コメント開始記号",
            "バイナリ変換マーク"
          ],
          "explanation": "「>>>」は対話プロンプト（Interactive Prompt）と呼ばれ、Pythonがユーザからの次のコマンド入力を待ち受けている状態を示します。"
        },
        "en": {
          "question": "What is the '>>>' symbol shown in the Python IDLE shell or interactive terminal called?",
          "options": [
            "Interactive Prompt",
            "Syntax Error Indicator",
            "Comment Delimiter",
            "Binary Compilation Mark"
          ],
          "explanation": "The '>>>' symbol is the interactive prompt, signaling that the Python REPL (Read-Eval-Print Loop) is ready to accept and execute user commands."
        },
        "correctIndex": 0
      },
      {
        "id": "ch1_q4_v3",
        "code": None,
        "ja": {
          "question": "Pythonのファイル（スクリプト）を作成・実行する際、標準的なファイル拡張子はどれですか？",
          "options": [".py", ".pyt", ".python", ".pt"],
          "explanation": "Pythonスクリプトファイルの標準拡張子は「.py」です。"
        },
        "en": {
          "question": "What is the standard file extension used for Python source script files?",
          "options": [".py", ".pyt", ".python", ".pt"],
          "explanation": "Python files use the standard '.py' extension (e.g., script.py)."
        },
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 2: 場合分けと繰り返し / Branching & Loops
  2: [
    # Slot 1: input() と型変換 (input & Type Casting)
    [
      {
        "id": "ch2_q1_v1",
        "code": "val = input()\nprint(val + val)",
        "ja": {
          "question": "キーボードから「5」と入力した場合、以下のコードの出力結果はどうなりますか？",
          "options": ["10", "'55'", "エラーになる", "None"],
          "explanation": "input()関数は入力を常に文字列（str型）として返します。文字列同士の「+」演算は文字列連結となるため、'5' + '5' は '55' となります。数値として足すには int(val) の型変換が必要です。"
        },
        "en": {
          "question": "If the user inputs '5', what will the following code output?",
          "options": ["10", "'55'", "A TypeError is raised", "None"],
          "explanation": "input() always returns user input as a string (str). The '+' operator between two strings concatenates them, yielding '55'. To perform arithmetic addition, cast it using int(val)."
        },
        "correctIndex": 1
      },
      {
        "id": "ch2_q1_v2",
        "code": "a = input()\nb = input()\nprint(int(a) + int(b))",
        "ja": {
          "question": "1行目に「3」、2行目に「4」と入力した場合、以下のコードの出力結果は何ですか？",
          "options": ["'34'", "7", "34", "エラーになる"],
          "explanation": "int()関数によって文字列 '3' と '4' が整数型 3 と 4 に変換されるため、足し算が行われて 7 が出力されます。"
        },
        "en": {
          "question": "If the user enters '3' on the first prompt and '4' on the second, what is the output?",
          "options": ["'34'", "7", "34", "An error occurs"],
          "explanation": "int() casts the strings '3' and '4' into integers 3 and 4, so the addition evaluates to 7."
        },
        "correctIndex": 1
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
        "correctIndex": 1
      }
    ],

    # Slot 2: if / elif / else の評価順序と論理演算 (if/elif/else & Logic)
    [
      {
        "id": "ch2_q2_v1",
        "code": "score = 85\nif score >= 60:\n    print(\"合格\")\nelif score >= 80:\n    print(\"優秀\")\nelse:\n    print(\"不合格\")",
        "ja": {
          "question": "上記のコードを実行したとき、画面に出力される文字列は何ですか？",
          "options": ["合格", "優秀", "合格 優秀（両方）", "不合格"],
          "explanation": "if文は上から順に条件が評価されます。score（85）は最初の「score >= 60」を満たすため直ちに「合格」が出力され、後続のelifは一切評価されずにスキップされます。"
        },
        "en": {
          "question": "What does the code above output?",
          "options": ["合格", "優秀", "Both '合格' and '優秀'", "不合格"],
          "explanation": "In an if-elif-else construct, Python evaluates conditions top to bottom and executes only the first matching branch. Since 85 >= 60 is True, it prints '合格' and skips the rest."
        },
        "correctIndex": 0
      },
      {
        "id": "ch2_q2_v2",
        "code": "x = 10\ny = 5\nif x > 5 and y < 3:\n    print(\"A\")\nelif x > 5 or y < 3:\n    print(\"B\")\nelse:\n    print(\"C\")",
        "ja": {
          "question": "上記のコードを実行したときに出力される文字は何ですか？",
          "options": ["A", "B", "C", "A と B の両方"],
          "explanation": "最初の条件「x > 5 and y < 3」は True and False で False となります。次の elif「x > 5 or y < 3」は True or False で True となるため、「B」が出力されます。"
        },
        "en": {
          "question": "What will be printed when the code executes?",
          "options": ["A", "B", "C", "Both A and B"],
          "explanation": "The first check requires both conditions to hold (True and False -> False). The elif requires at least one condition to hold (True or False -> True), printing 'B'."
        },
        "correctIndex": 1
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
        "correctIndex": 1
      }
    ],

    # Slot 3: for ループと range() の挙動 (for Loops & range)
    [
      {
        "id": "ch2_q3_v1",
        "code": "for i in range(2, 6):\n    print(i, end=\" \")",
        "ja": {
          "question": "上記のコードを実行したときの出力結果として、正しいものはどれですか？",
          "options": ["2 3 4 5 6 ", "2 3 4 5 ", "1 2 3 4 5 ", "2 4 6 "],
          "explanation": "range(start, stop) は start から始まり、stop の直前（stop - 1）まで生成します。range(2, 6) は 2, 3, 4, 5 の4つの値を生成します（6は含まれません）。"
        },
        "en": {
          "question": "What is the exact output of the code snippet above?",
          "options": ["2 3 4 5 6 ", "2 3 4 5 ", "1 2 3 4 5 ", "2 4 6 "],
          "explanation": "range(start, stop) starts at 'start' and stops before 'stop' (non-inclusive). range(2, 6) generates 2, 3, 4, 5."
        },
        "correctIndex": 1
      },
      {
        "id": "ch2_q3_v2",
        "code": "total = 0\nfor i in range(1, 5):\n    total += i\nprint(total)",
        "ja": {
          "question": "上記のコードを実行したとき、出力される数値は何ですか？",
          "options": ["10", "15", "4", "6"],
          "explanation": "range(1, 5) は 1, 2, 3, 4 をループします。1 + 2 + 3 + 4 = 10 が total に加算され、10 が出力されます。"
        },
        "en": {
          "question": "What number is printed after running this code?",
          "options": ["10", "15", "4", "6"],
          "explanation": "range(1, 5) iterates over 1, 2, 3, 4. The running sum is 1 + 2 + 3 + 4 = 10."
        },
        "correctIndex": 0
      },
      {
        "id": "ch2_q3_v3",
        "code": "for n in range(5, 0, -2):\n    print(n, end=\" \")",
        "ja": {
          "question": "負のステップ値を指定した以下のコードの出力結果は何ですか？",
          "options": ["5 3 1 ", "5 4 3 2 1 ", "5 3 1 -1 ", "エラーになる"],
          "explanation": "range(5, 0, -2) は 5 から始まり、2ずつ減算しながら 0 の直前（0は含まない）まで進むため、5, 3, 1 が順に出力されます。"
        },
        "en": {
          "question": "What is the output of this loop with a negative step value?",
          "options": ["5 3 1 ", "5 4 3 2 1 ", "5 3 1 -1 ", "A ValueError is raised"],
          "explanation": "range(5, 0, -2) starts at 5 and steps by -2 down to (but excluding) 0, yielding 5, 3, and 1."
        },
        "correctIndex": 0
      }
    ],

    # Slot 4: while ループと制御構文 (while Loops & break/continue)
    [
      {
        "id": "ch2_q4_v1",
        "code": "x = 1\nwhile x < 5:\n    x *= 2\nprint(x)",
        "ja": {
          "question": "上記のコードを実行したとき、最終的に print(x) で出力される値は何ですか？",
          "options": ["4", "5", "8", "16"],
          "explanation": "1周目: x=1 (<5) → x=2。2周目: x=2 (<5) → x=4。3周目: x=4 (<5) → x=8。4周目: x=8 は <5 を満たさないためループ終了。最終値は 8 です。"
        },
        "en": {
          "question": "What value will be printed after the while loop finishes?",
          "options": ["4", "5", "8", "16"],
          "explanation": "Step 1: x=1 (<5) -> x becomes 2. Step 2: x=2 (<5) -> x becomes 4. Step 3: x=4 (<5) -> x becomes 8. Then x < 5 is False, exiting with x = 8."
        },
        "correctIndex": 2
      },
      {
        "id": "ch2_q4_v2",
        "code": "count = 0\nfor i in range(1, 6):\n    if i == 3:\n        break\n    count += 1\nprint(count)",
        "ja": {
          "question": "break文を含む以下のコードを実行したとき、出力される count の値は何ですか？",
          "options": ["2", "3", "5", "0"],
          "explanation": "i=1 のとき count=1。i=2 のとき count=2。i=3 のとき「if i == 3: break」によってループ全体が即座に中断・終了します。したがって count は 2 のままです。"
        },
        "en": {
          "question": "What is the printed value of count when this break statement executes?",
          "options": ["2", "3", "5", "0"],
          "explanation": "For i=1, count becomes 1. For i=2, count becomes 2. When i=3, the break statement terminates the entire loop immediately, leaving count at 2."
        },
        "correctIndex": 0
      },
      {
        "id": "ch2_q4_v3",
        "code": "res = 0\nfor n in range(1, 5):\n    if n % 2 == 0:\n        continue\n    res += n\nprint(res)",
        "ja": {
          "question": "continue文を含む以下のコードを実行したとき、出力される値は何ですか？",
          "options": ["4", "10", "6", "2"],
          "explanation": "range(1, 5) は 1, 2, 3, 4 です。偶数（n=2, 4）のときは continue により足し算がスキップされます。奇数のみ（1 + 3 = 4）が加算され、4 が出力されます。"
        },
        "en": {
          "question": "What is the output of the code using the continue statement?",
          "options": ["4", "10", "6", "2"],
          "explanation": "For even numbers (n=2, 4), continue skips the remainder of the iteration. Only odd numbers are added: 1 + 3 = 4."
        },
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 3: データ型 / Data Types & Data Structures
  3: [
    # Slot 1: リストのインデックス参照 (List Indexing)
    [
      {
        "id": "ch3_q1_v1",
        "code": "fruits = [\"apple\", \"banana\", \"cherry\", \"date\"]\nprint(fruits[-1])",
        "ja": {
          "question": "負のインデックス fruits[-1] を指定したとき、何が出力されますか？",
          "options": ["'apple'", "'banana'", "'date'", "IndexError が発生する"],
          "explanation": "Pythonのリストでは負のインデックスを使うと末尾から要素を参照できます。fruits[-1] は末尾の要素 'date' を返します。"
        },
        "en": {
          "question": "What is printed when accessing fruits[-1]?",
          "options": ["'apple'", "'banana'", "'date'", "An IndexError is raised"],
          "explanation": "Negative indices count backwards from the end of a list. Index -1 refers to the last element, 'date'."
        },
        "correctIndex": 2
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
        "correctIndex": 2
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
        "correctIndex": 0
      }
    ],

    # Slot 2: リストのスライス (List Slicing)
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
        "correctIndex": 1
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 3: リストの操作メソッドと可変性 (List Methods & Mutability)
    [
      {
        "id": "ch3_q3_v1",
        "code": "a = [1, 2]\nb = a.append(3)\nprint(b)",
        "ja": {
          "question": "上記のコードを実行したとき、画面に出力される値は何ですか？",
          "options": ["[1, 2, 3]", "3", "None", "エラーになる"],
          "explanation": "リストの append() メソッドは元のリストを直接変更（破壊的更新）し、戻り値としては None を返します。新しいリストを返すわけではないため、変数 b には None が代入されます。"
        },
        "en": {
          "question": "What is printed when running this code snippet?",
          "options": ["[1, 2, 3]", "3", "None", "A TypeError is raised"],
          "explanation": "The list .append() method modifies the list in place and returns None. Assigning its return value to 'b' results in None."
        },
        "correctIndex": 2
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
        "correctIndex": 0
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
        "correctIndex": 0
      }
    ],

    # Slot 4: 辞書型（dict）の挙動 (Dictionaries)
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
        "correctIndex": 1
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
        "correctIndex": 0
      },
      {
        "id": "ch3_q4_v3",
        "code": "scores = {\"math\": 80, \"eng\": 75}\nprint(scores.get(\"sci\", 0))",
        "ja": {
          "question": "get() メソッドを使用した上記のコードの出力結果は何ですか？",
          "options": ["0", "None", "KeyError が発生する", "77.5"],
          "explanation": "dict.get(key, default) は、指定したキーが存在しない場合に第2引数のデフォルト値を返します。'sci' は存在しないため 0 が出力されます。"
        },
        "en": {
          "question": "What does scores.get('sci', 0) output when 'sci' is missing from the dictionary?",
          "options": ["0", "None", "A KeyError is raised", "77.5"],
          "explanation": "dict.get(key, default) returns the specified fallback default if the key is not found, returning 0 without raising an error."
        },
        "correctIndex": 0
      }
    ]
  ],

  # CHAPTER 4: アルゴリズムの性質 / Nature of Algorithms & Coding Agents
  4: [
    # Slot 1: コーディングエージェントと人間 (Coding Agents & Vibe Coding)
    [
      {
        "id": "ch4_q1_v1",
        "code": None,
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
        "correctIndex": 0
      },
      {
        "id": "ch4_q1_v2",
        "code": None,
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
        "correctIndex": 0
      },
      {
        "id": "ch4_q1_v3",
        "code": None,
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
        "correctIndex": 0
      }
    ],

    # Slot 2: 計算量とオーダー記法 O(n) (Computational Complexity & Big-O)
    [
      {
        "id": "ch4_q2_v1",
        "code": "def process(n):\n    for i in range(n):\n        for j in range(n):\n            print(i, j)",
        "ja": {
          "question": "上記の二重ループ関数の時間計算量を表すオーダー記法として、最も適切なものはどれですか？",
          "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
          "explanation": "外側のループが n 回、内側のループが各周で n 回回るため、処理回数は n × n = n^2 回に比例します。したがって時間計算量は O(n^2) です。"
        },
        "en": {
          "question": "What is the time complexity (Big-O notation) of the nested loop function above?",
          "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
          "explanation": "The outer loop runs n times and the inner loop runs n times per outer iteration, yielding n * n operations, which is O(n^2)."
        },
        "correctIndex": 3
      },
      {
        "id": "ch4_q2_v2",
        "code": None,
        "ja": {
          "question": "入力データサイズ n が大きくなったとき、実行時間が最も急激に増加する（最も効率が悪い）計算量はどれですか？",
          "options": ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
          "explanation": "計算量の増加速度は O(1) < O(log n) < O(n) < O(n^2) の順となります。選択肢の中では O(n^2)（二次時間）が最も急激に増大します。"
        },
        "en": {
          "question": "As input size n grows large, which of the following complexities scales the worst (takes the most time)?",
          "options": ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
          "explanation": "The order of growth from best to worst is O(1) < O(log n) < O(n) < O(n^2). O(n^2) exhibits quadratic growth, exploding fastest as n increases."
        },
        "correctIndex": 2
      },
      {
        "id": "ch4_q2_v3",
        "code": "def find_item(lst, target):\n    for x in lst:\n        if x == target:\n            return True\n    return False",
        "ja": {
          "question": "長さ n の整列されていないリストから特定の値を線形探索（先頭から順に走査）する最悪時間計算量はどれですか？",
          "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
          "explanation": "最悪の場合（探している値が末尾にあるか、または存在しない場合）、n 個の要素をすべて1つずつ調べる必要があるため、時間計算量は O(n) です。"
        },
        "en": {
          "question": "What is the worst-case time complexity of linear search across an unsorted list of length n?",
          "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
          "explanation": "In the worst case (the target is at the very end or absent), linear search must inspect every single element, running in O(n) time."
        },
        "correctIndex": 2
      }
    ],

    # Slot 3: アラン・チューリングと停止性問題 (Halting Problem)
    [
      {
        "id": "ch4_q3_v1",
        "code": None,
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
        "correctIndex": 0
      },
      {
        "id": "ch4_q3_v2",
        "code": None,
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
        "correctIndex": 0
      },
      {
        "id": "ch4_q3_v3",
        "code": None,
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
        "correctIndex": 0
      }
    ],

    # Slot 4: アルゴリズムの要件と性質 (Algorithm Properties)
    [
      {
        "id": "ch4_q4_v1",
        "code": None,
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
        "correctIndex": 0
      },
      {
        "id": "ch4_q4_v2",
        "code": None,
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
        "correctIndex": 0
      },
      {
        "id": "ch4_q4_v3",
        "code": None,
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
        "correctIndex": 0
      }
    ]
  ]
}
