import { FadeIn } from "@/components/ui/FadeIn";
import * as SiIcons from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiReact: SiIcons.SiReact,
  SiNextdotjs: SiIcons.SiNextdotjs,
  SiTypescript: SiIcons.SiTypescript,
  SiJavascript: SiIcons.SiJavascript,
  SiTailwindcss: SiIcons.SiTailwindcss,
  SiGit: SiIcons.SiGit,
  SiFigma: SiIcons.SiFigma,
  SiPython: SiIcons.SiPython,
  SiPandas: SiIcons.SiPandas,
  SiScikitlearn: SiIcons.SiScikitlearn,
  SiPostgresql: SiIcons.SiPostgresql,
  SiKaggle: SiIcons.SiKaggle,
  SiGooglecolab: SiIcons.SiGooglecolab,
};

import { frontendStack, dataStack, StackItem } from "@/data/stack";

function StackCard({ item, delay }: { item: StackItem; delay: number }) {
  const IconComponent = iconMap[item.icon];
  return (
    <FadeIn delay={delay}>
      <div className="flex items-center gap-3 px-4 py-3 bg-surface-light dark:bg-surface-dark rounded-lg">
        {IconComponent && (
          <IconComponent className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" />
        )}
        <span className="text-sm text-text-primary-light dark:text-text-primary-dark">
          {item.name}
        </span>
      </div>
    </FadeIn>
  );
}

export function Stack() {
  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-8">
            Stack
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <FadeIn>
              <h3 className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-4">
                Frontend
              </h3>
            </FadeIn>
            <div className="grid grid-cols-2 gap-3">
              {frontendStack.map((item, index) => (
                <StackCard key={item.name} item={item} delay={index * 0.05} />
              ))}
            </div>
          </div>

          <div>
            <FadeIn>
              <h3 className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider mb-4">
                Data Science
              </h3>
            </FadeIn>
            <div className="grid grid-cols-2 gap-3">
              {dataStack.map((item, index) => (
                <StackCard
                  key={item.name}
                  item={item}
                  delay={index * 0.05 + 0.3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
