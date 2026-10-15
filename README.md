# ⚡ RAW.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=111111)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=111111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-EF008C?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)
[![Lucide React](https://img.shields.io/badge/Lucide%20React-Icons-F56565?style=flat-square&logo=lucide&logoColor=white)](https://lucide.dev/)
[![PostCSS](https://img.shields.io/badge/PostCSS-8-DD3A0A?style=flat-square&logo=postcss&logoColor=white)](https://postcss.org/)
[![Create React App](https://img.shields.io/badge/Create%20React%20App-5-09D3AC?style=flat-square&logo=createreactapp&logoColor=white)](https://create-react-app.dev/)
[![Copyright](https://img.shields.io/badge/Code-Proprietary-111111?style=flat-square)](LICENSE)

> **Real Conversations. No Filters.**

## 🚀 Project Description

**RAW.** is an interactive social conversation experience designed around questions, games, movement and real-world interaction. Instead of another passive screen, the interface becomes a tool for conversations between people.

The application is organised into three modes:

| Mode | Purpose |
| --- | --- |
| 🔵 **THE DEEP END** | Deeper conversations, vulnerability and connection |
| 🔴 **UNFILTERED** | Social games, chaotic questions and group interaction |
| ⚪ **THE LAB** | Experimental games based on deduction, restrictions and unexpected answers |

**[Open the live experience](https://raw-app-bice.vercel.app)**

## Screenshots

### Home

![RAW home screen](public/images/home.png)

### The Deep End

![The Deep End conversation cards](public/images/deepend.PNG)

### Unfiltered

![Unfiltered social games](public/images/unfiltered.PNG)

### The Lab

![The Lab experimental games](public/images/the%20lab.PNG)

### Game card

![RAW game card](public/images/card.PNG)

### Settings

![RAW settings](public/images/config.PNG)

### THE DEEP END

Conversation decks cover a range of contexts, including Deep Questions, Night Talks, Intimate, Talking Stage, Couples, Soulmates, Long Distance, Family, At the Table and Dating. Deck content is stored in separate JSON files, keeping the content independent from the main interface.

### UNFILTERED

Fast-paced social games include Spicy, Truth or Drink, Never Have I Ever, Kiss, Marry, Kill, Who Is Most Likely, Red or Green? and Would You Rather. Decks share a common card-based interaction flow.

### THE LAB

Experimental mechanics include:

- **The Impostor:** players receive a group word and an impostor word, creating a deduction game.
- **Forbidden Words:** players explain a target concept without using a set of forbidden words.
- **Wrong Answers Only:** players are encouraged to give deliberately incorrect answers.

### Interaction and settings

The active card experience supports tap and horizontal swipe navigation, animated transitions, progress indication and haptic feedback where supported. Framer Motion handles card movement and transitions.

Settings include language selection, animation controls, a project story section and a link to the source repository. Available language options are Portuguese (EU), English, Spanish, French and German. Settings are persisted locally using `localStorage`.

## 🛠️ Tech Stack & Hooks

### Visual tech stack

| Technology | Role |
| --- | --- |
| React 18 | Component-based interface and UI state |
| JavaScript | Application logic |
| Tailwind CSS 3 | Utility-first styling and responsive layouts |
| Framer Motion | Animated transitions and draggable cards |
| Lucide React | Interface icons |
| Create React App | Development server and production build |
| PostCSS and Autoprefixer | CSS processing |
| Browser localStorage | Local settings persistence |
| Web Haptics API | Haptic feedback where the browser and device support it |

### React hooks identified in the source

- `useState`: tracks the current view, selected game mode, active deck, question list, current card and settings.
- `useEffect`: persists settings to `localStorage` when they change.

The application uses reusable components for the layout, header, footer and game cards, with game content separated into JSON data files.

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── Card.js
│   ├── Footer.js
│   ├── Header.js
│   └── Layout.js
├── data/
│   └── modes/
│       ├── deep-end/
│       ├── lab/
│       └── unfiltered/
├── pages/
│   ├── Game.js
│   ├── Home.js
│   └── Settings.js
├── styles/
│   └── globals.css
├── utils/
│   └── feedback.js
└── App.js
```

## 💻 How to Run

### Requirements

- Node.js
- npm

### 1. Clone the repository

```bash
git clone https://github.com/16alves02/raw-app.git
cd raw-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The development server prints the local URL in the terminal. Open that address in your browser.

### Other commands

```bash
npm run build
npm test
```

- `npm run build` creates an optimised production build.
- `npm test` runs the Create React App test runner.

## 🎨 Visual Identity

RAW. uses a bold, minimal visual system designed to keep attention on the cards and conversations.

| Element | Value |
| --- | --- |
| Background | Deep Onyx `#0D0D0D` |
| Main accent | Electric Cyan `#00F0FF` |
| Unfiltered accent | Vivid Red `#FF3E3E` |
| Text | Raw Bone `#F2F2F2` |

Strong typography, generous spacing, sharp borders and high contrast reinforce the project's identity.

## 🔮 Future Improvements

- Add unit and component tests for mode selection, settings persistence and deck navigation.
- Migrate the project from Create React App to Vite for a more modern build setup.
- Introduce TypeScript to make game modes, deck data and settings safer to maintain.
- Add accessibility checks for keyboard interaction, reduced-motion preferences and screen-reader announcements.
- Improve error handling for malformed or missing local settings.
- Review bundle size and lazy-load game content where it provides a measurable performance benefit.
- Expand localisation coverage and validate all translated content consistently.

## 🗓️ Project History

RAW. was developed as an experimental frontend project and later published and refined on GitHub.

- **2025:** project development period.
- **2026:** repository publication and continued refinement.
- **2026:** additional formatting improvements and documentation updates.

## 👤 Author

**Leonardo Alves - [@16alves02](https://github.com/16alves02)**

RAW. is part of the **16alves02** project portfolio.

> **Stay Real. Stay RAW.**

## 📜 License & Copyright

**Copyright (c) 2025-2026 Leonardo Alves (16alves02). All rights reserved.**

This project is **not open source**. The source code is published for viewing and educational reference, but it may not be copied, redistributed, modified for public or commercial use, sublicensed, sold, or presented as someone else's work without prior written permission.

See the [LICENSE](./LICENSE) file for the full terms.
