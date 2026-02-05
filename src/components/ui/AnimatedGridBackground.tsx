 import { useEffect, useRef } from 'react';
 import { motion } from 'framer-motion';
 
 interface Node {
   x: number;
   y: number;
   vx: number;
   vy: number;
   radius: number;
 }
 
 const AnimatedGridBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const animationRef = useRef<number>();
   const nodesRef = useRef<Node[]>([]);
   const mouseRef = useRef({ x: 0, y: 0 });
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext('2d');
     if (!ctx) return;
 
     const resizeCanvas = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     resizeCanvas();
     window.addEventListener('resize', resizeCanvas);
 
     // Initialize nodes
     const nodeCount = 40;
     nodesRef.current = Array.from({ length: nodeCount }, () => ({
       x: Math.random() * canvas.width,
       y: Math.random() * canvas.height,
       vx: (Math.random() - 0.5) * 0.3,
       vy: (Math.random() - 0.5) * 0.3,
       radius: Math.random() * 2 + 1,
     }));
 
     const handleMouseMove = (e: MouseEvent) => {
       mouseRef.current = { x: e.clientX, y: e.clientY };
     };
     window.addEventListener('mousemove', handleMouseMove);
 
     const animate = () => {
       if (!ctx || !canvas) return;
 
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       const nodes = nodesRef.current;
       const mouse = mouseRef.current;
 
       // Update and draw nodes
       nodes.forEach((node, i) => {
         // Update position
         node.x += node.vx;
         node.y += node.vy;
 
         // Bounce off edges
         if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
         if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
 
         // Mouse repulsion
         const dx = mouse.x - node.x;
         const dy = mouse.y - node.y;
         const dist = Math.sqrt(dx * dx + dy * dy);
         if (dist < 150) {
           const force = (150 - dist) / 150;
           node.vx -= (dx / dist) * force * 0.02;
           node.vy -= (dy / dist) * force * 0.02;
         }
 
         // Limit velocity
         const maxSpeed = 0.8;
         const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
         if (speed > maxSpeed) {
           node.vx = (node.vx / speed) * maxSpeed;
           node.vy = (node.vy / speed) * maxSpeed;
         }
 
         // Draw node
         ctx.beginPath();
         ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
         ctx.fillStyle = 'hsla(28, 85%, 42%, 0.4)';
         ctx.fill();
 
         // Draw connections
         for (let j = i + 1; j < nodes.length; j++) {
           const other = nodes[j];
           const connDx = other.x - node.x;
           const connDy = other.y - node.y;
           const connDist = Math.sqrt(connDx * connDx + connDy * connDy);
 
           if (connDist < 150) {
             ctx.beginPath();
             ctx.moveTo(node.x, node.y);
             ctx.lineTo(other.x, other.y);
             const opacity = (1 - connDist / 150) * 0.15;
             ctx.strokeStyle = `hsla(28, 85%, 42%, ${opacity})`;
             ctx.lineWidth = 0.5;
             ctx.stroke();
           }
         }
       });
 
       animationRef.current = requestAnimationFrame(animate);
     };
 
     animate();
 
     return () => {
       window.removeEventListener('resize', resizeCanvas);
       window.removeEventListener('mousemove', handleMouseMove);
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
     };
   }, []);
 
   return (
     <motion.canvas
       ref={canvasRef}
       className="absolute inset-0 pointer-events-none"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 2, delay: 1.5 }}
     />
   );
 };
 
 export default AnimatedGridBackground;