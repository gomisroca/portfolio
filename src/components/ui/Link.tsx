import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Button({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        "w-fit rounded-md px-1 text-sm font-semibold text-neutral-500 hover:text-primary-500",
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
    </motion.a>
  );
}

export default Button;
