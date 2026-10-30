import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

export default function LuxuryStory() {
  return (
    <section
      id="about"
      className="section-glow section-glow--dark overflow-hidden pt-(--section-padding)"
      style={{ backgroundColor: "var(--umber)" }}
    >
      {/* Copy first: headline left, body right on md+, stacked on phones. */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-(--content-gutter) md:grid-cols-[5fr_7fr] md:gap-16">
        <Reveal>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]"
            style={{ color: "var(--linen)" }}
          >
            More Than Furniture.
          </h2>
          <div className="mt-6 rule-amber" />
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="flex max-w-[58ch] flex-col gap-4 font-body text-base leading-relaxed md:pt-3 md:text-lg"
            style={{ color: "var(--linen-muted)" }}
          >
            <p style={{ color: "var(--linen)" }}>We build homes that feel considered.</p>
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
        </Reveal>
      </div>

      {/* Full-bleed image, edge to edge. */}
      <Reveal delay={0.1} className="mt-12 md:mt-16">
        <ParallaxImage
          label="Luxury Lounge"
          src="/about-lounge.jpg"
          alt="Moody lounge with a curved rust velvet sofa, marble table and a city skyline view"
          sizes="100vw"
          tone="charcoal"
          className="aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
        />
      </Reveal>
    </section>
  );
}
