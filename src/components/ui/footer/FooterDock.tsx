import { languages } from "@/i18n/utils";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageLink from "./LanguageLink";

function FooterDock({
  activeLang,
  path,
}: {
  activeLang: "en" | "es" | "cat" | "de";
  path: string;
}) {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.ul
      className="md:my-4 mx-auto my-2 flex w-fit flex-row space-x-2 rounded-md bg-zinc-200 p-2 dark:bg-zinc-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={listVariants}
    >
      {Object.entries(languages).map(([lang]) => (
        <motion.li
          key={lang}
          className="w-1/5 text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <LanguageLink
            href={path}
            lang={lang as "en" | "es" | "cat" | "de"}
            className={`${lang === activeLang && "underline decoration-accent-500/70 decoration-4 underline-offset-2 hover:decoration-accent-500"}`}
            label={lang.toUpperCase()}
          />
        </motion.li>
      ))}
      <span className="my-auto h-4 border border-zinc-300 dark:border-zinc-700" />
      <motion.li
        className="w-1/5 text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ThemeToggle />
      </motion.li>
    </motion.ul>
  );
}

export default FooterDock;
