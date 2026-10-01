# ⚡ RAW.

> **Real Conversations. No Filters.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Try%20RAW.-111111?style=for-the-badge)](https://raw-app-bice.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=111111)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-EF008C?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)
[![Copyright](https://img.shields.io/badge/Code-Proprietary-111111?style=flat-square)](LICENSE)

## 🌐 Experience RAW.

**[Open the live experience](https://raw-app-bice.vercel.app)**

RAW. is an interactive social conversation experience designed around **questions, games, movement and real-world interaction**.

The idea is simple: instead of another passive screen, the interface becomes a tool for conversations between people.

## 🧠 The Concept

RAW. was designed around three different experiences:

| Mode | Purpose |
| --- | --- |
| 🔵 **THE DEEP END** | Deeper conversations, vulnerability and connection |
| 🔴 **UNFILTERED** | Social games, chaotic questions and group interaction |
| ⚪ **THE LAB** | Experimental games based on deduction, restrictions and unexpected answers |

The project uses a dark, high-contrast visual language to keep the focus on the cards and the interaction itself.

## 🃏 THE DEEP END

The Deep End contains decks designed for different relationship and conversation contexts:

- Deep Questions
- Night Talks
- Intimate
- Talking Stage
- Couples
- Soulmates
- Long Distance
- Family
- At the Table
- Dating

The data for these decks is stored separately as JSON files, making the content independent from the main React interface.

## 🔥 UNFILTERED

Unfiltered moves the experience towards faster social games and playful group interaction.

Available decks include:

- Spicy
- Truth or Drink
- Never Have I Ever
- Kiss, Marry, Kill
- Who Is Most Likely
- Red or Green?
- Would You Rather

Each deck is loaded into the same card-based game flow, allowing the interface to reuse the same interaction system across different types of content.

## 🧪 THE LAB

The Lab contains experimental game mechanics:

### The Impostor

Players receive a group word and an impostor word, creating a deduction-based social game.

### Forbidden Words

Players must explain a target concept while avoiding a set of forbidden words.

### Wrong Answers Only

Players are intentionally encouraged to give incorrect answers.

## 👆 Interaction Design

RAW. is not just a collection of questions. The interface is built around movement and feedback.

The active card supports:

- Tap to advance
- Horizontal swipe to advance
- Animated card transitions
- Progress indication
- Haptic feedback where supported

The project uses **Framer Motion** to control card movement and transitions.

## ⚙️ Settings

The settings area includes:

- Interface animation toggle
- Language selection
- Content preference controls present in the application
- A built-in project story section
- Link to the source repository

Language options currently exposed by the interface include:

- Portuguese (EU)
- English
- Spanish
- French
- German

Application settings are persisted locally with `localStorage`.

## 🎨 Visual Identity

RAW. follows a deliberately bold, minimal visual system.

| Element | Value |
| --- | --- |
| Background | Deep Onyx `#0D0D0D` |
| Main accent | Electric Cyan `#00F0FF` |
| Unfiltered accent | Vivid Red `#FF3E3E` |
| Text | Raw Bone `#F2F2F2` |

The interface uses strong typography, large spacing, sharp borders and high contrast to reinforce the project's identity.

## 🏗️ Architecture

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

The architecture separates reusable interface components, game content, pages, styling and feedback utilities.

## 🛠️ Tech Stack

- React 18
- JavaScript
- Tailwind CSS 3
- Framer Motion
- Lucide React
- Web Haptics API
- Create React App
- PostCSS
- Autoprefixer

## 🚀 Getting Started

### Requirements

- Node.js
- npm

### Clone and install

```bash
git clone https://github.com/16alves02/raw-app.git
cd raw-app
npm install
```

### Start the development server

```bash
npm start
```

### Build for production

```bash
npm run build
```

## 🗓️ Project History

RAW. was developed as an experimental frontend project and later published and refined on GitHub.

- **2025** - Project development period.
- **2026** - Repository publication and continued refinement.
- **2026** - Additional screenshots, formatting improvements and documentation updates.

## 👤 Author

**Leonardo Alves - [@16alves02](https://github.com/16alves02)**

RAW. is part of the **16alves02** project portfolio.

> **Stay Real. Stay RAW.**

## 📜 License & Copyright

**Copyright (c) 2025-2026 Leonardo Alves (16alves02). All rights reserved.**

This project is **not open source**. The source code is published for viewing and educational reference, but it may not be copied, redistributed, modified for public or commercial use, sublicensed, sold, or presented as someone else's work without prior written permission.

See the [LICENSE](./LICENSE) file for the full terms.
