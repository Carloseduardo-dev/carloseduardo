import { Cloud, Code2, Database, Zap } from "lucide-react";
import type { AboutHighlight, Project, Technology } from "@/types/portfolio";
import lifestyle1Img from "@/assets/lifestyle/lifestyle1.jpg";
import lifestyle2Img from "@/assets/lifestyle/lifestyle2.jpeg";
import lifestyle3Img from "@/assets/lifestyle/lifestyle3.jpeg";
import lifestyle4Img from "@/assets/lifestyle/lifestyle4.jpg";
import webSummitImg from "@/assets/lifestyle/websummit.jpeg";
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
    title: "Integração de Pagamentos",
    description: "Integração com gateway para processar pagamentos e acompanhar cada etapa da transação.",
    contribution: "Implementei a integração com o gateway e organizei o ciclo das transações, do início à confirmação. Também tratei mudanças de estado e cenários de falha para manter cada pagamento consistente.",
    stack: ["TypeScript", "Node.js", "React", "Firebase"],
    type: "Pagamentos",
  },
  {
    title: "Dashboard Analítico",
    description: "Painel administrativo que reúne indicadores e facilita o acompanhamento da operação.",
    contribution: "Criei o painel para reunir indicadores em um só lugar. Organizei as visualizações usadas no acompanhamento diário, facilitando a leitura dos dados e a análise dos resultados.",
    stack: ["Next.js", "TypeScript", "Recharts", "Firebase"],
    type: "Análise de dados",
  },
  {
    title: "Automações Profissionais",
    description: "Fluxos no n8n que conectam APIs, webhooks e integrações com WhatsApp a processos internos.",
    contribution: "Desenvolvi fluxos no n8n para conectar APIs de WhatsApp e outros serviços aos processos internos. Com isso, etapas repetitivas passaram a acontecer automaticamente.",
    stack: ["n8n", "Node.js", "REST APIs", "Webhooks"],
    type: "Automação",
  },
  {
    title: "Armazenamento em Nuvem",
    description: "Fluxo de upload e armazenamento de arquivos com AWS S3.",
    contribution: "Implementei o armazenamento de arquivos na AWS S3, configurando buckets, regiões e regras de CORS para viabilizar os uploads. Também trabalhei no processamento dos arquivos antes de salvá-los.",
    stack: ["AWS S3", "Node.js", "Sharp", "Cloud Functions"],
    type: "Infraestrutura",
  },
];

export const lifestyleImages = [
  lifestyle1Img,
  lifestyle2Img,
  lifestyle3Img,
  lifestyle4Img,
  webSummitImg,
];
