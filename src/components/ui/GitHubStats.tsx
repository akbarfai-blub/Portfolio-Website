"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

type GitHubStatsProps = {
  repos: number;
  contributions: number;
  followers: number;
};

function StatItem({
  value,
  label,
  showDivider,
}: {
  value: number;
  label: string;
  showDivider: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let rafId: number;
    let startTime: number;
    const duration = 1500;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * easeOut;
      setDisplayValue(Math.round(current));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex-1 flex items-center justify-center relative">
      <div className="text-center px-2">
        <div
          className="text-4xl font-bold text-text-primary mb-1"
          aria-live="polite"
        >
          {displayValue}
        </div>
        <div className="text-sm text-text-secondary">{label}</div>
      </div>
      {showDivider && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-border" />
      )}
    </div>
  );
}

export function GitHubStats({
  repos,
  contributions,
  followers,
}: GitHubStatsProps) {
  const stats = [
    { value: repos, label: "Repositories", showDivider: true },
    { value: contributions, label: "Contributions", showDivider: true },
    { value: followers, label: "Followers", showDivider: false },
  ];

  return (
    <FadeIn>
      <div className="flex">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            label={stat.label}
            showDivider={stat.showDivider && index < stats.length - 1}
          />
        ))}
      </div>
    </FadeIn>
  );
}
