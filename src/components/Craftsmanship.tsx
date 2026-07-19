import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
import WorkshopCollage from "./WorkshopCollage";

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="section-glow section-glow--dark overflow-hidden py-(--section-padding)"
      style={{ backgroundColor: "var(--umber)" }}
    >
      <Reveal className="mx-auto max-w-2xl px-(--content-gutter) text-center">
        <h2
          className="font-display text-[clamp(2rem,3.5vw,3.25rem)]"
          style={{ color: "var(--linen)" }}
        >
          Craftsmanship you can feel before you see it
        </h2>
        <p
          className="mx-auto mt-5 max-w-[55ch] font-body text-base leading-relaxed md:text-lg"
          style={{ color: "var(--linen-muted)" }}
        >
          Joinery over adhesive. Kiln-dried hardwood over veneer shortcuts. Every workshop
          we partner with earns its place by opening its doors — we visit before we buy.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 px-(--content-gutter)">
        <WorkshopCollage />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 px-(--content-gutter) md:grid-cols-2 md:gap-12">
        <Reveal>
          <ParallaxImage
            label="Hand-Finished Joinery"
            src="/hand-finished-joinery.webp"
            alt="Craftsperson hand-drilling a joinery detail into raw wood"
            tone="charcoal"
            className="aspect-[4/3] w-full"
          />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <h3 className="font-display text-2xl" style={{ color: "var(--linen)" }}>
            Three generations of joinery, one standard
          </h3>
          <p className="mt-3 max-w-[45ch] font-body" style={{ color: "var(--linen-muted)" }}>
            Our lead workshop in North Carolina has built case goods since 1978. Nothing
            leaves the bench until it passes the same hand test it did fifty years ago.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
