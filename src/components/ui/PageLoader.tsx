import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            {/* Animated logo */}
            <motion.svg
              className="w-16 h-16 text-gold mx-auto mb-6"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              {/* Bottom layer */}
              <motion.path
                d="M6 28L20 34L34 28L20 22L6 28Z"
                fill="currentColor"
                fillOpacity={0.3}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />
              {/* Middle layer */}
              <motion.path
                d="M6 20L20 26L34 20L20 14L6 20Z"
                fill="currentColor"
                fillOpacity={0.5}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              />
              {/* Top layer */}
              <motion.path
                d="M6 12L20 18L34 12L20 6L6 12Z"
                fill="currentColor"
                fillOpacity={0.8}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              />
            </motion.svg>

            {/* Loading text */}
            <motion.p
              className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;