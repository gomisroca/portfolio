import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  image: string;
  title: string;
  tilt?: number;
}
function Card({ image, title, tilt = 0 }: CardProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, isMobile ? 400 : 500], [1, 0.7]);

  const yTranslate = useTransform(scrollY, [0, isMobile ? 400 : 500], [0, 700]);
  const xTranslate = useTransform(
    scrollY,
    [0, isMobile ? 400 : 500],
    [0, isMobile ? 300 : 0],
  );
  const rotateZ = useTransform(
    scrollY,
    [0, isMobile ? 400 : 500],
    [isMobile ? tilt + 45 : tilt, 0],
  );
  const opacity = useTransform(scrollY, [0, isMobile ? 400 : 500], [1, 0]);

  return (
    <motion.div
      style={{
        originY: "bottom",
        scale,
        y: yTranslate,
        x: xTranslate,
        rotateZ,
        opacity,
      }}
      className="absolute flex cursor-pointer flex-col items-center justify-center p-4 active:z-30"
      initial={{
        rotateZ: 0,
      }}
      animate={{
        rotateZ: isMobile ? tilt + 45 : tilt,
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          times: [0, 0.2, 1],
          type: "tween",
          ease: "easeInOut",
        },
      }}
      whileTap={{
        x: isMobile ? 200 : [0, -200, 0],
        y: isMobile ? 0 : [0, -100, 0],
        rotateZ: 0,
        opacity: 1,
        scale: 1.2,
        transition: {
          duration: 1,
          times: [0, 0.2, 1],
          type: "tween",
          ease: "easeInOut",
        },
      }}
    >
      <img src={image} alt={title} className="pointer-events-none h-[25rem]" />
    </motion.div>
  );
}

const Projects = [
  {
    image: "/portfolio/cards/oura.png",
    title: "Oura",
    tilt: -30,
  },
  {
    image: "/portfolio/cards/dungeoneer.png",
    title: "Dungeoneer",
    tilt: -15,
  },
  {
    image: "/portfolio/cards/echoes.png",
    title: "Echoes",
    tilt: 0,
  },
  {
    image: "/portfolio/cards/esia.png",
    title: "Esia",
    tilt: 15,
  },
];

function StackedCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="portrait:tablet:left-[7rem] portrait:tablet:top-[30rem] portrait:laptop:left-[10rem] portrait:laptop:top-[25rem] landscape:tablet:left-40 landscape:tablet:top-[14rem] landscape:laptop:left-40 landscape:laptop:top-[20rem] landscape:desktop:left-[15rem] landscape:desktop:top-[25rem] landscape:4k:left-[50rem] absolute z-10 h-[500px] w-[500px] portrait:top-[15rem] portrait:-left-[12.5rem]"
    >
      {Projects.map((project) => (
        <Card
          key={project.title}
          image={project.image}
          title={project.title}
          tilt={project.tilt}
        />
      ))}
    </motion.div>
  );
}

export default StackedCards;
