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
      <li
        className="hover:text-primary-500 flex w-8 cursor-pointer items-center justify-center text-center text-sm font-semibold text-zinc-500 transition duration-200 ease-in-out hover:scale-110 active:scale-90"
        onClick={() => setOpen(!open)}
      >
        {activeLang.toUpperCase()}
      </li>
      {open && (
        <ul className="absolute bottom-9 left-0 mx-auto flex w-fit flex-col items-start justify-start bg-zinc-200 p-1 dark:bg-zinc-900">
          {Object.entries(languages).map(([lang]) => (
            <li key={lang} className="px-2 py-1">
              <LanguageLink
                href={path}
                lang={lang as "en" | "es" | "cat" | "de"}
                className={`${lang === activeLang && "decoration-accent-500/70 hover:decoration-accent-500 underline decoration-4 underline-offset-2"}`}
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
  const [hovered, setHovered] = useState(false);
  return (
    <motion.ul
      className="group fixed right-0 bottom-0 m-2 mx-auto h-fit w-fit bg-zinc-50 dark:bg-zinc-950"
      initial="hidden"
      whileInView="visible"
      whileHover="hovered"
      viewport={{ once: true }}
      variants={listVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-b from-blue-400 via-emerald-400 to-lime-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500" />
      <div className="flex flex-row space-x-2 bg-zinc-50 px-2 py-1 dark:bg-zinc-950">
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
      </div>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: hovered ? 0.5 : 0.2, ease: "linear" }}
        className="absolute right-0 bottom-0 left-0 h-[2px] origin-left border-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-lime-400 transition duration-200 ease-in-out dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"
      />
    </motion.ul>
  );
}

export default FooterDock;
