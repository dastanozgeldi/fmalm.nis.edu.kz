import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "../components/home/Articles";
import { Page } from "../layouts/Page";
import { fetchAPI } from "../lib/api";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
    revalidate: 1,
  };
}

const ArticlesPage = ({ articles }: any) => {
  const t = useTranslations("Articles");

  return (
    <Page title="Articles">
      <Articles articles={articles}>{t("all")}</Articles>
    </Page>
  );
};

export default ArticlesPage;
