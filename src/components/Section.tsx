import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Section({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
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
      <div className="mb-2 ml-[20%] mr-[20%]">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <motion.hr
          initial={{ width: "25%" }}
          whileInView={{ width: "100%" }}
          exit={{ width: "25%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border-b-4 border-zinc-800 dark:border-zinc-200"
        />
      </div>
      {children}
    </motion.div>
  );
}

export default Section;
