# Script to generate subsection-enriched question bank
# Fully maps all 14 chapters with exact syllabus subsections,
# and enriches Chapter 1 with complete coverage of 1.1 through 1.6 including 1.5.1 operators,
# syntax traps, and notebook exercises (e.g., seconds in a year, float vs int division, %, **).

import json
import os

from bank_part2 import PART2_DATA
from bank_part3 import PART3_DATA
from bank_part4 import PART4_DATA

# CHAPTER 1 ENRICHED WITH ALL SUBSECTIONS (18 slots, 54 varieties total)
CH1_SUBSECTION_SLOTS = [
  # --- Subsection 1.1: コンピュータの動作 (1.1.1 CPU & 1.1.2 記憶装置) ---
  [
    {
      "id": "ch1_sub1_1_q1_v1",
      "sectionId": "1.1",
      "sectionTitleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）",
      "sectionTitleEn": "1.1 Computer Architecture (CPU & Memory)",
      "code": None,
      "ja": {
        "question": "CPUの内部で、足し算や掛け算などの数値計算および値の大小比較などの論理演算を専門に担当する部位は何ですか？",
        "options": ["ALU（演算部 / Arithmetic Logic Unit）", "制御部（Control Unit）", "主記憶（メインメモリ）", "SSD（補助記憶装置）"],
        "explanation": "CPUは主に「制御部」と「演算部（ALU: Arithmetic Logic Unit）」で構成されます。ALUが四則演算や論理演算を実行し、制御部はプログラムの命令を解読して各装置へ指示を出します。"
      },
      "en": {
        "question": "Which component inside the CPU is specifically responsible for arithmetic calculations and logical comparisons?",
        "options": ["ALU (Arithmetic Logic Unit)", "Control Unit", "Main Memory (RAM)", "SSD (Secondary Storage)"],
        "explanation": "The ALU (Arithmetic Logic Unit) executes mathematical computations and logic evaluations, while the Control Unit fetches, decodes, and orchestrates instruction execution."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_1_q1_v2",
      "sectionId": "1.1",
      "sectionTitleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）",
      "sectionTitleEn": "1.1 Computer Architecture (CPU & Memory)",
      "code": None,
      "ja": {
        "question": "CPUが命令を実行する基本サイクルとして、正しい順序で並んでいるものはどれですか？",
        "options": [
          "命令の取り出し（Fetch）→ 命令の解読（Decode）→ 命令の実行（Execute）→ 結果の書き戻し（Write Back）",
          "命令の実行（Execute）→ 命令の取り出し（Fetch）→ 命令の解読（Decode）→ 結果の書き戻し",
          "命令の解読（Decode）→ 命令の取り出し（Fetch）→ 結果の書き戻し → 命令の実行",
          "結果の書き戻し → 命令の解読 → 命令の取り出し → 命令の実行"
        ],
        "explanation": "CPUは「①命令取り出し（Fetch）→ ②解読（Decode）→ ③実行（Execute）→ ④書き戻し（Write Back）」のサイクルを1秒間に数十億回（GHz）繰り返すことでプログラムを動作させます。"
      },
      "en": {
        "question": "What is the correct sequential order of the CPU fundamental instruction cycle?",
        "options": [
          "Fetch → Decode → Execute → Write Back",
          "Execute → Fetch → Decode → Write Back",
          "Decode → Fetch → Write Back → Execute",
          "Write Back → Decode → Fetch → Execute"
        ],
        "explanation": "The standard Von Neumann CPU instruction cycle repeats: 1. Fetch from memory, 2. Decode instruction, 3. Execute in ALU, 4. Write back results to registers/memory."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_1_q1_v3",
      "sectionId": "1.1",
      "sectionTitleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）",
      "sectionTitleEn": "1.1 Computer Architecture (CPU & Memory)",
      "code": None,
      "ja": {
        "question": "CPUが直接理解して実行できる唯一の言語である「0 と 1 のビット列」で表現された言語を何と呼びますか？",
        "options": ["機械語（マシン語）", "アセンブリ言語", "高水準言語", "バイトコード"],
        "explanation": "CPUが物理的に直接理解できるのは0と1の電気信号（ビット列）で構成される「機械語」だけです。人間が理解しやすいPythonなどの高水準言語は、機械語へ翻訳されてから実行されます。"
      },
      "en": {
        "question": "What is the term for the raw sequence of binary bits (0s and 1s) that the CPU can directly interpret and execute natively?",
        "options": ["Machine Language (Machine Code)", "Assembly Language", "High-level Language", "Bytecode"],
        "explanation": "Machine language is the native binary language composed of 0s and 1s processed directly by hardware logic gates without further translation."
      },
      "correctIndex": 0
    }
  ],
  [
    {
      "id": "ch1_sub1_1_q2_v1",
      "sectionId": "1.1",
      "sectionTitleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）",
      "sectionTitleEn": "1.1 Computer Architecture (CPU & Memory)",
      "code": None,
      "ja": {
        "question": "PCの電源を切ると記憶内容がすべて失われる主記憶（DRAMなど）の特性を何と呼びますか？",
        "options": ["揮発性（Volatile）", "不揮発性（Non-volatile）", "永続性（Persistent）", "仮想記憶性（Virtual memory）"],
        "explanation": "主記憶（メインメモリ / DRAM）は通電中のみデータを保持する「揮発性（Volatile）」を持ちます。一方、SSDやHDDなどの補助記憶は電源を切ってもデータが残る「不揮発性（Non-volatile）」です。"
      },
      "en": {
        "question": "Which term describes the characteristic of main memory (e.g., DRAM) where all data is lost when power is disconnected?",
        "options": ["Volatile", "Non-volatile", "Persistent", "Virtual memory"],
        "explanation": "Main memory (DRAM) is volatile—it requires continuous electric power to sustain charge in capacitors. Secondary storage (SSD/HDD) is non-volatile."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_1_q2_v2",
      "sectionId": "1.1",
      "sectionTitleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）",
      "sectionTitleEn": "1.1 Computer Architecture (CPU & Memory)",
      "code": None,
      "ja": {
        "question": "CPUがプログラムを実行する際、SSDから直接命令を1つずつ読み込まず、あらかじめ主記憶（DRAM）にコピーしてから実行する主な理由は何ですか？",
        "options": [
          "主記憶の読み書き速度がSSDに比べて桁違いに高速であるため",
          "SSDにはプログラムを保存する権限がないため",
          "SSDのデータは揮発性で壊れやすいため",
          "主記憶の方がSSDよりも大容量で安価だから"
        ],
        "explanation": "主記憶（DRAM）のデータ転送速度はSSDよりもはるかに高速です。高速なCPUの演算速度に追従するため、実行するプログラムはSSDから一度主記憶に展開（ロード）されて実行されます。"
      },
      "en": {
        "question": "Why does the CPU load executable programs into main memory (DRAM) rather than fetching instructions directly from an SSD?",
        "options": [
          "Main memory access speeds are orders of magnitude faster than SSD storage",
          "SSDs lack permissions to store executable files",
          "SSD memory cells are volatile and lose data during execution",
          "Main memory provides much greater capacity at a lower price point"
        ],
        "explanation": "DRAM read/write latency is nanoseconds compared to microseconds for SSDs. To avoid stalling the fast CPU execution pipelines, instructions are loaded into fast main memory."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_1_q2_v3",
      "sectionId": "1.1",
      "sectionTitleJa": "1.1 コンピュータの動作（CPU・主記憶・補助記憶）",
      "sectionTitleEn": "1.1 Computer Architecture (CPU & Memory)",
      "code": None,
      "ja": {
        "question": "主記憶（RAM）と補助記憶（SSD/HDD）の比較として、正しい組み合わせはどれですか？",
        "options": [
          "主記憶: 高速・小容量・揮発性 / 補助記憶: 低速・大容量・不揮発性",
          "主記憶: 低速・大容量・不揮発性 / 補助記憶: 高速・小容量・揮発性",
          "主記憶: 高速・大容量・不揮発性 / 補助記憶: 低速・小容量・揮発性",
          "両者とも揮発性であり、速度にも差はない"
        ],
        "explanation": "主記憶はCPUの直近で超高速に動作する反面、比較的高価で容量が限られ電源断で消えます。補助記憶は電源を切っても永続保存できますが、アクセス速度は主記憶より遅くなります。"
      },
      "en": {
        "question": "Which comparison accurately contrasts main memory (RAM) with secondary storage (SSD/HDD)?",
        "options": [
          "Main Memory: Fast, smaller capacity, volatile / Secondary Storage: Slower, large capacity, non-volatile",
          "Main Memory: Slower, large capacity, non-volatile / Secondary Storage: Fast, smaller capacity, volatile",
          "Main Memory: Fast, large capacity, non-volatile / Secondary Storage: Slower, smaller capacity, volatile",
          "Both are volatile with identical latency profiles"
        ],
        "explanation": "Main memory provides high-speed, volatile working space for active processes, whereas secondary storage provides high-capacity, non-volatile persistence."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.2: プログラミング言語とPythonの特徴 ---
  [
    {
      "id": "ch1_sub1_2_q1_v1",
      "sectionId": "1.2",
      "sectionTitleJa": "1.2 プログラミング言語とPythonの特徴",
      "sectionTitleEn": "1.2 Programming Languages & Python",
      "code": None,
      "ja": {
        "question": "高校「情報I」で学んだ、あらゆる高水準プログラムを組み立てる3つの基本制御構造（基本3構造）は何ですか？",
        "options": [
          "順次（上から下へ実行）、分岐（if文）、反復（for/while文）",
          "入力（input）、代入（=）、出力（print）",
          "整数（int）、小数（float）、文字列（str）",
          "設計、実装、テスト"
        ],
        "explanation": "構造化プログラミングの基本3構造は「順次（Sequence）」「分岐（Selection / if）」「反復（Iteration / for, while）」であり、複雑なアルゴリズムもこの3つの組み合わせで構築されます。"
      },
      "en": {
        "question": "What are the three fundamental algorithmic control structures taught in foundational computer science?",
        "options": [
          "Sequence (step-by-step), Selection (branching with if), Iteration (looping with for/while)",
          "Input, Assignment, Output",
          "Integer, Float, String",
          "Design, Implementation, Testing"
        ],
        "explanation": "Structured programming relies on three core primitives: Sequence (ordered execution), Selection (conditional branches), and Iteration (repetition)."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_2_q1_v2",
      "sectionId": "1.2",
      "sectionTitleJa": "1.2 プログラミング言語とPythonの特徴",
      "sectionTitleEn": "1.2 Programming Languages & Python",
      "code": None,
      "ja": {
        "question": "Pythonが「インタプリタ型言語」と呼ばれる理由として、最も適切なものはどれですか？",
        "options": [
          "実行前に全体を一括コンパイルせず、プログラムを1行ずつ解釈（翻訳）しながら実行するから",
          "Pythonは機械語そのもので書かれているから",
          "インターネットに常時接続していないとプログラムが動かないから",
          "コードのブロックを波括弧 `{ }` で囲む必要があるから"
        ],
        "explanation": "C言語などは事前に一括して機械語ファイル（.exe等）へコンパイルしますが、Pythonはインタプリタが1行ずつ解釈しながら実行するため、対話的実行や手軽な試行錯誤が可能です。"
      },
      "en": {
        "question": "Why is Python classified as an 'interpreted' programming language?",
        "options": [
          "It parses and executes code line-by-line interactively at runtime rather than requiring pre-compilation of the entire binary",
          "Python source files are written directly in native machine binary",
          "It requires constant high-speed internet connectivity to evaluate syntax",
          "It mandates enclosing code blocks inside curly brackets `{}`"
        ],
        "explanation": "Interpreters translate and evaluate program statements on-the-fly line by line, contrasting with ahead-of-time compilers like C++ or Rust."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_2_q1_v3",
      "sectionId": "1.2",
      "sectionTitleJa": "1.2 プログラミング言語とPythonの特徴",
      "sectionTitleEn": "1.2 Programming Languages & Python",
      "code": None,
      "ja": {
        "question": "C言語やJavaなど他の多くの言語と比較したときの、Pythonの構文上の大きな特徴として正しいものはどれですか？",
        "options": [
          "コードのブロック（まとまり）を波括弧 `{ }` ではなく「インデント（字下げ）」で表現する",
          "すべての行の末尾にセミコロン `;` を書くことが必須である",
          "変数を使う前に必ず型の宣言（例: `int x;`）を行わなければならない",
          "数値計算を行うことが文法上禁止されている"
        ],
        "explanation": "Pythonは誰が書いても読みやすく統一感のあるコードになるよう、ブロックの範囲をインデント（空白4文字など）で厳密に指定する文法ルールを採用しています。"
      },
      "en": {
        "question": "What is a signature syntax characteristic of Python compared to languages like C or Java?",
        "options": [
          "It represents code blocks using indentation (whitespace) rather than curly braces `{}`",
          "Every statement must terminate with a mandatory semicolon `;`",
          "Variables must be declared with explicit static types (e.g. `int x;`) before use",
          "Arithmetic computations are forbidden by default syntax rules"
        ],
        "explanation": "Python enforces block scoping via indentation whitespace, ensuring clean, uniform readability across different developers' code."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.3 & 1.4: IDLE環境・対話型シェル・スクリプト実行 ---
  [
    {
      "id": "ch1_sub1_3_q1_v1",
      "sectionId": "1.3_1.4",
      "sectionTitleJa": "1.3-1.4 IDLE環境・対話型シェル・スクリプト実行",
      "sectionTitleEn": "1.3-1.4 IDLE, Shell & Script Execution",
      "code": ">>> print('Hello')\nHello\n>>> 10 + 20\n30",
      "ja": {
        "question": "Pythonの公式インストーラに標準付属する初心者向け統合開発環境「IDLE」の対話型シェル（Python Shell）において、入力待ち状態を示すプロンプト記号は何ですか？",
        "options": [">>>", "###", "===", "::: "],
        "explanation": "対話型シェル（REPL）では `>>>` というプロンプトが表示され、ここにコードを1行入力してEnterを押すと即座に結果が評価されて返されます。"
      },
      "en": {
        "question": "In IDLE's interactive Python Shell, what prompt symbol signifies that the interpreter is ready to receive input?",
        "options": [">>>", "###", "===", "::: "],
        "explanation": "The standard interactive Python Shell prompt is `>>>`. Typing an expression and pressing Enter executes it immediately."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_3_q1_v2",
      "sectionId": "1.3_1.4",
      "sectionTitleJa": "1.3-1.4 IDLE環境・対話型シェル・スクリプト実行",
      "sectionTitleEn": "1.3-1.4 IDLE, Shell & Script Execution",
      "code": None,
      "ja": {
        "question": "IDLEのエディタで作成したPythonスクリプトファイルを保存する際、ファイル名の末尾に必ず付けるべき半角の拡張子は何ですか？",
        "options": [".py", ".python", ".txt", ".idle"],
        "explanation": "Pythonのプログラムファイル（スクリプト）は、末尾に必ず拡張子 `.py`（例: `hello.py`）を付けて保存します。"
      },
      "en": {
        "question": "When saving a Python script file in IDLE, what standard filename extension must be used?",
        "options": [".py", ".python", ".txt", ".idle"],
        "explanation": "Python scripts must end with the `.py` extension (e.g. `hello.py`)."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_3_q1_v3",
      "sectionId": "1.3_1.4",
      "sectionTitleJa": "1.3-1.4 IDLE環境・対話型シェル・スクリプト実行",
      "sectionTitleEn": "1.3-1.4 IDLE, Shell & Script Execution",
      "code": None,
      "ja": {
        "question": "IDLEのエディタウィンドウで開いているプログラム（.py）を実行するための標準的なキーボードショートカットは何ですか？",
        "options": [
          "F5 キー（環境により Fn + F5）",
          "Ctrl + C（Cmd + C）",
          "Space キー",
          "Esc キー"
        ],
        "explanation": "IDLEエディタでプログラムを実行するには、メニューの「Run」→「Run Module」を選択するか、ショートカットキー `F5`（Mac等では `Fn + F5`）を押します。"
      },
      "en": {
        "question": "What keyboard shortcut triggers 'Run Module' to execute a script file in the IDLE editor?",
        "options": [
          "F5 key (or Fn + F5 depending on keyboard)",
          "Ctrl + C (Cmd + C)",
          "Spacebar",
          "Escape key"
        ],
        "explanation": "Pressing F5 (or Fn + F5 on macOS laptops) launches Run Module, transferring execution to the Python Shell."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.5.1: print関数と四則演算子 (+, -, *, /, //, %, **) ---
  [
    {
      "id": "ch1_sub1_5_1_q1_v1",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(20 / 4)",
      "ja": {
        "question": "Pythonで `print(20 / 4)` を実行したときの正確な出力結果として正しいものはどれですか？",
        "options": [
          "5.0",
          "5",
          "4",
          "SyntaxError"
        ],
        "explanation": "Pythonの通常除算演算子 `/` は、割り切れる場合であっても常に「浮動小数点数（float型）」を返します。そのため `5` ではなく `5.0` と出力されます。"
      },
      "en": {
        "question": "What is the exact output when running `print(20 / 4)` in Python?",
        "options": [
          "5.0",
          "5",
          "4",
          "SyntaxError"
        ],
        "explanation": "In Python, the standard forward-slash division operator `/` always produces a floating-point number (float), yielding `5.0` rather than the integer `5`."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_1_q1_v2",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(17 // 3)",
      "ja": {
        "question": "Pythonで `print(17 // 3)` を実行したときに出力される値は何ですか？",
        "options": [
          "5",
          "5.666666666666667",
          "2",
          "6"
        ],
        "explanation": "`//` は「整数の商（整数部分の切り捨て除算）」を求める演算子です。17 ÷ 3 = 5 余り 2 なので、商である `5` が整数で出力されます。"
      },
      "en": {
        "question": "What value is printed by `print(17 // 3)` in Python?",
        "options": [
          "5",
          "5.666666666666667",
          "2",
          "6"
        ],
        "explanation": "The floor division operator `//` computes the integer quotient discarding the fractional remainder. 17 // 3 yields 5."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_1_q1_v3",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(10 / 2)\nprint(10 // 2)",
      "ja": {
        "question": "上記の2行を実行したとき、それぞれの行で表示される値の組み合わせとして正しいものはどれですか？",
        "options": [
          "1行目: 5.0、2行目: 5",
          "1行目: 5、2行目: 5",
          "1行目: 5.0、2行目: 5.0",
          "1行目: 5、2行目: 5.0"
        ],
        "explanation": "割り算 `/` は常に float 型（`5.0`）を返し、切り捨て除算 `//` は整数同士の計算では int 型（`5`）を返します。"
      },
      "en": {
        "question": "What is the output for each line when executing `print(10 / 2)` followed by `print(10 // 2)`?",
        "options": [
          "Line 1: 5.0, Line 2: 5",
          "Line 1: 5, Line 2: 5",
          "Line 1: 5.0, Line 2: 5.0",
          "Line 1: 5, Line 2: 5.0"
        ],
        "explanation": "True division `/` yields float `5.0`, while integer floor division `//` between integers yields int `5`."
      },
      "correctIndex": 0
    }
  ],
  [
    {
      "id": "ch1_sub1_5_1_q2_v1",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(17 % 5)",
      "ja": {
        "question": "Pythonで `print(17 % 5)` を実行したときに出力される値は何ですか？",
        "options": [
          "2",
          "3",
          "3.4",
          "12"
        ],
        "explanation": "`%` は「割り算の余り（剰余）」を求める演算子です。17 を 5 で割ると商が 3 で余りが `2` なので、`2` が出力されます。"
      },
      "en": {
        "question": "What value is printed by `print(17 % 5)` in Python?",
        "options": [
          "2",
          "3",
          "3.4",
          "12"
        ],
        "explanation": "The modulo operator `%` calculates the remainder of division. 17 divided by 5 is 3 with remainder 2, so it outputs `2`."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_1_q2_v2",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(2 ** 4)",
      "ja": {
        "question": "Pythonで `print(2 ** 4)` を実行したときに出力される値は何ですか？",
        "options": [
          "16",
          "8",
          "6",
          "24"
        ],
        "explanation": "`**` は「べき乗（累乗）」を計算する演算子です。2 の 4 乗（$2 \\times 2 \\times 2 \\times 2$）なので `16` となります。"
      },
      "en": {
        "question": "What value is printed by `print(2 ** 4)` in Python?",
        "options": [
          "16",
          "8",
          "6",
          "24"
        ],
        "explanation": "The `**` operator denotes exponentiation (power). 2 to the power of 4 ($2^4 = 2 \\times 2 \\times 2 \\times 2$) equals 16."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_1_q2_v3",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(10 % 3 + 3 ** 2)",
      "ja": {
        "question": "式 `10 % 3 + 3 ** 2` を評価した結果として正しいものはどれですか？",
        "options": [
          "10 （1 + 9）",
          "19",
          "7",
          "1"
        ],
        "explanation": "`3 ** 2`（3の2乗 = 9）と `10 % 3`（10を3で割った余り = 1）が加算より優先され、`1 + 9 = 10` と計算されます。"
      },
      "en": {
        "question": "What is the evaluated output of `print(10 % 3 + 3 ** 2)`?",
        "options": [
          "10 (1 + 9)",
          "19",
          "7",
          "1"
        ],
        "explanation": "Exponentiation `3 ** 2 = 9` and modulo `10 % 3 = 1` take precedence over addition, yielding $1 + 9 = 10$."
      },
      "correctIndex": 0
    }
  ],
  [
    {
      "id": "ch1_sub1_5_1_q3_v1",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(2 + 3 * 4)\nprint((2 + 3) * 4)",
      "ja": {
        "question": "上記のコードを実行したとき、表示される2つの数値として正しいものはどれですか？",
        "options": [
          "14 と 20",
          "20 と 20",
          "14 と 14",
          "24 と 20"
        ],
        "explanation": "数学と同様に掛け算 `*` は足し算 `+` より優先されるため、1行目は `2 + 12 = 14` です。カッコ `()` を付けるとカッコ内が最優先されるため、2行目は `5 * 4 = 20` になります。"
      },
      "en": {
        "question": "What are the two numbers printed by `print(2 + 3 * 4)` followed by `print((2 + 3) * 4)`?",
        "options": [
          "14 and 20",
          "20 and 20",
          "14 and 14",
          "24 and 20"
        ],
        "explanation": "Multiplication precedes addition, so `2 + (3 * 4) = 14`. Parentheses override precedence, so `(2 + 3) * 4 = 5 * 4 = 20`."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_1_q3_v2",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(20 - 4 / 2)",
      "ja": {
        "question": "式 `20 - 4 / 2` を評価したときの正確な出力結果は何ですか？",
        "options": [
          "18.0",
          "18",
          "8.0",
          "8"
        ],
        "explanation": "除算 `4 / 2` が優先されて `2.0`（float）となり、`20 - 2.0 = 18.0`（float）が出力されます。"
      },
      "en": {
        "question": "What is the evaluated output of `print(20 - 4 / 2)`?",
        "options": [
          "18.0",
          "18",
          "8.0",
          "8"
        ],
        "explanation": "Division takes precedence and evaluates to float `2.0`. Subtracting from 20 results in float `18.0`."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_1_q3_v3",
      "sectionId": "1.5.1",
      "sectionTitleJa": "1.5.1 print関数と四則演算子（+, -, *, /, //, %, **）",
      "sectionTitleEn": "1.5.1 print() & Arithmetic Operators",
      "code": "print(2 ** 3 ** 2)",
      "ja": {
        "question": "べき乗演算子 `**` が連続した場合、結合の向き（計算順序）はどうなりますか？",
        "options": [
          "右結合（右から左へ計算され、2 ** (3 ** 2) = 2 ** 9 = 512 となる）",
          "左結合（左から右へ計算され、(2 ** 3) ** 2 = 8 ** 2 = 64 となる）",
          "エラーになり実行できない",
          "ランダムな順序で計算される"
        ],
        "explanation": "Pythonのべき乗演算子 `**` は「右結合」です。右側の `3 ** 2 = 9` が先に計算され、次に `2 ** 9 = 512` と評価されます。"
      },
      "en": {
        "question": "How are chained exponentiation operators `2 ** 3 ** 2` evaluated in Python?",
        "options": [
          "Right-to-left associativity: `2 ** (3 ** 2) = 2 ** 9 = 512`",
          "Left-to-right associativity: `(2 ** 3) ** 2 = 8 ** 2 = 64`",
          "Raises a SyntaxError",
          "Evaluated in random order"
        ],
        "explanation": "The exponentiation operator `**` has right-to-left associativity in Python. Thus `3 ** 2 = 9` evaluates first, resulting in $2^9 = 512$."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.5.2 - 1.5.4: 実行順序・空白・コメント ---
  [
    {
      "id": "ch1_sub1_5_2_q1_v1",
      "sectionId": "1.5.2_1.5.4",
      "sectionTitleJa": "1.5.2-1.5.4 実行順序・空白・全角スペース・コメント",
      "sectionTitleEn": "1.5.2-1.5.4 Execution Order, Whitespace & Comments",
      "code": "print('Apple')\n# print('Banana')\nprint('Cherry') # fruits",
      "ja": {
        "question": "上記のコードを実行したときに出力される行として正しいものはどれですか？",
        "options": [
          "Apple と Cherry の2行が表示される",
          "Apple, Banana, Cherry の3行が表示される",
          "Apple と Banana の2行が表示される",
          "# が画面に表示される"
        ],
        "explanation": "`#`（シャープ記号）から行末まではコメントとして扱われ、インタープリタから完全に無視されます。そのため `Banana` の行は実行されず、`Apple` と `Cherry` の2行が表示されます。"
      },
      "en": {
        "question": "What is printed to the screen when executing the code above?",
        "options": [
          "Two lines: Apple followed by Cherry",
          "Three lines: Apple, Banana, and Cherry",
          "Two lines: Apple and Banana",
          "The literal '#' symbol"
        ],
        "explanation": "Any text following the `#` symbol to the end of the line is a comment ignored by the Python interpreter. Banana is skipped."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_2_q1_v2",
      "sectionId": "1.5.2_1.5.4",
      "sectionTitleJa": "1.5.2-1.5.4 実行順序・空白・全角スペース・コメント",
      "sectionTitleEn": "1.5.2-1.5.4 Execution Order, Whitespace & Comments",
      "code": " print('Hello')",
      "ja": {
        "question": "上記のコードのように、行の先頭に理由なく半角スペースを1文字入れて実行した場合、発生するエラーは何ですか？",
        "options": [
          "IndentationError: unexpected indent",
          "SyntaxError: invalid character",
          "NameError: name 'print' is not defined",
          "エラーは起きず正常に実行される"
        ],
        "explanation": "Pythonでは行頭の空白（インデント）が文法構造を表す特別な意味を持つため、理由なく行頭にインデントを置くと `IndentationError: unexpected indent` が発生します。"
      },
      "en": {
        "question": "If an accidental leading space is inserted before `print('Hello')`, what exception is raised?",
        "options": [
          "IndentationError: unexpected indent",
          "SyntaxError: invalid character",
          "NameError: name 'print' is not defined",
          "No error occurs and it runs normally"
        ],
        "explanation": "Leading whitespace denotes structural indentation blocks in Python. Unexpected leading whitespace at top-level triggers `IndentationError`."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_2_q1_v3",
      "sectionId": "1.5.2_1.5.4",
      "sectionTitleJa": "1.5.2-1.5.4 実行順序・空白・全角スペース・コメント",
      "sectionTitleEn": "1.5.2-1.5.4 Execution Order, Whitespace & Comments",
      "code": "print(10　+ 20)",
      "ja": {
        "question": "ノート練習問題01-04より: コード中に日本語文字の「全角空白（U+3000）」が紛れ込んだ場合、発生するエラーとして正しいものはどれですか？",
        "options": [
          "SyntaxError: invalid character '　' (U+3000)",
          "TypeError: unsupported operand",
          "ZeroDivisionError",
          "全角空白は自動で半角スペースに変換され実行される"
        ],
        "explanation": "Pythonのコード中に全角空白が含まれていると、半角スペースとは解釈されず未定義の記号とみなされて `SyntaxError: invalid character '　' (U+3000)` が発生します。初心者が最もハマりやすい罠の1つです。"
      },
      "en": {
        "question": "From Exercise 01-04: If a full-width Japanese space (`\\u3000`) is accidentally typed into Python code, what error is raised?",
        "options": [
          "SyntaxError: invalid character '　' (U+3000)",
          "TypeError: unsupported operand",
          "ZeroDivisionError",
          "The interpreter automatically converts it to ASCII spaces"
        ],
        "explanation": "Full-width spaces are non-ASCII characters outside string literals. Python does not treat them as whitespace delimiters and raises `SyntaxError: invalid character`."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.5.5 - 1.5.6: 変数・代入文・再代入 ---
  [
    {
      "id": "ch1_sub1_5_5_q1_v1",
      "sectionId": "1.5.5_1.5.6",
      "sectionTitleJa": "1.5.5-1.5.6 変数・代入文・再代入",
      "sectionTitleEn": "1.5.5-1.5.6 Variables & Reassignment",
      "code": None,
      "ja": {
        "question": "Pythonの変数名（識別子）として**文法上使用できない**ものはどれですか？",
        "options": [
          "1st_player （先頭が数字）",
          "player_1",
          "_count",
          "totalScore"
        ],
        "explanation": "Pythonの変数名にはアルファベット・数字・アンダースコア（_）が使えますが、「先頭の文字に数字を使うことはできない」という絶対のルールがあります。"
      },
      "en": {
        "question": "Which of the following identifier names is SYNTACTICALLY INVALID as a Python variable name?",
        "options": [
          "1st_player (starts with a digit)",
          "player_1",
          "_count",
          "totalScore"
        ],
        "explanation": "Python variable identifiers cannot begin with a numeric digit. They must start with an ASCII letter or underscore."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_5_q1_v2",
      "sectionId": "1.5.5_1.5.6",
      "sectionTitleJa": "1.5.5-1.5.6 変数・代入文・再代入",
      "sectionTitleEn": "1.5.5-1.5.6 Variables & Reassignment",
      "code": "score = 100\nScore = 200\nprint(score)",
      "ja": {
        "question": "上記のコードを実行したとき、画面に出力される値は何ですか？",
        "options": [
          "100",
          "200",
          "300",
          "SyntaxError"
        ],
        "explanation": "Pythonでは変数名の大文字と小文字が厳密に区別されます。`score` と `Score` は全く別の変数として共存するため、`print(score)` では `100` が出力されます。"
      },
      "en": {
        "question": "What is printed when running `score = 100; Score = 200; print(score)`?",
        "options": [
          "100",
          "200",
          "300",
          "SyntaxError"
        ],
        "explanation": "Python variable names are strictly case-sensitive. `score` and `Score` are distinct memory locations; thus `score` retains 100."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_5_q1_v3",
      "sectionId": "1.5.5_1.5.6",
      "sectionTitleJa": "1.5.5-1.5.6 変数・代入文・再代入",
      "sectionTitleEn": "1.5.5-1.5.6 Variables & Reassignment",
      "code": None,
      "ja": {
        "question": "プログラミングにおける代入記号 `=` の正確な意味として、最も適切なものはどれですか？",
        "options": [
          "右辺の計算結果を評価し、左辺の変数名に格納（束縛）する操作",
          "左辺と右辺が数学的に等しいことを宣言する等式",
          "左辺の値を右辺の変数にコピーする操作",
          "変数をメモリから消去する操作"
        ],
        "explanation": "プログラミングの `=` は数学の「等しい」ではなく代入演算子です。「右辺の式を計算した結果の値を、左辺の変数に入れる」という動作を意味します（等しいかの比較には `==` を使います）。"
      },
      "en": {
        "question": "What is the precise meaning of the assignment operator `=` in Python?",
        "options": [
          "It evaluates the right-hand expression and stores/binds the resulting value into the left-hand variable",
          "It asserts that the left and right expressions are mathematically equal",
          "It copies the left variable into the right expression",
          "It deallocates the variable from memory"
        ],
        "explanation": "In programming, `=` assigns the evaluated right-hand side value to the identifier on the left. Mathematical equality is tested using `==`."
      },
      "correctIndex": 0
    }
  ],
  [
    {
      "id": "ch1_sub1_5_6_q1_v1",
      "sectionId": "1.5.5_1.5.6",
      "sectionTitleJa": "1.5.5-1.5.6 変数・代入文・再代入",
      "sectionTitleEn": "1.5.5-1.5.6 Variables & Reassignment",
      "code": "# ノート練習問題 01-05\ncount = 5\ncount = count + 3\ncount = count * 2\nprint(count)",
      "ja": {
        "question": "ノート練習問題01-05より: 上記のコードを実行したとき、最終的に `print(count)` で出力される値は何ですか？",
        "options": [
          "16",
          "11",
          "10",
          "8"
        ],
        "explanation": "1行目で `count = 5`。\n2行目で `count + 3 = 8` が代入されて `count = 8`。\n3行目で `count * 2 = 8 * 2 = 16` が再代入され、最終出力は `16` になります。"
      },
      "en": {
        "question": "From Exercise 01-05: What is the final value printed by the code above?",
        "options": [
          "16",
          "11",
          "10",
          "8"
        ],
        "explanation": "Step 1: count = 5. Step 2: count = 5 + 3 = 8. Step 3: count = 8 * 2 = 16. Final print yields 16."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_6_q1_v2",
      "sectionId": "1.5.5_1.5.6",
      "sectionTitleJa": "1.5.5-1.5.6 変数・代入文・再代入",
      "sectionTitleEn": "1.5.5-1.5.6 Variables & Reassignment",
      "code": "a = 10\nb = a\na = 20\nprint(b)",
      "ja": {
        "question": "上記のコードを実行したとき、画面に出力される `b` の値は何ですか？",
        "options": [
          "10",
          "20",
          "30",
          "None"
        ],
        "explanation": "`b = a` の時点で、その時の `a` の値である `10` が `b` に代入されます。その後 `a = 20` と書き換えても、`b` の値には影響しないため `10` が出力されます。"
      },
      "en": {
        "question": "What value is printed by `a = 10; b = a; a = 20; print(b)`?",
        "options": [
          "10",
          "20",
          "30",
          "None"
        ],
        "explanation": "When `b = a` executes, integer 10 is assigned to `b`. Reassigning `a = 20` later does not alter `b`, which remains 10."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_6_q1_v3",
      "sectionId": "1.5.5_1.5.6",
      "sectionTitleJa": "1.5.5-1.5.6 変数・代入文・再代入",
      "sectionTitleEn": "1.5.5-1.5.6 Variables & Reassignment",
      "code": "x = 10\nx += 5\nx *= 2\nprint(x)",
      "ja": {
        "question": "累犯代入演算子（`+=`, `*=`）を用いた上記のコードの出力結果は何ですか？",
        "options": [
          "30 （(10 + 5) * 2）",
          "20",
          "25",
          "15"
        ],
        "explanation": "`x += 5` は `x = x + 5`（15）と同じです。続く `x *= 2` は `x = x * 2`（30）と同じなので、結果は `30` となります。"
      },
      "en": {
        "question": "What is printed by `x = 10; x += 5; x *= 2; print(x)`?",
        "options": [
          "30 ((10 + 5) * 2)",
          "20",
          "25",
          "15"
        ],
        "explanation": "`x += 5` increments x from 10 to 15. `x *= 2` doubles 15 to 30."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.5.7 - 1.5.9: 関数呼び出し・関数定義・モジュール ---
  [
    {
      "id": "ch1_sub1_5_7_q1_v1",
      "sectionId": "1.5.7_1.5.9",
      "sectionTitleJa": "1.5.7-1.5.9 関数呼び出し・関数定義(def/return)・モジュール",
      "sectionTitleEn": "1.5.7-1.5.9 Functions & Modules",
      "code": "text = 'Python'\nprint(len(text))\nprint(max(3, 5, 1, 2, 4))",
      "ja": {
        "question": "上記の組み込み関数 `len()` と `max()` を実行したときの2行の出力として正しいものはどれですか？",
        "options": [
          "1行目: 6、2行目: 5",
          "1行目: 5、2行目: 5",
          "1行目: 6、2行目: 4",
          "1行目: 7、2行目: 3"
        ],
        "explanation": "`len('Python')` は文字列の長さ（6文字）を返し、`max(3, 5, 1, 2, 4)` は引数の中で最大の値である `5` を返します。"
      },
      "en": {
        "question": "What are the two lines printed when running `len('Python')` and `max(3, 5, 1, 2, 4)`?",
        "options": [
          "Line 1: 6, Line 2: 5",
          "Line 1: 5, Line 2: 5",
          "Line 1: 6, Line 2: 4",
          "Line 1: 7, Line 2: 3"
        ],
        "explanation": "`len('Python')` counts 6 characters. `max(3, 5, 1, 2, 4)` returns the largest argument value, 5."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_7_q1_v2",
      "sectionId": "1.5.7_1.5.9",
      "sectionTitleJa": "1.5.7-1.5.9 関数呼び出し・関数定義(def/return)・モジュール",
      "sectionTitleEn": "1.5.7-1.5.9 Functions & Modules",
      "code": "def add_tax(price):\n    return price * 1.1\n\nprint(add_tax(100))",
      "ja": {
        "question": "上記の自作関数定義において、呼び出し元に計算結果を返すために使われているキーワードは何ですか？",
        "options": [
          "return",
          "def",
          "send",
          "output"
        ],
        "explanation": "関数から呼び出し側に計算結果の値を引き渡す（返す）には `return` 文を使用します。`def` は関数を定義するためのキーワードです。"
      },
      "en": {
        "question": "In a Python function definition, which keyword passes the calculated result back to the caller?",
        "options": [
          "return",
          "def",
          "send",
          "output"
        ],
        "explanation": "The `return` statement exits a function and hands back an output value to the caller."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_5_7_q1_v3",
      "sectionId": "1.5.7_1.5.9",
      "sectionTitleJa": "1.5.7-1.5.9 関数呼び出し・関数定義(def/return)・モジュール",
      "sectionTitleEn": "1.5.7-1.5.9 Functions & Modules",
      "code": "import math\nprint(math.sqrt(16))",
      "ja": {
        "question": "標準モジュール `math` を読み込んで `math.sqrt(16)`（平方根）を実行したときに出力される正確な値は何ですか？",
        "options": [
          "4.0",
          "4",
          "256",
          "8"
        ],
        "explanation": "`math.sqrt()` は平方根（Square Root）を浮動小数点数（float型）で返します。16の平方根なので `4.0` が出力されます。"
      },
      "en": {
        "question": "What is the exact output of `import math; print(math.sqrt(16))` in Python?",
        "options": [
          "4.0",
          "4",
          "256",
          "8"
        ],
        "explanation": "`math.sqrt()` computes the square root and always returns a floating-point number, outputting `4.0`."
      },
      "correctIndex": 0
    }
  ],

  # --- Subsection 1.6: ノート練習問題（秒数計算・BMI・総合演習） ---
  [
    {
      "id": "ch1_sub1_6_q1_v1",
      "sectionId": "1.6",
      "sectionTitleJa": "1.6 まとめとノート練習問題（秒数計算・BMI等）",
      "sectionTitleEn": "1.6 Practice Exercises (Seconds/Year, BMI, etc.)",
      "code": "# ノート練習問題 01-03\n# 1年間（平年＝365日）が何秒であるかを計算する",
      "ja": {
        "question": "ノート練習問題01-03より: 平年（365日）の「1年間の秒数」を計算する正しいPythonプログラムと出力結果の組み合わせはどれですか？",
        "options": [
          "print(365 * 24 * 60 * 60) → 31536000",
          "print(365 * 60 * 60) → 1314000",
          "print(365 * 24 * 60) → 525600",
          "print(365 * 24 * 3600 * 60) → 1892160000"
        ],
        "explanation": "1年は365日、1日は24時間、1時間は60分、1分は60秒なので、`365 * 24 * 60 * 60` と計算します。結果は `31536000` 秒（約3,153万秒）となります。"
      },
      "en": {
        "question": "From Exercise 01-03: Which Python expression correctly calculates the total number of seconds in a standard 365-day year and its result?",
        "options": [
          "print(365 * 24 * 60 * 60) → 31536000",
          "print(365 * 60 * 60) → 1314000",
          "print(365 * 24 * 60) → 525600",
          "print(365 * 24 * 3600 * 60) → 1892160000"
        ],
        "explanation": "1 year = 365 days × 24 hours/day × 60 minutes/hour × 60 seconds/minute = `365 * 24 * 60 * 60 = 31,536,000` seconds."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_6_q1_v2",
      "sectionId": "1.6",
      "sectionTitleJa": "1.6 まとめとノート練習問題（秒数計算・BMI等）",
      "sectionTitleEn": "1.6 Practice Exercises (Seconds/Year, BMI, etc.)",
      "code": "# うるう年（366日）の秒数計算",
      "ja": {
        "question": "もし「うるう年（366日）」の1年間の秒数を計算する場合の式と出力結果はどうなりますか？",
        "options": [
          "print(366 * 24 * 60 * 60) → 31622400",
          "print(366 * 24 * 60) → 527040",
          "print(366 * 3600) → 1317600",
          "print(366 ** 2) → 133956"
        ],
        "explanation": "366日に1日の秒数（`24 * 60 * 60 = 86400`）を掛けるため、`366 * 86400 = 31622400` 秒となります。"
      },
      "en": {
        "question": "What is the correct expression and result for calculating the number of seconds in a leap year (366 days)?",
        "options": [
          "print(366 * 24 * 60 * 60) → 31622400",
          "print(366 * 24 * 60) → 527040",
          "print(366 * 3600) → 1317600",
          "print(366 ** 2) → 133956"
        ],
        "explanation": "366 days × 86,400 seconds/day = 31,622,400 seconds."
      },
      "correctIndex": 0
    },
    {
      "id": "ch1_sub1_6_q1_v3",
      "sectionId": "1.6",
      "sectionTitleJa": "1.6 まとめとノート練習問題（秒数計算・BMI等）",
      "sectionTitleEn": "1.6 Practice Exercises (Seconds/Year, BMI, etc.)",
      "code": "# ノート練習問題 01-07: BMI計算\n# 身長 height (m), 体重 weight (kg)\ndef calc_bmi(weight, height):\n    return weight / (height ** 2)",
      "ja": {
        "question": "ノート練習問題01-07より: 体重（kg）と身長（m）からBMI（ボディマス指数）を計算する関数内の正しい数式はどれですか？",
        "options": [
          "weight / (height ** 2)",
          "weight * (height ** 2)",
          "height / (weight ** 2)",
          "weight - height * 2"
        ],
        "explanation": "BMIの計算公式は「体重(kg) ÷ 身長(m)の2乗」です。Pythonではべき乗に `**` を使うため、`weight / (height ** 2)` と記述します。"
      },
      "en": {
        "question": "From Exercise 01-07: Which formula inside a Python function correctly calculates Body Mass Index (BMI) from weight (kg) and height (m)?",
        "options": [
          "weight / (height ** 2)",
          "weight * (height ** 2)",
          "height / (weight ** 2)",
          "weight - height * 2"
        ],
        "explanation": "BMI is defined as weight in kg divided by height in meters squared: $BMI = weight / height^2$. In Python, this is `weight / (height ** 2)`."
      },
      "correctIndex": 0
    }
  ]
]

print("Chapter 1 enriched slots defined:", len(CH1_SUBSECTION_SLOTS))
