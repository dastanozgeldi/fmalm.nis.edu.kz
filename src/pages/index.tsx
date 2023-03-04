import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Articles } from "@/components/home/Articles";
import { Page } from "@/layouts/Page";
import { getStrapiURL } from "@/lib/api";
import { Hero } from "@/components/home/Hero";
import { Advantages } from "@/components/home/Advantages";
import { Statistics } from "@/components/home/Statistics";

export default function Index({ articles, images }: any) {
  const t = useTranslations("Index");

  return (
    <Page title={t("title")}>
      <div className="space-y-6">
        <Hero images={images} />
        <Advantages />
        <Statistics />
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
  ...Advantages.messages,
  ...Statistics.messages,
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

  const imagesRes = await (
    await fetch(getStrapiURL("/api/carousel-images"))
  ).json();

  return {
    props: {
      articles: articlesRes.data,
      images: imagesRes.data,
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        Index.messages
      ),
    },
  };
};
