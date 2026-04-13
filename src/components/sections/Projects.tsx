import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-surface-light dark:bg-surface-dark py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-8">
            Projects
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="h-full flex flex-col p-6 bg-base-light dark:bg-base-dark rounded-xl border border-border-light dark:border-border-dark hover:border-text-muted-light dark:hover:border-text-muted-dark transition-colors">
                <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-4 grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
