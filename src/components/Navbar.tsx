import ModeMenu from '@/components/navbar-menus/mode-menu';
import ContactMenu from '@/components/navbar-menus/contact-menu';
import { Menubar, MenubarMenu } from '@/components/ui/menubar';

function Navbar() {
  return (
    <div>
      <Menubar className="fixed right-0 top-0 z-10 my-1 flex justify-end border-none backdrop-blur-sm md:mx-1 md:my-2 lg:mx-2">
        <MenubarMenu>
          <ContactMenu />
          <ModeMenu />
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default Navbar;
