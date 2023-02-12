import { Logo } from "@/components/common/Logo";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "./Menu";
import { MenuIcons } from "./MenuIcons";
import { LocaleMenu } from "./LocaleMenu";
import { MobileMenu } from "./MobileMenu";

export const Nav = () => {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="space-x-4">
        {/* Mobile */}
        <div className="lg:hidden w-full space-y-2">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center space-x-3 sm:space-y-3">
              <MenuIcons address={t("address")} />
              <LocaleMenu />
              {open && <MobileMenu />}
              <button
                aria-label="Menu"
                type="button"
                className={`p-2 rounded-lg items-center justify-center xl:hidden flex ${
                  open && "bg-gray-200"
                }`}
                onClick={() => setOpen(!open)}
              >
                <GiHamburgerMenu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex md:items-center md:justify-between">
          <Logo />
          <MenuIcons address={t("address")} />
          <LocaleMenu />
        </div>
        <Menu />
      </div>
    </nav>
  );
};

Nav.messages = ["Nav"];
