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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      rotate: Math.random() * 30 - 15, // Random rotation between -15 and 15 degrees
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={cn(
        "md:p-8 z-10 rounded-md bg-zinc-50 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="mb-2 ml-[20%] mr-[20%]">
        <motion.h2
          className="flex text-3xl font-semibold"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{
                display: "inline-block",
                marginRight: char === " " ? "0.5rem" : 0,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.hr
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="rounded-md border-b-4 border-zinc-800 dark:border-zinc-200"
        />
      </div>
      {children}
    </motion.div>
  );
}

export default Section;
