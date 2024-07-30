import {Button} from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {Mail} from 'lucide-react'
import {Link} from 'react-router-dom'

function ContactMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid="contact-button" className="px-1 md:px-2 flex align-center" variant="ghost">
          <Mail />
          <span className="sr-only">Contact</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid="contact-menu" align="end">
        <a href="mailto:gomisroca@gmail.com">
          <DropdownMenuItem className="font-semibold flex gap-2 w-full justify-between p-4 cursor-pointer">
            <Mail />
            <span>gomisroca@gmail.com</span>
          </DropdownMenuItem>
        </a>
        <Link data-testid="github-link" to="https://github.com/gomisroca/">
          <DropdownMenuItem className="font-semibold flex gap-2 w-full justify-between p-4 cursor-pointer">
            <img
              loading="lazy"
              alt="Github logo"
              src="./github-mark.svg"
              className="invert-0 dark:invert h-[20px]"
            />
            <span>gomisroca</span>
          </DropdownMenuItem>
        </Link>
        <Link to="https://discord.com/users/548153072090742784">
          <DropdownMenuItem className="font-semibold flex gap-2 w-full justify-between p-4 cursor-pointer">
            <img
              loading="lazy"
              alt="Discord logo"
              src="./discord-mark-black.svg"
              className="invert-0 dark:invert h-[20px]"
            />
            <span>jasar.</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ContactMenu
