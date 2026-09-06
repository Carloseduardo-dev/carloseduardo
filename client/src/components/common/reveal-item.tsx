import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealItemProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealItem({ children, delay = 0, className = "" }: RevealItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.5, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
