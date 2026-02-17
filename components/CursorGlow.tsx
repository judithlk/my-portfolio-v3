"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

type CursorGlowProps = {
  color?: string;
  size?: number;
};

export default function CursorGlow({
  color = "#7C6F78",
  size = 28,
}: CursorGlowProps) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 180, damping: 45, mass: 0.6 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 35, mass: 0.6 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - size / 2);
      y.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y, size]);

  return (
    <motion.div
      aria-hidden
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
    >
      <div className="relative">
        {/* soft outer glow */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-25"
          style={{ backgroundColor: color }}
        />

        {/* brighter core */}
        <div
          className="rounded-full blur-md opacity-40"
          style={{ width: size, height: size, backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
