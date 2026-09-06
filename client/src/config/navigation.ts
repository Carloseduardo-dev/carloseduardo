import { Code2, Github, MessageSquare, Search, User } from "lucide-react";

export const navigationItems = [
  { title: "Sobre", url: "#sobre", icon: User },
  { title: "Tecnologias", url: "#tecnologias", icon: Code2 },
  { title: "Projetos", url: "#projetos", icon: Search },
  { title: "GitHub", url: "#github", icon: Github },
  { title: "Contato", url: "#contato", icon: MessageSquare },
] as const;
