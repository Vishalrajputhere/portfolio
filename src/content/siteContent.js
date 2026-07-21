export const siteConfig = {
  name: "Vishal Singh",
  role: "Full Stack Developer",
  title: "Vishal Singh | Full Stack Developer Portfolio",
  description:
    "Production-grade portfolio for Vishal Singh showcasing engineering projects, skills, resume, and contact information.",
  siteUrl: "https://vishalrajputhere.github.io/",
  canonical: "https://vishalrajputhere.github.io/",
  email: "singhrajputvishal03@gmail.com",
};

export const navigationItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/project" },
  { label: "Resume", path: "/resume" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Vishalrajputhere", kind: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-singh-a785b7221/", kind: "linkedin" },
  { label: "X", href: "https://x.com/Vishal_rajput_0", kind: "x" },
];

export const heroContent = {
  eyebrow: "Production-grade frontend engineer",
  headline: "I design and build reliable web products with strong systems thinking.",
  summary:
    "I specialize in React, modern UI architecture, and full-stack delivery. My work emphasizes accessibility, performance, and clear product storytelling.",
  primaryAction: { label: "View Projects", href: "/project" },
  secondaryAction: { label: "Open Resume", href: "/resume" },
};

export const highlights = [
  { value: "4+", label: "production-style apps" },
  { value: "React", label: "primary UI stack" },
  { value: "MERN", label: "full-stack delivery" },
  { value: "AA", label: "accessibility target" },
];

export const skillGroups = [
  { heading: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"] },
  { heading: "Backend", items: ["Node.js", "MongoDB", "MySQL", "REST APIs"] },
  { heading: "Tools", items: ["Git", "VS Code", "Postman", "GitHub Actions"] },
];

export const timelineEntries = [
  {
    title: "MCA, C-DAC (GGSIPU)",
    meta: "2024 - 2026 · Noida",
    description:
      "Focused on software engineering fundamentals, operating systems, DBMS, computer networks, and modern application development.",
  },
  {
    title: "BCA, BPIBS (GGSIPU)",
    meta: "2020 - 2023 · Delhi",
    description:
      "Built a strong base in programming, web development, and relational data modeling.",
  },
  {
    title: "Certifications",
    meta: "IIT Kharagpur · IIT Madras",
    description: "Completed focused courses in Python for Data Science and Software Testing.",
  },
];

export const projectHighlights = [
  {
    title: "Pro Classroom",
    summary:
      "Google Classroom inspired MERN app with role-based access, assignment workflows, and similarity detection.",
    stack: ["MERN", "MongoDB", "Auth", "Assignments"],
    href: "https://pro-classroom.vercel.app/",
    source: "https://github.com/Vishalrajputhere/pro-classroom",
    featured: true,
  },
  {
    title: "PaisaaLens",
    summary:
      "Personal finance tracking application with clean insights and a practical budgeting workflow.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    href: "https://paisaalens.vercel.app/",
    source: "https://github.com/Vishalrajputhere/PaisaaLens",
  },
  {
    title: "AI Chatbot",
    summary:
      "Fast conversational interface powered by Gemini AI and a lightweight React + Vite frontend.",
    stack: ["React", "Vite", "Node.js", "AI"],
    href: "https://vishalrajputhere.github.io/AI_CHATBOT/",
    source: "https://github.com/Vishalrajputhere/AI_CHATBOT",
  },
];
