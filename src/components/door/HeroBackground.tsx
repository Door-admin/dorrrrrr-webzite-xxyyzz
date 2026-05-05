import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Subtle ambient background — soft floating orbs + drifting particles.
 * Inspired by the starfield depth in countdown.substraterx.com but tuned
 * to Door's warm palette.
 */
export function HeroBackground() {
  // Deterministic particle positions so SSR + client match (no hydration mismatch).
  const particles = useMemo(() => {
    const seeded = (i: number) => {
      const x = Math.sin(i * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return Array.from({ length: 36 }, (_, i) => ({
      left: seeded(i) * 100,
      top: seeded(i + 100) * 100,
      size: 1 + seeded(i + 200) * 2.4,
      delay: seeded(i + 300) * 6,
      duration: 6 + seeded(i + 400) * 6,
      opacity: 0.25 + seeded(i + 500) * 0.45,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base radial wash */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />

      {/* Floating warm orbs */}
      <motion.div
        aria-hidden
        className="absolute -left-24 top-[12%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.82 0.18 60 / 0.28), transparent 70%)",
        }}
        animate={{ x: [0, 40, -10, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 bottom-[8%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.2 45 / 0.22), transparent 70%)",
        }}
        animate={{ x: [0, -50, 15, 0], y: [0, 25, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -18, 0], opacity: [p.opacity, p.opacity * 0.4, p.opacity] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, oklch(0.18 0.02 40 / 0.08) 100%)",
        }}
      />
    </div>
  );
}
