import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function AppHeader() {
  const { openMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-border/60 bg-background/50 px-2 backdrop-blur-md">
      <SidebarTrigger
        data-testid="button-sidebar-toggle"
        className={openMobile ? "hidden md:inline-flex" : "inline-flex"}
      />
      <ThemeToggle />
    </header>
  );
}
