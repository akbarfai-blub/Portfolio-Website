import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { timeline } from "@/data/timeline";

export function LearningJourney() {
  return (
    <section id="journey" className="py-20 md:py-28 relative max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-8">
          <FadeIn delay={0.1}>Learning Journey</FadeIn>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-15.5 top-3 bottom-3 w-px bg-border-light dark:bg-border-dark" />

          <div className="flex flex-col gap-6">
            {timeline.map((item, index) => {
              const isLast = index === timeline.length - 1;
              return (
                <FadeIn key={item.year} delay={index * 0.1}>
                  <div className="flex flex-row items-center gap-4">
                    <span className="min-w-10 text-sm font-bold text-right shrink-0 text-text-primary-light dark:text-text-primary-dark">
                      {item.year}
                    </span>

                    <div
                      className={`relative shrink-0 w-3 h-3 rounded-full z-10 ${
                        isLast
                          ? "bg-text-primary-light dark:bg-text-primary-dark"
                          : "bg-surface-light dark:bg-surface-dark border-2 border-border-light dark:border-border-dark"
                      }`}
                    />

                    <p
                      className={`flex-1 ${
                        isLast
                          ? "text-text-primary-light dark:text-text-primary-dark"
                          : "text-text-secondary-light dark:text-text-secondary-dark"
                      }`}
                    >
                      {item.label}
                    </p>

                    <div className="hidden md:flex flex-wrap gap-2 justify-end min-w-50">
                      {item.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
