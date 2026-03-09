# Probability Paradoxes

**[Play it here → kjjohnsen.github.io/monty-hall-game](https://kjjohnsen.github.io/monty-hall-game/)**

An interactive collection of probability puzzles that fool almost everyone. Each game lets you build intuition by playing and simulating thousands of trials — watching the "impossible" answer converge in real time.

---

## Games

| Game | The Surprising Result |
|---|---|
| 🚪 [Monty Hall Problem](monty-hall.html) | Switching doors doubles your odds |
| 🎂 [Birthday Paradox](birthday-paradox.html) | Only 23 people needed for a >50% chance of a shared birthday |
| 🧪 [False Positive Paradox](false-positive.html) | A 99%-accurate test can still be wrong most of the time |
| 📊 [Simpson's Paradox](simpsons-paradox.html) | A treatment can win every subgroup yet lose overall |
| 😴 [Sleeping Beauty Problem](sleeping-beauty.html) | A fair coin flip, but reasonable people disagree on the odds |
| 📦 [Bertrand's Box Paradox](bertrands-box.html) | Drawing a gold coin makes the all-gold box twice as likely |
| 💰 [St. Petersburg Paradox](st-petersburg.html) | A game with infinite expected value you'd never pay much to play |
| 🔢 [Benford's Law](benfords-law.html) | In real data, 1 is the leading digit ~30% of the time |
| 👔 [Secretary Problem](secretary-problem.html) | There's a mathematically optimal strategy for hiring blind |
| 🪙 [Penney's Game](penneys-game.html) | Player 2 can always find a coin sequence that beats Player 1 |
| 🔒 [100 Prisoners Riddle](prisoners-riddle.html) | A strategy exists that gives 100 prisoners a 31% survival chance |
| 👦 [Two Children Problem](two-children.html) | "At least one is a boy" and "the older one is a boy" give different answers |

---

## Features

- **Pre-game quizzes** — commit to your gut answer before seeing the result
- **Live simulation** — run thousands of trials and watch the observed rate converge
- **Explanations** — each game has an expandable breakdown of the math
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript; no build step

---

## Running Locally

Just open any `.html` file directly in a browser — no server needed.

```
git clone https://github.com/kjjohnsen/monty-hall-game.git
open monty-hall-game/index.html
```

---

## Structure

```
index.html          # Game hub / home page
shared.css          # Common styles and theme
shared.js           # Utilities: simulation runner, charts, state, navigation
monty-hall.html
birthday-paradox.html
false-positive.html
simpsons-paradox.html
sleeping-beauty.html
bertrands-box.html
st-petersburg.html
benfords-law.html
secretary-problem.html
penneys-game.html
prisoners-riddle.html
two-children.html
```

---

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.
