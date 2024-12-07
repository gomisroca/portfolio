import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

const technologyIcons = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TailwindCSS: SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
};

interface Props {
  technology: Technology;
}

export default function TechnologyBadge({ technology }: Props) {
  const IconComponent = technologyIcons[technology];
  if (!IconComponent) return null;
  return (
    <Popover>
      <PopoverTrigger>
        <IconComponent className="h-5 w-5 transition duration-200 ease-in-out hover:scale-110 hover:text-primary-500 active:scale-125 active:text-primary-500 active:duration-100" />
      </PopoverTrigger>
      <PopoverContent>{technology}</PopoverContent>
    </Popover>
  );
}
