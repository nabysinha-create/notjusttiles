type LogoMarkProps = {
  className?: string;
  inkColor?: string;
};

/**
 * The arch, pendant lamp, and amber lamplight over a furniture silhouette —
 * the one place amber is always present, per the Ember Rule.
 */
export function LogoMark({ className, inkColor = "var(--ink)" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 138 V56 A48 48 0 0 1 108 56 V138"
        stroke={inkColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon points="60,50 24,138 96,138" fill="var(--amber)" opacity="0.9" />
      <line x1="60" y1="14" x2="60" y2="38" stroke={inkColor} strokeWidth="2" />
      <path
        d="M48 38 H72 L66 50 H54 Z"
        fill={inkColor}
      />
      <path
        d="M28 132 V116 Q28 108 36 108 H68 Q76 108 76 116 V132"
        fill={inkColor}
      />
      <rect x="24" y="130" width="8" height="8" fill={inkColor} />
      <rect x="72" y="130" width="8" height="8" fill={inkColor} />
      <rect x="90" y="118" width="3" height="14" fill={inkColor} />
      <ellipse cx="91.5" cy="116" rx="9" ry="4" fill={inkColor} />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  stacked?: boolean;
  color?: string;
};

export function Wordmark({ className, stacked = true, color = "var(--ink)" }: WordmarkProps) {
  if (!stacked) {
    return (
      <span
        className={`font-body text-sm font-medium uppercase tracking-[0.2em] ${className ?? ""}`}
        style={{ color }}
      >
        Not Just Tiles
      </span>
    );
  }

  return (
    <span
      className={`font-display block leading-[0.95] tracking-[-0.02em] ${className ?? ""}`}
      style={{ color }}
    >
      <span className="block">NOT JUST</span>
      <span className="block">TILES</span>
    </span>
  );
}
