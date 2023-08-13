import { useRouter } from "next/router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Languages {
  kk: string;
  ru: string;
  en: string;
}

const LANGUAGES = {
  kk: "🇰🇿 Қазақша",
  en: "🇺🇸 English",
  ru: "🇷🇺 Русский",
};

export const ChangeLanguageButton = ({ label }: { label: string }) => {
  const { pathname, query, push, locale, locales } = useRouter();

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {LANGUAGES[locale as keyof Languages]}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales?.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => {
              setCookie(l);
              push({ pathname, query }, "/", { locale: l });
            }}
          >
            {LANGUAGES[l as keyof Languages]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
