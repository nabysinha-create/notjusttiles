"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: delay / 3 },
        }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay, ease: EASE_OUT_EXPO },
        };

  return (
    <section
      className="relative flex h-screen w-full items-center justify-start overflow-hidden"
      style={{ backgroundColor: "var(--ink-deep)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero-720.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/video/hero-1080.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,12,10,0.35) 0%, rgba(15,12,10,0.08) 30%, rgba(15,12,10,0.12) 60%, rgba(15,12,10,0.55) 100%)",
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-start px-(--content-gutter) text-left">
        <motion.h1
          {...reveal(0.15)}
          className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em]"
          style={{ color: "var(--linen)" }}
        >
          Curated.
          <br />
          Not Collected.
        </motion.h1>

        <motion.p
          {...reveal(0.55)}
          className="mt-8 max-w-[42ch] font-body text-base leading-relaxed md:text-lg"
          style={{ color: "var(--linen)" }}
        >
          Premium American furniture selected for homes that value craftsmanship,
          comfort and timeless design.
        </motion.p>

        <motion.div
          {...reveal(0.9)}
          className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <a
            href="#collections"
            className="btn-outline px-9 py-3.5 font-body text-xs uppercase tracking-[0.2em]"
          >
            Explore Collection
          </a>

          <a
            href="#consultation"
            className="font-body text-xs uppercase tracking-[0.2em] underline underline-offset-8 opacity-90 transition-opacity duration-300 hover:opacity-100"
            style={{ color: "var(--linen)" }}
          >
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
