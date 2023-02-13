import Image from "next/image";
import usefulLinks from "@/lib/images/useful-links.svg";
import { FaBook, FaCalendar, FaCircleNotch, FaLaptop } from "react-icons/fa";
import { useTranslations } from "next-intl";

export const UsefulLinks = () => {
  const t = useTranslations("UsefulLinks");

  return (
    <section className="flex flex-col lg:flex-row gap-6 min-h-screen items-center">
      <div className="space-y-10 w-full lg:w-1/3">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold">{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
        <Image alt="Useful Links" src={usefulLinks} />
      </div>

      <div className="w-full lg:w-1/3 space-y-6 flex flex-col items-center">
        <a
          className="w-full min-h-[200px] space-y-2 p-4 bg-gray-50 hover:bg-gray-100 hover:duration-300 rounded-lg"
          href="https://fmalmnis.edupage.org/timetable"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full border border-primary">
              <FaCalendar className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-medium">{t("timetable.title")}</h2>
          </div>
          <p>{t("timetable.description")}</p>
        </a>
        <a
          className="w-full min-h-[200px] space-y-2 p-4 bg-gray-50 hover:bg-gray-100 hover:duration-300 rounded-lg"
          href="https://app.online.nis.edu.kz:8800/"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full border border-primary">
              <FaCircleNotch className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-medium">{t("nis_online.title")}</h2>
          </div>
          <p>{t("nis_online.description")}</p>
        </a>
      </div>

      <div className="w-full lg:w-1/3 space-y-6 flex flex-col items-center">
        <a
          className="w-full min-h-[200px] space-y-2 p-4 bg-gray-50 hover:bg-gray-100 hover:duration-300 rounded-lg"
          href="https://sms.fmalm.nis.edu.kz/"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full border border-primary">
              <FaBook className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-medium">{t("sms.title")}</h2>
          </div>
          <p>{t("sms.description")}</p>
        </a>
        <a
          className="w-full min-h-[200px] space-y-2 p-4 bg-gray-50 hover:bg-gray-100 hover:duration-300 rounded-lg"
          href="https://vs.nis.edu.kz/"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full border border-primary">
              <FaLaptop className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-medium">{t("virtual_school.title")}</h2>
          </div>
          <p>{t("virtual_school.description")}</p>
        </a>
      </div>
    </section>
  );
};

UsefulLinks.messages = ["UsefulLinks"];
