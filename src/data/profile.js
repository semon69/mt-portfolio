// All personal content lives here so copy changes don't mean hunting
// through JSX. Sourced from the CV (Md Emon Sheikh — Software Engineer).

export const RESUME_VIEW_URL =
  "https://drive.google.com/file/d/1kTVBL1cLvxhpea8pYQHCwF-ne4TzAvub/view?usp=sharing";

export const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1kTVBL1cLvxhpea8pYQHCwF-ne4TzAvub";

export const profile = {
  name: "Md Emon Sheikh",
  firstName: "Emon",
  title: "Software Engineer",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "React & Next.js",
    "Node.js & PostgreSQL",
  ],
  headline:
    "Software Engineer shipping production systems end-to-end in React/Next.js and Node.js.",
  summary:
    "Software Engineer with 2+ years shipping production systems end-to-end — including sole ownership of two platforms from spec to deployment. Focused on scalable async architecture, API design and AI-driven product features.",
  portrait: "https://i.ibb.co.com/3yCN4kyc/6246538343420202668.jpg",
  email: "smdemon3@gmail.com",
  phone: "+8801817855902",
  whatsapp: "+8801817855902",
  location: "Dhaka, Bangladesh",
  company: {
    name: "Nebs IT",
    url: "https://nebsit.com/",
    role: "Full Stack Developer",
    note: "internal business tools and client products",
  },
};

// Headline numbers for the hero strip.
export const stats = [
  { value: "2+", label: "Years shipping production" },
  { value: "2", label: "Platforms owned solo" },
  { value: "60+", label: "Problems solved" },
  { value: "3", label: "Companies" },
];

export const about = {
  paragraphs: [
    "I'm a Software Engineer with 2+ years building production systems end-to-end. Most of my work sits across the whole stack — React and Next.js on the front, Node.js and Express with PostgreSQL or MongoDB behind it.",
    "At Nebs IT I've been the sole developer on two platforms from spec to deployment: Quest, a bulk email verification service built on an async BullMQ and Redis pipeline, and Digishop, a vendor invoicing platform. I also inherited a broken internal ERP, stabilised it, and expanded it with role-specific dashboards for seven departments.",
    "Before that I spent a year at Standard Insights, a US market research startup, owning full-stack delivery on an AI-driven survey platform and integrating OpenAI, Gemini and Mistral to automate survey and audience generation — cutting manual setup time by 80–90%.",
  ],
  education: {
    degree: "BSc in Computer Science and Engineering",
    institution: "Atish Dipankar University of Science and Technology",
    detail: "CGPA 3.51 / 4.0 · 2020 – 2024",
  },
  achievements: [
    "Solved 60+ problems on Codeforces and LeetCode",
    "Certificate of Stellar — Soft Tech Nexus Batch-2, Programming Hero",
    "Black Belt Winner — Programming Hero",
  ],
  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Comfortable" },
    { name: "Hindi", level: "Familiar" },
    { name: "Urdu", level: "Familiar" },
  ],
};

// Grouped capability list straight from the CV's "Area of Expertise".
export const expertise = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python"],
  },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    group: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "Redis",
      "REST APIs",
      "JWT Auth",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "Sequelize",
    ],
  },
  {
    group: "AI & Automation",
    items: ["OpenAI", "Gemini", "Mistral", "Claude", "Prompt Engineering"],
  },
  {
    group: "Payments",
    items: ["Stripe", "SSLCommerz"],
  },
  {
    group: "DevOps & Tooling",
    items: ["Git", "GitHub Actions", "Docker", "BullMQ", "Figma", "Brevo"],
  },
];

// The strip that scrolls continuously beneath the hero.
export const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redis",
  "BullMQ",
  "Docker",
  "Stripe",
  "Tailwind CSS",
  "GitHub Actions",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/semon69", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-emon-sheikh-508891227/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/smdemon2k17",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sheikh_emon69/",
    icon: "instagram",
  },
];

// Previously all three cards shared one identical paragraph.
export const services = [
  {
    title: "Full-Stack Product Delivery",
    description:
      "End-to-end ownership from PRD to production — data model, API, frontend and deployment. The way I built Quest and Digishop: spec, build, ship.",
  },
  {
    title: "Async & Queue Architecture",
    description:
      "Background pipelines that stay correct under load — BullMQ and Redis, priority-based queue fairness, race-safe multi-worker completion tracking and retries.",
  },
  {
    title: "AI Feature Integration",
    description:
      "Wiring OpenAI, Gemini, Mistral and Claude into real product flows, with prompt engineering aimed at cutting manual work rather than demos.",
  },
];
