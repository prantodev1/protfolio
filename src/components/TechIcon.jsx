import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

// Single source of truth for technology marks and their brand colors. The
// icons render in their official colors on the dark surface; Next.js, GitHub,
// and Express use white because their marks are black by default.
export const techColors = {
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "React.js": "#61DAFB",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  "Tailwind CSS": "#22D3EE",
  "Node.js": "#5FA04E",
  "Express.js": "#FFFFFF",
  Express: "#FFFFFF",
  "REST API": "#22D3EE",
  "REST APIs": "#22D3EE",
  MongoDB: "#47A248",
  Git: "#F05032",
  GitHub: "#FFFFFF",
  "VS Code": "#007ACC",
  Postman: "#FF6C37",
};

const techIcons = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Express.js": SiExpress,
  "REST API": TbApi,
  "REST APIs": TbApi,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
};

export function getTechColor(name) {
  return techColors[name] ?? "#94a3b8";
}

export function hasTechIcon(name) {
  return Boolean(techIcons[name]);
}

export default function TechIcon({ name, size = 20, className = "" }) {
  const Icon = techIcons[name];

  if (!Icon) return null;

  return (
    <Icon
      size={size}
      className={className}
      style={{ color: getTechColor(name) }}
      aria-hidden="true"
      focusable="false"
    />
  );
}
