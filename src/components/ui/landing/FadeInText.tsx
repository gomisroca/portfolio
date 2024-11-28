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
  return (
    <motion.div
      className={className}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: speed, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInText;
