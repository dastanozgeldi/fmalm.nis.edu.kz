import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "@/components/home/Articles";
import { Page } from "@/layouts/Page";
import { fetchAPI } from "@/lib/api";
import { Hero } from "@/components/home/Hero";

export default function Index({ articles }: any) {
  const t = useTranslations("Index");

  return (
    <Page title={t("title")}>
      <Hero />
      <Articles showMore={true} articles={articles.slice(0, 3)}>
        {t("articles")}
      </Articles>
    </Page>
  );
}

Index.messages = ["Index", ...Page.messages];

export const getServerSideProps = async ({ locale }: GetStaticPropsContext) => {
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { locale }, { populate: "*" }),
  ]);

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
