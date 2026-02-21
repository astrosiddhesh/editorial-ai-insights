import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years in the Field" },
  { value: 10, suffix: "+", label: "Systems Shipped" },
  { value: 5, suffix: "K+", label: "Daily Active Users" },
  { value: 2, suffix: "x", label: "Innovation Awards" },
];

const StatsCounter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.98]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/[0.04] to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div className="container max-w-5xl mx-auto px-6" style={{ y, scale }}>
        {/* Overline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50">
            By the Numbers
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Number */}
              <div className="font-display font-bold text-headline leading-none mb-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                {stat.value}{stat.suffix}
              </div>

              {/* Decorative line */}
              <motion.div
                className="w-8 h-px bg-primary/30 mx-auto mb-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              />

              {/* Label */}
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsCounter;
