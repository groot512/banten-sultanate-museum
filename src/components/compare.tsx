import { useState } from "react";
import type { Copy } from "@/lib/i18n";
import { useT } from "@/lib/i18n";
import { ui } from "@/lib/content";
import { VirtualBadge } from "@/components/shell";

export function Compare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
  offsetHeader = false,
  showBadge = true,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: Copy;
  afterAlt: Copy;
  className?: string;
  offsetHeader?: boolean;
  showBadge?: boolean;
}) {
  const t = useT();
  const [value, setValue] = useState(58);

  return (
    <div className={`relative h-full min-h-80 w-full overflow-hidden bg-teak ${className}`}>
      <img
        src={afterSrc}
        alt={t(afterAlt)}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <img
        src={beforeSrc}
        alt=""
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-y-0 w-px bg-sand" style={{ left: `${value}%` }} />
      <div
        className="absolute inset-x-0 flex items-center gap-3 bg-gradient-to-b from-ink/80 to-transparent px-4 pt-3"
        style={{ top: offsetHeader ? "4rem" : 0 }}
      >
        <span className="w-16 shrink-0 text-xs leading-tight text-sand sm:w-28">{t(ui.recon)}</span>
        <input
          className="compare min-w-0 flex-1"
          type="range"
          min={8}
          max={92}
          value={value}
          aria-valuemin={8}
          aria-valuemax={92}
          aria-valuenow={value}
          aria-label={`${t(ui.recon)} / ${t(ui.today)}`}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <span className="w-16 shrink-0 text-right text-xs leading-tight text-sand sm:w-28">{t(ui.today)}</span>
      </div>
      {showBadge ? (
        <div className="absolute bottom-3 left-3">
          <VirtualBadge />
        </div>
      ) : null}
    </div>
  );
}
