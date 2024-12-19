import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslatedPath } from "@/i18n/utils";

export default function LanguageLink({
  lang,
  href,
  label,
  className,
}: {
  lang: "en" | "de" | "es" | "cat";
  href: string;
  label: string;
  className: string;
}) {
  const translatePath = useTranslatedPath(lang);

  return (
    <a href={translatePath(href, lang)}>
      <motion.div
        className={cn(
          "w-fit rounded-md px-1 text-sm font-semibold text-zinc-500 hover:text-primary-500",
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
        {label}
      </motion.div>
    </a>
  );
}
