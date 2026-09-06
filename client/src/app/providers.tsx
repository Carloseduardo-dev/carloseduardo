import type { CSSProperties, ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";

const sidebarStyle = {
  "--sidebar-width": "16rem",
  "--sidebar-width-icon": "4rem",
} as CSSProperties;

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <SidebarProvider style={sidebarStyle}>{children}</SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
