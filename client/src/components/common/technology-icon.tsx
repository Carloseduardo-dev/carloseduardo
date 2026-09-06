import type { ReactNode } from "react";
import awsIcon from "@/assets/tech/AWS.svg";
import cssIcon from "@/assets/tech/css3.svg";
import firebaseIcon from "@/assets/tech/Firebase.svg";
import gitIcon from "@/assets/tech/Git.svg";
import githubIcon from "@/assets/tech/GitHub.svg";
import htmlIcon from "@/assets/tech/HTML5.svg";
import javascriptIcon from "@/assets/tech/JavaScript.svg";
import linkedInIcon from "@/assets/tech/LinkedIn.svg";
import mysqlIcon from "@/assets/tech/MySQL.svg";
import n8nIcon from "@/assets/tech/n8n.svg";
import nextIcon from "@/assets/tech/Next.js.svg";
import nodeIcon from "@/assets/tech/Node.js.svg";
import openApiIcon from "@/assets/tech/OpenAPI.svg";
import reactIcon from "@/assets/tech/React.svg";
import typescriptIcon from "@/assets/tech/TypeScript.svg";
import vscodeIcon from "@/assets/tech/VScode.svg";

const technologyIcons: Record<string, string> = {
  AWS: awsIcon,
  "AWS S3": awsIcon,
  CSS3: cssIcon,
  Firebase: firebaseIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  HTML5: htmlIcon,
  JavaScript: javascriptIcon,
  LinkedIn: linkedInIcon,
  MySQL: mysqlIcon,
  n8n: n8nIcon,
  "Next.js": nextIcon,
  "Node.js": nodeIcon,
  "REST APIs": openApiIcon,
  React: reactIcon,
  TypeScript: typescriptIcon,
  "VS Code": vscodeIcon,
};

interface TechnologyIconProps {
  name: string;
  className?: string;
  alt?: string;
  fallback?: ReactNode;
}

export function TechnologyIcon({ name, className = "h-4 w-4", alt = "", fallback = null }: TechnologyIconProps) {
  const icon = technologyIcons[name];

  if (!icon) return fallback;

  return <img src={icon} alt={alt} className={`object-contain ${className}`} aria-hidden={!alt} />;
}
