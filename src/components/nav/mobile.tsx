import { useState } from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Logo } from "../logo";
import { Icons } from "../icons";
import { MenuIcons } from "./menu-icons";

const MenuItem = ({ category }: { category: any }) => {
  const { name, url, pages } = category.attributes;

  return pages.data.length > 0 ? (
    <AccordionItem value={name}>
      <AccordionTrigger className="px-4">{name}</AccordionTrigger>
      <AccordionContent>
        {pages.data.map((page: any) => (
          <div className="w-full">
            <Link
              className="inline-block p-3 w-full hover:bg-gray-100 focus:bg-gray-200"
              key={page.attributes.id}
              href={`/${page.attributes.slug}`}
            >
              {page.attributes.title}
            </Link>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  ) : (
    <Link
      className="inline-block p-4 w-full border-b font-medium hover:underline"
      key={category.id}
      href={`/${url}`}
    >
      {name}
    </Link>
  );
};

const Menu = ({ categories }: { categories: any[] }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full absolute right-0 top-12 z-40 flex flex-col rounded bg-white lg:static lg:flex-row lg:items-center lg:justify-end"
    >
      {categories.map((category) => (
        <MenuItem category={category} />
      ))}
    </Accordion>
  );
};

export const Mobile = ({ t, categories }: { t: any; categories: any[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden w-full space-y-2 relative">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-3">
          <MenuIcons address={t("address")} />
          <button
            aria-label="Menu"
            className="rounded-lg items-center justify-center xl:hidden flex"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <Icons.x className="w-5 h-5" />
            ) : (
              <Icons.menu className="w-5 h-5" />
            )}
          </button>
          {open && <Menu categories={categories} />}
        </div>
      </div>
    </div>
  );
};
