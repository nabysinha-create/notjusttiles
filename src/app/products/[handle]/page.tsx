import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { getProductByHandle, PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ handle: product.handle }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) notFound();

  return (
    <>
      <Nav solid />
      <main
        className="grid min-h-screen grid-cols-1 pt-24 md:grid-cols-2 md:pt-0"
        style={{ backgroundColor: "var(--linen)", color: "var(--ink)" }}
      >
        <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-screen">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="warm-photo-grade object-cover"
          />
          <div aria-hidden className="warm-photo-glow" />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background: "linear-gradient(to bottom, rgba(15,12,10,0.35) 0%, rgba(15,12,10,0) 100%)",
            }}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 px-(--content-gutter) py-16">
          <h1 className="font-display text-4xl">{product.title}</h1>
          <p className="font-body text-lg" style={{ color: "var(--ink-muted)" }}>
            ${product.price.toLocaleString("en-US")}
          </p>
          <button type="button" className="btn-outline-ink w-fit px-9 py-3.5 font-body text-xs uppercase tracking-[0.2em]">
            Book Consultation
          </button>
        </div>
      </main>
    </>
  );
}
