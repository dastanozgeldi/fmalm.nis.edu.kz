import { useTranslations } from "next-intl";
import Link from "next/link";

import { config } from "@/config";
import { Logo } from "@/components/logo";

import { Icons } from "./icons";

export const Footer = () => {
  const t = useTranslations("Footer");

  const usefuls = [
    {
      href: "https://fmalmnis.edupage.org/timetable",
      icon: <Icons.calendar />,
      label: t("timetable"),
    },
    {
      href: "https://sms.fmalm.nis.edu.kz",
      icon: <Icons.book />,
      label: t("sms"),
    },
    {
      href: "https://app.online.nis.edu.kz:8800",
      icon: <Icons.spinner />,
      label: "NIS Online",
    },
    {
      href: "https://vs.nis.edu.kz",
      icon: <Icons.laptop />,
      label: t("virtual_school"),
    },
  ];

  return (
    <footer className="p-4 text-gray-100 bg-[#111]">
      {/* top */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          <div className="w-[80%] lg:w-full space-y-4 flex lg:justify-center">
            <div className="space-y-4">
              <Logo />
              <div>
                <p>{t("address")}</p>
                <p>8 (727) 331 0104</p>
                <p>info@fmalm.nis.edu.kz</p>
              </div>
              {/* Social Media */}
              <div className="flex gap-2">
                {config.socials.map(({ href, icon }) => (
                  <a href={href}>{icon}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[80%] lg:w-full space-y-4 flex lg:justify-center">
            <div>
              <h2 className="text-xl font-bold my-4">{t("useful_links")}</h2>
              <div className="space-y-2">
                {usefuls.map(({ href, icon, label }) => (
                  <a href={href} className="max-w-max flex items-center gap-2">
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[80%] lg:w-full space-y-4 flex lg:justify-center">
            <div>
              <h2 className="text-xl font-bold my-4">{t("articles")}</h2>
              <div className="space-y-2 flex flex-col">
                <Link className="max-w-max" href="/articles">
                  {t("announcements")}
                </Link>
                <Link className="max-w-max" href="/articles">
                  {t("news")}
                </Link>
                <Link className="max-w-max" href="/articles">
                  {t("mass-media")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="mx-auto w-[80%] lg:w-full bg-[#111] p-4 mt-4 text-sm text-gray-300 flex flex-col items-center justify-center space-y-2">
        <p className="text-gray-300 text-center">{t("copyright")}</p>
      </div>
    </footer>
  );
};

Footer.messages = ["Footer"];
