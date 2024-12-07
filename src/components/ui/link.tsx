import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslatedPath } from "@/i18n/utils";

function Button({
  children,
  className,
  href,
  lang = "en",
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  lang?: "en" | "de" | "es" | "cat";
}) {
  const translatePath = useTranslatedPath(lang);
  return (
    <motion.a
      href={translatePath(href)}
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
      {children}
    </motion.a>
  );
}

export default Button;
