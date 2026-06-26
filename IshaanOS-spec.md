# IshaanOs — Portfolio Specification
**Version:** 1.0  
**Theme:** Terminal Aesthetic · Click-Only · Minimal Black & White  
**Framework:** React + Vite + TailwindCSS + Framer Motion

---

## 1. Core Concept

IshaanOS is a personal developer portfolio designed to look and feel like a lightweight, fictional operating system built specifically for a software developer. Every section is a "window." Every interaction is a click. No typing is ever required from the visitor.

The tone is: **curious, technical, confident, minimal.** Never flashy, never cringe, never overloaded.

> The visitor's takeaway should be: *"This is someone who loves engineering, pays attention to detail, and builds because they genuinely enjoy creating software."*

---

## 2. Visual Identity

### 2.1 Color Palette

| Role | Value | Usage |
|------|-------|-------|
| Background | `#000000` | Page canvas |
| Foreground | `#FFFFFF` | Primary text, borders |
| Surface | `#0d0d0d` | Window/card background |
| Surface raised | `#111111` | Hovered or elevated panels |
| Border default | `#1f1f1f` | All window borders |
| Border accent | `#2e2e2e` | Hovered window borders |
| Text primary | `#e8e8e8` | Body text inside windows |
| Text secondary | `#555555` | Labels, metadata, captions |
| Text muted | `#333333` | Decorative terminal chrome |
| Accent | `#ffffff` | Sparingly — active nav item, focus rings |

No gradients. No glow. No neon. No color except white and grays.

### 2.2 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display (name) | `'Space Mono'` or `'JetBrains Mono'` | 700 | 2.5rem–4rem |
| Window titles | `'Space Mono'` | 500 | 0.75rem |
| Body text | `'Inter'` | 400 | 0.875rem–1rem |
| Labels / metadata | `'Space Mono'` | 400 | 0.7rem |
| Code snippets | `'JetBrains Mono'` | 400 | 0.8rem |

Two families only: a monospace for anything "terminal" (titles, labels, nav), and a clean sans-serif for actual readable content (project descriptions, about text). This contrast is the typographic signature.

### 2.3 Border & Window Language

Every section is a **bordered window panel** — sharp `1px` borders, `border-radius: 0` or at most `2px`. No soft rounded cards. No floating glass.

Window anatomy:
```
┌── window-title ──────────────────────────────[ - ][ □ ][ x ]┐
│                                                               │
│  content                                                      │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

The three `[ - ][ □ ][ x ]` buttons in the top-right of each window are **decorative only** — they are not interactive. They reinforce the OS aesthetic without creating confusion.

---

## 3. Background

### 3.1 Starfield

A canvas-based animated pixel starfield covers the full viewport behind all content.

**Requirements:**
- 120–180 tiny pixel stars (1×1px or 2×2px squares, not circles)
- Three depth layers with different speeds: slow (far), medium, near
- Parallax: stars shift slightly on mouse move (max ±20px offset on the deepest layer)
- Stars drift downward very slowly (0.05–0.3px per frame depending on depth layer)
- Stars that exit the bottom re-enter from the top at a random X
- Opacity: 0.15–0.6 per star, randomized on spawn
- Color: pure white `#ffffff` only
- Canvas sits at `z-index: 0` behind all content

**Performance rules:**
- Single `<canvas>` element, `requestAnimationFrame` loop
- No external library — plain vanilla JS in a React `useEffect`
- Wrapped in `React.memo` / extracted into `StarfieldCanvas` component
- Respects `prefers-reduced-motion`: pauses animation, keeps stars static

### 3.2 Subtle vignette
A CSS radial gradient overlay on the canvas from transparent center to `rgba(0,0,0,0.5)` at the edges. This keeps the center content readable without dimming the stars aggressively.

---

## 4. Layout Architecture

### 4.1 Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────────┐
│  SIDEBAR (220px fixed left)  │  MAIN CONTENT (flex-1)           │
│                              │                                   │
│  [IshaanOS logo/name]        │  ┌── active section window ───┐  │
│                              │  │                             │  │
│  ▸ About                     │  │  content here               │  │
│    Projects                  │  │                             │  │
│    Toolkit                   │  └─────────────────────────────┘  │
│    LeetCode                  │                                   │
│    Timeline                  │                                   │
│    Contact                   │                                   │
│                              │                                   │
│  [sound toggle]              │                                   │
│  [resume button]             │                                   │
└─────────────────────────────────────────────────────────────────┘
```

- Sidebar has a `1px` right border
- Active nav item has a `▸` prefix and white text; others are gray
- Sidebar is `position: fixed` on desktop
- Main content scrolls independently

### 4.2 Mobile (< 768px)

- Sidebar collapses to a top bar with a hamburger `≡` button
- Hamburger opens a full-screen drawer from the left (Framer Motion slide-in)
- Drawer has same nav items as desktop sidebar
- Drawer closes on nav item click or backdrop tap

### 4.3 Tablet (768–1023px)

- Sidebar collapses to icon-only rail (60px wide) with tooltips on hover
- Main content takes remaining width

---

## 5. Boot / Loading Screen

Shown once when the site first loads. Auto-dismisses after ~2 seconds.

**Sequence (typewriter style, lines appear one after another):**
```
Initializing IshaanOS v1.0...
Loading kernel modules.............. OK
Mounting /projects.................. OK
Loading developer profile........... OK
Establishing connection............. OK

Welcome, Ishaan.
```

**Design:**
- Full black screen, centered text block
- Monospace font, `#e8e8e8` text
- Each line fades/types in sequentially with 300–400ms delays
- A blinking `_` cursor at the end of the last typed line
- Entire screen fades to black → portfolio appears beneath
- Total duration: ~2.2 seconds
- No skip button needed (it's fast enough)
- State tracked in `sessionStorage` so it only runs once per session

---

## 6. Navigation

### 6.1 Sidebar Items

```
▸  About
   Projects
   Toolkit
   LeetCode
   Timeline
   Currently
   Contact
```

Plus at the bottom:
- Resume button (opens PDF in new tab)
- Sound toggle (icon only, with tooltip)
- GitHub icon link
- LeetCode icon link

### 6.2 Interaction Behavior

- Clicking a nav item smoothly scrolls the main content to that section (Lenis smooth scroll)
- Active section is detected via `IntersectionObserver` — the sidebar highlights automatically as user scrolls
- No page routing, no URL changes — single page, scroll-based
- Hover state: nav item text goes from `#555` → `#e8e8e8`, with a `0.15s` transition
- Active state: `▸` appears, text is `#ffffff`, monospace weight

### 6.3 No typing, ever

There is **no terminal input anywhere on the page.** No command prompt that expects user input. The terminal look is purely visual — monospace font, bordered windows, `$` symbols in decorative positions only.

---

## 7. Sections

Each section is a **window component** with a consistent structure:

```jsx
<Window title="about.md" id="about">
  {/* section content */}
</Window>
```

The `Window` component renders:
- A title bar with the filename-style title and the three decorative dots
- A `1px` border on all sides
- Inner padding
- Framer Motion `whileInView` fade-in animation on first scroll into view

---

### 7.1 Hero

Positioned above the scrollable sections, visible on first load.

**Content:**
```
ISHAAN
────────────────────────────────
Pre-final Year B.Tech · CSE
Indian Institute of Technology Jodhpur

I enjoy solving complex problems, building
scalable applications, and exploring AI-powered solutions.
────────────────────────────────
[ View Projects ]   [ GitHub ]   [ LeetCode ]   [ Resume ↓ ]
```

**Design notes:**
- Name "ISHAAN" in display mono at ~3.5rem, letter-spacing 0.3em
- A thin horizontal rule (`────`) separates the name from subtitle — rendered as actual Unicode box-drawing or a CSS `<hr>` styled as 1px `#2e2e2e`
- Buttons are minimal: `1px` white border, transparent background, monospace text, hover fills white with black text
- No hero image, no avatar — the name and text ARE the hero

---

### 7.2 About

**Window title:** `about.md`

Two-column layout on desktop, stacked on mobile:

**Left column:**
```
> whoami

  Ishaan
  B.Tech Computer Science & Engineering
  IIT Jodhpur · Expected 2027

> motivation

  I started building software because I
  wanted to create things that are actually
  worthwhile — products that make people's
  lives easier while challenging me to grow
  as an engineer. Every project is an
  opportunity to learn something new.
```

**Right column:**
- Small grid of stat cards in the window style:
  ```
  ┌─ CGPA ──┐  ┌─ Year ──┐
  │  8.84   │  │   3rd   │
  └─────────┘  └─────────┘
  ┌─ Focus ─────────────────────┐
  │  SWE · Full Stack · AI/ML  │
  └─────────────────────────────┘
  ```

---

### 7.3 Projects

**Window title:** `projects/`

#### Featured: CubiCode

Full-width featured card — visually heavier than other projects. Contains:
- `[FEATURED BUILD]` label at top-left in small caps
- Project name, one-line description
- Architecture overview (2–3 sentences)
- Tech stack as pill tags: `React` `Node.js` `MongoDB` `Express`
- Key features as a bulleted list inside a nested sub-window
- GitHub link button

#### Other Projects

Grid layout: 2 columns on desktop, 1 on mobile.

Projects: `LocalCodeJudge`, `HandArM2`, `JaNET`, `Snail`, `NER Analysis`, `Snake Game`, `Star Raider`

Each card:
```
┌── project-name ────────────────────────────┐
│  Short one-line description                │
│                                            │
│  [React] [Node] [MongoDB]                  │
│                                  [GitHub→] │
└────────────────────────────────────────────┘
```

Clicking a card expands it in-place (Framer Motion `AnimatePresence` height animation) to show more detail. Clicking again collapses it.

---

### 7.4 Developer Toolkit

**Window title:** `toolkit.json`

Grid of skill groups. Each group is a mini sub-window:

```
┌── languages ─────────────────┐
│  C++  C  Python  JavaScript  │
└──────────────────────────────┘
┌── frontend ──┐  ┌── backend ──────────────┐
│  React       │  │  Node.js  Express.js    │
└──────────────┘  └────────────────────────┘
```

No progress bars. No percentage numbers. Just clean grouped tags. Skill tags are `1px` border, monospace text, no background fill.

Groups: Programming Languages · Frontend · Backend · Database · Computer Vision · Machine Learning · Concepts

---

### 7.5 LeetCode

**Window title:** `leetcode_stats.json`

```
┌─────────────────────────────────────────────┐
│  320+ Problems Solved                        │
│                                             │
│  Topics:                                    │
│  Dynamic Programming · Graphs · Arrays      │
│  Strings · Linked Lists · Binary Search     │
│  Sliding Window                             │
│                                             │
│  [ View Profile → leetcode.com/krakenwagen ]│
└─────────────────────────────────────────────┘
```

- The `320+` number is large, ~2rem monospace
- Topics displayed as plain comma-separated text or thin-bordered pills
- No fabricated ratings or rankings
- Link opens LeetCode profile in new tab

---

### 7.6 GitHub Activity

**Window title:** `git_log --graph`

- Embeds GitHub contribution graph via `https://ghchart.rshah.org/ishaanghatak2006-tech` as an `<img>` tag (lightweight, no API key needed)
- Caption below: `"Building consistently, one commit at a time."`
- GitHub profile link button

---

### 7.7 Currently

**Window title:** `status.live`

Four small status cards in a 2×2 grid:

```
┌─ 🎮 Playing ────────┐  ┌─ 💻 Building ──────────┐
│  God of War (2018)  │  │  ThreatLens            │
└─────────────────────┘  └────────────────────────┘
┌─ 📚 Learning ───────┐  ┌─ 🧩 Solving ───────────┐
│  System Design      │  │  LeetCode              │
└─────────────────────┘  └────────────────────────┘
```

- Values live in a single `constants/currently.js` file — trivially easy to update
- A small blinking green dot `●` beside the window title to signal "live"

---

### 7.8 Timeline

**Window title:** `journey.log`

Vertical timeline, left-aligned:

```
  2024  ──  Started B.Tech at IIT Jodhpur
         │
         ├─  Built first projects (Space Shooter, Snake Game)
         │
         ├─  Started Undergraduate Research (CLARITY Lab, IITJ)
         │
         ├─  Built CubiCode, LocalCodeJudge, HandArM2, JaNET
         │
  2026  ──  Active open source & research work
         │
  2027  ──  Expected graduation · Targeting SWE roles
```

Each node is a thin horizontal tick off a vertical line. No circles, no colored dots — monospace chars (`──`, `├─`, `│`) form the tree structure for consistency with the terminal aesthetic.

---

### 7.9 Personal

**Window title:** `interests.txt`

Small section, kept brief:

```
Things I enjoy:

  → Building software that solves real problems
  → Solving DSA problems (especially graph & DP)
  → Playing story-based games (God of War, etc.)
  → Listening to music while coding
```

Plain text list with `→` arrows. No icons. No emojis in the UI (emojis only in the Currently section status cards).

---

### 7.10 Contact

**Window title:** `contact.sh`

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  $ echo $CONTACT_INFO                              │
│                                                     │
│  Email     ishaanghatak2006@gmail.com              │
│  GitHub    github.com/ishaanghatak2006-tech        │
│  LeetCode  leetcode.com/u/krakenwagen              │
│  LinkedIn  [linkedin profile]                      │
│                                                     │
│  [ Send Email ]  [ GitHub ]  [ LinkedIn ]          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

WhatsApp number is listed as text only, not a clickable `wa.me` link (avoids spam bots).

---

## 8. Sounds

Library: `Howler.js`

| Event | Sound | Notes |
|-------|-------|-------|
| Nav item hover | Subtle tick (20ms) | Very quiet |
| Nav item click | Soft click (50ms) | Slightly louder than hover |
| Window open (project expand) | Soft whoosh or blip | |
| Boot sequence complete | Short 3-note chime | |
| Resume download | Keyboard type burst | |

**Rules:**
- All sounds off by default
- Sound toggle in sidebar (speaker icon)
- Preference saved to `localStorage` key `ishaanos-sound`
- `prefers-reduced-motion` also disables sound triggers
- No background music, ever

---

## 9. Custom Cursor

- Default state: small crosshair-style pixel cursor (8×8px, 1px white lines)
- Hover over clickable element: cursor expands to 16×16px, border only (no fill), 0.1s transition
- Implemented as a `<div>` following `mousemove` events via `useEffect`
- Hidden on mobile/touch devices
- CSS: `cursor: none` on `body`, custom div handles visual

---

## 10. Animations

Library: `Framer Motion`

| Element | Animation | Trigger |
|---------|-----------|---------|
| Boot screen lines | Sequential fade-in | On mount |
| Sidebar nav items | Stagger fade-in (20ms each) | On mount |
| Section windows | `opacity: 0→1, y: 20→0` | `whileInView`, once |
| Project card expand | Height `0→auto` | Click |
| Mobile drawer | `x: -100%→0` | Hamburger click |
| Cursor | Scale + border | `mousemove` / hover |
| Hero text | Word-by-word fade-in | On mount (after boot) |

**Rules:**
- All durations 150–350ms
- Easing: `easeOut` default, `spring` for drawer
- `prefers-reduced-motion`: all animations disabled, content visible immediately
- Never animate the starfield canvas with Framer Motion — keep it in vanilla `rAF`

---

## 11. Performance

| Target | Goal |
|--------|------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| LCP | < 2s |
| CLS | < 0.1 |
| Bundle size | < 300KB gzipped |

**Strategies:**
- `React.lazy` + `Suspense` for all section components
- Starfield canvas is a single persistent component, never re-mounted
- GitHub contribution image loaded with `loading="lazy"`
- Howler.js loaded only after first user interaction (dynamic import)
- Fonts loaded via `@fontsource` packages, not Google CDN (avoids render-blocking)
- All images (project screenshots) served as WebP with explicit `width`/`height`

---

## 12. Folder Structure

```
ishaanos/
├── public/
│   ├── sounds/
│   │   ├── tick.mp3
│   │   ├── click.mp3
│   │   ├── whoosh.mp3
│   │   └── boot-chime.mp3
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Window.jsx          # Reusable window panel wrapper
│   │   ├── Sidebar.jsx         # Desktop fixed sidebar
│   │   ├── MobileDrawer.jsx    # Mobile nav drawer
│   │   ├── StarfieldCanvas.jsx # Background canvas animation
│   │   ├── BootScreen.jsx      # Loading/boot sequence
│   │   ├── CustomCursor.jsx    # Custom cursor overlay
│   │   └── NavItem.jsx         # Single sidebar nav item
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Toolkit.jsx
│   │   ├── LeetCode.jsx
│   │   ├── GitHub.jsx
│   │   ├── Currently.jsx
│   │   ├── Timeline.jsx
│   │   ├── Personal.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useActiveSection.js  # IntersectionObserver for nav highlight
│   │   ├── useSound.js          # Howler.js wrapper + toggle state
│   │   └── useStarfield.js      # Canvas animation logic
│   ├── constants/
│   │   ├── projects.js          # All project data
│   │   ├── toolkit.js           # Skill groups
│   │   ├── currently.js         # Currently status cards (easy to update)
│   │   └── timeline.js          # Timeline events
│   ├── animations/
│   │   └── variants.js          # Shared Framer Motion variants
│   ├── utils/
│   │   └── cn.js                # className utility (clsx)
│   └── App.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 13. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Styling | TailwindCSS 3 |
| Animations | Framer Motion 11 |
| Smooth Scroll | Lenis |
| Icons | React Icons (ri set) |
| Sound | Howler.js |
| Background | Custom canvas (no library) |
| Fonts | `@fontsource/space-mono`, `@fontsource/inter` |
| Deployment | Vercel |

No backend. Fully static frontend.

---

## 14. Key Constants File (easy updates)

`src/constants/currently.js`:
```js
export const currently = [
  { icon: "🎮", label: "Playing",  value: "God of War (2018)" },
  { icon: "💻", label: "Building", value: "ThreatLens" },
  { icon: "📚", label: "Learning", value: "System Design" },
  { icon: "🧩", label: "Solving",  value: "LeetCode" },
];
```

To update what's showing live, edit only this file.

---

## 15. Footer

```
Built one commit at a time.   ·   © 2025 Ishaan
```

Single line, centered, monospace, `#333333` color. No links, no icons.

---

## 16. Accessibility

- All interactive elements have visible focus rings (`outline: 1px solid #ffffff`, `outline-offset: 2px`)
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- All images have descriptive `alt` text
- Decorative window buttons (`[ - ][ □ ][ x ]`) have `aria-hidden="true"`
- Starfield canvas has `aria-hidden="true"` and `role="presentation"`
- Color contrast: all text meets WCAG AA (white/gray on black backgrounds)
- Keyboard navigable: Tab through all interactive elements in logical order

---

## 17. What This Portfolio Is Not

To keep scope clear during build:

- ❌ No command-line input or terminal emulator
- ❌ No typing mechanic for visitors
- ❌ No glassmorphism, gradients, or colorful accents
- ❌ No dark/light toggle (always dark)
- ❌ No backend, database, or API calls (except the static GitHub chart image)
- ❌ No blog section
- ❌ No page routing (single page, scroll only)
- ❌ No fabricated metrics (no fake ratings, no invented GitHub stats)
