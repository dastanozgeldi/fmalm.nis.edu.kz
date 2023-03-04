import { useTranslations } from "next-intl";
import {
  FaBook,
  FaCalendar,
  FaCircleNotch,
  FaFacebook,
  FaInstagram,
  FaLaptop,
  FaYoutube,
} from "react-icons/fa";
import { Logo } from "@/components/common/Logo";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="p-4 text-gray-100 bg-[#111]">
      {/* top */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          <div className="w-[80%] lg:w-full flex items-center">
            <div className="space-y-2">
              <Logo />
              <p>{t("address")}</p>
              <p>8 (727) 331 0104</p>
              <p>info@fmalm.nis.edu.kz</p>
              {/* Social Media */}
              <div className="flex gap-2 py-4">
                <a href="https://www.facebook.com/fmalm.nis.edu.kz">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/nis_pm_almaty/">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@nis_pm_almaty">
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[80%] lg:w-full space-y-4 flex lg:justify-center">
            <div>
              <h2 className="heading">{t("useful_links")}</h2>
              <div className="space-y-2">
                <a
                  href="https://fmalmnis.edupage.org/timetable"
                  className="max-w-max flex items-center gap-2"
                >
                  <FaCalendar /> {t("timetable")}
                </a>
                <a
                  href="https://sms.fmalm.nis.edu.kz/"
                  className="max-w-max flex items-center gap-2"
                >
                  <FaBook /> {t("sms")}
                </a>
                <a
                  href="https://app.online.nis.edu.kz:8800/"
                  className="max-w-max flex items-center gap-2"
                >
                  <FaCircleNotch /> NIS Online
                </a>
                <a
                  href="https://vs.nis.edu.kz/"
                  className="max-w-max flex items-center gap-2"
                >
                  <FaLaptop /> {t("virtual_school")}
                </a>
              </div>
            </div>
          </div>
          <div className="w-[80%] lg:w-full space-y-4 flex lg:justify-center">
            <div>
              <h2 className="heading">{t("ecosystem")}</h2>
              <div className="space-y-2 flex flex-col">
                <a className="max-w-max" href="https://enis2.space/">
                  eNIS2
                </a>
                <a
                  className="max-w-max"
                  href="https://play.google.com/store/apps/details?id=com.nissenger.nissengermobile"
                >
                  Nissenger
                </a>
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
