import {ModeToggle} from '@/components/ui/mode-toggle'
import {Menubar, MenubarMenu} from '@/components/ui/menubar'
import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Mail} from 'lucide-react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Menubar className="font-mw flex border-none z-10 md:mx-1 lg:mx-2 my-1 md:my-2 justify-end fixed top-0 right-0">
      <MenubarMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="px-1 md:px-2 flex align-center"><Mail /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <a href="mailto:gomisroca@gmail.com">
              <DropdownMenuItem className="flex gap-2 w-full justify-between p-4 cursor-pointer">
                <Mail />
                <span>gomisroca@gmail.com</span>
              </DropdownMenuItem>
            </a>
            <Link to="https://github.com/gomisroca/">
              <DropdownMenuItem className="flex gap-2 w-full justify-between p-4 cursor-pointer">
                <img
                  src="./github-mark.svg"
                  className="invert-0 dark:invert h-[20px]"
                />
                <span>gomisroca</span>
              </DropdownMenuItem>
            </Link>
            <Link to="https://discord.com/users/548153072090742784">
              <DropdownMenuItem className="flex gap-2 w-full justify-between p-4 cursor-pointer">
                <img
                  src="./discord-mark-black.svg"
                  className="invert-0 dark:invert h-[20px]"
                />
                <span>jasar.</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </MenubarMenu>
    </Menubar>
  )
}

export default Navbar
