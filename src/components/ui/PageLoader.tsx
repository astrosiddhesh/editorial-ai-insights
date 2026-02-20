import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageLoaderProps {
  isLoading: boolean;
  onEnter?: () => void;
}

const PageLoader = ({ isLoading, onEnter }: PageLoaderProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  // Simulated progress bar
  useEffect(() => {
    if (!isLoading) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setReady(true);
          return 100;
        }
        // Ease towards 100 with diminishing increments
        const remaining = 100 - prev;
        return prev + Math.max(remaining * 0.08, 0.5);
      });
    }, 50);
    return () => clearInterval(timer);
  }, [isLoading]);

  const handleEnter = () => {
    if (!ready) return;
    setIsExiting(true);
    setTimeout(() => {
      onEnter?.();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          style={{ backgroundColor: "hsl(45, 70%, 91%)" }}
          onClick={handleEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Curtain panels — sit BEHIND the content */}
          <motion.div
            className="absolute inset-0 z-[1]"
            style={{ backgroundColor: "hsl(45, 70%, 91%)" }}
            animate={isExiting ? { clipPath: "inset(0 0 100% 0)" } : { clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full z-[2]"
            style={{ backgroundColor: "hsl(220, 100%, 23%)" }}
            initial={{ y: "100%" }}
            animate={isExiting ? { y: "0%" } : { y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full z-[2]"
            style={{ backgroundColor: "hsl(220, 100%, 23%)" }}
            initial={{ y: "-100%" }}
            animate={isExiting ? { y: "0%" } : { y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.02] z-[3]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="text-center relative z-[10]">
            {/* Moon icon with oval border */}
            <motion.div
              className="relative mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.div
                className="w-24 h-28 rounded-[50%] border flex items-center justify-center mx-auto"
                style={{ borderColor: "hsl(220, 100%, 23%)" }}
                animate={{
                  scale: isHovered && ready ? 1.08 : 1,
                  borderWidth: isHovered && ready ? 2 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg
                  className="w-12 h-12"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "hsl(220, 100%, 23%)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <path
                    d="M28 20c0 5.5-4.5 10-10 10-1.5 0-2.9-.3-4.2-.9C17.4 27.5 20 23.9 20 20s-2.6-7.5-6.2-9.1c1.3-.6 2.7-.9 4.2-.9 5.5 0 10 4.5 10 10z"
                    fill="currentColor"
                    fillOpacity={0.6}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Staggered name reveal */}
            <motion.div
              className="mb-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.p
                className="font-display text-3xl md:text-5xl font-bold tracking-wide"
                style={{ color: "hsl(220, 100%, 23%)" }}
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Siddhesh Phapale
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 h-[2px] mx-auto mb-6 overflow-hidden rounded-full"
              style={{ backgroundColor: "hsl(220, 100%, 23%, 0.1)" }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: "hsl(220, 100%, 23%)",
                  width: `${progress}%`,
                  transition: "width 0.1s ease-out",
                }}
              />
            </motion.div>

            {/* Enter Site CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col items-center gap-3 mt-2"
            >
              {!ready ? (
                <p
                  className="font-body text-xs tracking-[0.3em] uppercase"
                  style={{ color: "hsl(220, 100%, 23%, 0.45)" }}
                >
                  Loading...
                </p>
              ) : (
                <>
                  {/* Pulsing ring — capped scale to prevent mobile clipping */}
                  <motion.div
                    className="relative flex items-center justify-center cursor-pointer overflow-visible"
                    onClick={handleEnter}
                  >
                    <motion.div
                      className="absolute w-16 h-16 rounded-full border"
                      style={{ borderColor: "hsl(220, 100%, 23%)" }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute w-16 h-16 rounded-full border"
                      style={{ borderColor: "hsl(220, 100%, 23%)" }}
                      animate={{ scale: [1, 1.7, 1], opacity: [0.25, 0, 0.25] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    />
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "hsl(220, 100%, 23%)" }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xl" style={{ color: "hsl(45, 70%, 91%)" }}>→</span>
                    </motion.div>
                  </motion.div>

                  <motion.p
                    className="font-display text-sm tracking-[0.2em] uppercase cursor-pointer"
                    style={{ color: "hsl(220, 100%, 23%)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ letterSpacing: "0.3em" }}
                    onClick={handleEnter}
                  >
                    Enter Site
                  </motion.p>

                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
