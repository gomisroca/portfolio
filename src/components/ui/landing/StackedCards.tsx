import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface CardProps {
  image: string;
  title: string;
  tilt?: number;
}
function Card({ image, title, tilt = 0 }: CardProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 540px)" });
  return (
    <motion.div
      style={{ originY: "bottom" }}
      className="absolute flex flex-col items-center justify-center p-4 rounded-md"
      animate={{
        rotateZ: isMobile ? tilt + 45 : tilt,
        x: 0,
        y: 0,
        opacity: 1,
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
        zIndex: 20,
        transition: {
          duration: 1,
          times: [0, 0.2, 1],
          type: "tween",
          ease: "easeInOut",
        },
      }}
    >
      <img
        src={image}
        alt={title}
        className="h-[25rem] rounded-md pointer-events-none"
      />
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
    title: "Esia Gallery",
    tilt: 15,
  },
];

function StackedCards() {
  return (
    <div
      className="
        absolute z-10
        w-[500px] h-[500px]
        portrait:-left-[12.5rem] portrait:top-[15rem]
        portrait:tablet:left-[7rem] portrait:tablet:top-[30rem]
        portrait:laptop:left-[10rem] portrait:laptop:top-[25rem]
        landscape:tablet:left-40 landscape:tablet:top-[14rem]
        landscape:laptop:left-40 landscape:laptop:top-[20rem]
        landscape:desktop:left-[15rem] landscape:desktop:top-[25rem]
        landscape:4k:left-[50rem]"
    >
      {Projects.map((project) => (
        <Card
          key={project.title}
          image={project.image}
          title={project.title}
          tilt={project.tilt}
        />
      ))}
    </div>
  );
}

export default StackedCards;
