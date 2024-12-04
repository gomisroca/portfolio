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
      className={cn("rounded-md bg-zinc-200 p-8 dark:bg-zinc-900", className)}
    >
      {children}
    </motion.div>
  );
}

export default Section;
