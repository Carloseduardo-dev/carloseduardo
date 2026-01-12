import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ExternalLink, MapPin, Code2, Database, Cloud, Terminal, Zap, Users, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import perfilImg from "@assets/perfil_1768243015797.png";
import statsImg from "@assets/stats_1768243015798.png";
import contributionsImg from "@assets/contributions_1768243015794.png";
import activityImg from "@assets/activity_overview_1768243015793.png";
import pullSharkImg from "@assets/pull-shark-achievements-github_1768243015798.png";
import quickdrawImg from "@assets/quickdraw-achievements-github_1768243015798.png";
import linkedinProfileImg from "@assets/perfil-linkedin_1768243015798.png";
import messageVagasImg from "@assets/message-vagas_1768243015797.png";
import lifestyle1Img from "@assets/lifestyle1_1768243015795.jpeg";
import lifestyle2Img from "@assets/lifestyle2_1768243015795.jpeg";
import lifestyle3Img from "@assets/lifestlyle3_1768243015795.jpeg";
import lifestyle4Img from "@assets/lifestyle4_1768243015796.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const technologies = [
  { name: "TypeScript", icon: "TS", color: "#3178c6" },
  { name: "JavaScript", icon: "JS", color: "#f7df1e" },
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Next.js", icon: "N", color: "#fff" },
  { name: "Node.js", icon: "⬢", color: "#68a063" },
  { name: "Firebase", icon: "🔥", color: "#ffca28" },
  { name: "MySQL", icon: "🗄️", color: "#4479a1" },
  { name: "Git", icon: "⎇", color: "#f05032" },
  { name: "AWS S3", icon: "☁️", color: "#ff9900" },
  { name: "n8n", icon: "⚡", color: "#ea4b71" },
  { name: "VS Code", icon: "📝", color: "#007acc" },
  { name: "IntelliJ", icon: "🧠", color: "#fe315d" },
];

const projects = [
  {
    title: "Sistema de Pagamentos",
    description: "Implementação completa de gateway de pagamentos com integração de múltiplos provedores e dashboard analítico.",
    stack: ["TypeScript", "Node.js", "React", "Firebase"],
    type: "Fintech"
  },
  {
    title: "Dashboard Analítico",
    description: "Painel de controle com métricas em tempo real, visualização de dados e relatórios automatizados.",
    stack: ["Next.js", "TypeScript", "Recharts", "PostgreSQL"],
    type: "Analytics"
  },
  {
    title: "Automações Empresariais",
    description: "Workflows automatizados para processos internos, integrações com APIs e notificações inteligentes.",
    stack: ["n8n", "Node.js", "REST APIs", "Webhooks"],
    type: "Automation"
  },
  {
    title: "Armazenamento Cloud",
    description: "Sistema de upload e gerenciamento de arquivos com AWS S3, otimização de imagens e CDN.",
    stack: ["AWS S3", "Node.js", "Sharp", "CloudFront"],
    type: "Infrastructure"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-semibold text-lg"
            data-testid="nav-logo"
          >
            carlos<span className="text-primary">eduardo</span>
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition-colors" data-testid="nav-sobre">Sobre</a>
            <a href="#tecnologias" className="hover:text-foreground transition-colors" data-testid="nav-tecnologias">Tecnologias</a>
            <a href="#projetos" className="hover:text-foreground transition-colors" data-testid="nav-projetos">Projetos</a>
            <a href="#github" className="hover:text-foreground transition-colors" data-testid="nav-github">GitHub</a>
            <a href="#contato" className="hover:text-foreground transition-colors" data-testid="nav-contato">Contato</a>
          </div>
          <Button 
            asChild 
            size="sm" 
            className="bg-primary hover:bg-primary/90"
            data-testid="nav-cta"
          >
            <a href="mailto:contatocarloseduardofe@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Contato
            </a>
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6" data-testid="section-hero">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div 
              className="flex-1 text-center lg:text-left"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Disponível para oportunidades
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
                Carlos Eduardo<br />
                <span className="text-gradient">Ferreira</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium" data-testid="hero-subtitle">
                Software Engineer | Computer Science
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4" />
                Rio de Janeiro, Brasil
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  data-testid="hero-cta-contato"
                >
                  <a href="mailto:contatocarloseduardofe@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Entrar em contato
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-border hover:bg-secondary"
                  data-testid="hero-cta-projetos"
                >
                  <a href="#projetos">
                    <Code2 className="w-5 h-5 mr-2" />
                    Ver projetos
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={fadeInUp}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={perfilImg} 
                  alt="Carlos Eduardo Ferreira" 
                  className="w-full h-full object-cover"
                  data-testid="hero-avatar"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Experiência em</p>
                    <p className="text-sm font-semibold">Startups</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="sobre" className="py-20 px-6 bg-card/50" data-testid="section-sobre">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p data-testid="sobre-texto-1">
                  Sou <strong className="text-foreground">Carlos Eduardo</strong>, Software Engineer com experiência em ambientes de startup, atuando no desenvolvimento de sistemas reais em produção. Trabalho com <strong className="text-primary">TypeScript, Node.js, Next.js, React, Firebase</strong> e automações, sempre focando em soluções escaláveis, seguras e bem estruturadas.
                </p>
                <p data-testid="sobre-texto-2">
                  Já atuei na implementação de sistemas de pagamento, armazenamento em nuvem com AWS S3, dashboards analíticos, integrações com APIs de mercado e automações de processos.
                </p>
                <p data-testid="sobre-texto-3">
                  Tenho perfil colaborativo, comunicação clara e foco constante em evolução técnica e qualidade de código.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, label: "Clean Code", desc: "Código limpo e manutenível" },
                  { icon: Database, label: "Backend", desc: "APIs robustas e escaláveis" },
                  { icon: Cloud, label: "Cloud", desc: "AWS, Firebase, Deploy" },
                  { icon: Zap, label: "Automação", desc: "Workflows inteligentes" },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="bg-card border border-border rounded-xl p-4 card-hover"
                    data-testid={`sobre-skill-${i}`}
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tecnologias" className="py-20 px-6" data-testid="section-tecnologias">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Tecnologias & <span className="text-gradient">Ferramentas</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Stack tecnológica utilizada no desenvolvimento de soluções em produção
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4 text-center card-hover group"
                  data-testid={`tech-${tech.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div 
                    className="text-2xl mb-2 group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                  <p className="text-xs text-muted-foreground">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projetos" className="py-20 px-6 bg-card/50" data-testid="section-projetos">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Experiência & <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Sistemas reais desenvolvidos em ambiente de produção
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 card-hover group"
                  data-testid={`project-${i}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Terminal className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{project.type}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="github" className="py-20 px-6" data-testid="section-github">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              GitHub & <span className="text-gradient">Atividade Técnica</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Contribuições consistentes e engajamento técnico contínuo
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="github-stats">
                <img src={statsImg} alt="GitHub Stats" className="w-full h-auto rounded-lg" />
              </div>
              <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="github-activity">
                <img src={activityImg} alt="Activity Overview" className="w-full h-auto rounded-lg" />
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-4 overflow-hidden mb-8" data-testid="github-contributions">
              <img src={contributionsImg} alt="Contributions" className="w-full h-auto rounded-lg" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4" data-testid="github-achievement-pullshark">
                <img src={pullSharkImg} alt="Pull Shark Achievement" className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-semibold">Pull Shark</h4>
                  <p className="text-sm text-muted-foreground">Pull Requests merged</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4" data-testid="github-achievement-quickdraw">
                <img src={quickdrawImg} alt="Quickdraw Achievement" className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-semibold">Quickdraw</h4>
                  <p className="text-sm text-muted-foreground">Fast responses</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50" data-testid="section-social-proof">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Reconhecimento & <span className="text-gradient">Oportunidades</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Presença ativa no mercado e interesse de recrutadores
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="linkedin-profile">
                <img src={linkedinProfileImg} alt="LinkedIn Profile" className="w-full h-auto rounded-lg" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Mensagens de Recrutadores</h3>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="recruiter-messages">
                  <img src={messageVagasImg} alt="Recruiter Messages" className="w-full h-auto rounded-lg" />
                </div>
                <p className="text-sm text-muted-foreground text-center pt-4">
                  Convites para processos seletivos e indicações profissionais
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" data-testid="section-lifestyle">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Lifestyle & <span className="text-gradient">Jornada</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Além do código, acredito que a construção de uma carreira sólida envolve experiências, conexões, aprendizado contínuo e presença em ambientes que impulsionam crescimento profissional e pessoal.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[lifestyle1Img, lifestyle2Img, lifestyle3Img, lifestyle4Img].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`overflow-hidden rounded-xl border border-border ${i === 1 || i === 2 ? 'row-span-2' : ''}`}
                  data-testid={`lifestyle-${i + 1}`}
                >
                  <img 
                    src={img} 
                    alt={`Lifestyle ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/50" data-testid="section-redes">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Redes <span className="text-gradient">Sociais</span>
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Conecte-se comigo nas principais plataformas
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary hover:border-primary/50"
                data-testid="social-github"
              >
                <a href="https://github.com/Carloseduardo-dev" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary hover:border-primary/50"
                data-testid="social-linkedin"
              >
                <a href="https://www.linkedin.com/in/carlos-eduardo-ferreira-132295200" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary hover:border-primary/50"
                data-testid="social-instagram"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contato" className="py-20 px-6" data-testid="section-contato">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos <span className="text-gradient">Conversar?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Estou aberto a novas oportunidades, projetos freelance e parcerias. Entre em contato e vamos criar algo incrível juntos.
            </p>
            
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-semibold" data-testid="contato-email">contatocarloseduardofe@gmail.com</p>
                </div>
              </div>
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                data-testid="contato-cta"
              >
                <a href="mailto:contatocarloseduardofe@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar E-mail
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Respondendo em até 24 horas
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p data-testid="footer-copyright">© 2025 Carlos Eduardo Ferreira. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Carloseduardo-dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" data-testid="footer-github">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/carlos-eduardo-ferreira-132295200" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" data-testid="footer-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
