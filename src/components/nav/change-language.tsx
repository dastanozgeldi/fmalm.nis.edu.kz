import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

interface Languages {
  kk: string;
  ru: string;
  en: string;
}

const LANGUAGES = {
  kk: "ҚАЗ",
  ru: "РУС",
  en: "ENG",
};

export const ChangeLanguageButton = () => {
  const { pathname, query, push, locale, locales } = useRouter();

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  return (
    <div className="divide-x">
      {locales?.map((l) => (
        <button
          key={l}
          onClick={() => {
            setCookie(l);
            push({ pathname, query }, "/", { locale: l });
          }}
          className={cn(locale === l ? "font-bold" : "font-normal", "px-2")}
        >
          {LANGUAGES[l as keyof Languages]}
        </button>
      ))}
    </div>
  );
};
