import Reveal from "./Reveal";

const MATERIALS = [
  ["Solid Oak", "Walnut Veneer", "Reclaimed Teak", "Kiln-Dried Hardwood"],
  ["Natural Stone", "Brushed Bronze", "Blackened Steel", "Cast Iron"],
  ["Linen Textile", "Wool Upholstery", "Full-Grain Leather", "Hand-Finished Surfaces"],
];

export default function PremiumMaterials() {
  return (
    <section
      className="section-glow section-glow--light grid grid-cols-1 gap-10 overflow-hidden px-(--content-gutter) py-(--section-padding) md:grid-cols-[minmax(0,1fr)_2fr] md:gap-16"
      style={{ backgroundColor: "var(--caramel)" }}
    >
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,3vw,2.75rem)]" style={{ color: "var(--linen)" }}>
          Premium Materials
        </h2>
        <p className="mt-5 max-w-[40ch] font-body" style={{ color: "var(--linen-muted)" }}>
          Every material is chosen for how it ages, not just how it photographs.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-y-6">
        {MATERIALS.map((column, columnIndex) => (
          <Reveal key={columnIndex} delay={columnIndex * 0.1}>
            {/* Two-up on phones so the list isn't twelve rows long. */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-col">
              {column.map((material) => (
                <li
                  key={material}
                  className="border-t pt-4 font-body text-sm"
                  style={{ borderColor: "var(--caramel-deep)", color: "var(--linen)" }}
                >
                  {material}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
