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
      className="space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="container md:max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl my-2 md:text-4xl font-bold">{t("title")}</h1>
          <hr className="border-0 max-w-[36px] h-[6px] bg-green-500" />
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2">
          {stats.map(({ icon, number, label }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex min-w-[300px] h-[180px] flex-col justify-between rounded-md p-6">
                {icon}
                <h3 className="font-bold text-2xl">{number}</h3>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("bottom_text")}
          </p>
        </div>
      </div>
    </section>
  );
};

Statistics.messages = ["Statistics"];
