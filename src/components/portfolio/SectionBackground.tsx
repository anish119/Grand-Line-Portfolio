import type { ReactNode } from "react";

interface SectionBackgroundProps {
  imageUrl: string;
  imageClassName: string;
  overlays: string[];
  extraLayers?: ReactNode;
}

export function SectionBackground({
  imageUrl,
  imageClassName,
  overlays,
  extraLayers,
}: SectionBackgroundProps) {
  return (
    <>
      <div className={imageClassName} style={{ backgroundImage: `url('${imageUrl}')` }} />
      {overlays.map((overlayClassName) => (
        <div key={overlayClassName} className={overlayClassName} />
      ))}
      {extraLayers}
    </>
  );
}
