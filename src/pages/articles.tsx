import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "@/components/home/Articles";
import { Page } from "@/layouts/Page";
import { getStrapiURL } from "@/lib/api";
import { pick } from "lodash";

export const ArticlesPage = ({ articles }: any) => {
  const t = useTranslations("Articles");

  return (
    <Page title={t("title")}>
      <Articles articles={articles}>{t("all")}</Articles>
    </Page>
  );
};

ArticlesPage.messages = ["Articles", ...Page.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const res = await fetch(
    getStrapiURL(`/api/articles?locale=${locale}&sort=createdAt:DESC&populate=*`)
  );
  const articlesRes = await res.json();

  return {
    props: {
      articles: articlesRes.data,
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        ArticlesPage.messages
      ),
    },
    revalidate: 1,
  };
}

export default ArticlesPage;
