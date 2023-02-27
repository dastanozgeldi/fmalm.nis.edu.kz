import { useTranslations } from "next-intl";
import { FaChevronRight } from "react-icons/fa";
import { ImageCarousel } from "./ImageCarousel";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <>
      <div className="relative">
        <ImageCarousel />
        <div className="h-screen relative lg:left-20 flex items-center px-4 lg:w-1/2">
          <div className="space-y-3 p-6 lg:p-0">
            <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
              {t("title")}
            </h1>
            <p className="text-white text-lg lg:text-xl">{t("description")}</p>
          </div>
        </div>
        <div className="absolute right-4 bottom-0 flex">
          <a
            href="https://instagram.com/nis_pm_almaty"
            className="hover:bg-opacity-90 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
          >
            Instagram
            <FaChevronRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.facebook.com/fmalm.nis.edu.kz/"
            className="hover:bg-opacity-90 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
          >
            Facebook
            <FaChevronRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.youtube.com/@nis_pm_almaty"
            className="hover:bg-opacity-90 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
          >
            Youtube
            <FaChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </>
  );
};

Hero.messages = ["Hero"];
