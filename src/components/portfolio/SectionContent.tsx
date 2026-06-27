import type { PropsWithChildren } from "react";

interface SectionContentProps extends PropsWithChildren {
  className?: string;
  maxWidthClassName?: string;
}

export function SectionContent({
  children,
  className = "",
  maxWidthClassName = "max-w-7xl",
}: SectionContentProps) {
  return (
    <div className={`relative z-20 mx-auto w-full px-4 md:px-12 ${maxWidthClassName} ${className}`.trim()}>
      {children}
    </div>
  );
}
