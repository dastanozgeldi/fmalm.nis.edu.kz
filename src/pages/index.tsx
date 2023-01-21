import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "@/components/home/Articles";
import { Page } from "@/layouts/Page";
import { fetchAPI } from "@/lib/api";
import { Hero } from "@/components/home/Hero";

export default function Home({ articles }: any) {
  const t = useTranslations();

  return (
    <Page title={t("Pages.index")}>
      <Hero />
      <Articles showMore articles={articles.slice(0, 3)}>
        {t("Articles.all")}
      </Articles>
    </Page>
  );
}

export const getServerSideProps = async ({ locale }: GetStaticPropsContext) => {
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { locale }, { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
