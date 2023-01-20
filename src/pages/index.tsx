import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "../components/home/Articles";
import { Motto } from "../components/home/Motto";
import { Slider } from "../components/home/Slider";
import { Page } from "../layouts/Page";
import { fetchAPI } from "../lib/api";

export default function Home({ articles }: any) {
  const t = useTranslations("Articles");

  return (
    <Page title="Home">
      <Slider />
      <Motto />
      <Articles showMore articles={articles.slice(0, 3)}>
        {t("all")}
      </Articles>
    </Page>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
};
