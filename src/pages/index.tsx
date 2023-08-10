import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "@/components/home/Articles";
import { Page } from "@/components/page";
import { Hero } from "@/components/home/Hero";
import { Advantages } from "@/components/home/Advantages";
import { Statistics } from "@/components/home/Statistics";
import { getStrapiURL } from "@/lib/api";

export default function Index({ articles }: any) {
  const t = useTranslations("Index");

  return (
    <Page title={t("title")}>
      <div>
        <Hero />
        <Advantages />
        <Statistics />
        <Articles title={t("articles")} showMore={true} articles={articles} />
      </div>
    </Page>
  );
}

Index.messages = [
  "Index",
  ...Hero.messages,
  ...Advantages.messages,
  ...Statistics.messages,
  ...Articles.messages,
  ...Page.messages,
];

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const response = await fetch(
    getStrapiURL(
      `/api/articles?locale=${locale}&sort=createdAt:DESC&populate=*`
    )
  );
  const { data: articles } = await response.json();

  return {
    props: {
      articles,
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        Index.messages
      ),
    },
  };
};
