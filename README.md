# 🍎 macOS Portfolio 2026

An interactive macOS-inspired developer portfolio built with React. Explore projects, articles, photos, skills, a resume, and contact details through a desktop-style interface with draggable windows, a dock, menu bar, and responsive mobile layout.

![Portfolio preview](https://i.ytimg.com/vi/j9ZD_hlyHOA/maxresdefault.jpg)

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://mac-os-portfolio-2026.vercel.app/)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Zustand](https://img.shields.io/badge/Zustand-5-433E38?style=for-the-badge&logo=react&logoColor=white)

</div>

## Overview

This portfolio recreates the feel of a macOS desktop in the browser. Visitors can open and switch between app-like windows, browse featured work, read articles, view a gallery, inspect skills, open the resume, and get in touch.

**Live demo:** [mac-os-portfolio-2026.vercel.app](https://mac-os-portfolio-2026.vercel.app/)

## Features

- macOS-inspired desktop interface with menu bar, welcome screen, dock, and wallpapers
- Draggable windows with focus, open, minimize, and close behavior
- Responsive mobile shell for smaller screens
- Portfolio projects with descriptions, preview images, and external links
- Articles, gallery, contact, resume, and skills windows
- GSAP-powered transitions and interactions
- Zustand stores for window and navigation state
- PDF resume viewer powered by `react-pdf`

## Tech stack

| Technology | Purpose |
| --- | --- |
| React | UI and component architecture |
| Vite | Development server and production build tool |
| GSAP | Animations and draggable interactions |
| Zustand | Global window and navigation state |
| Tailwind CSS | Utility-first styling |
| Lucide React | Interface icons |
| React PDF | Resume PDF rendering |
| Day.js | Date formatting |

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/theubaidistan/MacOS_Portfolio_2026.git
cd MacOS_Portfolio_2026
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project structure

```text
MacOS_Portfolio_2026/
├── public/
│   ├── files/       # Resume PDFs
│   ├── icons/       # UI and social icons
│   └── images/      # Wallpapers, project images, and gallery assets
├── src/
│   ├── components/  # Desktop, dock, navigation, and shared UI
│   ├── constants/   # Portfolio content and window configuration
│   ├── hoc/         # Window wrapper logic
│   ├── store/       # Zustand state stores
│   ├── windows/     # Finder, Safari, Photos, Terminal, and other windows
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Featured projects

- **Nike Ecommerce Website** — an immersive shopping experience built with Next.js and Tailwind CSS.
- **AI Resume Analyzer** — an AI-powered tool for resume feedback and optimization.
- **3D iPhone Website** — an interactive landing page featuring GSAP animations and Three.js visuals.

## Author

**Muhammad Ubaid**

- [Portfolio](https://mac-os-portfolio-2026.vercel.app/)
- [GitHub](https://github.com/theubaidistan)
- [LinkedIn](https://www.linkedin.com/in/ubaid-webdev/)
- [YouTube](https://www.youtube.com/@DebugDominator-m4n)

## License

MIT License.

<div align="center">
  Built with ❤️ and too much coffee ☕
</div>
