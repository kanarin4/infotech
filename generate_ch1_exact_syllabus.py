# -*- coding: utf-8 -*-
# generate_ch1_exact_syllabus.py
# Generates 24 high-yield question slots (72 dynamic variants) for Chapter 1
# Strictly anchored in: https://takashihattori.github.io/sfc-fit2-rl/01_program_intro.html
# Clean 6 subsections: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6 (at least 3-4 questions each)
# Designed for deep conceptual reasoning, code tracing, and zero rote memorization.

import json

CH1_EXACT_SUBSECTIONS = [
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

CH1_QUESTION_SLOTS = [
    # =========================================================================
    # --- SUBSECTION 1.1: コンピュータの動作 (4 slots = 12 variants) ---
    # =========================================================================
    # Slot 1: CPU内部の役割分担 (ALU vs 制御部 vs レジスタ) & 機械語命令トレース
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
            "code": None,
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
            "code": None,
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
    # Slot 2: CPU命令実行サイクル (Fetch-Decode-Execute-WriteBack)
    [
        {
            "id": "ch1_1_1_q2_v1",
            "sectionId": "1.1",
            "sectionTitleJa": "1.1 コンピュータの動作",
            "sectionTitleEn": "1.1 Computer Architecture & Hardware",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 3: 記憶装置の階層 (主記憶 vs 補助記憶)
    [
        {
            "id": "ch1_1_1_q3_v1",
            "sectionId": "1.1",
            "sectionTitleJa": "1.1 コンピュータの動作",
            "sectionTitleEn": "1.1 Computer Architecture & Hardware",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 4: コンピュータの主要5大機能 & 機械語の仕様
    [
        {
            "id": "ch1_1_1_q4_v1",
            "sectionId": "1.1",
            "sectionTitleJa": "1.1 コンピュータの動作",
            "sectionTitleEn": "1.1 Computer Architecture & Hardware",
            "code": None,
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
            "code": None,
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
            "code": None,
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

    # =========================================================================
    # --- SUBSECTION 1.2: プログラミング言語 (4 slots = 12 variants) ---
    # =========================================================================
    # Slot 5: 高校「情報I」の3つの基本制御構造 (順次・分岐・反復)
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
            "code": None,
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
    # Slot 6: 機械語と高水準言語・翻訳の仕組み
    [
        {
            "id": "ch1_1_2_q2_v1",
            "sectionId": "1.2",
            "sectionTitleJa": "1.2 プログラミング言語",
            "sectionTitleEn": "1.2 Programming Languages & Python",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 7: 言語の使い分けと設計思想のトレードオフ
    [
        {
            "id": "ch1_1_2_q3_v1",
            "sectionId": "1.2",
            "sectionTitleJa": "1.2 プログラミング言語",
            "sectionTitleEn": "1.2 Programming Languages & Python",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 8: Pythonの特徴 (インデント構造 & インタプリタ型)
    [
        {
            "id": "ch1_1_2_q4_v1",
            "sectionId": "1.2",
            "sectionTitleJa": "1.2 プログラミング言語",
            "sectionTitleEn": "1.2 Programming Languages & Python",
            "code": None,
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
            "code": None,
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
            "code": None,
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

    # =========================================================================
    # --- SUBSECTION 1.3: Python開発環境の導入 (3 slots = 9 variants) ---
    # =========================================================================
    # Slot 9: IDLEの特徴と3つの統合機能
    [
        {
            "id": "ch1_1_3_q1_v1",
            "sectionId": "1.3",
            "sectionTitleJa": "1.3 Python開発環境の導入",
            "sectionTitleEn": "1.3 Installing Python & IDLE",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 10: インストーラ選びとWindowsの注意点 (PATH & .exe vs .msix)
    [
        {
            "id": "ch1_1_3_q2_v1",
            "sectionId": "1.3",
            "sectionTitleJa": "1.3 Python開発環境の導入",
            "sectionTitleEn": "1.3 Installing Python & IDLE",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 11: IDLEの起動確認とプロンプト記号 (>>>)
    [
        {
            "id": "ch1_1_3_q3_v1",
            "sectionId": "1.3",
            "sectionTitleJa": "1.3 Python開発環境の導入",
            "sectionTitleEn": "1.3 Installing Python & IDLE",
            "code": None,
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
            "code": None,
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
            "code": None,
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

    # =========================================================================
    # --- SUBSECTION 1.4: Pythonプログラムの実行 (4 slots = 12 variants) ---
    # =========================================================================
    # Slot 12: 対話型シェル REPL での実行と終了
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
            "code": None,
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
            "code": None,
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
    # Slot 13: スクリプトファイルの新規作成と保存
    [
        {
            "id": "ch1_1_4_q2_v1",
            "sectionId": "1.4",
            "sectionTitleJa": "1.4 Pythonプログラムの実行",
            "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
            "code": None,
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
            "code": None,
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
            "code": None,
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
    # Slot 14: プログラムの実行 (F5 / Run Module) と画面連携
    [
        {
            "id": "ch1_1_4_q3_v1",
            "sectionId": "1.4",
            "sectionTitleJa": "1.4 Pythonプログラムの実行",
            "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
            "code": None,
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
            "code": 'print("Hello, World!")',
            "ja": {
                "question": "教科書1.4.2.2に書かれた最初のプログラムです。このスクリプトを実行したときに Python Shell に出力される文字列として正確なものはどれですか？",
                "options": [
                    "Hello, World!",
                    '"Hello, World!"',
                    "print(Hello, World!)",
                    "Hello, World"
                ],
                "explanation": "print() 関数にダブルクォーテーションで囲まれた文字列を渡すと、クォーテーションの内側の文字だけが画面に出力されるため、'Hello, World!' となります。"
            },
            "en": {
                "question": "When print(\"Hello, World!\") is executed, what exact string appears on standard output?",
                "options": [
                    "Hello, World!",
                    '"Hello, World!"',
                    "print(Hello, World!)",
                    "Hello, World"
                ],
                "explanation": "The print() function outputs the literal text content within the quotation marks without quotes."
            },
            "correctIndex": 0
        }
    ],

    # =========================================================================
    # --- SUBSECTION 1.5: Python言語の文法 (5 slots = 15 variants) ---
    # =========================================================================
    # Slot 15: 四則演算子 (+, -, *, /, //, %, **) と計算優先順位
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
    # Slot 16: 空白ルール (インデント・演算子スペース・全角空白エラー)
    [
        {
            "id": "ch1_1_5_q2_v1",
            "sectionId": "1.5",
            "sectionTitleJa": "1.5 Python言語の文法",
            "sectionTitleEn": "1.5 Python Syntax & Core Grammar",
            "code": ' print("Hello")',
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
            "code": 'print("Hello")　# 文字列の外に全角スペース混入',
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
    # Slot 17: コメント (#) と文の実行順序
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
            "code": 'print("1番目")\nprint("2番目")\nprint("3番目")',
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
            "code": 'print("START")\n# 10 / 0\nprint("FINISH")',
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
    # Slot 18: 変数・代入文 (=) の本質と再代入トレース
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
            "code": None,
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
            "code": None,
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
    # Slot 19: 組み込み関数 (len/max)、関数定義 (def/return)、モジュール (import math)
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

    # =========================================================================
    # --- SUBSECTION 1.6: まとめとノート練習問題 (4 slots = 12 variants) ---
    # =========================================================================
    # Slot 20: ノート練習問題 01-03 (1年間の秒数計算)
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
    # Slot 21: ノート練習問題 01-05 (変数 count の多重代入トレース)
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
    # Slot 22: ノート練習問題 01-06 (len と max で一番長い単語の文字数)
    [
        {
            "id": "ch1_1_6_q3_v1",
            "sectionId": "1.6",
            "sectionTitleJa": "1.6 まとめとノート練習問題",
            "sectionTitleEn": "1.6 Exercises & Review",
            "code": 'print(max(len("horse"), len("elephant"), len("hippopotamus"), len("dolphin")))',
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
            "code": 'w1 = len("cat")\nw2 = len("crocodile")\nprint(max(w1, w2))',
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
            "code": 'print(max(len("AI"), len("Machine Learning"), len("Python")))',
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
    # Slot 23: ノート練習問題 01-07 & 01-08 (BMI計算関数と円の面積関数)
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
]
