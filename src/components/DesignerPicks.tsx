import Link from "next/link";
import Reveal from "./Reveal";
import ParallaxImage from "./ParallaxImage";
import { getFeaturedProducts } from "@/lib/products";

export default function DesignerPicks() {
  const products = getFeaturedProducts();

  return (
    <section
      className="section-glow section-glow--dark overflow-hidden py-(--section-padding)"
      style={{ backgroundColor: "var(--walnut)" }}
    >
      <div aria-hidden className="diagonal-accent" />

      <Reveal className="px-(--content-gutter)">
        <h2 className="font-display text-[clamp(2rem,3.5vw,3.25rem)]" style={{ color: "var(--linen)" }}>
          Designer Picks
        </h2>
        <p className="mt-3 max-w-[50ch] font-body" style={{ color: "var(--linen-muted)" }}>
          A short list, chosen this season by our in-house design team.
        </p>
      </Reveal>

      {/* Mobile: swipeable row with the next card peeking in. sm+: three-column grid. */}
      <Reveal className="mt-10">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-(--content-gutter) px-(--content-gutter) sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible">
          {products.map((product) => (
            <div key={product.handle} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <Link href={`/products/${product.handle}`} className="group block">
                <ParallaxImage
                  label={product.imageLabel}
                  src={product.image}
                  alt={product.title}
                  sizes="(max-width: 640px) 80vw, 33vw"
                  tone="walnut"
                  className="aspect-[4/5] w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="mt-5 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100">
                  <h3 className="font-body text-sm uppercase tracking-[0.1em]" style={{ color: "var(--linen)" }}>
                    {product.title}
                  </h3>
                  <p className="mt-1 font-body text-sm" style={{ color: "var(--linen-muted)" }}>
                    ${product.price.toLocaleString("en-US")}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
