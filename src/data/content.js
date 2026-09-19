export const site = {
  firstName: "Ufaq",
  lastName: "Khalid",
  displayName: "Ufaq Khalid",
  wordmark: "UFAQ",
  role: "Software / Web Developer",
  eyebrow: "Hi, I’m Ufaq  ·  Gujranwala, Pakistan",
  headlineLead: "Creative",
  headlineRest: "Designer & Developer",
  tagline:
    "I design and implement practical web applications with a focus on clarity, data integrity, and usable interfaces.",
  workTagline: "I design and implement practical web applications.",
  email: "ufaqkhalid1414@gmail.com",
  phone: "0322-6037970",
  phoneHref: "tel:+923226037970",
  location: "Gujranwala, Pakistan",
  github: "https://github.com/ufaqkhalid1414-cpu",
  education: "BSCS · University of Central Punjab, Gujranwala Campus · CGPA 3.45 / 4.00",
};

export const about = {
  kicker: "About",
  titleBefore: "I turn messy records into",
  titleEm: "systems",
  titleAfter: "people can trust.",
  body: [
    "I am completing a BSCS at the University of Central Punjab, Gujranwala Campus (CGPA 3.45 / 4.00).",
    "I build from requirement modeling through working systems — HTML, CSS, JavaScript, PHP, and MySQL — so databases, analytics, and real user workflows actually connect.",
    "Academic ideas (databases, data structures, requirement engineering) show up in products people can use, not only in assignments.",
  ],
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "C++",
    "Data Structures",
    "SRS",
    "Use Cases",
    "Sequence Diagrams",
    "XAMPP",
    "Unity",
  ],
};

export const services = [
  {
    id: "webdev",
    icon: "web",
    title: "Website Development",
    body: "Fast, usable sites and web apps — HTML, CSS, JavaScript, PHP — from layout through screens people can actually walk through.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: "uiux",
    icon: "ui",
    title: "UI/UX Design",
    body: "Clear dashboards, login, and management screens. Roles and tasks stay obvious so the interface matches how people work.",
    tags: ["Dashboards", "Roles", "Usability"],
  },
  {
    id: "brand",
    icon: "brand",
    title: "Brand Design",
    body: "A consistent look across this portfolio and product screens — type, color, and layout that stay readable and on-brand.",
    tags: ["Visual system", "Type", "Color"],
  },
  {
    id: "01",
    icon: "db",
    title: "Database systems",
    body: "Relational schemas, roles, and records that stay consistent. Smart Campus is the proof: students, attendance, grades, and department views in one place.",
    tags: ["MySQL", "Roles", "Reports"],
  },
  {
    id: "02",
    icon: "spec",
    title: "Specification",
    body: "Requirements, modules, and a build order written down before product screens. The training and certification project is an SRS-led architecture, not a slide-only plan.",
    tags: ["SRS", "Use Cases", "WBS"],
  },
  {
    id: "03",
    icon: "web",
    title: "Web interfaces",
    body: "Login, dashboards, and management screens on top of those records — pages you can walk through, not a mock-only deck.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    id: "04",
    icon: "dsa",
    title: "Applied DSA",
    body: "Data structures in a live loop: state machines, collision, and combat rules in Unity. Shadow Warrior is the course concept running, not a worksheet.",
    tags: ["C++", "Unity", "State machines"],
  },
];

export const skills = [
  {
    icon: "web",
    title: "HTML & CSS",
    body: "Layout, type, and screens that stay readable on desktop and phone.",
  },
  {
    icon: "js",
    title: "JavaScript",
    body: "Client logic and interaction on top of the pages people actually use.",
  },
  {
    icon: "db",
    title: "PHP & MySQL",
    body: "Server pages and relational records that stay consistent through roles.",
  },
  {
    icon: "dsa",
    title: "C++ & Unity",
    body: "Data structures running in a live combat loop, not only on paper.",
  },
  {
    icon: "spec",
    title: "SRS & diagrams",
    body: "Modules, use cases, and a build order written down before screens.",
  },
];

export const projects = [
  {
    id: "01",
    slug: "smart-campus",
    title: "Smart Campus",
    titleEm: "Campus",
    outcome:
      "A DBMS that unifies students, attendance, grades, and department reports in one real-time source of truth.",
    year: "2026",
    stack: ["MySQL", "PHP", "HTML", "CSS", "JavaScript"],
    href: "/work/smart-campus",
    featured: true,
    shot: "ui",
    images: [
      { src: "/work/smart-campus/login.png", label: "Login" },
      { src: "/work/smart-campus/students.png", label: "Student management" },
      { src: "/work/smart-campus/analytics.png", label: "Analytics" },
      {
        src: "/work/smart-campus/course-management.png",
        label: "Course management",
      },
    ],
    problem:
      "Departments were tracking students, attendance, and grades across spreadsheets and paper. Nobody had one live picture of who was enrolled, who was falling behind, or how a department was actually performing.",
    build: "I designed a relational MySQL schema (students, faculty, departments, courses, enrollment, grades, attendance) so every record stays consistent through foreign keys. Then I built the screens in PHP, HTML, CSS, and JavaScript — login, role views for admin, faculty, and student, plus student, course, and analytics pages — so the database is something people can actually walk through.",
    result:
      "One system instead of scattered files: a login people can use, management screens for the records that matter, and analytics that surface department performance without another export.",
  },
  {
    id: "02",
    slug: "certification",
    title: "Online Training & Certification",
    titleEm: "Certification",
    outcome:
      "An SRS-led architecture for enrollment, assessment, and certification — specified end-to-end before a line of code.",
    year: "2026",
    stack: ["SRS", "Use Cases", "Sequence Diagrams"],
    href: "/work/certification",
    featured: false,
    shot: "diagram",
    images: [
      { src: "/work/certification/module-flow.png", label: "Module flow" },
      { src: "/work/certification/use-case.jpg", label: "Use-case diagram" },
    ],
    problem:
      "A training product needs enrollment, learning material, exams, and a certificate that can be trusted — and an admin side that does not run on manual lists. Jumping straight to screens without roles and modules is how those systems break.",
    build: "I specified the system first: requirements, user roles (administrator and student), use cases, sequence of modules, and a build order — User → Course → Quiz → Certificate → testing. The diagrams on this page are that architecture: what each actor can do, and how the modules connect before implementation.",
    result:
      "A complete, buildable specification — operating environment, security constraints, and module flow included — the planning discipline that has to exist before a real certification platform is coded.",
  },
  {
    id: "03",
    slug: "shadow-warrior",
    title: "Shadow Warrior",
    titleEm: "Warrior",
    outcome:
      "A Unity boss-battle used as a live DSA exercise: state machines, collision, and combat rules in real time.",
    year: "2026",
    stack: ["Unity", "C#", "DSA"],
    href: "/work/shadow-warrior",
    featured: false,
    shot: "scene",
    images: [
      {
        src: "/work/shadow-warrior/boss-encounter.png",
        label: "Boss encounter",
      },
      { src: "/work/shadow-warrior/combat.png", label: "Combat" },
    ],
    problem:
      "Data structures and algorithms stay abstract if they only live on a worksheet. The brief was to put state, collision, and decision logic into something that has to respond every frame.",
    build: "I built a 2D boss fight in Unity with C#. Player, enemy, and manager scripts stay separate. The boss runs a finite state machine (patrol → chase → attack → staggered). Hits and pickups use trigger events; movement and collision use Rigidbody2D. Health, lives, and score update from those events, not from a fake HUD.",
    result:
      "A playable combat loop — boss encounter, health tracking, score — that shows DSA ideas running in real time instead of only on paper.",
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
}

export const workIntro =
  "Smart Campus, a certification platform specified end-to-end, and a Unity combat system — each one records, rules, and a screen people can use.";

export const testimonials = [
  {
    quote:
      "The Smart Campus interface is clear and easy to use. Behind it, the DBMS is solid — students, attendance, and grades stay consistent, and the roles make sense.",
    name: "Laiba",
    avatar: "girl",
  },
  {
    quote:
      "Your effort was good, especially considering the challenges in the project. You should clearly define the modules and where AI can actually add value.",
    name: "Professor",
    avatar: "man",
  },
];

export const faqs = [
  {
    id: "01",
    question: "What do you actually offer?",
    answer:
      "Website development, UI/UX, brand design, database systems, written specifications, web screens, and applied DSA in a playable game. I do not list work I have not done.",
  },
  {
    id: "02",
    question: "Are you a company or an agency?",
    answer:
      "No. I am completing a BSCS at the University of Central Punjab, Gujranwala Campus. This site is my own work, not an agency.",
  },
  {
    id: "03",
    question: "How do I contact you?",
    answer:
      "Use the form on this page. You can also email ufaqkhalid1414@gmail.com or call 0322-6037970. I read every message.",
  },
  {
    id: "04",
    question: "Where are you based?",
    answer: "Gujranwala, Pakistan.",
  },
  {
    id: "05",
    question: "Where can I see the work and the code?",
    answer:
      "Work is on this site under Work — Smart Campus, the certification specification, and Shadow Warrior. Each card opens a project page. Code is on GitHub at github.com/ufaqkhalid1414-cpu.",
  },
];
