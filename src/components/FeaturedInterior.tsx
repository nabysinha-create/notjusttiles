import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";

const PANELS = [
  { letter: "H", src: "/living-collection.jpg", alt: "Living room styled with warm ambient lighting" },
  { letter: "O", src: "/bedroom-collection.jpg", alt: "Bedroom styled with layered natural textiles" },
  { letter: "M", src: "/studio-portrait.jpg", alt: "Warmly lit interior nook with ambient lighting" },
  { letter: "E", src: "/dining-collection.jpeg", alt: "Dining room styled with warm wood tones" },
];

export default function FeaturedInterior() {
  return (
    <section
      className="section-glow section-glow--dark overflow-hidden"
      style={{ backgroundColor: "var(--walnut)" }}
    >
      <Reveal className="px-(--content-gutter) pt-(--section-padding)">
        <div className="relative grid h-[70vh] grid-cols-2 grid-rows-2 gap-3 md:h-[75vh] md:grid-cols-4 md:grid-rows-1 md:gap-4">
          {PANELS.map((panel) => (
            <div key={panel.letter} className="relative overflow-hidden rounded-full">
              <ParallaxImage
                label={`Featured Interior — ${panel.letter}`}
                src={panel.src}
                alt={panel.alt}
                sizes="(max-width: 768px) 45vw, 20vw"
                tone="walnut"
                className="h-full w-full"
              />
            </div>
          ))}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <span
              className="font-display text-[clamp(3.5rem,14vw,11rem)] tracking-[0.05em]"
              style={{
                color: "var(--linen)",
                textShadow: "0 4px 28px rgba(10,8,6,0.55)",
              }}
            >
              HOME
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="px-(--content-gutter) py-12 text-center">
        <p
          className="font-display text-2xl italic md:text-3xl"
          style={{ color: "var(--linen)" }}
        >
          &ldquo;We didn&rsquo;t want a showroom. We wanted a home that happened to be
          furnished perfectly.&rdquo;
        </p>
        <p className="mt-3 font-body text-sm" style={{ color: "var(--linen-muted)" }}>
          Austin Residence, Interior Design by Studio Marlowe
        </p>
      </Reveal>
    </section>
  );
}
