import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { InteractiveBackground } from "@/components/interactive-background"
import React from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppHeader() {
  const { openMobile } = useSidebar();

  return (
    <header className="flex items-center justify-between p-2 border-b bg-background/50 backdrop-blur-md sticky top-0 z-40">
      <SidebarTrigger
        data-testid="button-sidebar-toggle"
        className={openMobile ? "hidden md:inline-flex" : "inline-flex"}
      />

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <TooltipProvider>
        <InteractiveBackground />
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full overflow-hidden bg-transparent relative z-10">
            <AppSidebar />
            <div className="flex flex-col flex-1 min-w-0 bg-transparent">
              <AppHeader />
              <main className="flex-1 overflow-y-auto scroll-smooth bg-transparent">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
