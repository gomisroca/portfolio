import { motion } from "framer-motion";
import FadeInText from "./FadeInText";
import { ui } from "@/i18n/ui";
import IconCircles from "./IconCircles";

function Landing({ lang = "en" }: { lang?: "en" | "es" | "cat" | "de" }) {
  return (
    <div className="container relative">
      <div className="flex md:flex-row flex-col">
        <FadeInText
          className="
              relative flex flex-col space-y-2 z-20
              max-w-[25rem] py-2 rounded-md
            bg-zinc-50 dark:bg-zinc-950
              mt-10
              portrait:tablet:left-10 portrait:tablet:top-10
              portrait:laptop:left-20 portrait:laptop:top-20
              landscape:laptop:top-14 landscape:laptop:left-28
              landscape:desktop:top-28 landscape:desktop:left-52"
        >
          {ui[lang].landing.welcome.map((line, index) => (
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
        <div
          className="
            absolute 
            h-[50rem] w-[50rem] 
            portrait:-right-[25rem]
            portrait:tablet:-right-40 portrait:tablet:top-20
            landscape:tablet:-top-[30rem] landscape:tablet:-right-[30rem] 
            landscape:laptop:top-20 landscape:laptop:-right-40
            landscape:desktop:top-28 landscape:desktop:right-0"
        >
          <IconCircles />
        </div>
      </div>
    </div>
  );
}

export default Landing;
