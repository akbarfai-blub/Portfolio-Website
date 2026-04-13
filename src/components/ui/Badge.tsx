interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-bg-surface text-text-secondary rounded-full ${className || ""}`}
    >
      {children}
    </span>
  );
}
