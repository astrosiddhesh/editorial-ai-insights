import { useEffect, useRef, useCallback } from "react";

interface TrailParticle {
  x: number;
  y: number;
  alpha: number;
  size: number;
  color: string;
  id: number;
}

// Detect if the element under cursor is on a dark or light section
const getDarkSections = (): HTMLElement[] => {
  return Array.from(
    document.querySelectorAll<HTMLElement>('[data-section-theme="dark"]')
  );
};

const isOverDarkSection = (x: number, y: number): boolean => {
  const darkSections = getDarkSections();
  for (const el of darkSections) {
    const rect = el.getBoundingClientRect();
    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      return true;
    }
  }
  return false;
};

let particleCounter = 0;

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<TrailParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);
  const isDarkRef = useRef(false);

  const spawnParticle = useCallback(() => {
    const { x, y } = mouseRef.current;
    // Cream (#EFE5C6 approx hsl(45,70%,91%)) on dark; navy (#002E77 approx hsl(220,100%,23%)) on light
    const color = isDarkRef.current
      ? "rgba(239, 229, 198," // cream
      : "rgba(0, 46, 119,";   // navy

    particlesRef.current.push({
      x: x + (Math.random() - 0.5) * 6,
      y: y + (Math.random() - 0.5) * 6,
      alpha: 0.7 + Math.random() * 0.3,
      size: 2 + Math.random() * 3,
      color,
      id: particleCounter++,
    });

    // Keep particle count bounded
    if (particlesRef.current.length > 80) {
      particlesRef.current.shift();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      isDarkRef.current = isOverDarkSection(e.clientX, e.clientY);

      const now = performance.now();
      if (now - lastSpawnRef.current > 30) {
        spawnParticle();
        lastSpawnRef.current = now;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.02);

      for (const p of particlesRef.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(3)})`;
        ctx.fill();

        // Fade and shrink
        p.alpha *= 0.88;
        p.size *= 0.97;
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [spawnParticle]);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
