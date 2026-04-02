import {
  Search,
  User,
  Code2,
  Github,
  MessageSquare,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Sobre",
    url: "#sobre",
    icon: User,
  },
  {
    title: "Tecnologias",
    url: "#tecnologias",
    icon: Code2,
  },
  {
    title: "Projetos",
    url: "#projetos",
    icon: Search,
  },
  {
    title: "GitHub",
    url: "#github",
    icon: Github,
  },
  {
    title: "Contato",
    url: "#contato",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-background/30 backdrop-blur-md border-r"
    >
      <SidebarHeader className="p-4 bg-transparent border-b border-border/60">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-semibold min-w-0">
            <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0">
              <img
                src="/favicon.svg"
                alt="Carlos Eduardo Logo"
                className="w-5 h-5"
              />
            </div>
            <span className="truncate group-data-[collapsible=icon]:hidden">
              Portfolio
            </span>
          </div>
          <SidebarTrigger className="flex md:hidden shrink-0" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
