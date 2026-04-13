import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border-light dark:border-border-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
          Akbar Fai &middot; Built with Next.js & Tailwind CSS &middot; 2026
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/akbarfai-blub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/akbarfai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
