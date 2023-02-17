import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { IoGlobe } from "react-icons/io5";

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

export const MenuLocaleButton = () => {
  const { pathname, query, asPath, push, locale, locales } = useRouter();

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={`${
                open && "bg-gray-300 rounded-lg"
              } inline-flex w-full justify-center rounded-md p-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <IoGlobe className="w-5 h-5" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50 right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {locales?.map((l) => (
                <Menu.Item key={l}>
                  <button
                    className={`${
                      locale === l ? "bg-gray-200 rounded" : "text-gray-500"
                    } space-x-4 px-2 py-1`}
                    onClick={() => {
                      setCookie(l);
                      push({ pathname, query }, asPath, { locale: l });
                    }}
                  >
                    {LANGUAGES[l as keyof Languages]}
                  </button>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
