import { motion } from "framer-motion";

const HeroAnimatedLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large sweeping arc — top left to bottom right */}
        <motion.path
          d="M-100 200 Q 400 100, 720 450 T 1540 300"
          stroke="hsl(var(--primary))"
          strokeWidth="0.8"
          strokeOpacity="0.12"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Counter arc — bottom left to top right */}
        <motion.path
          d="M-50 700 Q 500 400, 900 500 T 1500 200"
          stroke="hsl(var(--primary))"
          strokeWidth="0.6"
          strokeOpacity="0.08"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Subtle horizontal line through center */}
        <motion.line
          x1="-100" y1="450" x2="1540" y2="450"
          stroke="hsl(var(--primary))"
          strokeWidth="0.4"
          strokeOpacity="0.06"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 1.2, ease: "easeInOut" }}
        />

        {/* Elegant circle — off-center left */}
        <motion.circle
          cx="300"
          cy="400"
          r="200"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.07"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
        />

        {/* Small circle — accent, right side */}
        <motion.circle
          cx="1100"
          cy="350"
          r="80"
          stroke="hsl(var(--primary))"
          strokeWidth="0.6"
          strokeOpacity="0.1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Flowing arc — upper area */}
        <motion.path
          d="M200 50 Q 720 200, 1300 80"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.09"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1.8, ease: "easeInOut" }}
        />

        {/* Diagonal line — subtle geometric accent */}
        <motion.line
          x1="1200" y1="100" x2="900" y2="800"
          stroke="hsl(var(--primary))"
          strokeWidth="0.3"
          strokeOpacity="0.05"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 2, ease: "easeInOut" }}
        />

        {/* Lower flowing curve */}
        <motion.path
          d="M-50 600 Q 400 750, 800 650 T 1500 700"
          stroke="hsl(var(--primary))"
          strokeWidth="0.4"
          strokeOpacity="0.06"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, delay: 1.4, ease: "easeInOut" }}
        />
      </svg>

      {/* Soft radial glow — atmospheric, not a blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default HeroAnimatedLines;
