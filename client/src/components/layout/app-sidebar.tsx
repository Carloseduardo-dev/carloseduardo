import { navigationItems } from "@/config/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-background border-r">
      <SidebarHeader className="h-16 shrink-0 justify-center border-b border-border/60 bg-background px-4 py-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-semibold min-w-0">
            <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0">
              <img src="/favicon.svg" alt="Carlos Eduardo Logo" className="w-5 h-5" />
            </div>
            <span className="truncate group-data-[collapsible=icon]:hidden">Portfolio</span>
          </div>
          <SidebarTrigger className="flex md:hidden shrink-0" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
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
