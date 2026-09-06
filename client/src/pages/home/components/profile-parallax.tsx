import { motion, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

export function ProfileParallax({ src }: { src: string }) {
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left - rect.width / 2) / 15);
    mouseY.set((event.clientY - rect.top - rect.height / 2) / 15);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20"
    >
      <img src={src} alt="Carlos Eduardo Ferreira" className="w-full h-full object-cover" />
    </motion.div>
  );
}
