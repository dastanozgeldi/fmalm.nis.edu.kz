import { useTranslations } from "next-intl";
import { FaChalkboardTeacher, FaSchool, FaUserGraduate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

export const Statistics = () => {
  const t = useTranslations("Statistics");
  return (
    <section className="container mx-auto">
      <h1 className="leading-10 text-3xl font-extrabold text-center underline decoration-primary underline-offset-[10px] decoration-[2px]">
        {t("title")}
      </h1>
      <div className="max-w-sm lg:max-w-full overflow-x-scroll mx-4 flex lg:items-center lg:justify-center gap-6 my-6">
        <div className="flex flex-col items-center justify-center p-3 border-[6px] border-gray-200 rounded-full min-w-[200px] h-[200px]">
          <HiUserGroup size={48} />
          <h2 className="leading-6 text-3xl font-bold underline decoration-primary decoration-[2px] underline-offset-[6px] my-3">
            1023
          </h2>
          <p>{t("students")}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-[6px] border-gray-200 rounded-full min-w-[200px] h-[200px]">
          <FaSchool size={48} />
          <h2 className="leading-6 text-3xl font-bold underline decoration-primary decoration-[2px] underline-offset-[6px] my-3">
            23
          </h2>
          <p>{t("schools")}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-[6px] border-gray-200 rounded-full min-w-[200px] h-[200px]">
          <FaChalkboardTeacher size={48} />
          <h2 className="leading-6 text-3xl font-bold underline decoration-primary decoration-[2px] underline-offset-[6px] my-3">
            165
          </h2>
          <p>{t("teachers")}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 border-[6px] border-gray-200 rounded-full min-w-[200px] h-[200px]">
          <FaUserGraduate size={48} />
          <h2 className="leading-6 text-3xl font-bold underline decoration-primary decoration-[2px] underline-offset-[6px] my-3">
            1020
          </h2>
          <p>{t("alumni")}</p>
        </div>
      </div>
    </section>
  );
};

Statistics.messages = ["Statistics"];
