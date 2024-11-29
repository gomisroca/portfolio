import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function FadeInText({
  children,
  className,
  speed = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: speed,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
    >
      {children}
    </motion.div>
  );
}

export default FadeInText;
