import ModeMenu from '@/components/navbar-menus/mode-menu'
import ContactMenu from '@/components/navbar-menus/contact-menu'
import {Menubar, MenubarMenu} from '@/components/ui/menubar'

function Navbar() {
  return (
    <Menubar className="font-mw flex border-none z-10 md:mx-1 lg:mx-2 my-1 md:my-2 justify-end fixed top-0 right-0">
      <MenubarMenu>
        <ContactMenu />
        <ModeMenu />
      </MenubarMenu>
    </Menubar>
  )
}

export default Navbar
