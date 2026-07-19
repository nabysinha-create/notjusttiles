"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlaceholderImage from "./PlaceholderImage";

type ParallaxImageProps = {
  label: string;
  className?: string;
  tone?: "linen" | "stone" | "charcoal" | "walnut";
  src?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ParallaxImage({
  label,
  className,
  tone,
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !containerRef.current || !imageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className ?? ""}`}>
      <div ref={imageRef} className="relative h-full w-full">
        {src ? (
          <>
            <Image
              src={src}
              alt={alt ?? label}
              fill
              sizes={sizes}
              priority={priority}
              className="warm-photo-grade object-cover"
            />
            <div aria-hidden className="warm-photo-glow" />
          </>
        ) : (
          <PlaceholderImage label={label} tone={tone} className="h-full w-full" />
        )}
      </div>
    </div>
  );
}
