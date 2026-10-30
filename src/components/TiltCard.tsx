"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Resting rotateY in degrees — sign sets which way the card faces. */
  restAngle?: number;
  /** Peak hover rotation in degrees; keep low on large cards. */
  maxTilt?: number;
};

const SPRING = { stiffness: 160, damping: 18, mass: 0.6 };

/**
 * Perspective card that rests angled toward its copy, then follows the
 * pointer on hover. Pointer-only: touch devices keep the resting angle.
 */
export default function TiltCard({
  children,
  className,
  restAngle = 0,
  maxTilt = 10,
}: TiltCardProps) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const hovering = useMotionValue(0);

  const rotateY = useSpring(
    useTransform([pointerX, hovering], ([x, h]: number[]) =>
      h ? x * maxTilt : restAngle,
    ),
    SPRING,
  );
  const rotateX = useSpring(
    useTransform([pointerY, hovering], ([y, h]: number[]) => (h ? -y * maxTilt : 0)),
    SPRING,
  );
  const lift = useSpring(useTransform(hovering, [0, 1], [0, 24]), SPRING);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className} style={{ perspective: 1100 }}>
      <motion.div
        className="relative h-full w-full shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, z: lift }}
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          const rect = event.currentTarget.getBoundingClientRect();
          pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
          pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
          hovering.set(1);
        }}
        onPointerLeave={() => hovering.set(0)}
      >
        {children}
      </motion.div>
    </div>
  );
}
