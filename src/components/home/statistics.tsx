import { useTranslations } from "next-intl";

import { Icons } from "@/components/icons";

export const Statistics = () => {
  const t = useTranslations("Statistics");

  const stats = [
    {
      icon: <Icons.users size={48} />,
      number: 1023,
      label: t("students"),
    },
    {
      icon: <Icons.school size={48} />,
      number: 23,
      label: t("schools"),
    },
    {
      icon: <Icons.contact size={48} />,
      number: 165,
      label: t("teachers"),
    },
    {
      icon: <Icons.graduate size={48} />,
      number: 1020,
      label: t("alumni"),
    },
  ];

  return (
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {t("title")}
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t("description")}
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
        {stats.map(({ icon, number, label }) => (
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex min-w-[300px] h-[180px] flex-col justify-between rounded-md p-6">
              {icon}
              <h3 className="font-bold text-2xl">{number}</h3>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {t("bottom_text")}
        </p>
      </div>
    </section>
  );
};

Statistics.messages = ["Statistics"];
