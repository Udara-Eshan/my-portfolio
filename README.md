# 🌌 Personal Portfolio — Udara Eshan

A single-page, responsive, high-performance personal portfolio website built with **React** and **Vite**, fulfilling all criteria of the **PPD II Profile Evaluation Rubric**.

![Portfolio Preview](/public/favicon.svg)

---

## ✨ Features

- **Theme & Aesthetics**: Dark violet gradient theme (`#0a0a0a` → `#060218`) with ambient radial glow (`#A068FF`), glassmorphism (`backdrop-filter: blur(12px)`), and Google Fonts (*Urbanist* and *Inter*).
- **Sticky Glass Nav**: Active section tracking via IntersectionObserver/ScrollSpy, underline hover animation, and a responsive mobile slide-in drawer.
- **Dynamic Hero**: Live character-by-character typewriter title, floating avatar frame with glow effect, and floating corner metric badges.
- **About & Profile**: Comprehensive background story, career aspirations, and quick-facts card.
- **Skills Categorization**: 6 distinct categories with interactive pill tags (Languages, Frameworks, Databases, Tools, Cloud, Soft Skills).
- **Projects Showcase**: 3-column responsive grid with 16:9 hover-zoom thumbnails, filter tabs, live preview & GitHub links, and key contribution highlights.
- **Timeline**: Alternating vertical timeline for Education & Experience with connected gradient line.
- **Certifications & Awards**: Verified credentials from AWS, Google Cloud, Meta, Coursera, and hackathon awards.
- **Resume Modal**: Interactive resume previewer with print and data download capabilities.
- **Contact & Footer**: Direct action pill buttons, interactive message form with instant feedback, and back-to-top button.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Pure Vanilla CSS (CSS variables, `@property --border-angle`, keyframe animations)
- **Icons**: Lucide React + custom SVGs
- **Typography**: Urbanist (600, 700) & Inter (400, 500, 600, 700) via Google Fonts

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Udara-Eshan/my-portfolio.git

# Navigate into project directory
cd my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📝 Customization

All portfolio contents (Name, Bio, Skills, Projects, Experience, Certifications, Contact details) are stored centrally in:
```
src/data/portfolioData.js
```
Simply edit this file to update any information across the portfolio instantly.

---

## 📄 License

MIT License © Udara Eshan
