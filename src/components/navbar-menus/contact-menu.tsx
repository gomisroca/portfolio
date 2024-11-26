import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Mail } from 'lucide-react';

function ContactMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid="contact-button" className="flex self-center px-1 md:px-2" variant="ghost">
          <Mail />
          <span className="sr-only">Contact</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid="contact-menu" align="end">
        <a href="mailto:gomisroca@gmail.com">
          <DropdownMenuItem className="flex w-full cursor-pointer justify-between gap-2 p-4 font-body font-semibold">
            <Mail />
            <span>gomisroca@gmail.com</span>
          </DropdownMenuItem>
        </a>
        <a data-testid="github-link" href="https://github.com/gomisroca/" target="_blank" rel="noopener noreferrer">
          <DropdownMenuItem className="flex w-full cursor-pointer justify-between gap-2 p-4 font-body font-semibold">
            <img loading="lazy" alt="Github logo" src="./github-mark.svg" className="h-[20px] invert-0 dark:invert" />
            <span>gomisroca</span>
          </DropdownMenuItem>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <DropdownMenuItem className="flex w-full cursor-pointer justify-between gap-2 p-4 font-body font-semibold">
            <img
              loading="lazy"
              alt="Discord logo"
              src="./discord-mark-black.svg"
              className="h-[20px] invert-0 dark:invert"
            />
            <span>gomisroca</span>
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ContactMenu;
