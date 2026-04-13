import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { timeline } from "@/data/timeline";

export function LearningJourney() {
  return (
    <section id="journey" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">
          <FadeIn>Learning Journey</FadeIn>
        </h2>

        <div className="relative">
          <div className="absolute left-15.5 top-3 bottom-3 w-px bg-border" />

          <div className="flex flex-col gap-6">
            {timeline.map((item, index) => {
              const isLast = index === timeline.length - 1;
              return (
                <FadeIn key={item.year} delay={index * 0.1}>
                  <div className="flex flex-row items-center gap-4">
                    <span className="min-w-10 text-sm font-bold text-right shrink-0 text-text-primary">
                      {item.year}
                    </span>

                    <div
                      className={`relative shrink-0 w-3 h-3 rounded-full z-10 ${
                        isLast
                          ? "bg-text-primary"
                          : "bg-bg-surface border-2 border-border"
                      }`}
                    />

                    <p
                      className={
                        isLast ? "text-text-primary" : "text-text-secondary"
                      }
                    >
                      {item.label}
                    </p>

                    <div className="hidden md:flex flex-wrap gap-2 justify-end flex-1">
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
