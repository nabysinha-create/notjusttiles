import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

export default function LuxuryStory() {
  return (
    <section
      className="section-glow section-glow--dark grid grid-cols-1 items-center gap-12 overflow-hidden px-(--content-gutter) py-(--section-padding) md:grid-cols-2 md:gap-16"
      style={{ backgroundColor: "var(--umber)" }}
    >
      <Reveal>
        <ParallaxImage
          label="Studio Portrait"
          src="/studio-portrait.jpg"
          alt="Warmly lit interior nook showcasing considered ambient lighting"
          tone="charcoal"
          className="aspect-[4/5] w-full"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <h2
          className="font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1]"
          style={{ color: "var(--linen)" }}
        >
          More Than Furniture.
        </h2>
        <div
          className="mt-6 flex max-w-[55ch] flex-col gap-4 font-body text-base leading-relaxed md:text-lg"
          style={{ color: "var(--linen-muted)" }}
        >
          <p>We build homes that feel considered.</p>
          <p>
            Every collection is selected for the way it lives inside a home—its
            proportions, comfort, materials, and the feeling it creates long after the
            first impression.
          </p>
          <p>
            NotJustTiles brings together furniture, lighting, décor, and interior styling
            from respected American brands, helping homeowners create spaces that feel
            timeless rather than trendy.
          </p>
        </div>
        <div className="mt-8 rule-amber" />
      </Reveal>
    </section>
  );
}
