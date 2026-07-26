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
  const isPrimary = item.level === "primary";

  return (
    <FadeIn delay={delay}>
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isPrimary
            ? "bg-bg-surface border border-border"
            : "bg-bg-surface/50 border border-border/40 opacity-65"
        }`}
      >
        {IconComponent && (
          <IconComponent
            className={`w-5 h-5 ${
              isPrimary ? "text-text-primary" : "text-text-secondary"
            }`}
          />
        )}
        <span
          className={`text-sm ${isPrimary ? "text-text-primary" : "text-text-secondary"}`}
        >
          {item.name}
        </span>
        {isPrimary && (
          <span className="ml-auto text-[10px] font-mono text-text-muted tracking-wider uppercase">
            Core
          </span>
        )}
      </div>
    </FadeIn>
  );
}

export function Stack() {
  return (
    <section id="stack" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 font-heading">
            Stack
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <FadeIn>
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
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
              <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
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
