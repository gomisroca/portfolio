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
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={cn(
        "z-10 rounded-md bg-zinc-50 md:p-8 dark:bg-zinc-950",
        className,
      )}
    >
      <div className="tablet:ml-[20%] tablet:mr-[20%] mr-[10%] mb-2 ml-[10%]">
        <motion.h2
          className="tablet:text-3xl flex text-2xl font-semibold"
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
          className="h-1 border-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-lime-400 transition duration-200 ease-in-out dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"
        />
      </div>
      {children}
    </motion.div>
  );
}

export default Section;
