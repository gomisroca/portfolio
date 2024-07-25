import { ModeToggle } from "@/components/ui/mode-toggle"
import {
    Menubar,
    MenubarMenu,
    MenubarSeparator,
  } from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import data from '@/data.json'

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
                        <DropdownMenuContent align="end">
                            {data["navbar-links"].map(link => (
                                <DropdownMenuItem>
                                    <Button className="uppercase w-full" asChild>
                                        <Link to={link.url} role="link">
                                            {link.name}
                                        </Link>
                                    </Button>
                                    <MenubarSeparator />
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Menubar className="hidden md:flex border-none z-10 mx-6 my-2 justify-end  fixed top-0 right-0">
                    <MenubarMenu>
                        {data["navbar-links"].map(link => (
                            <>
                                <Button className="uppercase" asChild>
                                    <Link to={link.url} role="link">
                                        {link.name}
                                    </Link>
                                </Button>
                                <MenubarSeparator />
                            </>
                        ))}
                        <ModeToggle />
                    </MenubarMenu>
                </Menubar>
            </div>
        )
}

export default Navbar
