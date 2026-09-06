import { AppProviders } from "@/app/providers";
import { AppRouter } from "@/app/router";
import { AppShell } from "@/components/layout/app-shell";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <AppProviders>
      <AppShell>
        <AppRouter />
      </AppShell>
      <Toaster />
    </AppProviders>
  );
}
