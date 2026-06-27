import type { HeroCta } from "@/types/portfolio";

interface CTAButtonProps {
  cta: HeroCta;
  onClick?: () => void;
}

export function CTAButton({ cta, onClick }: CTAButtonProps) {
  const baseClassName =
    "px-8 py-4 rounded-full font-['Inter'] text-sm uppercase tracking-widest font-medium transition-colors";
  const variantClassName =
    cta.variant === "primary"
      ? "bg-white text-black hover:bg-sky-50"
      : "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10";

  return (
    <button type="button" onClick={onClick} className={`${baseClassName} ${variantClassName}`}>
      {cta.label}
    </button>
  );
}
