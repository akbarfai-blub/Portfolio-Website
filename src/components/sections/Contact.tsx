import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface-light dark:bg-surface-dark py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Let&apos;s Connect
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
              Open for collaboration, freelance, or just a good conversation
              about code and data.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:akbarfai2428@gmail.com"
                className={cn(
                  "p-3 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark",
                  "text-text-secondary-light dark:text-text-secondary-dark",
                  "hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-text-muted-light dark:hover:border-text-muted-dark",
                  "transition-colors",
                )}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akbarfai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark",
                  "text-text-secondary-light dark:text-text-secondary-dark",
                  "hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-text-muted-light dark:hover:border-text-muted-dark",
                  "transition-colors",
                )}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/akbarfai-blub"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark",
                  "text-text-secondary-light dark:text-text-secondary-dark",
                  "hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-text-muted-light dark:hover:border-text-muted-dark",
                  "transition-colors",
                )}
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
