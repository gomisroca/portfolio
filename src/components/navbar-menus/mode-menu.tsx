import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useStore } from 'jotai';
import themeAtom from '@/atoms/theme-atom';

type Theme = 'dark' | 'light' | 'system';

function ModeMenu() {
  const themeStore = useStore();

  const handleClick = (theme: Theme) => themeStore.set(themeAtom, theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid="theme-button" size="icon" variant="ghost">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid="theme-menu" align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={() => handleClick('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => handleClick('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => handleClick('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ModeMenu;
