import Reveal from "./Reveal";
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

      <Reveal className="mt-12 px-(--content-gutter)">
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-video">
          <video
            className="warm-photo-grade absolute inset-0 h-full w-full object-cover"
            src="/video/craftsmanship-new.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Craftspeople at work in the joinery workshop"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl" style={{ color: "var(--linen)" }}>
              Three generations of joinery, one standard
            </h3>
            <p
              className="mt-3 max-w-[45ch] font-body md:text-lg"
              style={{ color: "var(--linen-muted)" }}
            >
              Our lead workshop in North Carolina has built case goods since 1978. Nothing
              leaves the bench until it passes the same hand test it did fifty years ago.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
