import { useRouter } from "next/router";
import { FaAngleDown } from "react-icons/fa";
import { Logo } from "@/components/common/Logo";
import { fetchAPI } from "@/lib/api";
import { useEffect, useState } from "react";

type MenuItemProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

const MenuItem = ({ title, links }: MenuItemProps) => (
  <div>
    <button className="uppercase w-64 lg:w-max flex items-center justify-between gap-2 peer px-5 py-2">
      {title} <FaAngleDown />
    </button>
    <div className="w-64 lg:w-max absolute z-50 hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
      {links.map(({ label, href }) => (
        <a key={label} className="px-5 py-3 hover:bg-gray-200" href={href}>
          {label}
        </a>
      ))}
    </div>
  </div>
);

const Menu = () => {
  const [categories, setCategories] = useState<any>();

  useEffect(() => {
    async function fetchCategories() {
      const [categoriesRes] = await Promise.all([
        fetchAPI("/categories", { populate: "*" }),
      ]);
      console.dir(categoriesRes);
      setCategories(categoriesRes.data);
    }

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-4">
      {categories &&
        categories.map((c) => (
          <MenuItem
            key={c.attributes.name}
            title={c.attributes.name}
            links={[]}
          />
        ))}
      {/* Претендентам */}
      <MenuItem
        title="Претендентам"
        links={[
          {
            label: "Конкурсный отбор",
            href: "https://www.instagram.com/p/Cl5eaE7tR48/",
          },
          { label: "Виртуальная школа", href: "https://vs.nis.edu.kz/" },
        ]}
      />
      {/* Ученикам */}
      <MenuItem
        title="Ученикам"
        links={[
          {
            label: "Расписание уроков",
            href: "https://fmalmnis.edupage.org/timetable/",
          },
        ]}
      />
      {/* Учителям */}
      <MenuItem
        title="Учителям"
        links={[
          { label: "Объявления", href: "/articles" },
          {
            label: "СМИ о нас",
            href: "https://www.google.com/search?q=%D0%BD%D0%B8%D1%88+%D1%84%D0%BC%D0%BD+%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+-site:nis.edu.kz&source=lmns&tbm=nws&bih=720&biw=1440&hl=en&sa=X&ved=2ahUKEwjy0dLLm4P8AhXGGHcKHWNBAeUQ_AUoA3oECAEQAw",
          },
        ]}
      />
      {/* Родителям */}
      <MenuItem
        title="Родителям"
        links={[
          { label: "Объявления", href: "/articles" },
          {
            label: "СМИ о нас",
            href: "https://www.google.com/search?q=%D0%BD%D0%B8%D1%88+%D1%84%D0%BC%D0%BD+%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+-site:nis.edu.kz&source=lmns&tbm=nws&bih=720&biw=1440&hl=en&sa=X&ved=2ahUKEwjy0dLLm4P8AhXGGHcKHWNBAeUQ_AUoA3oECAEQAw",
          },
        ]}
      />
    </div>
  );
};

export const Nav = () => {
  const { pathname, query, asPath, push, locale } = useRouter();

  return (
    <nav className="px-8 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Logo />
        <div className="flex flex-col md:flex-row items-center space-x-8">
          <a className="text-xl text-gray-500" href="tel:87273310104">
            +7 (727) 331-01-04
          </a>
          <a
            className="text-xl text-gray-500"
            href="mailto:info@fmalm.nis.edu.kz"
          >
            info@fmalm.nis.edu.kz
          </a>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <button
            className={locale === "kk" ? "text-primary" : "text-gray-500"}
            onClick={() => push({ pathname, query }, asPath, { locale: "kk" })}
          >
            qaz
          </button>
          <button
            className={locale === "ru" ? "text-primary" : "text-gray-500"}
            onClick={() => push({ pathname, query }, asPath, { locale: "ru" })}
          >
            рус
          </button>
          <button
            className={locale === "en" ? "text-primary" : "text-gray-500"}
            onClick={() => push({ pathname, query }, asPath, { locale: "en" })}
          >
            eng
          </button>
        </div>
      </div>
      <Menu />
    </nav>
  );
};
