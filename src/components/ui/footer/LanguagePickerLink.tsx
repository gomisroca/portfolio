import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslatedPath, useTranslations } from "@/i18n/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function LanguagePickerLink({
  lang,
  href,
  label,
  tooltip,
  className,
}: {
  lang: Language;
  href: string;
  label: string;
  tooltip: Label;
  className: string;
}) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={translatePath("/", href)}>
            <motion.div
              className={cn(
                "font-semibold bg-neutral-700 dark:bg-neutral-300 text-neutral-100 dark:text-neutral-900 dark:hover:text-primary-700 hover:text-primary-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 w-fit rounded-xl p-2",
                className
              )}
              whileHover={{
                scale: 1.25,
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                },
              }}
              whileTap={{
                scale: 1.5,
                zIndex: 10,
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
                duration: 0.2,
              }}
            >
              {label}
            </motion.div>
          </a>
        </TooltipTrigger>
        <TooltipContent className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
          <p>{t(tooltip)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
LanguagePickerLink.displayName = "LanguagePickerLink";
export default LanguagePickerLink;
