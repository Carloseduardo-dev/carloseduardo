import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface LifestyleParallaxProps {
  src: string;
  index: number;
}

export function LifestyleParallax({ src, index }: LifestyleParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -30 : 30]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`overflow-hidden rounded-xl border border-border group relative ${
        index === 1 || index === 2 ? "row-span-2" : ""
      }`}
    >
      <img
        src={src}
        alt={`Registro da jornada de Carlos Eduardo ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
