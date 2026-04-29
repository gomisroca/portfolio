import { useTranslatedPath } from "@/i18n/utils";
import { twMerge } from "tailwind-merge";

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
        className={twMerge(
          "w-fit rounded-md px-1 text-sm font-semibold text-zinc-500 transition duration-200 ease-in-out hover:scale-110 hover:text-blue-400/80 active:scale-90 dark:text-zinc-400 dark:hover:text-blue-400/60",
          className,
        )}
      >
        {label}
      </div>
    </a>
  );
}
