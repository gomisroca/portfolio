import { motion } from "framer-motion";
import FadeInText from "./FadeInText";
import landing from "@/i18n/landing";
import IconCircles from "./IconCircles";
import StackedCards from "./StackedCards";

function Landing({ lang = "en" }: { lang?: "en" | "es" | "cat" | "de" }) {
  return (
    <div className="container relative min-h-screen flex flex-col">
      <FadeInText
        className="
              relative flex flex-col space-y-2 z-10
              max-w-[25rem] p-2 rounded-md
            bg-zinc-50 dark:bg-zinc-950
              mt-10
              portrait:tablet:left-10 portrait:tablet:top-10
              portrait:laptop:left-20 portrait:laptop:top-20
              landscape:laptop:top-14 landscape:laptop:left-28
              landscape:desktop:top-28 landscape:desktop:left-52
              landscape:4k:left-[40rem]"
      >
        {landing[lang].welcome.map((line, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </FadeInText>
      <IconCircles />
      <StackedCards />
    </div>
  );
}

export default Landing;
