import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function InteractiveBackground() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, hsl(var(--primary) / 0.15) 0%, transparent 80%)`
  );

  return (
    <motion.div 
      className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-500"
      style={{ background }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />
      <div className="absolute inset-0 bg-grid-global opacity-[0.03] dark:opacity-[0.05]" />
    </motion.div>
  );
}
