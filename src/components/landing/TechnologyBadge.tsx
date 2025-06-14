import {
  SiNextdotjs,
  SiReact,
  SiAstro,
  SiSanity,
  SiVercel,
  SiDocker,
  SiTrpc,
  SiPostgresql,
  SiStripe,
  SiSupabase,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiStorybook,
  SiZod,
  SiCheerio,
  SiRedis,
  SiNginx,
} from "react-icons/si";

const technologyColors: Record<Technology, string> = {
  Astro: "#000000",
  "Next.js": "#000000",
  React: "#61DAFB",
  Vue: "#4FC08D",
  Sanity: "#F03E2F",
  Stripe: "#635BFF",
  tRPC: "#398CCB",
  Express: "#000000",
  MongoDB: "#47A248",
  PostgreSQL: "#336791",
  Vercel: "#000000",
  Supabase: "#3ECF8E",
  Docker: "#2496ED",
  Storybook: "#FF748C",
  Zod: "#001FFF",
  Cheerio: "#F5C547",
  Redis: "#D82C20",
  Nginx: "#009639",
};

const technologyIcons = {
  Astro: SiAstro,
  "Next.js": SiNextdotjs,
  React: SiReact,
  Vue: SiVuedotjs,
  Sanity: SiSanity,
  Stripe: SiStripe,
  tRPC: SiTrpc,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Vercel: SiVercel,
  Supabase: SiSupabase,
  Docker: SiDocker,
  Storybook: SiStorybook,
  Zod: SiZod,
  Cheerio: SiCheerio,
  Redis: SiRedis,
  Nginx: SiNginx,
};

interface Props {
  technology: Technology;
}

export default function TechnologyBadge({ technology }: Props) {
  const IconComponent = technologyIcons[technology];
  const iconColor = technologyColors[technology];
  if (!IconComponent) return null;
  return (
    <div className="rounded-full border border-zinc-300 bg-zinc-50 p-1 dark:border-transparent">
      <IconComponent color={iconColor} className="h-5 w-5" />
    </div>
  );
}
