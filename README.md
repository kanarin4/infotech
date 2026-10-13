# InfoTech — Interactive Prep Quiz Hub

An interactive web application designed for students to prepare for weekly in-class quizzes in **InfoTech**.

Features bilingual (Japanese 🇯🇵 & English 🇺🇸) question banks, practice mode with immediate code execution traces, and exam simulation mode with comprehensive "Why & How" explanations.

---

## 📚 Curriculum & Chapter Coverage

The quiz bank includes 56 questions organized across 14 chapters in 4 parts:

### Part 1: Programming & Algorithm Foundations
- **Chapter 1: What is a Program?** — Computer architecture, CPU (ALU vs. Control Unit), Fetch-Decode-Execute-Writeback cycle, Main memory volatility (DRAM) vs. secondary storage (SSD/HDD), Python IDLE environment.
- **Chapter 2: Branching & Loops** — `input()` return types, type casting (`int()`), `if / elif / else` evaluation order, `for` loops, `range(start, stop, step)`, nested loops, `while` termination.
- **Chapter 3: Data Types & Structures** — Lists, 0-based indexing, slicing (`lst[start:stop]`), mutability, dictionaries (`dict`), keys/values, `KeyError` handling.
- **Chapter 4: Nature of Algorithms** — Coding agents & vibe coding, verifying hallucinations, Alan Turing's Halting Problem, Big-O time complexity ($O(1), O(\log n), O(n), O(n^2)$).

### Part 2: Machine Learning & Reinforcement Learning Concepts
- **Chapter 5: Machine Learning & Version Control** — AI ⊃ ML ⊃ Deep Learning hierarchy, 3 major learning paradigms, trial-and-error & delayed rewards, Git fundamentals (`git add`, `git commit`).
- **Chapter 6: Multi-Armed Bandit Problem** — Exploration vs. exploitation trade-off, sample-average updates, $\epsilon$-greedy algorithm, pure greedy failure modes.
- **Chapter 7: Foundations of Reinforcement Learning** — Agent and Environment interaction, Markov Decision Processes (MDP), Markov property, discount factor $\gamma$, state-value $V(s)$ vs. action-value $Q(s,a)$.

### Part 3: Practical Reinforcement Learning with Gymnasium
- **Chapter 8: Gymnasium Basics — Cliff Walking** — Gymnasium API (`env.reset()`, `env.step()`), `terminated` vs. `truncated`, step penalties, state-value grid maps.
- **Chapter 9: Monte Carlo Method — Blackjack** — Action space (Hit / Stand), state observation tuples, Monte Carlo policy evaluation, sample return averaging.
- **Chapter 10: TD Learning & Q-Learning — Frozen Lake** — Stochastic transitions (slippery ice), Temporal Difference (TD) learning, TD error, Q-learning update equation, learning rate $\alpha$.
- **Chapter 11: Continuous State Spaces — Cart Pole** — Inverted pendulum task, continuous physics states, limits of lookup tables, discretization & binning (`np.digitize`).

### Part 4: Custom Game Environment & AI Training
- **Chapter 12: Custom Game Environment** — Subclassing `gymnasium.Env`, `spaces.Discrete`, implementing `reset()`, `step()`, and `render()`, GridTreasureEnv.
- **Chapter 13: Training the Custom Game AI** — Q-learning loop, $\epsilon$-decay scheduling, evaluating training reward curves, test playback with greedy policy ($\epsilon = 0$).
- **Chapter 14: Summary & Deep RL Roadmap** — Limitations of tabular RL, curse of dimensionality, Deep Q-Networks (DQN), neural network function approximation, ethics and testing.

---

## ⚡️ Key Features

- **💡 Practice Mode**: Get instant feedback the moment you click an option, with immediate execution traces and distractor explanations.
- **⏱ Test Mode**: Simulates in-class quiz conditions. Answers are submitted together at the end.
- **🌐 One-Click Bilingual Toggle**: Switch between Japanese (🇯🇵) and English (🇺🇸) at any point without losing test progress.
- **📊 Comprehensive "Why & How" Breakdown**:
  - Step-by-step code execution traces.
  - Why the correct answer is right.
  - Why common distractors are typical student traps.
  - Filter between "All Questions" and "Missed Only".
- **💾 Local Progress Tracking**: Highest scores and completion badges are automatically saved in `localStorage`.

---

## 🚀 How to Run Locally

This project is built with vanilla HTML5, CSS3, and modern JavaScript. It has zero external package dependencies.

### Option 1: Python HTTP Server (Recommended)
```bash
# Clone the repository
git clone git@github.com:kanarin4/infotech.git
cd infotech

# Start local server
python3 -m http.server 4321
```
Open **`http://localhost:4321`** in your browser.

### Option 2: Direct File Open
Simply double-click `index.html` or open it directly in any modern browser.

---

## 📁 Repository Structure

```
├── index.html                  # Main semantic application layout
├── style.css                   # Glassmorphic terminal design & tactile animations
├── questions.js                # Bilingual 14-chapter quiz question bank
├── app.js                      # Interactive state management, scoring, and review engine
├── ascp-logo.png               # spacecaret emblem
├── LeagueSpartan-ExtraBold.ttf # spacecaret branding typography
├── .gitignore                  # Ignore system files (.DS_Store, logs)
└── README.md                   # Documentation and curriculum guide
```

---

## 📄 License & Branding

© 2026 spacecaret. MIT License. Free for educational and personal study use.
