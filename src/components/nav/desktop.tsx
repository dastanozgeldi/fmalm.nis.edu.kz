import Link from "next/link";
import { Logo } from "../logo";
import { MenuIcons } from "./menu-icons";
import { Icons } from "../icons";
import { ChangeLanguageButton } from "./change-language";

const MenuItem = ({ title, pages, href }: any) =>
  pages.length > 0 ? (
    <div>
      <button className="uppercase w-full lg:text-lg text-dark lg:w-max flex items-center justify-between gap-2 peer p-2">
        {title} {pages.length > 0 && <Icons.down className="w-4 h-4" />}
      </button>
      <div className="w-full text-dark lg:w-max absolute z-50 hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
        {pages.map((page: any) => (
          <Link
            key={page.id}
            className="px-5 py-3 bg-gray-50 hover:bg-gray-200"
            href={`/${page.attributes.slug}`}
          >
            {page.attributes.title}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Link href={href}>
      <button className="uppercase w-full lg:text-lg text-dark lg:w-max flex items-center justify-between gap-2 peer p-2">
        {title} {pages.length > 0 && <Icons.down className="w-4 h-4" />}
      </button>
    </Link>
  );

const Menu = ({ categories }: { categories: any[] }) => {
  return (
    <div className="flex rounded items-center justify-between">
      {categories.map((c: any) => {
        const { name, url, pages } = c.attributes;
        return (
          <MenuItem
            key={name}
            title={name}
            href={url}
            pages={pages?.data || []}
          />
        );
      })}
    </div>
  );
};

export const Desktop = ({ t, categories }: { t: any; categories: any[] }) => {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3 lg:gap-6">
          <MenuIcons address={t("address")} />
          <ChangeLanguageButton />
        </div>
      </div>
      <Menu categories={categories} />
    </div>
  );
};
