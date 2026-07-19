type Tone = "linen" | "stone" | "charcoal" | "walnut";

type PlaceholderImageProps = {
  label: string;
  className?: string;
  tone?: Tone;
};

const TONE_STYLES: Record<Tone, { from: string; to: string; label: string }> = {
  linen: { from: "var(--linen)", to: "var(--stone-deep)", label: "var(--ink-muted)" },
  stone: { from: "var(--stone)", to: "var(--stone-deep)", label: "var(--ink-muted)" },
  charcoal: { from: "var(--charcoal)", to: "var(--walnut)", label: "var(--linen-muted)" },
  walnut: { from: "var(--walnut)", to: "var(--umber)", label: "var(--linen-muted)" },
};

/**
 * Stand-in for commissioned photography. Renders an intentional, quiet
 * neutral frame with a small caption naming the shot — swap for a real
 * <Image> once photography exists; no layout changes required.
 */
export default function PlaceholderImage({
  label,
  className,
  tone = "stone",
}: PlaceholderImageProps) {
  const { from, to, label: labelColor } = TONE_STYLES[tone];

  return (
    <div
      className={`relative flex items-end overflow-hidden ${className ?? ""}`}
      style={{
        background: `linear-gradient(155deg, ${from} 0%, ${to} 140%)`,
      }}
    >
      <span
        className="m-5 font-body text-[0.65rem] uppercase tracking-[0.15em]"
        style={{ color: labelColor }}
      >
        {label}
      </span>
    </div>
  );
}
