import { Disclosure } from "@headlessui/react";
import { FaPlusCircle } from "react-icons/fa";

export const School = () => {
  return (
    <div className="container min-h-screen mx-auto flex flex-col md:flex-row gap-8">
      {/* Left Side */}
      <div className="space-y-6">
        <h1 className="uppercase text-2xl font-bold underline underline-offset-8 decoration-primary decoration-[4px]">
          Алматы қаласы Назарбаев атындағы физика-математика бағытындағы
          зияткерлік мектебі
        </h1>
        <p>
          Халықаралық Бакалавриат бағдарламаларын қолдана отырып, дарынды
          студенттерге білім беру мүмкіндіктерін ұсынатын және зияткерлік
          қоғамдастықты, мәдениетаралық түсінушілікті және өмір бойы оқуды
          бағалай білуді дамыту міндеті болып табылатын халықаралық мектеп.
        </p>
        <p>
          Қоғамдастық ретінде біз оқу бағдарламалары мен қосымша білім беру
          курстары негізінде жоғары сапалы оқыту мен оқытуды; ұлттық және жеке
          құндылықтарды тәрбиелеу арқылы оқушылардың әл-ауқаты мен
          қауіпсіздігіне қамқорлық жасауды қамтамасыз етеміз.
        </p>
        <iframe
          className="rounded-lg w-full h-[400px]"
          src="https://www.youtube.com/embed/KXhPf5C_JEw"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
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
