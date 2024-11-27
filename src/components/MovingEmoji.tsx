import { motion } from "framer-motion";

function MovingEmoji({ children }: { children: string }) {
  const waveAnimation = {
    rotate: [0, 15, 0, 15, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  };
  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{ originX: 0.7, originY: 0.7 }}
        animate={waveAnimation}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default MovingEmoji;
