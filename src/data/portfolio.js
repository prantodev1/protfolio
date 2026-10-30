// Central place for personal content. Update the values marked "ADD YOURS"
// before publishing the site. Nothing here is generated at runtime.

export const siteConfig = {
  name: "Pranto Chandro",
  initials: "PC",
  role: "Full-Stack Web Developer",
  tagline:
    "I build responsive, user-focused web applications with React, Next.js, and modern JavaScript.",
  heroIntro:
    "I care about clean interfaces, usable details, and shipping projects that solve everyday problems. I am currently growing from frontend development into full-stack engineering, with AI engineering as my long-term goal.",
  description:
    "Portfolio of Pranto Chandro, a full-stack web developer from Dhaka, Bangladesh, building responsive web applications with React, Next.js, and Tailwind CSS.",
  location: "Dhaka, Bangladesh",
  availability: "Open to frontend, React, and full-stack opportunities",
  resumePath: "/resume.pdf",
  profileImage: "/pranto.png",

  email: "prentodev@gmail.com",
  phone: null,
  whatsapp: null,

  // Set this after deploying, for example "https://your-domain.com".
  siteUrl: null,

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/prantodev1",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prantodev/",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/X1KFHVCxDc/",
      icon: "leetcode",
    },
  ],
};

export const navItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export const about = {
  title: "Curious about how things work, focused on building them well.",
  paragraphs: [
    "I am a web developer from Dhaka, Bangladesh. My journey started with HTML, CSS, and JavaScript, then grew into building complete interfaces with React and Next.js. I learn best by shipping real projects, reviewing what could be better, and iterating on the details.",
    "I enjoy turning ideas into clear, responsive experiences and making sure the small interactions feel considered. Right now I am studying Computer Science and Engineering at Sonargaon University while strengthening my full-stack skills with Node.js, APIs, and databases, working toward a professional full-stack role and, eventually, AI engineering.",
    "I also enjoy problem-solving and strengthening my data structures and algorithms fundamentals. I like understanding why a solution works, not just getting it to compile.",
  ],
  highlights: [
    { label: "Focus", value: "Frontend and full-stack web" },
    { label: "Currently learning", value: "Node.js, APIs, and AI fundamentals" },
    { label: "Based in", value: "Dhaka, Bangladesh" },
  ],
  interests:
    "Outside of programming, I enjoy exploring new technology and documenting what I learn.",
};

// Skill groups rendered as icon tiles. Names are mapped to official brand
// marks and colors in src/components/TechIcon.jsx — keep the two in sync.
export const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and reusable components.",
    icon: "frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    description: "Designing APIs and connecting them to real data.",
    icon: "backend",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    description: "Working with document-based data and practical schemas.",
    icon: "database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    description: "The workflow I use to build, test, and ship projects.",
    icon: "tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

// Education history. Add more entries if needed; drop `placeholder` for real
// qualifications so the "editable placeholder" badge does not render.
export const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "Sonargaon University",
    field: "Computer Science and Engineering (CSE)",
    period: "2024 – 2028",
    details:
      "Undergraduate study in computer science and engineering, running alongside self-directed work on React, Next.js, and full-stack projects.",
  },
];
