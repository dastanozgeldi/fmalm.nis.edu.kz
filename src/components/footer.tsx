import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import { styles } from "@/styles";
import { Icons } from "./icons";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="p-4 text-gray-100 bg-[#111]">
      {/* top */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          <div className={styles.footerColumn}>
            <div className="space-y-4">
              <Logo />
              <div>
                <p>{t("address")}</p>
                <p>8 (727) 331 0104</p>
                <p>info@fmalm.nis.edu.kz</p>
              </div>
              {/* Social Media */}
              <div className="flex gap-2">
                <a href="https://www.facebook.com/fmalm.nis.edu.kz">
                  <Icons.facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/nis_pm_almaty/">
                  <Icons.instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@nis_pm_almaty">
                  <Icons.youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div>
              <h2 className={styles.footerHeadText}>{t("useful_links")}</h2>
              <div className="space-y-2">
                <a
                  href="https://fmalmnis.edupage.org/timetable"
                  className="max-w-max flex items-center gap-2"
                >
                  <Icons.calendar /> {t("timetable")}
                </a>
                <a
                  href="https://sms.fmalm.nis.edu.kz/"
                  className="max-w-max flex items-center gap-2"
                >
                  <Icons.book /> {t("sms")}
                </a>
                <a
                  href="https://app.online.nis.edu.kz:8800/"
                  className="max-w-max flex items-center gap-2"
                >
                  <Icons.spinner /> NIS Online
                </a>
                <a
                  href="https://vs.nis.edu.kz/"
                  className="max-w-max flex items-center gap-2"
                >
                  <Icons.laptop /> {t("virtual_school")}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div>
              <h2 className={styles.footerHeadText}>{t("announcements")}</h2>
              <div className="space-y-2 flex flex-col">
                <Link className="max-w-max" href="/announcements">
                  Хабарламалар
                </Link>
                <Link className="max-w-max" href="/news">
                  Жаңалықтар
                </Link>
                <Link className="max-w-max" href="/mass-media">
                  БАҚ біз жайлы
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
