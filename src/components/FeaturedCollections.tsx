import Link from "next/link";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
import { COLLECTIONS } from "@/lib/products";

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="section-glow section-glow--light overflow-hidden py-(--section-padding)"
      style={{ backgroundColor: "var(--caramel)" }}
    >
      <Reveal className="px-(--content-gutter)">
        <h2
          className="font-display text-[clamp(2rem,3.5vw,3.25rem)]"
          style={{ color: "var(--linen)" }}
        >
          Featured Collections
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col">
        {COLLECTIONS.map((collection, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={collection.handle} delay={0.05}>
              <Link
                href={`/#${collection.handle}`}
                className={`group grid grid-cols-1 gap-8 border-t px-(--content-gutter) py-10 md:grid-cols-[3fr_2fr] md:items-center md:gap-12 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
                style={{ borderColor: "var(--caramel-deep)" }}
              >
                <ParallaxImage
                  label={collection.imageLabel}
                  src={collection.image}
                  alt={`${collection.title} collection`}
                  tone="walnut"
                  className="aspect-[4/3] w-full"
                />
                <div>
                  <h3 className="font-display text-3xl" style={{ color: "var(--linen)" }}>
                    {collection.title}
                  </h3>
                  <p
                    className="mt-3 max-w-[45ch] font-body"
                    style={{ color: "var(--linen-muted)" }}
                  >
                    {collection.description}
                  </p>
                  <span className="link-underline mt-5 inline-block font-body text-xs uppercase tracking-[0.15em]">
                    Explore {collection.title}
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
