import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiAstro,
  SiSonar,
  SiGitlab,
  SiGithubactions,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiNginx,
  SiGit,
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiNodedotjs,
  SiGraphql,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiAuth0,
  SiJsonwebtokens,
  SiPassport,
  SiRedis,
  SiSqlite,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiMongoose,
  SiDrizzle,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode[];
  reverse?: boolean;
  duration: number;
  radius: number;
  path?: boolean;
}

interface OrbitingIconProps {
  index: number;
  length: number;
  radius: number;
  duration: number;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const OrbitingIcon = memo(
  ({
    index,
    length,
    radius,
    duration = 10,
    reverse = false,
    className,
    children,
  }: OrbitingIconProps) => {
    // Calculate the exact angle for each icon to be evenly distributed
    const angle = (index / length) * 360;

    return (
      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--angle": angle,
          } as React.CSSProperties
        }
        className={cn(
          "absolute size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-zinc-700/10 dark:bg-zinc-300/10",
          { "[animation-direction:reverse]": reverse },
          className,
        )}
      >
        <div className="absolute rotate-0">{children}</div>
      </div>
    );
  },
);

const OrbitingCircles = memo(
  ({
    className,
    children,
    reverse,
    duration = 10,
    radius,
  }: OrbitingCirclesProps) => {
    const strokeColor = useMemo(() => getRandomColor(), []);

    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.75 },
          visible: { opacity: 1, scale: 1 },
        }}
        layout
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <defs>
            <radialGradient
              id="circleGradient"
              cx="52%"
              cy="52%"
              r="50%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="rgba(250,250,250,0)" />
              <stop offset="100%" stopColor="rgba(9,11,11,0.05)" />
            </radialGradient>
          </defs>
          <circle
            style={{
              stroke: strokeColor,
              strokeDasharray: 120,
              strokeOpacity: 0.25,
            }}
            cx="52%"
            cy="52%"
            r={radius}
            fill="url(#circleGradient)"
          />
        </svg>
        {children?.map((child, index) => (
          <OrbitingIcon
            key={index}
            index={index}
            length={children?.length || 1}
            radius={radius}
            duration={duration}
            reverse={reverse}
            className={className}
          >
            {child}
          </OrbitingIcon>
        ))}
      </motion.div>
    );
  },
);

export function IconCircles() {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const parentVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 3 : 1,
        ease: "easeInOut",
        staggerChildren: isMobile ? 2 : 1,
      },
    },
  };
  return (
    <div className="pointer-events-none absolute h-[800px] w-[800px] opacity-50 portrait:-right-[25rem] portrait:top-0 portrait:tablet:-right-40 portrait:tablet:top-20 landscape:tablet:-right-[30rem] landscape:tablet:-top-[30rem] landscape:laptop:-right-40 landscape:laptop:top-4 landscape:desktop:right-0 landscape:desktop:top-28 landscape:4k:right-60 landscape:4k:top-20">
      <motion.div
        style={{ willChange: "transform, opacity" }}
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parentVariants}
        layout
      >
        {/* Infrastructure - Medium (Size 7) */}
        <OrbitingCircles
          className="z-10 size-7 border-none bg-transparent dark:bg-transparent"
          duration={60}
          radius={330}
        >
          <SiSonar className="h-7 w-7" />
          <SiGitlab className="h-7 w-7 text-orange-500" />
          <SiGithubactions className="h-7 w-7" />
          <SiDocker className="h-7 w-7 text-blue-500" />
          <SiKubernetes className="h-7 w-7 text-blue-500" />
          <SiAnsible className="h-7 w-7" />
          <SiNginx className="h-7 w-7 text-lime-500" />
          <SiGit className="h-7 w-7" />
          <SiNodedotjs className="h-7 w-7 text-green-500" />
          <SiGraphql className="h-7 w-7 text-purple-500" />
        </OrbitingCircles>

        {/* Outer Circles - Frontend */}
        {/* Testing - Small (Size 5)*/}
        <OrbitingCircles
          className="z-10 size-5 border-none bg-transparent dark:bg-transparent"
          duration={45}
          radius={270}
          reverse
        >
          <SiJest className="h-5 w-5 text-rose-800" />
          <SiVitest className="h-5 w-5 text-lime-500" />
          <SiTestinglibrary className="h-5 w-5 text-red-500" />
        </OrbitingCircles>
        {/* Style - Small (Size 5) */}
        <OrbitingCircles
          className="z-10 size-5 border-none bg-transparent dark:bg-transparent"
          duration={30}
          radius={240}
          reverse
        >
          <SiTailwindcss className="h-5 w-5 text-sky-500" />
          <SiBootstrap className="h-5 w-5 text-purple-500" />
          <SiShadcnui className="h-5 w-5 text-purple-500" />
        </OrbitingCircles>
        {/* Frameworks - Large (Size 10) */}
        <OrbitingCircles
          className="z-10 size-10 border-none bg-transparent dark:bg-transparent"
          duration={80}
          radius={210}
        >
          <SiAstro className="h-10 w-10" />
          <SiAngular className="h-10 w-10 text-red-500" />
          <SiVuedotjs className="h-10 w-10 text-green-500" />
          <SiNextdotjs className="h-10 w-10" />
          <SiReact className="h-10 w-10 text-cyan-500" />
        </OrbitingCircles>

        {/* Inner Circles - Backend */}
        {/* Auth - Small (Size 5) */}
        <OrbitingCircles
          className="z-10 size-5 border-none bg-transparent dark:bg-transparent"
          duration={15}
          radius={150}
          reverse
        >
          <SiAuth0 className="h-5 w-5 text-red-500" />
          <SiPassport className="h-5 w-5 text-cyan-500" />
          <SiJsonwebtokens className="h-5 w-5" />
        </OrbitingCircles>
        {/* Frameworks - Large (Size 10) */}
        <OrbitingCircles
          className="z-10 size-10 border-none bg-transparent dark:bg-transparent"
          duration={100}
          radius={120}
        >
          <SiExpress className="h-10 w-10" />
          <SiDjango className="h-10 w-10" />
          <SiFlask className="h-10 w-10" />
          <SiFastapi className="h-10 w-10 text-emerald-500" />
        </OrbitingCircles>
        {/* ORMs - Small (Size 5) */}
        <OrbitingCircles
          className="z-10 size-5 border-none bg-transparent dark:bg-transparent"
          duration={9}
          radius={70}
        >
          <SiPrisma className="h-5 w-5" />
          <SiMongoose className="h-5 w-5" />
          <SiDrizzle className="h-5 w-5 text-lime-500" />
        </OrbitingCircles>
        {/* Databases - Large (Size 10) */}
        <OrbitingCircles
          className="z-10 size-9 border-none bg-transparent dark:bg-transparent"
          duration={120}
          radius={40}
        >
          <SiRedis className="h-9 w-9 text-red-500" />
          <SiMongodb className="h-11 w-11 text-green-500" />
          <SiPostgresql className="h-10 w-10 text-sky-500" />
          <SiSqlite className="h-10 w-10" />
        </OrbitingCircles>
      </motion.div>
    </div>
  );
}

export default memo(IconCircles);
