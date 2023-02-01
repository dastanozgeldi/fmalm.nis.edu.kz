import { Disclosure } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { FaPlusCircle } from "react-icons/fa";

export const School = () => {
  const t = useTranslations("School");

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 px-2">
      {/* Left Side */}
      <div className="space-y-6">
        <h1 className="heading text-2xl">{t("name")}</h1>
        <p>{t("first")}</p>
        <p>{t("second")}</p>
      </div>
      <div className="space-y-6 md:max-w-[32ch]">
        <Disclosure>
          {({ open }) => (
            <Disclosure.Button
              className={`${
                open ? "bg-secondary" : "bg-bg"
              } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Қосымша білім беру</span>
                {!open && <FaPlusCircle className="h-5 w-5" />}
              </div>
              <Disclosure.Panel className="py-2 text-sm">
                Раскрытие интеллектуального потенциала через интеграцию
                национальных и международных достижений в образовании и науке.
              </Disclosure.Panel>
            </Disclosure.Button>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <Disclosure.Button
              className={`${
                open ? "bg-secondary" : "bg-bg"
              } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">
                  Оқушылардың әл-ауқаты туралы қамқорлық
                </span>
                {!open && <FaPlusCircle className="h-5 w-5" />}
              </div>
              <Disclosure.Panel className="py-2 text-sm">
                Раскрытие интеллектуального потенциала через интеграцию
                национальных и международных достижений в образовании и науке.
              </Disclosure.Panel>
            </Disclosure.Button>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <Disclosure.Button
              className={`${
                open ? "bg-secondary" : "bg-bg"
              } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Оқушылардың қауіпсіздігі</span>
                {!open && <FaPlusCircle className="h-5 w-5" />}
              </div>
              <Disclosure.Panel className="py-2 text-sm">
                Раскрытие интеллектуального потенциала через интеграцию
                национальных и международных достижений в образовании и науке.
              </Disclosure.Panel>
            </Disclosure.Button>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <Disclosure.Button
              className={`${
                open ? "bg-secondary" : "bg-bg"
              } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">
                  Оқушылардың әл-ауқаты туралы қамқорлық
                </span>
                {!open && <FaPlusCircle className="h-5 w-5" />}
              </div>
              <Disclosure.Panel className="py-2 text-sm">
                Раскрытие интеллектуального потенциала через интеграцию
                национальных и международных достижений в образовании и науке.
              </Disclosure.Panel>
            </Disclosure.Button>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <Disclosure.Button
              className={`${
                open ? "bg-secondary" : "bg-bg"
              } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Оқушылардың қауіпсіздігі</span>
                {!open && <FaPlusCircle className="h-5 w-5" />}
              </div>
              <Disclosure.Panel className="py-2 text-sm">
                Раскрытие интеллектуального потенциала через интеграцию
                национальных и международных достижений в образовании и науке.
              </Disclosure.Panel>
            </Disclosure.Button>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

School.messages = ["School"];
