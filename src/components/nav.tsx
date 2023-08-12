import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu } from "@/components/menu/Menu";
import { Logo } from "@/components/logo";
import { MenuIcons } from "@/components/menu/MenuIcons";
import { MenuUpperLinks } from "@/components/menu/MenuUpperLinks";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

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
            <Icons.menu className="w-5 h-5" />
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
      <div className="flex flex-col space-y-4 m-3">
        <MenuIcons address={t("address")} />
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
