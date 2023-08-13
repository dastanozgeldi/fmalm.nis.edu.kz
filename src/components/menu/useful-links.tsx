import { ChangeLanguageButton } from "./change-language";

export const UsefulLinks = ({ t }: { t: any }) => {
  const links = [
    {
      href: "https://fmalmnis.edupage.org/timetable",
      label: t("timetable"),
    },
    {
      href: "https://sms.fmalm.nis.edu.kz/",
      label: t("sms"),
    },
    {
      href: "https://app.online.nis.edu.kz:8800/",
      label: t("nis_online"),
    },
    {
      href: "https://vs.nis.edu.kz/",
      label: t("virtual_school"),
    },
  ];

  return (
    <div className="bg-[#8abf3b] text-xs sm:text-sm w-full py-2 px-4 flex items-center justify-end gap-2 lg:gap-4">
      {links.map(({ href, label }) => (
        <a href={href} className="text-white">{label}</a>
      ))}
      <ChangeLanguageButton label={t("label")} />
    </div>
  );
};
