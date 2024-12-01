import { motion } from "framer-motion";
import FadeInText from "./FadeInText";
import landing from "@/i18n/landing";
import IconCircles from "./IconCircles";
import StackedCards from "./StackedCards";

function Landing({ lang = "en" }: { lang?: "en" | "es" | "cat" | "de" }) {
  return (
    <div className="container flex flex-col">
      <div
        className="
          relative 
          portrait:min-h-[50rem]
          portrait:tablet:min-h-screen
          landscape:min-h-screen
          landscape:4k:min-h-[60rem]"
      >
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
      <motion.div
        initial={{ opacity: 0, scaleY: 0.5 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="
          landscape:z-20
          portrait:z-20
          w-full h-[500px] rounded-md p-8
        bg-zinc-200 dark:bg-zinc-900"
      ></motion.div>
    </div>
  );
}

export default Landing;
