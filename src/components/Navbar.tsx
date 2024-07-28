import {ModeToggle} from '@/components/ui/mode-toggle'
import {Menubar, MenubarMenu} from '@/components/ui/menubar'
import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Mail, Menu} from 'lucide-react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="font-mw">
      <div className="justify-end flex md:hidden z-10 my-2 mx-4 fixed top-0 right-0">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end"></DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Menubar className="hidden md:flex border-none z-10 mx-6 my-2 justify-end fixed top-0 right-0">
        <MenubarMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="uppercase">Contact</Button>
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
    </div>
  )
}

export default Navbar
