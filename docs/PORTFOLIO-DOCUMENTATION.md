# Ufaq Khalid Portfolio — Full Documentation

**Project:** Personal portfolio for Ufaq Khalid (Software / Web Developer)  
**Stack:** Vite 7 + React 19 + React Router 7 (frontend-only SPA)  
**Styling:** CSS custom properties (`src/styles/tokens.css`) + global CSS (`src/styles/global.css`)  
**Content:** Centralized in `src/data/content.js`  
**Deploy:** GitHub → Vercel  

**Important:** There is no custom backend API. Contact forms open the user’s email client via `mailto:`.

---

## Table of contents

1. [System overview](#1-system-overview)
2. [Shared layout (all pages)](#2-shared-layout-all-pages)
3. [Home `/`](#3-home-)
4. [About `/about`](#4-about-about)
5. [My Work `/work`](#5-my-work-work)
6. [Project detail `/work/:slug`](#6-project-detail-workslug)
7. [Contact `/contact`](#7-contact-contact)
8. [Design system reference](#8-design-system-reference)

---

## 1. System overview

### Routes

| Path | Page component | Purpose |
|------|----------------|---------|
| `/` | `Home.jsx` | Full homepage: Hero → Mission → Work → Services → Skills → Testimonials → Contact → Footer CTA |
| `/about` | `About.jsx` | About copy, services accordion, skills + stack pills |
| `/work` | `Projects.jsx` | All project cards |
| `/work/:slug` | `Project.jsx` | Single case study (Smart Campus, Certification, Shadow Warrior) |
| `/contact` | `Contact.jsx` | Contact form, aside info, FAQ accordion |
| `*` | Redirect to `/` | Unknown URLs |

### App shell

- `App.jsx` wraps all routes in `Layout.jsx`.
- `Layout.jsx` provides: skip link, navbar, mobile menu, `<Outlet />` (page content), site footer.
- Homepage uses its own closing footer; shared `site-footer` is simplified on `/` (class `is-home`).

### Visual identity

- Dark forest base (`#040703` → `#0B100F` → `#142412` family / `#050705` stage).
- Green accent `#4cdb62` / Creative green `#2a8f40` on selected words.
- Green accent throughout; mint tones are accents only, never the homepage fill.
- Primary headings (selected set): **Newsreader** serif.
- Body / UI: **Manrope** sans.
- Green italic accents historically Fraunces / Playfair; many center titles now Newsreader italic.
- Faint square **grid lines** on dark page cards (no intersection glow dots on the locked home look).

---

## 2. Shared layout (all pages)

**File:** `src/components/Layout.jsx`  
**Styles:** `.site-stage`, `.site-shell`, `.nav`, `.nav-inner`, `.mobile-nav`, `.site-footer`

### Sections

#### 2.1 Site stage & shell

- Outer stage (`site-stage`) centers the dark page card.
- Shell (`site-shell`) is full width, min-height 100vh, shares dark + grid atmosphere with the homepage look.
- Skip link: “Skip to content” → `#main`.

#### 2.2 Navbar (desktop)

Also called a **pill / capsule nav** (rounded `border-radius: 999px`).

Contains:

- Brand: Spark logo in glowing circular mark + name “Ufaq Khalid” (name visually hidden on wide desktop via clip).
- Links: Home, About us, Services (`/#services`), My Work, Testimonial (`/#testimonials`).
- CTA: Contact Me (`btn btn-nav`).
- Active link: mint dot before label (`::before`).

Laptop type: nav links + Contact Me **16px**.

#### 2.3 Mobile menu

- Below ~900px: desktop links + Contact Me hide; hamburger (`nav-toggle`) shows.
- Open menu (`mobile-nav`): large serif-style links (**41px**), Contact Me button (**18px**).
- Body scroll locked while open.

#### 2.4 Closing footer

Shared component `ClosingFooter.jsx` — used on Home and on all inner pages (About, Work, Project, Contact).

- Giant faint “UFAQ” wordmark + spark orb
- Collaborate CTA line
- Privacy / Terms / About / FAQ + GitHub + email form
- Copyright line

Home embeds it inside `contact-foot-band`. Inner pages render it from `Layout.jsx`.

### Animations / design / styling / hover (shared layout)

| Element | Design / styling | Animation / hover |
|---------|------------------|-------------------|
| Nav pill | Glass-like dark fill, mint border, `backdrop-filter: blur(16px)`, soft green outer glow | Static |
| Spark / brand mark | Radial green gradient circle, multi-layer glow | Hover/focus: stronger glow + slight scale (`1.05`) |
| Nav links | Manrope, light weight | Hover/focus: brighter text; active: white + mint dot |
| Contact Me (nav) | Mint gradient pill, glow shadow | Shared `.btn` hover: lift + brighter + stronger glow; active: slight scale down |
| Hamburger | Circular button, two bars | Hover: bars mint + move toward each other; open: rotate into X |
| Mobile links | Large display/serif size | Hover: mint + slide right; active route mint |
| Mobile Contact Me | Same gradient btn, dark text on mint hover rules | Hover: dark-on-mint readability |
| Footer + button | Mint gradient | Same button hover system |
| Footer wordmark | Huge faint display type, masked fade | Decorative only |

---

## 3. Home `/`

**File:** `src/pages/Home.jsx`  
**Class:** `main.page-home`  
**Sequence:** Hero → Mission → Selected Work → My Services → My Skills → Testimonials → Contact Me → Home footer CTA

### 3.1 Hero / banner

**Purpose:** Brand-first first viewport.

**Content:**

- Eyebrow: “Hi! I’m Ufaq | Gujranwala, Pakistan” (**16px**)
- H1: “Creative” (green Newsreader) + “Designer & Developer” (white Newsreader), both **84px** max on laptop
- Lede / description (**16px**)
- Visual: girl + Portfolio ribbon cutout (`/hero-visual-v2.png`)
- Soft mint glow behind photo (`.visual-glow`)
- Explore badge: revolving text “LET’S EXPLORE MORE · …” + ↓ core → `/work`  
  Positioned toward the **bottom-right of the photo**

**Atmosphere layers:** `bg-base`, `bg-dome`, `bg-glow-main`, `bg-glow-nav`, `bg-edge-right`, `bg-grid`, `bg-dots`, bottom fade `hero::after`.

**Laptop spacing (approx.):**

- Nav pill → eyebrow ≈ **90px**
- Eyebrow → title ≈ **80px**
- Title → description ≈ **10px**

### 3.2 Mission bridge

Centered mission sentence with green italic emphases: solve problems / inspire action / drive success.  
Clamp title size (~28–40px). Not an `h1`/`h2` — a styled `<p class="mission-line">`.

### 3.3 Selected Work

- Center heading “Selected Work” (Newsreader; *Work* green italic)
- Subcopy from `site.workTagline` (**16px**)
- Zigzag rows: media card + copy (index chip, title, outcome, Contact Me)
- Odd rows flip (`is-flip`)
- Projects: Smart Campus, Online Training & Certification, Shadow Warrior
- Smart Campus first shot login background recolored **green** (was blue)
- Watermark “Portfolio ✦” between Work and Services
- Link “All projects →”

### 3.4 My Services

- Center heading “*My* Services”
- Accordion (`ServicesList`, limit 4): Website Development, UI/UX Design, Brand Design, Database systems
- Icons + title + chevron; open body + tag pills

### 3.5 My Skills

- Center heading “My *Skills*”
- Three **stacked glass cards**: HTML & CSS, JavaScript, C++ & Unity
- Desktop: overlapping / slight rotate / opacity stack
- Phone: unstacked vertical list

### 3.6 Testimonials

- Heading “Testim*onials*”
- Mission line as section sub
- Orbit layout: glow, chat icon, floating quote cards with avatars
- Quote text **16px**

### 3.7 Contact Me (home strip)

- Heading “Contact *Me*”
- Description + glass form (Name, Email, Message, Submit)
- Submit opens `mailto:` with subject/body
- Pills: Email, Phone, Location
- Wrapped with home footer in `contact-foot-band` (shared forest atmosphere)

### 3.8 Home footer CTA

- Giant faint “UFAQ” wordmark + stars
- CTA: “COLLABORATE WITH UFAQ…”
- Links: Privacy, Terms, About, FAQ
- GitHub icon
- Mini email form → mailto
- Copyright line

### Animations / design / styling / hover (Home)

| Section | Design / styling | Animation / hover / interaction |
|---------|------------------|----------------------------------|
| Hero atmosphere | Dark gradient, grid, soft dome + edge glows | Static decorative layers |
| Visual glow | Blurred radial mint bloom behind portrait | Static |
| Explore badge | Circular SVG text path + white ↓ disc | Continuous **16s** rotate (`explore-spin`); hover: slight drop + green core glow; active: scale |
| Mission | Large centered sans/serif mix; green em italics | Static |
| Work zigzag | Alternating media/copy; green index discs | Project title link hover mint (where linked); buttons use global btn hover |
| Work cards | Contained UI shots on greenish panel (`#14301c` for UI shots) | Static images |
| Services accordion | Icon circle + title + chevron | Click expand/collapse; hover: title mint, chevron border, icon fill; open state icon mint |
| Skills stack | Glassmorphism: blur, translucent dark panels, rotated stack | Hover/focus: lift (`translateY(-8px)`), brighter copy, higher z-index; phone: flatter stack, smaller lift |
| Testimonials | Dark void band, soft glow, floating quote cards | Layout orbit (CSS positioned floats); cards bordered soft panels |
| Contact form | Frosted panel, focused border mint glow | Input focus: mint border + inset/outer glow |
| Contact pills | Dark pill + green icon circle | Static / native link |
| Home footer | Soft wordmark, orb spark, glass mail pill | Link hover white; social hover mint border |
| Mid-page tones | CSS vars painted via ResizeObserver on `.home-mid` | Responsive band ends for Work → Skills atmosphere |

---

## 4. About `/about`

**File:** `src/pages/About.jsx`

### Sections

1. **Page hero** — kicker “About”, large title with italic *systems*, body ledes (education + build philosophy).
2. **My Services** — full `ServicesList` (all ordered services).
3. **My Skills** — `SkillsList` stacked cards + large stack pills (HTML, CSS, JS, PHP, MySQL, C++, …).
4. **CTA** — “Work with Ufaq →” to Contact.

Uses shared Layout nav + non-home footer.

### Animations / design / styling / hover (About)

| Section | Design / styling | Animation / hover |
|---------|------------------|-------------------|
| Page title | Display/serif mix; green italic emphasis | Static |
| Ledes | Muted body **16px** | Static |
| Services | Same accordion as Home | Same accordion hover/open |
| Skills | Same glass stack | Same lift hover |
| Stack pills | Soft green-tinted chips | Static |
| Work with button | Mint gradient | Global btn hover |
| Shared footer | Next CTA + wordmark | Footer + / btn hover |

---

## 5. My Work `/work`

**File:** `src/pages/Projects.jsx`

### Sections

1. **Page hero** — kicker “Selected work”, title “Built to be *used*, then maintained.”, intro lede.
2. **Project list** — three equal-height `ProjectCard`s (Smart Campus, Certification, Shadow Warrior).

Each card: screenshot(s) style by `shot` type (`ui` / `diagram` / `scene`), index, title link, outcome, stack pills, year, View →, Contact Me.

### Animations / design / styling / hover (Work)

| Section | Design / styling | Animation / hover |
|---------|------------------|-------------------|
| Cards | Rounded dark surface, border, featured glow on featured project | Static card chrome |
| Title link | Sans/serif project names | Hover: mint |
| View link | Mint text link | Hover: brighter lime |
| Contact Me | Small mint button | Global btn hover |
| Shot panels | UI: contain + greenish `#14301c`; diagram: light paper `#f4f6f5`; scene: near-black | Static |

---

## 6. Project detail `/work/:slug`

**File:** `src/pages/Project.jsx`  
**Slugs:** `smart-campus`, `certification`, `shadow-warrior`

### Sections

1. **Case hero** — back link “← Work”, id, year; title with optional italic `titleEm`; outcome; stack pills.
2. **Gallery** — all project images with captions (shot class drives fit/background).
3. **Case body** — The problem / How I built it / What it proves.
4. **Case next** — All projects + Next project links.

Sets `document.title` to `{Project} — Ufaq Khalid`.

### Animations / design / styling / hover (Project)

| Section | Design / styling | Animation / hover |
|---------|------------------|-------------------|
| Back link | Muted kicker row | Hover: lime |
| Gallery | Grid of figures; caption under images | Static |
| Body copy | Muted paragraphs **16px** | Static |
| Next links | Mint text links | Hover: brighter |
| Shared footer | Same as other inner pages | Same |

---

## 7. Contact `/contact`

**File:** `src/pages/Contact.jsx`

### Sections

1. **Contact hero** — “Contact *Me*” + short lede.
2. **Grid** — Form (Name, Email, Message, Submit via mailto) + aside rows (Email, Phone, Location, GitHub) with icons.
3. **FAQ** — accordion of common questions (`faqs` from content); first item open by default.

### Animations / design / styling / hover (Contact)

| Section | Design / styling | Animation / hover |
|---------|------------------|-------------------|
| Heading | Large sans + green italic | Static |
| Form panel | Frosted dark panel | Input focus mint ring/glow |
| Submit | Gradient submit style | Global btn hover |
| Aside rows | Icon + kicker + link | Link hover mint |
| FAQ accordion | Index + question + chevron | Same accordion hover/open as Services |
| Shared footer | Next CTA | Same |

---

## 8. Design system reference

### Typography

| Role | Family | Notes |
|------|--------|-------|
| Hero Creative / Designer & Developer | Newsreader | Same size (84px max laptop) |
| Center section titles (Selected Work, Services, Skills, Testimonials, Contact Me) | Newsreader | Green italic accents |
| Project titles (Smart Campus, etc.) | Newsreader | — |
| Body / descriptions | Manrope | Target **16px** for description lines |
| Nav (laptop) | Manrope | **16px** |
| Mobile menu links | Display/serif stack | **41px** |
| Mobile Contact Me | Manrope | **18px** |

### Color tokens (active)

- Creative / mint: `#4cdb62`
- Selected heading green: `#2a8f40`
- Text: white / muted gray-greens
- Surfaces: deep greens `#0e2414` family
- Buttons: left→right mint gradient

### Key components

| Component | File | Used on |
|-----------|------|---------|
| Layout | `Layout.jsx` | All |
| ProjectCard | `ProjectCard.jsx` | Home Work, `/work` |
| ServicesList | `ServicesList.jsx` | Home, About |
| SkillsList | `SkillsList.jsx` | Home, About |
| Icon / Spark / ArrowUpRight | `components/*` | Throughout |

### Forms behavior

- Validation: name, email, message required (client-side).
- Success: sets local `sent` flag + navigates to mailto compose.
- No server persistence.

### Responsive breakpoints (high level)

- ~900px: tablet/phone nav swap; hero padding / explore tweaks; sections stack.
- ~600px: skills unstack; explore position tweaks.
- `prefers-reduced-motion`: animations/transitions reduced or off.

---

## File map (quick)

```
src/
  App.jsx
  main.jsx
  data/content.js
  pages/Home.jsx | About.jsx | Projects.jsx | Project.jsx | Contact.jsx
  components/Layout.jsx | ProjectCard.jsx | ServicesList.jsx | SkillsList.jsx | …
  styles/tokens.css | global.css
public/
  hero-visual-v2.png
  work/smart-campus|certification|shadow-warrior/…
docs/
  PORTFOLIO-DOCUMENTATION.md   ← this file
```

---

*Last updated to match the live local portfolio structure (Vite + React SPA, dark green identity, Home sequence ending at the closing footer CTA).*
