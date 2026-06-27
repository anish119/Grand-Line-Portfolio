import type { SplitHeading } from "@/types/portfolio";

interface SectionHeaderProps {
  align?: "start" | "center";
  label: string;
  labelClassName: string;
  lineClassName: string;
  lineWidthClassName?: string;
  headingClassName: string;
  emphasisClassName: string;
  title: SplitHeading;
  className?: string;
}

export function SectionHeader({
  align = "start",
  label,
  labelClassName,
  lineClassName,
  lineWidthClassName = "w-12",
  headingClassName,
  emphasisClassName,
  title,
  className = "",
}: SectionHeaderProps) {
  const eyebrow = align === "center" ? (
    <div className={`flex items-center justify-center gap-4 mb-8 ${className}`.trim()}>
      <div className={`${lineWidthClassName} h-[1px] ${lineClassName}`} />
      <span className={labelClassName}>{label}</span>
      <div className={`${lineWidthClassName} h-[1px] ${lineClassName}`} />
    </div>
  ) : (
    <div className={`flex items-center gap-4 mb-8 ${className}`.trim()}>
      <div className={`${lineWidthClassName} h-[1px] ${lineClassName}`} />
      <span className={labelClassName}>{label}</span>
    </div>
  );

  return (
    <>
      {eyebrow}
      <h2 className={headingClassName}>
        {title.leading} <br /> <span className={emphasisClassName}>{title.emphasis}</span>
        {title.trailing}
      </h2>
    </>
  );
}
