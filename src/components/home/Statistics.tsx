import { styles } from "@/styles";
import { useTranslations } from "next-intl";
import { Icons } from "../icons";

export const Statistics = () => {
  const t = useTranslations("Statistics");

  return (
    <div className="bg-[#111] text-gray-200">
      <section className="space-y-8 py-8 container mx-auto">
        <h1 className={styles.sectionHeadText}>{t("title")}</h1>
        <div className="overflow-x-scroll hide-scrollbar mx-4 flex lg:items-center lg:justify-center gap-6 my-6">
          <div className={styles.statisticsContainer}>
            <div className="flex flex-col items-center">
              <Icons.users size={48} />
              <h2 className={styles.statisticsContainerText}>1023</h2>
            </div>
            <p>{t("students")}</p>
          </div>
          <div className={styles.statisticsContainer}>
            <div className="flex flex-col items-center">
              <Icons.school size={48} />
              <h2 className={styles.statisticsContainerText}>23</h2>
            </div>
            <p>{t("schools")}</p>
          </div>
          <div className={styles.statisticsContainer}>
            <div className="flex flex-col items-center">
              <Icons.contact size={48} />
              <h2 className={styles.statisticsContainerText}>165</h2>
            </div>
            <p>{t("teachers")}</p>
          </div>
          <div className={styles.statisticsContainer}>
            <div className="flex flex-col items-center">
              <Icons.graduate size={48} />
              <h2 className={styles.statisticsContainerText}>1020</h2>
            </div>
            <p>{t("alumni")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Statistics.messages = ["Statistics"];
