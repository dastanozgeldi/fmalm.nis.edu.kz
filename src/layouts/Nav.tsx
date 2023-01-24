import { Logo } from "@/components/common/Logo";
import { Menu } from "./Menu";
import { MenuIcons } from "./MenuIcons";

export const Nav = () => {
  return (
    <nav className="p-4">
      <div className="space-x-4">
        {/* Mobile */}
        <div className="lg:hidden w-full space-y-2">
          <div className="flex items-center justify-between">
            <Logo />
            <MenuIcons />
          </div>
          <Menu />
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex md:items-center md:justify-between">
          <Logo />
          <Menu />
          <MenuIcons />
        </div>
      </div>
    </nav>
  );
};

Nav.messages = ["Nav"];
