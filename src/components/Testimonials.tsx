import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Every piece arrived exactly as promised, and the finish only looks better a year in. This is the first furniture purchase I haven't second-guessed.",
    name: "Eleanor Voss",
    role: "Homeowner, Aspen, CO",
  },
  {
    quote:
      "I specify furniture for a living. NOTJUSTTILES is one of the few sources I trust to tell a client the truth about how a piece will age.",
    name: "Marcus Boone",
    role: "Principal, Boone Architecture",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-glow section-glow--dark grid grid-cols-1 gap-12 overflow-hidden px-(--content-gutter) py-(--section-padding) md:grid-cols-2 md:gap-16"
      style={{ backgroundColor: "var(--umber)" }}
    >
      {TESTIMONIALS.map((testimonial, index) => (
        <Reveal key={testimonial.name} delay={index * 0.15}>
          <div className="rule-amber mb-6" />
          <p
            className="font-display text-2xl italic leading-snug md:text-[1.75rem]"
            style={{ color: "var(--linen)" }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p
            className="mt-5 font-body text-sm uppercase tracking-[0.1em]"
            style={{ color: "var(--linen)" }}
          >
            {testimonial.name}
          </p>
          <p className="mt-1 font-body text-sm" style={{ color: "var(--linen-muted)" }}>
            {testimonial.role}
          </p>
        </Reveal>
      ))}
    </section>
  );
}
