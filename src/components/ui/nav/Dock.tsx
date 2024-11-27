import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, Info, Mail } from "lucide-react";
import { useTranslatedPath, useTranslations } from "@/i18n/utils";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  important?: boolean;
}

function DockItem({ icon, label, href, important = false }: DockItemProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={href} className="cursor-pointer group">
            <p className="sr-only">{label}</p>
            <motion.div
              className={`relative flex items-center justify-center w-12 h-8 md:h-12 rounded-xl transition-colors duration-200 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900
                ${
                  important
                    ? "text-accent-400 dark:text-accent-600 dark:group-hover:text-accent-500 group-hover:text-accent-500"
                    : "text-neutral-100 dark:text-neutral-900 dark:group-hover:text-primary-700 group-hover:text-primary-700"
                }`}
              whileHover={{
                scale: 1.5,
                rotate: 0,
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                },
              }}
              whileTap={{
                scale: 1.75,
                zIndex: 10,
                rotate: 0,
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15,
                duration: 0.2,
              }}
              animate={
                important && {
                  scale: 1.2,
                  rotate: -5,
                  transition: {
                    scale: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                    rotate: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }
              }
            >
              {icon}
            </motion.div>
          </a>
        </TooltipTrigger>
        <TooltipContent className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function Dock({ lang }: { lang: "en" | "es" | "cat" | "de" }) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  const dockItems = [
    {
      icon: <Home className="w-6 h-6" />,
      label: t("nav.home"),
      href: translatePath("/"),
    },
    {
      icon: <Info className="w-6 h-6" />,
      label: t("nav.about"),
      href: translatePath("/about"),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: t("nav.contact"),
      href: translatePath("/contact"),
      important: true,
    },
  ];

  return (
    <div className="mx-auto my-2 md:my-4 bg-neutral-700 dark:bg-neutral-300 w-fit rounded-xl p-2 flex space-x-2">
      {dockItems.map((item) => (
        <div key={item.label}>
          <DockItem
            icon={item.icon}
            label={item.label}
            href={item.href}
            important={item.important}
          />
        </div>
      ))}
    </div>
  );
}

Dock.displayName = "Dock";
