import { useRouter } from "next/router";
import { IoCall, IoMail } from "react-icons/io5";

interface Languages {
  kk: string;
  ru: string;
  en: string;
}

const LANGUAGES = {
  kk: "🇰🇿",
  en: "🇺🇸",
  ru: "🇷🇺",
};

export const MenuIcons = () => {
  const { pathname, query, asPath, push, locale, locales } = useRouter();

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center gap-3">
        <a className="text-gray-500" href="tel:87273310104">
          <IoCall className="h-5 w-5" />
        </a>
        <a className="text-gray-500" href="mailto:info@fmalm.nis.edu.kz">
          <IoMail className="h-5 w-5" />
        </a>
      </div>
      <div className="flex">
        {locales?.map((l) => (
          <button
            key={l}
            className={`${
              locale === l ? "bg-gray-200 rounded-lg" : "text-gray-500"
            } text-2xl space-x-4 px-2 py-1`}
            onClick={() => {
              setCookie(l);
              push({ pathname, query }, asPath, { locale: l });
            }}
          >
            {LANGUAGES[l as keyof Languages]}
          </button>
        ))}
      </div>
    </div>
  );
};
