import { languages } from "@/i18n/utils";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LanguageLink from "./LanguageLink";
import { useEffect, useRef, useState } from "react";

const LanguageDropdown = ({
  activeLang,
  path,
}: {
  activeLang: "en" | "es" | "cat" | "de";
  path: string;
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <motion.li
        className="flex w-8 cursor-pointer items-center justify-center text-center text-sm font-semibold text-zinc-500 hover:text-primary-500"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
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
        onClick={() => setOpen(!open)}
      >
        {activeLang.toUpperCase()}
      </motion.li>
      {open && (
        <ul className="absolute bottom-9 left-0 mx-auto flex w-fit flex-col items-start justify-start rounded-md bg-zinc-200 p-1 dark:bg-zinc-900">
          {Object.entries(languages).map(([lang]) => (
            <li key={lang} className="px-2 py-1">
              <LanguageLink
                href={path}
                lang={lang as "en" | "es" | "cat" | "de"}
                className={`${lang === activeLang && "underline decoration-accent-500/70 decoration-4 underline-offset-2 hover:decoration-accent-500"}`}
                label={lang.toUpperCase()}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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
      className="md:py-2 fixed bottom-0 right-0 mx-auto flex w-fit flex-row space-x-2 rounded-tl-md bg-zinc-200 px-2 py-1 dark:bg-zinc-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={listVariants}
    >
      <LanguageDropdown activeLang={activeLang} path={path} />
      <span className="m-auto h-4 border border-zinc-300 dark:border-zinc-700" />
      <motion.li
        className="w-8 text-center"
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
