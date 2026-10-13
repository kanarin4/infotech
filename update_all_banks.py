# -*- coding: utf-8 -*-
# update_all_banks.py
import json
import os
import generate_ch1_exact_syllabus as g

slot_1_3_extra = [
    {
        "id": "ch1_1_3_q4_v1",
        "sectionId": "1.3",
        "sectionTitleJa": "1.3 Python開発環境の導入",
        "sectionTitleEn": "1.3 Installing Python & IDLE",
        "code": None,
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
        "code": None,
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
        "code": None,
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
]

slot_1_4_extra = [
    {
        "id": "ch1_1_4_q4_v1",
        "sectionId": "1.4",
        "sectionTitleJa": "1.4 Pythonプログラムの実行",
        "sectionTitleEn": "1.4 Running Python Programs (Shell & Script)",
        "code": None,
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
        "code": 'print("Step 1")\nprint(undefined_variable)\nprint("Step 2")',
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
]

# Reassemble CH1_QUESTION_SLOTS
# Subsections: 1.1 (4 slots), 1.2 (4 slots), 1.3 (3+1=4 slots), 1.4 (3+1=4 slots), 1.5 (5 slots), 1.6 (4 slots)
slots_1_1 = [s for s in g.CH1_QUESTION_SLOTS if s[0]["sectionId"] == "1.1"]
slots_1_2 = [s for s in g.CH1_QUESTION_SLOTS if s[0]["sectionId"] == "1.2"]
slots_1_3 = [s for s in g.CH1_QUESTION_SLOTS if s[0]["sectionId"] == "1.3"] + [slot_1_3_extra]
slots_1_4 = [s for s in g.CH1_QUESTION_SLOTS if s[0]["sectionId"] == "1.4"] + [slot_1_4_extra]
slots_1_5 = [s for s in g.CH1_QUESTION_SLOTS if s[0]["sectionId"] == "1.5"]
slots_1_6 = [s for s in g.CH1_QUESTION_SLOTS if s[0]["sectionId"] == "1.6"]

ALL_CH1_SLOTS = slots_1_1 + slots_1_2 + slots_1_3 + slots_1_4 + slots_1_5 + slots_1_6

print("CH1 Slots count per subsection:")
print("  1.1:", len(slots_1_1))
print("  1.2:", len(slots_1_2))
print("  1.3:", len(slots_1_3))
print("  1.4:", len(slots_1_4))
print("  1.5:", len(slots_1_5))
print("  1.6:", len(slots_1_6))
print("Total CH1 slots:", len(ALL_CH1_SLOTS))
print("Total CH1 varieties:", sum(len(s) for s in ALL_CH1_SLOTS))

# Import other parts
from bank_part1 import PART1_DATA
from bank_part2 import PART2_DATA
from bank_part3 import PART3_DATA
from bank_part4 import PART4_DATA
from build_comprehensive_questions import course_sections, annotate_slots

# Update Chapter 1 in course_sections
course_sections[0]["chapters"][0]["subsections"] = g.CH1_EXACT_SUBSECTIONS

quiz_data = {}
quiz_data[1] = ALL_CH1_SLOTS
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

output_path = "/Users/rickykanai/UniStuffs/fit2/fit2_quiz_hub/questions.js"
js_content = f"""// InfoTech - In-Class Prep Quiz Bank for Chapters 1 - 14
// Subsection Architecture: 1.1 through 1.6 (Strictly anchored in course site materials)
// {total_questions} total questions across {len(quiz_data)} chapters and {total_slots} topic slots.
// Options and question varieties are sampled and shuffled dynamically at runtime.

const courseSections = {json.dumps(course_sections, ensure_ascii=False, indent=2)};

const quizData = {json.dumps(quiz_data, ensure_ascii=False, indent=2)};
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully generated {output_path} ({os.path.getsize(output_path)} bytes)")
print(f"Total Chapters: {len(quiz_data)}, Total Slots: {total_slots}, Total Questions: {total_questions}")
