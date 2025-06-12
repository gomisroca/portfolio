import { useTranslatedPath } from "@/i18n/utils";
import { twMerge } from "tailwind-merge";

function Link({
  children,
  className,
  href,
  lang = "en",
  ignoreClass = false,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  lang?: "en" | "de" | "es" | "cat";
  ignoreClass?: boolean;
}) {
  const translatePath = useTranslatedPath(lang);
  return (
    <a
      href={translatePath(href)}
      className={twMerge(
        !ignoreClass &&
          "hover:text-primary-500 w-fit rounded-md px-1 text-sm font-semibold text-zinc-500 transition duration-200 ease-in-out hover:scale-110 active:scale-90",
        className,
      )}
    >
      {children}
    </a>
  );
}

export default Link;
