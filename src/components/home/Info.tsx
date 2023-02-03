import { Disclosure } from "@headlessui/react";
import { FaPlusCircle } from "react-icons/fa";

export const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-between min-h-screen bg-no-repeat bg-[url('/study.svg')] bg-contain bg-center">
      {/* Left Side */}
      <div className="w-full max-w-md rounded-2xl p-2 space-y-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Миссия</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Құндылықтар</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Жаһандық азамат</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
      </div>
      {/* Right Side */}
      <div className="w-full max-w-md rounded-2xl p-2 space-y-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Ұстаным</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Халықаралық ойлау</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Жаһандық азаматтық</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${
                  open ? "bg-secondary" : "bg-bg"
                } bg-opacity-90 text-white rounded-lg p-4 text-left text-sm w-full`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase text-lg">Сандық азаматтық</span>
                  {!open && <FaPlusCircle className="h-5 w-5" />}
                </div>
                <Disclosure.Panel className="py-2 text-sm">
                  Раскрытие интеллектуального потенциала через интеграцию
                  национальных и международных достижений в образовании и науке.
                </Disclosure.Panel>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
