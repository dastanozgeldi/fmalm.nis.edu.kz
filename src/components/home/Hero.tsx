import { useTranslations } from "next-intl";
import { ImageCarousel } from "./ImageCarousel";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <>
      <div className="relative">
        <ImageCarousel />
        <div className="h-[600px] relative lg:left-20 flex items-center px-4 lg:w-1/2">
          <div className="space-y-3 p-6 lg:p-0">
            <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
              {t("title")}
            </h1>
            <p className="text-white text-lg lg:text-xl">{t("description")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.messages = ["Hero"];
