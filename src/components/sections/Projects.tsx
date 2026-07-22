import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

function getInitials(title: string) {
  return title
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export function Projects() {
  return (
    <section id="projects" className="bg-bg-surface py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 font-heading">
            Projects
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="h-full flex flex-col bg-bg-base rounded-xl border border-border hover:border-text-muted transition-colors overflow-hidden group">
                {/* Thumbnail Area */}
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-bg-surface to-border flex items-center justify-center">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-text-muted transition-transform duration-300 group-hover:scale-105">
                      {getInitials(project.title)}
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex flex-col p-6 grow">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 grow">
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
                      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
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
                      className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
