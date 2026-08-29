export const siteConfig = {
  name: "Vishal Singh",
  preferredName: "Vishal Singh",
  role: "Full-Stack Software Developer",
  headline: "Full-Stack Software Developer building production-grade web applications.",
  title: "Vishal Singh | Full-Stack Software Developer Portfolio",
  description:
    "Portfolio of Vishal Singh, a full-stack software developer building production-grade web applications with React, Next.js, Node.js, and MongoDB.",
  siteUrl: "https://vishalrajputhere.github.io/",
  canonical: "https://vishalrajputhere.github.io/",
  email: "singhrajputvishal03@gmail.com",
  phone: "8433276864",
  location: "Noida, India",
  timezone: "Asia/Kolkata",
  language: "en-IN",
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
  eyebrow: "Full-Stack Software Developer",
  headline: "I build production-grade web applications with React, Next.js, Node.js, and MongoDB.",
  summary:
    "My work focuses on end-to-end systems: RESTful APIs, JWT authentication, dashboard-driven workflows, and responsive user experiences that are built to scale and maintain.",
  primaryAction: { label: "View Projects", href: "/project" },
  secondaryAction: { label: "Open Resume", href: "/resume" },
};

export const highlights = [
  { value: "React", label: "frontend systems" },
  { value: "Next.js", label: "app architecture" },
  { value: "Node.js", label: "backend services" },
  { value: "MongoDB", label: "data modeling" },
];

export const skillGroups = [
  { heading: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Ant Design", "HTML", "CSS"] },
  { heading: "Backend", items: ["Node.js", "Express.js","Python", "REST APIs", "JWT Authentication", "API Rate Limiting"] },
  { heading: "Database", items: ["MongoDB", "MySQL"] },
  { heading: "Languages", items: ["JavaScript", "Java","Python", "SQL"] },
  { heading: "Testing", items: ["Jest", "Supertest"] },
  { heading: "Developer Tools", items: ["Git", "Postman", "VS Code", "Cloudinary"] },
];

export const educationEntries = [
  {
    title: "Master of Computer Applications",
    organization: "C-DAC Noida",
    meta: "2024 - 2026 · CGPA 8.4",
    description:
      "Advanced study in software engineering, databases, networks, operating systems, and application development.",
  },
  {
    title: "Bachelor of Computer Applications",
    organization: "Bhai Parmanand Institute of Business Studies",
    meta: "2020 - 2023 · CGPA 8.8",
    description:
      "Built strong foundations in programming, web development, and database concepts.",
  },
];

export const experienceEntries = [
  {
    title: "Web Developer Intern",
    organization: "Eduveera",
    meta: "Feb 2026 - Aug 2026",
    description:
      "Worked as a web developer intern contributing to responsive product interfaces, UI improvements, and user-focused frontend enhancements in a live product environment.",
    highlights: [
      "Developed responsive, mobile-first frontend components for improved usability and product consistency.",
      "Collaborated with the product and engineering team to refine user flows and improve conversion-oriented experiences.",
      "Improved interface quality through clean component structure, accessibility-minded UI updates, and better front-end behavior.",
    ],
    technologies: ["React", "Responsive UI", "UX Improvements", "Frontend Development"],
  },
];

export const certificationEntries = [
  {
    title: "Python for Data Science",
    issuer: "IIT Madras",
    meta: "Certification",
    description:
      "Strengthened Python fundamentals and data handling concepts used in analytical problem solving and applied data workflows.",
    skillsCovered: ["Python", "Data Analysis", "Problem Solving"],
  },
  {
    title: "Software Testing",
    issuer: "IIT Kharagpur",
    meta: "Certification",
    description:
      "Learned testing fundamentals, defect lifecycle management, and quality assurance practices used in software delivery.",
    skillsCovered: ["Testing", "QA", "Test Design"],
  },
  {
    title: "Cloud Computing",
    issuer: "C-DAC Noida",
    meta: "Certification",
    description:
      "Covered cloud concepts and deployment fundamentals relevant to modern application delivery and scalable infrastructure thinking.",
    skillsCovered: ["Cloud Basics", "Deployment", "Infrastructure Awareness"],
  },
  {
    title: "DBMS",
    issuer: "IIT Kharagpur",
    meta: "Certification",
    description:
      "Reinforced relational data modeling, schema design, and database principles that support robust application architecture.",
    skillsCovered: ["Databases", "SQL", "Schema Design"],
  },
];

export const timelineEntries = [
  {
    title: "2026 · CRM System",
    category: "Flagship Project",
    description:
      "Built a CRM platform for client management, quotations, invoices, dashboard analytics, payment reconciliation, JWT authentication, and API rate limiting.",
    impact: "Primary showcase of full-stack architecture and Redux-driven state management.",
    featured: true,
  },
  {
    title: "2025 - 2026 · Pro Classroom",
    category: "Project",
    description:
      "Expanded a classroom workflow platform with teacher and student roles, assignment lifecycle management, Cloudinary integration, and PDF plagiarism detection.",
    impact: "Demonstrated role-based application design and document workflow handling.",
  },
  {
    title: "2024 - 2026 · MCA, C-DAC Noida",
    category: "Education",
    description:
      "Deepened systems thinking through formal study of software engineering, DBMS, and computer networks while building real projects in parallel.",
    impact: "Academic foundation aligned with practical application development.",
  },
  {
    title: "2020 - 2023 · BCA, BPIBS",
    category: "Education",
    description:
      "Built the programming and database fundamentals that later shaped the portfolio's backend and data model decisions.",
    impact: "Established the core technical base for full-stack development.",
  },
];

export const projectHighlights = [
  {
    slug: "crm",
    title: "CRM Platform",
    role: "Full-Stack Software Developer",
    status: "Flagship project",
    year: "March 2026 - Present",
    category: "Sales and operations",
    summary:
      "A production-style CRM built to manage the full client lifecycle: lead capture, client records, quotations, invoices, payment reconciliation, and analytics dashboards.",
    problem:
      "Small teams often need one system that can track sales conversations, quote generation, billing, and payment status without moving between disconnected tools.",
    motivation:
      "The project demonstrates how I think about real workflow software: reducing manual work, keeping state consistent, and making operational data easy to act on.",
    requirements: [
      "Client management",
      "Quotations and invoices",
      "Payment reconciliation",
      "Dashboard analytics",
      "JWT authentication",
      "API rate limiting",
    ],
    architecture:
      "React handles the dashboard and forms, Redux Toolkit manages shared application state, and Node/Express APIs expose authenticated workflows backed by MongoDB.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT", "REST APIs"],
    features: [
      "Client and account records",
      "Quote-to-invoice flow",
      "Payment reconciliation tracking",
      "Analytics-ready dashboard views",
      "Secure authenticated access",
    ],
    challenges:
      "The hardest part was keeping the data flow predictable across forms, dashboards, and transactional records while preserving a clean UI under changing states.",
    engineeringDecisions: [
      "Used Redux Toolkit where shared state needed to survive across multiple dashboard surfaces.",
      "Kept the API surface explicit so the frontend can evolve without tying the UI to database details.",
      "Added rate limiting to protect endpoints that are likely to be hit frequently in sales workflows.",
    ],
    security:
      "JWT-based authentication and rate limiting help protect sensitive client and billing data.",
    performance:
      "The UI is structured around reusable dashboard surfaces so the application can scale without duplicating state or view logic.",
    scalability:
      "The architecture leaves room for role separation, reporting modules, and future CRM automation without reworking the core domain model.",
    lessonsLearned:
      "Designing business software is mostly about reducing friction between related records and making state transitions obvious.",
    futureImprovements: [
      "Activity audit log",
      "Role-based permissions by team",
      "Exportable reports",
      "Automated reminders and follow-ups",
    ],
    repo: "https://github.com/Vishalrajputhere/ForgeCRM",
    demo: "https://forge-crm-ivory.vercel.app/",
    featured: true,
    searchTags: ["CRM", "React", "Redux Toolkit", "JWT", "Invoices", "Analytics"],
    seo: {
      title: "CRM Platform Case Study | Vishal Singh",
      description:
        "Case study of a CRM platform for client management, quotations, invoices, payment reconciliation, dashboard analytics, and JWT-authenticated workflows.",
      keywords: ["CRM", "client management", "invoices", "Redux Toolkit", "JWT", "analytics dashboard"],
    },
    aiMetadata: {
      difficulty: "High",
      topics: ["sales workflow", "client management", "billing", "dashboard analytics", "auth"],
      concepts: ["state management", "API design", "security", "scalability"],
      frameworks: ["React", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    },
  },
  {
    slug: "pro-classroom",
    title: "Pro Classroom",
    role: "Full-Stack Software Developer",
    status: "Completed",
    year: "Feb 2025 - Dec 2025",
    category: "Education platform",
    summary:
      "A classroom workflow platform modeled around teacher and student collaboration, assignment submission flows, Cloudinary file handling, and PDF plagiarism detection.",
    problem:
      "Academic teams need a controlled environment for assignments where teachers can manage classes and students can collaborate without submission chaos.",
    motivation:
      "I wanted to show how a role-based product can be designed around workflow clarity instead of just feature count.",
    requirements: [
      "Teacher/student roles",
      "Assignment lifecycle",
      "Cloudinary file uploads",
      "PDF plagiarism detection",
      "Role-based access control",
    ],
    architecture:
      "The application is organized around role-aware screens, authenticated actions, and uploaded document workflows that keep course data and submission data separate.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "RBAC"],
    features: [
      "Teacher and student flows",
      "Assignment creation and submission",
      "Cloudinary asset storage",
      "Document similarity checks",
      "Secure role-based access",
    ],
    challenges:
      "The main challenge was coordinating different user journeys while keeping assignment artifacts, uploads, and access rules consistent.",
    engineeringDecisions: [
      "Separated teacher and student responsibilities so each view could remain focused.",
      "Used Cloudinary for media handling rather than storing large assets inside application state.",
      "Designed plagiarism detection as a workflow step rather than a UI-only indicator.",
    ],
    security:
      "Role-based access reduces accidental exposure of teacher-only and student-only actions.",
    performance:
      "Document uploads are externalized through Cloudinary to keep the app responsive and storage-light.",
    scalability:
      "The structure supports additional classrooms, assignment types, and review flows without changing the core model.",
    lessonsLearned:
      "Workflow products are best when each role has a clear mental model and the UI mirrors that model directly.",
    futureImprovements: ["Rubric-based grading", "Notifications", "Submission history", "More granular permissions"],
    repo: "https://github.com/Vishalrajputhere/pro-classroom",
    demo: "https://pro-classroom.vercel.app/",
    featured: false,
    searchTags: ["classroom", "assignments", "Cloudinary", "RBAC", "plagiarism detection"],
    seo: {
      title: "Pro Classroom Case Study | Vishal Singh",
      description:
        "Case study of Pro Classroom, a role-based educational platform with assignment workflows, Cloudinary uploads, and PDF plagiarism detection.",
      keywords: ["Pro Classroom", "role-based access", "Cloudinary", "assignment workflow", "PDF plagiarism detection"],
    },
    aiMetadata: {
      difficulty: "High",
      topics: ["education platform", "assignments", "uploads", "RBAC", "document detection"],
      concepts: ["workflow design", "secure roles", "media handling", "scalability"],
      frameworks: ["React", "Node.js", "Express.js", "MongoDB"],
    },
  },
];

export const resumeSections = [
  "Summary",
  "Experience",
  "Projects",
  "Education",
  "Skills",
  "Achievements",
  "Certifications",
  "Contact",
];

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.canonical,
  keywords: [
    "Vishal Singh",
    "Full-Stack Software Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Redux Toolkit",
    "Portfolio",
  ],
  author: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  aiMetadata: {
    profileType: "Full-Stack Software Developer",
    currentFocus: ["React", "Next.js", "Node.js", "MongoDB", "Redux Toolkit"],
    searchTags: ["CRM", "Pro Classroom", "Eduveera", "portfolio", "full stack"],
    interviewTopics: ["architecture", "state management", "API design", "role-based access", "performance"],
  },
};