import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

export function GitHubSnake() {
  const { theme } = useTheme();
  const variant = theme === "dark" ? "github-snake-dark.svg" : "github-snake.svg";
  const snakeUrl = `https://raw.githubusercontent.com/${siteConfig.githubUsername}/${siteConfig.githubUsername}/output/${variant}`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full bg-card border border-border rounded-xl p-4 overflow-hidden shadow-sm" data-testid="github-snake-container">
      <img src={snakeUrl} alt="GitHub Contribution Snake" className="w-full h-auto rounded-lg" loading="lazy" data-testid="github-snake-image" />
    </motion.div>
  );
}
