import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from "framer-motion";
import { Home, Info, Mail } from "lucide-react";
import { useTranslatedPath, useTranslations } from "@/i18n/utils";
import { useEffect, useState } from "react";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  important?: boolean;
  hovered: boolean;
}

function DockItem({
  icon,
  label,
  href,
  important = false,
  hovered,
}: DockItemProps) {
  const controls = useAnimation();

  const hoverVariants = {
    scale: 1.5,
    rotate: 0,
    transition: {
      duration: 0.2,
    },
  };

  const tapVariants = {
    scale: 1.75,
    zIndex: 10,
    rotate: 0,
    transition: {
      duration: 0.1,
    },
  };

  const importantAnimation = {
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
  };

  const handleHoverStart = () => {
    controls.start(hoverVariants);
  };

  const handleHoverEnd = () => {
    if (important) controls.start(importantAnimation);
    else {
      controls.start({
        scale: 1,
        rotate: 0,
        zIndex: 1,
        transition: { duration: 0.2 },
      });
    }
  };

  const handleTapStart = () => {
    controls.start(tapVariants);
  };

  useEffect(() => {
    if (important) {
      controls.start(importantAnimation);
    }
  }, [important]);
  return (
    <motion.a
      layout
      href={href}
      className="group cursor-pointer"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onMouseDown={handleTapStart}
      onTouchStart={handleTapStart}
    >
      <p className="sr-only">{label}</p>
      <motion.div
        layout
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
        exit={{
          opacity: 0,
          y: -20,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className={`relative flex w-16 flex-col items-center justify-center rounded-md transition-colors duration-200 ${
          important
            ? "text-accent-500/70 group-hover:text-accent-500"
            : "text-zinc-500 group-hover:text-primary-500"
        }`}
      >
        <motion.div animate={controls}>{icon}</motion.div>
        <AnimatePresence>
          {hovered && (
            <motion.span
              layout
              initial={{
                opacity: 0,
                y: -10,
                height: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                height: "auto",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                y: -10,
                height: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="text-sm text-zinc-500 transition-colors duration-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-400"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.a>
  );
}

export default function Dock({ lang }: { lang: "en" | "es" | "cat" | "de" }) {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const [hovered, setHovered] = useState(false);

  const dockItems = [
    {
      icon: <Home className="h-4 w-4" />,
      label: t("nav.home"),
      href: translatePath("/"),
    },
    {
      icon: <Info className="h-4 w-4" />,
      label: t("nav.about"),
      href: translatePath("/about"),
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: t("nav.contact"),
      href: translatePath("/contact"),
      important: true,
    },
  ];

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
    <LayoutGroup>
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listVariants}
        className="mx-auto flex w-fit space-x-2 rounded-md bg-zinc-200 p-2 dark:bg-zinc-900"
        onMouseEnter={setHovered.bind(null, true)}
        onMouseLeave={setHovered.bind(null, false)}
      >
        {dockItems.map((item) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <DockItem
              icon={item.icon}
              label={item.label}
              href={item.href}
              important={item.important}
              hovered={hovered}
            />
          </motion.div>
        ))}
      </motion.div>
    </LayoutGroup>
  );
}

Dock.displayName = "Dock";
