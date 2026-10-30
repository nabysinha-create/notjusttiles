import Link from "next/link";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
import TiltCard from "./TiltCard";
import { COLLECTIONS } from "@/lib/products";

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="section-glow section-glow--light overflow-hidden px-(--content-gutter) py-(--section-padding)"
      style={{ backgroundColor: "var(--caramel)" }}
    >
      <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02]"
          style={{ color: "var(--linen)" }}
        >
          Featured Collections
        </h2>
        <p className="max-w-[38ch] font-body md:text-right" style={{ color: "var(--linen-muted)" }}>
          Four rooms, each curated piece by piece for how a home is actually lived in.
        </p>
      </Reveal>

      {/* Tall portrait panels; every second one drops lower so the row reads as a zig-zag.
          Two columns on phones, four from md up — the offset works the same in both. */}
      <div className="mt-10 grid grid-cols-2 gap-3 pb-10 sm:gap-5 md:mt-14 md:grid-cols-4 md:pb-16">
        {COLLECTIONS.map((collection, index) => (
          <Reveal
            key={collection.handle}
            delay={index * 0.08}
            className={index % 2 === 1 ? "translate-y-10 md:translate-y-16" : ""}
          >
            <TiltCard maxTilt={5}>
              <Link
                href={`/#${collection.handle}`}
                className="group relative block overflow-hidden"
              >
                <div className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]">
                  <ParallaxImage
                    label={collection.imageLabel}
                    src={collection.image}
                    alt={`${collection.title} collection`}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    tone="walnut"
                    className="aspect-[2/3] w-full"
                  />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                  <span className="font-body text-[0.65rem] tracking-[0.25em] text-white/70 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl"
                    style={{ color: "var(--linen)" }}
                  >
                    {collection.title}
                  </h3>
                  <p
                    className="mt-2 hidden max-w-[30ch] font-body text-sm leading-relaxed md:block"
                    style={{ color: "var(--linen-muted)" }}
                  >
                    {collection.description}
                  </p>
                  <span
                    className="link-underline mt-3 inline-block font-body text-[0.65rem] uppercase tracking-[0.2em] sm:mt-4 sm:text-xs"
                    style={{ color: "var(--linen)" }}
                  >
                    Explore
                  </span>
                </div>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
