import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeBandProps {
  words: string[];
  separator?: string;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  variant?: "light" | "dark" | "accent";
}

const MarqueeBand = ({
  words,
  separator = "·",
  direction = "left",
  speed = 30,
  className,
  variant = "light",
}: MarqueeBandProps) => {
  const text = words.join(` ${separator} `);
  // Repeat text enough times to fill the screen
  const repeatedText = `${text} ${separator} `.repeat(8);

  const variants = {
    light: "bg-background border-primary/10 text-primary/40",
    dark: "bg-ink text-cream/30 border-cream/10",
    accent: "bg-primary text-primary-foreground/70 border-primary-foreground/10",
  };

  return (
    <div
      className={cn(
        "overflow-hidden py-4 md:py-5 border-y select-none",
        variants[variant],
        className
      )}
    >
      <motion.div
        className="whitespace-nowrap font-body text-[10px] md:text-xs uppercase tracking-[0.4em]"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

export default MarqueeBand;
