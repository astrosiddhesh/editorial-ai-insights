import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DiscoverableElementProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Interactive hover-reveal element — hidden content that appears on hover
export const DiscoverableElement = ({ 
  trigger, 
  content, 
  className,
  direction = 'up'
}: DiscoverableElementProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const motionDirections = {
    up: { y: 10, x: 0 },
    down: { y: -10, x: 0 },
    left: { x: 10, y: 0 },
    right: { x: -10, y: 0 },
  };

  return (
    <div 
      className={cn("relative inline-block cursor-pointer group", className)}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <div className="relative z-10">
        {trigger}
      </div>
      
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            className="absolute z-20 left-1/2 -translate-x-1/2 bottom-full mb-3 whitespace-nowrap"
            initial={{ 
              opacity: 0, 
              ...motionDirections[direction],
              filter: 'blur(4px)' 
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              x: 0,
              filter: 'blur(0px)' 
            }}
            exit={{ 
              opacity: 0, 
              ...motionDirections[direction],
              filter: 'blur(4px)' 
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Glowing dot that reveals text on hover — for dark sections
interface GlowingInsightProps {
  text: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  className?: string;
}

export const GlowingInsight = ({ text, position, className }: GlowingInsightProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      className={cn("absolute z-30 cursor-pointer", className)}
      style={position}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      {/* Glowing dot */}
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-cream/60 shadow-[0_0_12px_hsl(45,70%,91%,0.4)]" />
        <motion.div
          className="absolute inset-0 rounded-full bg-cream/30"
          animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Revealed text */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 px-4 py-2 bg-cream/95 backdrop-blur-sm rounded-sm shadow-lg"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-editorial text-xs text-ink whitespace-nowrap tracking-wide">
              {text}
            </p>
            {/* Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-cream/95" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Hidden text that slowly appears as user hovers over an area
interface HiddenMessageProps {
  message: string;
  className?: string;
}

export const HiddenMessage = ({ message, className }: HiddenMessageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative overflow-hidden cursor-crosshair select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.p
        className="font-editorial text-xs tracking-[0.3em] uppercase text-primary/20"
        animate={{ 
          color: isHovered ? 'hsl(220, 100%, 23%)' : 'hsl(220, 100%, 23%, 0.15)',
          letterSpacing: isHovered ? '0.3em' : '0.5em'
        }}
        transition={{ duration: 0.6 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

export default DiscoverableElement;
