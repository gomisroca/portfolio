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
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const OrbitingCircles = memo(
  ({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
  }: OrbitingCirclesProps) => {
    const strokeColor = useMemo(() => getRandomColor(), []);

    return (
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        layout
      >
        {path && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <circle
              style={{
                stroke: strokeColor,
                strokeDasharray: 120,
                strokeOpacity: 0.1,
              }}
              cx="52%"
              cy="52%"
              r={radius}
              className="dark:fill-[rgba(250,250,250,0.005)] fill-[rgba(9,9,11,0.005)]"
            />
          </svg>
        )}
        <div
          style={
            {
              "--duration": duration,
              "--radius": radius,
              "--delay": -delay,
            } as React.CSSProperties
          }
          className={cn(
            "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
            { "[animation-direction:reverse]": reverse },
            className
          )}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);

export function IconCircles() {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });
  const parentVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 3 : 1,
        ease: "easeInOut",
        staggerChildren: isMobile ? 0.6 : 0.2,
      },
    },
  };
  return (
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
      <>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10"
          duration={60}
          delay={0}
          radius={330}
        >
          <SiSonar className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10 text-orange-500"
          duration={60}
          delay={6}
          radius={330}
        >
          <SiGitlab className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10"
          duration={60}
          delay={12}
          radius={330}
        >
          <SiGithubactions className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10 text-blue-500"
          duration={60}
          delay={18}
          radius={330}
        >
          <SiDocker className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10 text-blue-500"
          duration={60}
          delay={24}
          radius={330}
        >
          <SiKubernetes className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10"
          duration={60}
          delay={30}
          radius={330}
        >
          <SiAnsible className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10 text-lime-500"
          duration={60}
          delay={36}
          radius={330}
        >
          <SiNginx className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10"
          duration={60}
          delay={42}
          radius={330}
        >
          <SiGit className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10 text-emerald-500"
          duration={60}
          delay={48}
          radius={330}
        >
          <SiNodedotjs className="w-7 h-7" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-7 border-none bg-transparent dark:bg-transparent z-10 text-indigo-500"
          duration={60}
          delay={54}
          radius={330}
        >
          <SiGraphql className="w-7 h-7" />
        </OrbitingCircles>
      </>

      {/* Outer Circles - Frontend */}
      {/* Testing - Small (Size 5)*/}
      <>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 text-rose-800"
          duration={45}
          delay={0}
          radius={270}
          reverse
        >
          <SiJest className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 text-lime-500"
          duration={45}
          delay={15}
          radius={270}
          reverse
        >
          <SiVitest className="w-5 h-5" />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 text-red-500"
          duration={45}
          delay={30}
          radius={270}
          reverse
        >
          <SiTestinglibrary className="w-5 h-5" />
        </OrbitingCircles>
      </>
      {/* Style - Small (Size 5) */}
      <>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 text-sky-500"
          duration={30}
          delay={0}
          radius={240}
          reverse
        >
          <SiTailwindcss className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 text-purple-500"
          duration={30}
          delay={10}
          radius={240}
          reverse
        >
          <SiBootstrap className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10"
          duration={30}
          delay={20}
          radius={240}
          reverse
        >
          <SiShadcnui className="w-5 h-5" />
        </OrbitingCircles>
      </>
      {/* Frameworks - Large (Size 10) */}
      <>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10"
          duration={80}
          delay={0}
          radius={210}
        >
          <SiAstro className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-red-500"
          duration={80}
          delay={16}
          radius={210}
        >
          <SiAngular className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-green-500"
          duration={80}
          delay={32}
          radius={210}
        >
          <SiVuedotjs className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10"
          duration={80}
          delay={48}
          radius={210}
        >
          <SiNextdotjs className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-cyan-500"
          duration={80}
          delay={64}
          radius={210}
        >
          <SiReact className="w-10 h-10" />
        </OrbitingCircles>
      </>

      {/* Inner Circles - Backend */}
      {/* Auth - Small (Size 5) */}
      <>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10"
          duration={15}
          delay={0}
          radius={150}
          reverse
        >
          <SiAuth0 className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 text-cyan-500"
          duration={15}
          delay={5}
          radius={150}
          reverse
        >
          <SiPassport className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10 "
          duration={15}
          delay={10}
          radius={150}
          reverse
        >
          <SiJsonwebtokens className="w-5 h-5" />
        </OrbitingCircles>
      </>
      {/* Frameworks - Large (Size 10) */}
      <>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10"
          duration={100}
          delay={0}
          radius={120}
        >
          <SiExpress className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10"
          duration={100}
          delay={25}
          radius={120}
        >
          <SiDjango className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10"
          duration={100}
          delay={50}
          radius={120}
        >
          <SiFlask className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-emerald-500"
          duration={100}
          delay={75}
          radius={120}
        >
          <SiFastapi className="w-10 h-10" />
        </OrbitingCircles>
      </>
      {/* ORMs - Small (Size 5) */}
      <>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10"
          duration={9}
          delay={0}
          reverse
          radius={70}
        >
          <SiPrisma className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10"
          duration={9}
          delay={3}
          reverse
          radius={70}
        >
          <SiMongoose className="w-5 h-5" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-5 border-none bg-transparent dark:bg-transparent z-10"
          duration={9}
          delay={6}
          reverse
          radius={70}
        >
          <SiDrizzle className="w-5 h-5" />
        </OrbitingCircles>
      </>
      {/* Databases - Large (Size 10) */}
      <>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-red-500"
          duration={120}
          delay={0}
          radius={40}
        >
          <SiRedis className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-green-500"
          duration={120}
          delay={30}
          radius={40}
        >
          <SiMongodb className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10 text-sky-500"
          duration={120}
          delay={60}
          radius={40}
        >
          <SiPostgresql className="w-10 h-10" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-10 border-none bg-transparent dark:bg-transparent z-10"
          duration={120}
          delay={90}
          radius={40}
        >
          <SiSqlite className="w-10 h-10" />
        </OrbitingCircles>
      </>
    </motion.div>
  );
}
// export memoized function
export default memo(IconCircles);
