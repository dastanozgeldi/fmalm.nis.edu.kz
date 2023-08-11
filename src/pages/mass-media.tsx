import { ArticleItem } from "@/components/home/ArticleItem";
import { Page } from "@/components/page";
import { getStrapiURL } from "@/lib/api";
import { styles } from "@/styles";
import { pick } from "lodash";
import { type GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function MassMedia({ articles }: any) {
  const t = useTranslations("Mass Media");

  return (
    <Page title={t("title")}>
      <section className="space-y-8 py-24">
        <h1 className={styles.sectionHeadText}>{t("title")}</h1>
        <div className="py-12 mx-4 flex hide-scrollbar overflow-auto lg:grid lg:grid-cols-4 gap-4 items-center justify-items-center">
          {articles.slice(0, 4).map((article: any) => (
            <ArticleItem key={article.id} article={article.attributes} />
          ))}
        </div>
      </section>
    </Page>
  );
}

MassMedia.messages = ["Mass Media", ...Page.messages];

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
        MassMedia.messages
      ),
    },
  };
};
