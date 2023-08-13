import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Page } from "@/components/page";
import { Hero } from "@/components/home/hero";
import { Advantages } from "@/components/home/advantages";
import { Statistics } from "@/components/home/statistics";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <Page title={t("title")}>
      <div>
        <Hero />
        <Advantages />
        <Statistics />
      </div>
    </Page>
  );
}

Index.messages = [
  "Index",
  ...Hero.messages,
  ...Advantages.messages,
  ...Statistics.messages,
  ...Page.messages,
];

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        Index.messages
      ),
    },
  };
};
