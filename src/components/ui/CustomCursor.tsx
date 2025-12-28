import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer glow ring */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(var(--gold) / 0.15) 0%, transparent 70%)`,
          mixBlendMode: "screen",
        }}
      />
      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          transform: "translate(-50%, -50%)",
          backgroundColor: "hsl(var(--gold))",
        }}
      />
    </>
  );
};

export default CustomCursor;
