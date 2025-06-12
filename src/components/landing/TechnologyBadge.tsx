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
} from "react-icons/si";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
};

interface Props {
  technology: Technology;
}

export default function TechnologyBadge({ technology }: Props) {
  const IconComponent = technologyIcons[technology];
  const iconColor = technologyColors[technology];
  if (!IconComponent) return null;
  return (
    <Popover>
      <PopoverTrigger className="group cursor-pointer rounded-full border border-zinc-950/20 bg-zinc-50 p-1 transition duration-200 ease-in-out hover:scale-110 hover:border-zinc-950/30 active:scale-125 active:duration-100">
        <span className="sr-only">{technology}</span>
        <IconComponent
          color={iconColor}
          className="h-5 w-5 brightness-50 transition duration-200 group-hover:brightness-100 group-active:brightness-110 active:duration-100"
        />
      </PopoverTrigger>
      <PopoverContent>{technology}</PopoverContent>
    </Popover>
  );
}
