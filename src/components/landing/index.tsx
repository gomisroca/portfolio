import { motion } from "framer-motion";
import FadeInText from "./FadeInText";
import IconCircles from "./IconCircles";
import StackedCards from "./StackedCards";
import { useTranslations } from "@/i18n/utils";

function Landing({ lang = "en" }: { lang?: "en" | "es" | "cat" | "de" }) {
  const t = useTranslations(lang);
  return (
    <div className="portrait:tablet:min-h-screen landscape:4k:min-h-[60rem] relative portrait:min-h-[50rem] landscape:min-h-screen">
      <FadeInText className="portrait:tablet:left-10 portrait:tablet:top-10 portrait:laptop:left-20 portrait:laptop:top-20 landscape:laptop:left-28 landscape:laptop:top-14 landscape:desktop:left-52 landscape:desktop:top-28 landscape:4k:left-[40rem] relative z-10 mt-10 flex max-w-[25rem] flex-col space-y-2">
        <div className="relative w-fit">
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: [1, 0.9, 1] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute right-0 bottom-0 h-2/3 w-[2px] origin-bottom bg-gradient-to-b from-blue-400 via-emerald-400 to-lime-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"
          />
          <div className="bg-zinc-50 px-2 py-4 dark:bg-zinc-950">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              dangerouslySetInnerHTML={{ __html: t("welcome.title") }}
            />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              dangerouslySetInnerHTML={{ __html: t("welcome.subtitle") }}
            />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              dangerouslySetInnerHTML={{ __html: t("welcome.body") }}
            />
          </div>
          <motion.div
            initial={{ scaleX: 0.9 }}
            animate={{ scaleX: [0.9, 1, 0.9] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute right-0 bottom-0 h-[2px] w-2/3 origin-right bg-gradient-to-r from-blue-400 via-emerald-400 to-lime-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"
          />
        </div>
      </FadeInText>
      <IconCircles />
      <StackedCards />
    </div>
  );
}

export default Landing;
