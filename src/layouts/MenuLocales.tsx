import { useRouter } from "next/router";

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

export const MenuLocales = () => {
  const { pathname, query, asPath, push, locale, locales } = useRouter();

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  return (
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
  );
};
