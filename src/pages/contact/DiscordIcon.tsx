import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SiDiscord } from "react-icons/si";

function DiscordIcon() {
  return (
    <Popover>
      <PopoverTrigger className="transition duration-200 hover:scale-105 hover:text-primary-500 active:scale-110 active:duration-100">
        <SiDiscord size={40} />
      </PopoverTrigger>
      <PopoverContent>gomisroca</PopoverContent>
    </Popover>
  );
}

export default DiscordIcon;
