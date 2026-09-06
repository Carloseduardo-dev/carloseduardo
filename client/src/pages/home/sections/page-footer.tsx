import { siteConfig } from "@/config/site";

export function PageFooter() {
  return (
    <footer className="py-12 px-6 border-t border-border/50 text-center">
      <p className="text-sm text-muted-foreground">
        Copyright © {new Date().getFullYear()}, {siteConfig.name}.
      </p>
    </footer>
  );
}
