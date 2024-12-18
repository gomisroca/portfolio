import { motion } from "framer-motion";
import FadeInText from "./FadeInText";
import IconCircles from "./IconCircles";
import StackedCards from "./StackedCards";
import { useTranslations } from "@/i18n/utils";

function Landing({ lang = "en" }: { lang?: "en" | "es" | "cat" | "de" }) {
  const t = useTranslations(lang);
  return (
    <div className="relative portrait:min-h-[50rem] portrait:tablet:min-h-screen landscape:min-h-screen landscape:4k:min-h-[60rem]">
      <FadeInText className="relative z-10 mt-10 flex max-w-[25rem] flex-col space-y-2 rounded-md bg-zinc-50 p-2 dark:bg-zinc-950 portrait:tablet:left-10 portrait:tablet:top-10 portrait:laptop:left-20 portrait:laptop:top-20 landscape:laptop:left-28 landscape:laptop:top-14 landscape:desktop:left-52 landscape:desktop:top-28 landscape:4k:left-[40rem]">
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
      </FadeInText>
      <IconCircles />
      <StackedCards />
    </div>
  );
}

export default Landing;
