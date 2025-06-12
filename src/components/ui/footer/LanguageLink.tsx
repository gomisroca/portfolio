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
      <div
        className={cn(
          "hover:text-primary-500 w-fit rounded-md px-1 text-sm font-semibold text-zinc-500 transition duration-200 ease-in-out hover:scale-110 active:scale-90",
          className,
        )}
      >
        {label}
      </div>
    </a>
  );
}
