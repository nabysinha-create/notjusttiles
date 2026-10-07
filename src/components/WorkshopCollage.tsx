import Image from "next/image";

const TILES = [
  {
    area: "hero",
    src: "/workshop-craftsman-saw.jpg",
    alt: "Craftsman cutting hardwood with a circular saw, tool wall behind",
  },
  {
    area: "tools",
    src: "/workshop-old-tools.jpg",
    alt: "Hand plane and vintage tools laid out on a workshop bench",
  },
  {
    area: "action",
    src: "/workshop-sawdust-action.jpg",
    alt: "Sawdust flying as a hardwood plank is cut on a table saw",
  },
  {
    area: "bench",
    src: "/workshop-artisan-bench.jpg",
    alt: "Craftsperson's hands marking a joint on the workbench",
  },
];

export default function WorkshopCollage() {
  return (
    <div className="workshop-collage h-[65vh] gap-3 md:h-[55vh] md:gap-4">
      {TILES.map((tile) => (
        <div key={tile.area} className="relative overflow-hidden" style={{ gridArea: tile.area }}>
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(max-width: 768px) 50vw, 35vw"
            className="warm-photo-grade object-cover"
          />
          <div aria-hidden className="warm-photo-glow" />
        </div>
      ))}
    </div>
  );
}
