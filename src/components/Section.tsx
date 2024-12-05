import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={cn(
        "md:p-8 z-10 rounded-md bg-zinc-50 dark:bg-zinc-950",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export default Section;
