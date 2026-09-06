import { Code2, Search, User } from "lucide-react";
import { createElement } from "react";
import emailIcon from "@/assets/social/email.svg";
import githubIcon from "@/assets/tech/GitHub.svg";

function GitHubNavigationIcon() {
  return createElement("img", {
    src: githubIcon,
    alt: "",
    className: "h-4 w-4 object-contain dark:invert",
    "aria-hidden": true,
  });
}

function EmailNavigationIcon() {
  return createElement("img", {
    src: emailIcon,
    alt: "",
    className: "h-4 w-4 object-contain dark:invert",
    "aria-hidden": true,
  });
}

export const navigationItems = [
  { title: "Sobre", url: "#sobre", icon: User },
  { title: "Tecnologias", url: "#tecnologias", icon: Code2 },
  { title: "Projetos", url: "#projetos", icon: Search },
  { title: "GitHub", url: "#github", icon: GitHubNavigationIcon },
  { title: "Contato", url: "#contato", icon: EmailNavigationIcon },
] as const;
