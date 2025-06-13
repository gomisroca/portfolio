import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "hover:text-primary-500 w-fit px-1 text-sm font-semibold text-zinc-500",
        className,
      )}
      whileHover={{
        scale: 1.25,
        rotate: 0,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 1.5,
        zIndex: 10,
        rotate: 0,
        transition: {
          duration: 0.1,
        },
      }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
