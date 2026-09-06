import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function AppHeader() {
  const { openMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between p-2 border-b bg-background/50 backdrop-blur-md sticky top-0 z-40">
      <SidebarTrigger
        data-testid="button-sidebar-toggle"
        className={openMobile ? "hidden md:inline-flex" : "inline-flex"}
      />
      <ThemeToggle />
    </header>
  );
}
