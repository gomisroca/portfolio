import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Flare {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7DC6F",
];

export default function BackgroundAnimation() {
  const [flares, setFlares] = useState<Flare[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateFlares = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const newFlares: Flare[] = [];
      for (let i = 0; i < 7; i++) {
        newFlares.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 50 + 10, // Adjusted size to fit smaller container
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setFlares(newFlares);
    };

    generateFlares();
    const interval = setInterval(generateFlares, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {flares.map((flare) => (
        <motion.div
          key={flare.id}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: flare.size,
            height: flare.size,
            left: flare.x,
            top: flare.y,
            backgroundColor: flare.color,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
            opacity: [flare.opacity, flare.opacity * 1.5, flare.opacity],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
        />
      ))}
    </div>
  );
}
