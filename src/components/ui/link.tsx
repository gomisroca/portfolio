import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Link({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a href={href}>
      <motion.div
        className={cn(
          "font-semibold bg-neutral-700 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-900 dark:hover:text-primary-700 hover:text-primary-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 w-fit rounded-xl p-2",
          className
        )}
        whileHover={{
          scale: 1.25,
          transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        }}
        whileTap={{
          scale: 1.5,
          zIndex: 10,
          transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          duration: 0.2,
        }}
      >
        {children}
      </motion.div>
    </a>
  );
}

Link.displayName = "Link";
export default Link;
