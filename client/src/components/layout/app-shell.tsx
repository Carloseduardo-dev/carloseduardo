import type { ReactNode } from "react";
import { InteractiveBackground } from "@/components/interactive-background";
import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <InteractiveBackground />
      <div className="flex h-screen w-full overflow-hidden bg-transparent relative z-10">
        <AppSidebar />
        <div className="flex flex-col flex-1 min-w-0 bg-transparent">
          <AppHeader />
          <main className="flex-1 overflow-y-auto scroll-smooth bg-transparent">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
