import type { LucideIcon } from "lucide-react";

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  type: string;
}

export interface AboutHighlight {
  icon: LucideIcon;
  label: string;
  description: string;
}
