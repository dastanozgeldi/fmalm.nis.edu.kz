import { useRouter } from "next/router";
import { Logo } from "@/components/common/Logo";
import { Menu } from "@headlessui/react";

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

Nav.messages = ["Nav"];
