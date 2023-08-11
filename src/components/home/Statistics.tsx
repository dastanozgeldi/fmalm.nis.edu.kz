import { styles } from "@/styles";
import { useTranslations } from "next-intl";
import { Icons } from "../icons";

export const Statistics = () => {
  const t = useTranslations("Statistics");

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
          This project is an experiment to see how a modern app, with features
          like auth, subscriptions, API routes, and static pages would work in
          Next.js 13 app dir.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.users className="w-12 h-12" />
            <div className="space-y-2">
              <h3 className="font-bold">1023</h3>
              <p className="text-sm text-muted-foreground">{t("students")}</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.school size={48} />
            <div className="space-y-2">
              <h3 className="font-bold">23</h3>
              <p className="text-sm">{t("schools")}</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.contact size={48} />
            <div className="space-y-2">
              <h3 className="font-bold">165</h3>
              <p className="text-sm text-muted-foreground">{t("teachers")}</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Icons.graduate size={48} />
            <div className="space-y-2">
              <h3 className="font-bold">1020</h3>
              <p className="text-sm text-muted-foreground">{t("alumni")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Taxonomy also includes a blog and a full-featured documentation site
          built using Contentlayer and MDX.
        </p>
      </div>
    </section>
  );
};

Statistics.messages = ["Statistics"];
