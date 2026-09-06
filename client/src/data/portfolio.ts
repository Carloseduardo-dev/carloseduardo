import { Cloud, Code2, Database, Zap } from "lucide-react";
import type { AboutHighlight, Project, Technology } from "@/types/portfolio";
import lifestyle1Img from "@/assets/lifestyle/lifestyle1.jpg";
import lifestyle2Img from "@/assets/lifestyle/lifestyle2.jpeg";
import lifestyle3Img from "@/assets/lifestyle/lifestyle3.jpeg";
import lifestyle4Img from "@/assets/lifestyle/lifestyle4.jpg";
import tsIcon from "@/assets/tech/TypeScript.svg";
import jsIcon from "@/assets/tech/JavaScript.svg";
import reactIcon from "@/assets/tech/React.svg";
import nextIcon from "@/assets/tech/Next.js.svg";
import firebaseIcon from "@/assets/tech/Firebase.svg";
import mysqlIcon from "@/assets/tech/MySQL.svg";
import gitIcon from "@/assets/tech/Git.svg";
import n8nIcon from "@/assets/tech/n8n.svg";
import vscodeIcon from "@/assets/tech/VScode.svg";
import cssIcon from "@/assets/tech/css3.svg";
import htmlIcon from "@/assets/tech/HTML5.svg";

export const aboutHighlights: AboutHighlight[] = [
  { icon: Code2, label: "Código sustentável", description: "Clareza para manter e evoluir" },
  { icon: Database, label: "Backend", description: "APIs REST confiáveis" },
  { icon: Cloud, label: "Cloud", description: "AWS, Firebase e deploy" },
  { icon: Zap, label: "Automação", description: "Integrações e workflows" },
];

export const technologies: Technology[] = [
  { name: "TypeScript", icon: tsIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Git", icon: gitIcon },
  { name: "n8n", icon: n8nIcon },
  { name: "VS Code", icon: vscodeIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "HTML5", icon: htmlIcon },
];

export const projects: Project[] = [
  {
    title: "Sistema de Pagamentos",
    description: "Gateway de pagamentos com múltiplos provedores e dashboard para acompanhar as operações em um só lugar.",
    stack: ["TypeScript", "Node.js", "React", "Firebase"],
    type: "Fintech",
  },
  {
    title: "Dashboard Analítico",
    description: "Painel com métricas em tempo real, visualizações claras e relatórios automatizados para apoiar decisões.",
    stack: ["Next.js", "TypeScript", "Recharts", "Firebase"],
    type: "Analytics",
  },
  {
    title: "Automações Profissionais",
    description: "Workflows que conectam APIs, automatizam processos internos e entregam notificações no momento certo.",
    stack: ["n8n", "Node.js", "REST APIs", "Webhooks"],
    type: "Automation",
  },
  {
    title: "Armazenamento Cloud",
    description: "Fluxo de upload e gestão de arquivos com AWS S3, otimização de imagens e distribuição por CDN.",
    stack: ["AWS S3", "Node.js", "Sharp", "CloudFunctions"],
    type: "Infrastructure",
  },
];

export const lifestyleImages = [
  lifestyle1Img,
  lifestyle2Img,
  lifestyle3Img,
  lifestyle4Img,
];
