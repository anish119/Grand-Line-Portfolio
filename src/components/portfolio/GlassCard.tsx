import type { PropsWithChildren } from "react";

interface GlassCardProps extends PropsWithChildren {
  className: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return <div className={className}>{children}</div>;
}
