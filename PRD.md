# Product Requirements Document

**Product:** Personal portfolio website  
**Owner:** Ufaq Khalid  
**Role:** Software / Web Developer  
**Location:** Gujranwala, Pakistan  
**Education:** BSCS, University of Central Punjab, Gujranwala Campus (CGPA 3.45 / 4.00)  
**Status:** Local build (not deployed)  
**Document date:** 19 September 2026

---

## 1. Reference (sample)

The visual and structural reference for this product is the green MORF “Creative Designer & Developer” concept by Zahra UIX.

**Sample link:** [https://www.instagram.com/p/DMnV5I2okmu/](https://www.instagram.com/p/DMnV5I2okmu/?img_index=1)

Local copies of that sample (pages, tokens, brand kit, motion clip) live in `selected-green/`.

This product **follows** the sample’s forest + mint system, type pairing, pill CTAs, section rhythm (Selected Work, My Services, My Skills, testimonials, contact, footer wordmark). It **does not clone** the sample identity: no MORF name, no Italy location, no portrait, no “Portfolio” ribbon, no fake agency projects.

---

## 2. Product summary

A four-route personal portfolio for **Ufaq Khalid**, presenting real academic and built work: a campus DBMS, an SRS-led certification architecture, and a Unity DSA combat study. The site is a Vite + React SPA for desktop and phone. It is reviewed locally in Chrome. GitHub and Vercel publishing are out of scope until requested.

---

## 3. Goals

1. Show a professional developer site that a professor can read as the student’s own work.
2. Keep the locked green sample’s look (dark forest, one mint accent, Fraunces + Outfit) without copying its person or projects.
3. Make modules, services, and where the work lives explicit (Home, About, Work, Contact, plus a page per project).
4. Use only real contact details, real projects, and real quotes (Laiba, professor).

---

## 4. Non-goals

- Deploy to GitHub / Vercel (later).
- LinkedIn.
- A cloned portrait, ribbon, MORF wordmark, or Photon Collective work.
- Fake agency voice, pricing, or invented testimonials.
- Extra primary nav items for case studies (case studies open from Work cards).

---

## 5. Users

| User | Need |
|---|---|
| Ufaq Khalid | A site that states who she is and what she built. |
| Professor / examiner | Clear modules, real screenshots, no decorative clone. |
| Recruiter / visitor | Work, stack, and a way to write. |

---

## 6. Information architecture

| Route | Purpose |
|---|---|
| `/` Home | Hero, Selected Work (three projects), testimonials, about teaser. |
| `/about` | Bio, **My Services** (icons), **My Skills** + stack pills. |
| `/work` | Full project list. |
| `/work/:slug` | Case page: screenshots, problem, build, result, next project. |
| `/contact` | Form (Name, Email, Message), email / phone / location / GitHub, FAQ. |

Primary nav: Home, About, Work, Contact, plus a mint **Contact Me** control. Footer: collaborate line, **UFAQ** wordmark, testimonials hash, FAQ, GitHub, phone, email.

---

## 7. Functional requirements

### 7.1 Identity

- Display name: Ufaq Khalid. Wordmark: UFAQ.
- Role: Software / Web Developer.
- Eyebrow: Hi, I’m Ufaq · Gujranwala, Pakistan.
- Headline: italic mint “Creative” + “Developer ↗”.
- Email: ufaqkhalid1414@gmail.com. Phone: 0322-6037970. GitHub: https://github.com/ufaqkhalid1414-cpu.

### 7.2 Home

- Hero with mint wash, spark mark, Contact Me + View work.
- Selected Work: Smart Campus (featured), certification, Shadow Warrior.
- Testimonials: Laiba (DBMS/UI), professor (effort; define modules and where AI can add value).
- About teaser linking to `/about`.
- **Not on Home:** My Services, My Skills (those live on About only).

### 7.3 About — services and skills

- **My Services** accordion, each row: circular mint icon, title, +/–.
  - Database systems
  - Specification
  - Web interfaces
  - Applied DSA
- **My Skills** cards: HTML & CSS, JavaScript, PHP & MySQL, C++ & Unity, SRS & diagrams.
- Stack pills listing the full tool set (HTML, CSS, JavaScript, PHP, MySQL, C++, Data Structures, SRS, Use Cases, Sequence Diagrams, XAMPP, Unity).

### 7.4 Work and screenshots

- Cards show real screenshots, not crop-to-fill distortion.
- **Shadow Warrior (game) shots** must keep aspect ratio (`object-fit: contain`). On a half-width window they stack as full frames — they must not squash into one squeezed thumbnail.
- Smart Campus UI shots: contain on a dark panel. Certification diagrams: contain on a light panel.

### 7.5 Contact

- Required Name, Email, Message. Submit opens mailto.
- Sidebar: mail, phone, pin, GitHub icons.
- FAQ accordion for offer, student (not agency), contact method, location, work/code.

### 7.6 Chrome and motion

- Sticky nav; hamburger becomes an X when open.
- Active route: mint label + mint underline + mint dot.
- Primary CTA: mint → lime pill. Hover lift, active press.
- Site-wide mint wash behind pages (sample’s light green field, not a second theme).
- Respect `prefers-reduced-motion`.

---

## 8. Visual requirements (from sample)

| Token | Value |
|---|---|
| Background | `#070B09` |
| Surface | `#121A16` |
| Mint | `#A7F5AA` |
| Lime | `#7CFF6B` |
| Forest | `#1F3A28` |
| Text | `#F5F7F5` |
| Display | Fraunces italic |
| UI | Outfit |
| Content width | 1120px |
| Nav height | 72px |
| Radius | pills 999px; cards 16–24px |

Brand kit (this product): `public/brand-kit.html`.  
Sample kit: `selected-green/brand-kit.html`.

---

## 9. Content inventory (projects)

1. **Smart Campus** — MySQL / PHP DBMS: students, attendance, grades, department reports; login and role screens.
2. **Online Training & Certification** — SRS, use cases, module flow before implementation.
3. **Shadow Warrior** — Unity boss fight as a live DSA exercise (state machines, collision, combat rules).

---

## 10. Out of scope until asked

GitHub remote, Vercel deploy, LinkedIn, personal photograph, per-project GitHub URLs.

---

## 11. Acceptance checks

- [x] Identity is Ufaq Khalid, not a placeholder.
- [x] Four routes + three case pages.
- [x] Sample forest + mint, not a purple clone.
- [x] Services on About use icons only; skills/stack on About only.
- [x] Game screenshots do not squeeze on a half-width window.
- [x] Professor and Laiba quotes are real and without thank-you filler.
- [ ] Live deploy (not requested).
