import { useTranslations } from "next-intl";
import { config } from "@/config";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="relative pb-8">
      <div className="max-w-full aspect-[9/14] md:aspect-[16/9] w-full m-auto px-4 relative group">
        <div
          style={{
            backgroundImage: `url(https://i.imgur.com/0TudJAN.jpg)`,
          }}
          className="brightness-50 w-full h-full rounded-2xl bg-center bg-cover duration-500"
        />
        <div className="h-[80%] absolute top-0 bottom-0 m-auto lg:left-20 flex items-center px-4 lg:w-1/2">
          <div className="space-y-3 p-6 lg:p-0">
            <h1 className="text-white text-3xl lg:text-5xl font-bold">
              {t("title")}
            </h1>
            <p className="text-white text-lg lg:text-xl">{t("description")}</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-4 flex text-sm lg:text-lg divide-x-[1px]">
          {config.socials.map(({ href, icon, label }) => (
            <a
              href={href}
              className="hover:bg-opacity-80 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

Hero.messages = ["Hero"];
