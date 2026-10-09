"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const MUSIC_VOLUME = 0.6;
// Only these count as a user gesture for unmuting; scroll and wheel do not,
// and unmuting without a gesture makes browsers pause the video.
const GESTURE_EVENTS = ["pointerdown", "keydown", "touchend"] as const;

function fadeIn(video: HTMLVideoElement) {
  video.volume = 0;
  video.muted = false;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min((now - start) / 1500, 1);
    video.volume = t * MUSIC_VOLUME;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  // Set once the visitor uses the sound button, so the auto-start never overrides them.
  const userChoseRef = useRef(false);

  // Start the music on the visitor's first click, tap or key press.
  useEffect(() => {
    const start = () => {
      const video = videoRef.current;
      if (video && !userChoseRef.current) {
        fadeIn(video);
        video.play().catch(() => {});
        setSoundOn(true);
      }
      GESTURE_EVENTS.forEach((e) => window.removeEventListener(e, start));
    };
    GESTURE_EVENTS.forEach((e) => window.addEventListener(e, start, { once: true }));
    return () => GESTURE_EVENTS.forEach((e) => window.removeEventListener(e, start));
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    userChoseRef.current = true;
    if (soundOn) {
      video.muted = true;
    } else {
      fadeIn(video);
      video.play().catch(() => {});
    }
    setSoundOn(!soundOn);
  };

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
        ref={videoRef}
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

      <button
        type="button"
        onClick={toggleSound}
        // Keep the button's own press from also triggering the first-gesture handler.
        onPointerDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        aria-label={soundOn ? "Mute music" : "Play music"}
        aria-pressed={soundOn}
        className="absolute bottom-8 right-(--content-gutter) z-10 flex h-11 w-11 items-center justify-center rounded-full border opacity-80 transition-opacity duration-300 hover:opacity-100"
        style={{ color: "var(--linen)", borderColor: "var(--linen)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M11 5 6 9H3v6h3l5 4V5z" />
          {soundOn ? (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          ) : (
            <path d="m16 9 5 6m0-6-5 6" />
          )}
        </svg>
      </button>
    </section>
  );
}
