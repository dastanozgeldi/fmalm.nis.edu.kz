import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "@/components/home/Articles";
import { Page } from "@/layouts/Page";
import { getStrapiURL } from "@/lib/api";
import { Hero } from "@/components/home/Hero";

export default function Index({ articles }: any) {
  const t = useTranslations("Index");

  return (
    <Page title={t("title")}>
      <div className="space-y-6">
        <Hero />
        <Articles showMore={true} articles={articles}>
          {t("articles")}
        </Articles>
      </div>
    </Page>
  );
}

Index.messages = [
  "Index",
  ...Hero.messages,
  ...Articles.messages,
  ...Page.messages,
];

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const res = await fetch(
    getStrapiURL(
      `/api/articles?locale=${locale}&sort=createdAt:DESC&populate=*`
    )
  );
  const articlesRes = await res.json();

  return {
    props: {
      articles: articlesRes.data,
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        Index.messages
      ),
    },
  };
};
