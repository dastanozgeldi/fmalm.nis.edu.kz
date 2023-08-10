import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "@/components/menu/Menu";
import { Logo } from "@/components/common/Logo";
import { MenuIcons } from "@/components/menu/MenuIcons";
import { MenuUpperLinks } from "@/components/menu/MenuUpperLinks";
import { cn } from "@/lib/utils";

const Mobile = ({ t }: { t: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden w-full space-y-2 relative">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-3 sm:space-y-3">
          <MenuIcons address={t("address")} />
          {open && <Menu />}
          <button
            aria-label="Menu"
            type="button"
            className={cn(
              "p-2 rounded-lg items-center justify-center xl:hidden flex",
              open && "bg-gray-200"
            )}
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Desktop = ({ t }: { t: any }) => {
  return (
    <div className="hidden lg:flex md:items-center md:justify-between">
      <Logo />
      <div className="flex flex-col space-y-4 my-3">
        <div className="flex items-center justify-end space-x-6">
          <MenuIcons address={t("address")} />
          {/* Search */}
          <div className="border-2 px-4 py-1 gap-2 rounded-md border-primary w-[216px] flex items-center justify-between">
            <input
              placeholder="Іздеу"
              className="w-full outline-none bg-transparent text-lg"
            />
            <FaSearch className="text-primary" />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export const Nav = () => {
  const t = useTranslations("Menu");

  return (
    <nav className="space-y-3">
      <MenuUpperLinks t={t} />
      <div className="space-x-4 px-4 pb-4">
        <Mobile t={t} />
        <Desktop t={t} />
      </div>
    </nav>
  );
};

Nav.messages = ["Menu"];
