interface LifestyleParallaxProps {
  src: string;
  index: number;
}

export function LifestyleParallax({ src, index }: LifestyleParallaxProps) {
  return (
    <figure className="group relative aspect-[4/5] w-[76vw] max-w-80 shrink-0 overflow-hidden rounded-xl border border-border sm:w-72 lg:w-80">
      <img
        src={src}
        alt={`Registro da jornada de Carlos Eduardo ${index + 1}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </figure>
  );
}
