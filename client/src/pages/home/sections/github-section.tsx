import { RevealItem } from "@/components/common/reveal-item";
import { GitHubInsights, GitHubSnake } from "@/features/github";
import pullSharkImage from "@/assets/github/pull-shark.png";
import quickdrawImage from "@/assets/github/quickdraw.png";

const achievements = [
  {
    name: "Pull Shark",
    description: "Pull Requests merged",
    image: pullSharkImage,
    testId: "github-achievement-pullshark",
  },
  {
    name: "Quickdraw",
    description: "Fast responses",
    image: quickdrawImage,
    testId: "github-achievement-quickdraw",
  },
];

export function GitHubSection() {
  return (
    <section id="github" className="py-20 px-6" data-testid="section-github">
      <div className="max-w-6xl mx-auto">
        <RevealItem>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Código & <span className="text-gradient">evolução contínua</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Atividade no GitHub, contribuições e aprendizados que fazem parte da minha rotina como desenvolvedor.
          </p>
          <RevealItem delay={0.2}>
            <div className="mb-8" data-testid="github-stats"><GitHubInsights /></div>
          </RevealItem>
          <RevealItem delay={0.3}><GitHubSnake /></RevealItem>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            {achievements.map((achievement, index) => (
              <RevealItem key={achievement.name} delay={0.3 + index * 0.2}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4" data-testid={achievement.testId}>
                  <img src={achievement.image} alt={`${achievement.name} Achievement`} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold">{achievement.name}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealItem>
      </div>
    </section>
  );
}
