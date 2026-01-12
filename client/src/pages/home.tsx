import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Code2, Database, Cloud, Terminal, Zap, MessageCircle, Phone, Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRef, useEffect, useState } from "react";

import perfilImg from "@assets/perfil_1768243015797.png";
import statsImg from "@assets/stats_1768243015798.png";
import contributionsImg from "@assets/contributions_1768243015794.png";
import activityImg from "@assets/activity_overview_1768243015793.png";
import pullSharkImg from "@assets/pull-shark-achievements-github_1768243015798.png";
import quickdrawImg from "@assets/quickdraw-achievements-github_1768243015798.png";
import linkedinProfileImg from "@assets/perfil-linkedin_1768243015798.png";

import messageVaga1 from "@assets/message-vaga1_1768243015796.png";
import messageVaga2 from "@assets/message-vaga2_1768243015796.png";
import messageVaga3 from "@assets/message-vaga3_1768243015797.png";

import lifestyle1Img from "@assets/lifestyle1_1768243015795.jpeg";
import lifestyle2Img from "@assets/lifestyle2_1768243015795.jpeg";
import lifestyle3Img from "@assets/lifestlyle3_1768243015795.jpeg";
import lifestyle4Img from "@assets/lifestyle4_1768243015796.jpeg";

import tsIcon from "@assets/typescript_1768245632541.png";
import jsIcon from "@assets/javascript_1768245632534.png";
import reactIcon from "@assets/react_1768245632540.png";
import nextIcon from "@assets/next_1768245632538.png";
import firebaseIcon from "@assets/firebase_1768245632531.png";
import mysqlIcon from "@assets/mysql_1768245632535.png";
import gitIcon from "@assets/git_1768245632532.png";
import n8nIcon from "@assets/n8n_1768245632537.png";
import vscodeIcon from "@assets/vscode_1768245632542.png";
import cssIcon from "@assets/css_1768245632528.png";
import htmlIcon from "@assets/html_1768245632533.png";

const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const technologies = [
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

function InteractiveBackground() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, hsl(var(--primary) / 0.15) 0%, transparent 80%)`
  );

  return (
    <motion.div 
      className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-500"
      style={{ background }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
    </motion.div>
  );
}

function ProfileParallax({ src }: { src: string }) {
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 15;
    const y = (e.clientY - rect.top - rect.height / 2) / 15;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20"
    >
      <img src={src} alt="Profile" className="w-full h-full object-cover" />
    </motion.div>
  );
}

function LifestyleParallax({ src, index }: { src: string, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -30 : 30]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`overflow-hidden rounded-xl border border-border group relative ${index === 1 || index === 2 ? 'row-span-2' : ''}`}
    >
      <img src={src} alt={`Lifestyle ${index + 1}`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

function CascadeReveal({ images, isRecruiter = false }: { images: string[], isRecruiter?: boolean }) {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.99) {
          setVisibleIndices(prev => {
            if (prev.includes(index)) return prev;
            return [...prev, index];
          });
        }
      }, { threshold: 0.99 });
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <div className={isRecruiter ? "space-y-4" : "grid grid-cols-2 lg:grid-cols-4 gap-4"}>
      {images.map((img, i) => {
        const canShow = i === 0 || visibleIndices.includes(i - 1);
        return (
          <motion.div
            key={i}
            ref={el => { refs.current[i] = el; }}
            initial={{ opacity: 0, y: 20 }}
            animate={canShow && visibleIndices.includes(i) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`overflow-hidden rounded-xl border border-border group relative ${!isRecruiter && (i === 1 || i === 2) ? 'row-span-2' : ''}`}
          >
            <img src={img} alt={`Reveal ${i + 1}`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
}

function RevealItem({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5, ease: "easeOut" } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: ContactFormValues) {
    const mailtoLink = `mailto:contatocarloseduardofe@gmail.com?subject=Contato de ${values.name}&body=${values.message}%0D%0A%0D%0AEmail de contato: ${values.email}`;
    window.location.href = mailtoLink;
    toast({ title: "Solicitação enviada!", description: "Seu cliente de e-mail foi aberto com os dados preenchidos." });
  }

  return (
    <div className="min-h-screen bg-transparent relative">
      <InteractiveBackground />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6" data-testid="section-hero">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <RevealItem className="flex-1 text-center lg:text-left">
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
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full" data-testid="hero-cta-contato">
                  <a href="#contato"><Mail className="w-5 h-5 mr-2" />Entrar em contato</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary rounded-full" data-testid="hero-cta-projetos">
                  <a href="#projetos"><Code2 className="w-5 h-5 mr-2" />Ver projetos</a>
                </Button>
              </div>
            </RevealItem>
            <RevealItem delay={0.2} className="relative">
              <ProfileParallax src={perfilImg} />
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Experiência em</p>
                    <p className="text-sm font-semibold">Startups</p>
                  </div>
                </div>
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 bg-transparent" data-testid="section-sobre">
        <div className="max-w-6xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sobre <span className="text-gradient">Mim</span></h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p data-testid="sobre-texto-1">Sou <strong className="text-foreground">Carlos Eduardo</strong>, Software Engineer com experiência em ambientes de startup, atuando no desenvolvimento de sistemas reais em produção. Trabalho com <strong className="text-primary">TypeScript, Node.js, Next.js, React, Firebase</strong> e automações, sempre focando em soluções escaláveis, seguras e bem estruturadas.</p>
                <p data-testid="sobre-texto-2">Já atuei na implementação de sistemas de pagamento, armazenamento em nuvem com AWS S3, dashboards analíticos, integrações com APIs de mercado e automações de processos.</p>
                <p data-testid="sobre-texto-3">Tenho perfil colaborativo, comunicação clara e foco constante em evolução técnica e qualidade de código.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, label: "Clean Code", desc: "Código limpo e manutenível" },
                  { icon: Database, label: "Backend", desc: "APIs robustas e escaláveis" },
                  { icon: Cloud, label: "Cloud", desc: "AWS, Firebase, Deploy" },
                  { icon: Zap, label: "Automação", desc: "Workflows inteligentes" },
                ].map((item, i) => (
                  <RevealItem key={i} delay={i * 0.1}>
                    <div className="bg-card border border-border rounded-xl p-4 hover-elevate h-full">
                      <item.icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-1">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section id="tecnologias" className="py-20 px-6" data-testid="section-tecnologias">
        <div className="max-w-6xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tecnologias & <span className="text-gradient">Ferramentas</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Stack tecnológica utilizada no desenvolvimento de soluções em produção</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {technologies.map((tech, i) => (
                <RevealItem key={tech.name} delay={i * 0.05}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center hover-elevate transition-all aspect-square grayscale hover:grayscale-0">
                          <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2 object-contain" />
                          <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{tech.name}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent><p>{tech.name}</p></TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </RevealItem>
              ))}
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 px-6 bg-transparent" data-testid="section-projetos">
        <div className="max-w-6xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Experiência & <span className="text-gradient">Projetos</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Sistemas reais desenvolvidos em ambiente de produção</p>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <RevealItem key={project.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 hover-elevate group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Terminal className="w-5 h-5 text-primary" /></div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                          <span className="text-xs text-muted-foreground">{project.type}</span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">{tech}</span>)}</div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </RevealItem>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20 px-6" data-testid="section-github">
        <div className="max-w-6xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">GitHub & <span className="text-gradient">Atividade Técnica</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Contribuições consistentes e engajamento técnico contínuo</p>
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <RevealItem delay={0.1}>
                <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="github-stats"><img src={statsImg} alt="GitHub Stats" className="w-full h-auto rounded-lg" /></div>
              </RevealItem>
              <RevealItem delay={0.2}>
                <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="github-activity"><img src={activityImg} alt="Activity Overview" className="w-full h-auto rounded-lg" /></div>
              </RevealItem>
            </div>
            <RevealItem delay={0.3}>
              <div className="bg-card border border-border rounded-xl p-4 overflow-hidden mb-8" data-testid="github-contributions"><img src={contributionsImg} alt="Contributions" className="w-full h-auto rounded-lg" /></div>
            </RevealItem>
            <div className="flex flex-wrap justify-center gap-6">
              <RevealItem delay={0.4}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4" data-testid="github-achievement-pullshark"><img src={pullSharkImg} alt="Pull Shark Achievement" className="w-16 h-16 rounded-full" /><div><h4 className="font-semibold">Pull Shark</h4><p className="text-sm text-muted-foreground">Pull Requests merged</p></div></div>
              </RevealItem>
              <RevealItem delay={0.5}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4" data-testid="github-achievement-quickdraw"><img src={quickdrawImg} alt="Quickdraw Achievement" className="w-16 h-16 rounded-full" /><div><h4 className="font-semibold">Quickdraw</h4><p className="text-sm text-muted-foreground">Fast responses</p></div></div>
              </RevealItem>
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Recrutadores Section */}
      <section className="py-20 px-6 bg-transparent" data-testid="section-social-proof">
        <div className="max-w-6xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Reconhecimento & <span className="text-gradient">Oportunidades</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Presença ativa no mercado e interesse de recrutadores</p>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <RevealItem delay={0.1}>
                <div className="bg-card border border-border rounded-xl p-4 overflow-hidden" data-testid="linkedin-profile"><img src={linkedinProfileImg} alt="LinkedIn Profile" className="w-full h-auto rounded-lg" /></div>
              </RevealItem>
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6"><MessageCircle className="w-6 h-6 text-primary" /><h3 className="text-xl font-semibold">Mensagens de Recrutadores</h3></div>
                <CascadeReveal images={[messageVaga1, messageVaga2, messageVaga3]} isRecruiter />
                <p className="text-sm text-muted-foreground text-center pt-4">Convites para processos seletivos e indicações profissionais</p>
              </div>
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 px-6" data-testid="section-lifestyle">
        <div className="max-w-6xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Lifestyle & <span className="text-gradient">Jornada</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">Além do código, acredito que a construção de uma carreira sólida envolve experiências, conexões, aprendizado contínuo e presença em ambientes que impulsionam crescimento profissional e pessoal.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[lifestyle1Img, lifestyle2Img, lifestyle3Img, lifestyle4Img].map((img, i) => (
                <LifestyleParallax key={i} src={img} index={i} />
              ))}
            </div>
          </RevealItem>
        </div>
      </section>

      {/* Vamos Conversar? Section */}
      <section id="contato" className="py-20 px-6 bg-transparent" data-testid="section-contato">
        <div className="max-w-4xl mx-auto">
          <RevealItem>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Vamos <span className="text-gradient">Conversar?</span></h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Tem um projeto em mente ou quer apenas bater um papo sobre tecnologia? Sinta-se à vontade para entrar em contato.</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Mail className="text-primary w-5 h-5" /> Contato Direto</h3>
                  <div className="space-y-4">
                    <Button variant="ghost" className="w-full justify-start hover-elevate px-4 h-12" asChild><a href="mailto:contatocarloseduardofe@gmail.com"><Mail className="mr-3 h-5 w-5 text-primary" />contatocarloseduardofe@gmail.com</a></Button>
                    <Button variant="ghost" className="w-full justify-start hover-elevate px-4 h-12" asChild><a href="https://wa.me/5521999045177" target="_blank" rel="noopener noreferrer"><Phone className="mr-3 h-5 w-5 text-primary" />WhatsApp: +55 21 99904-5177</a></Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2"><Users className="text-primary w-5 h-5" /> Redes Sociais</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-elevate" asChild><a href="https://github.com/Carloseduardo-dev" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a></Button>
                    <Button variant="outline" size="icon" className="w-12 h-12 rounded-full hover-elevate" asChild><a href="https://www.linkedin.com/in/carlos-eduardo-ferreira-132295200" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a></Button>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Falar no WhatsApp</h4>
                  <p className="text-sm text-muted-foreground mb-4">Clique abaixo para abrir uma conversa direta de forma rápida e segura.</p>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full"><a href="https://wa.me/5521999045177" target="_blank" rel="noopener noreferrer"><Phone className="w-4 h-4 mr-2" />WhatsApp Direto</a></Button>
                </div>
              </div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-card p-8 rounded-2xl border border-border shadow-sm">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Nome</FormLabel><FormControl><Input placeholder="Seu nome" {...field} className="h-12 bg-background" /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>E-mail</FormLabel><FormControl><Input placeholder="seu@email.com" {...field} className="h-12 bg-background" /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Mensagem</FormLabel><FormControl><Textarea placeholder="Como posso ajudar?" className="min-h-[120px] bg-background resize-none" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <Button type="submit" className="w-full h-12 rounded-full" data-testid="button-submit-contact"><Send className="w-4 h-4 mr-2" />Enviar mensagem</Button>
                </form>
              </Form>
            </div>
          </RevealItem>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50 text-center">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Carlos Eduardo Ferreira. Desenvolvido com React & Tailwind.</p>
      </footer>
    </div>
  );
}
