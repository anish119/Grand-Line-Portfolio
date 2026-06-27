import type { PropsWithChildren } from "react";

interface SectionShellProps extends PropsWithChildren {
  className: string;
}

export function SectionShell({ children, className }: SectionShellProps) {
  return <div className={`relative w-full min-h-screen overflow-hidden ${className}`}>{children}</div>;
}
