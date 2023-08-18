import pick from "lodash/pick";
import { type GetServerSidePropsContext } from "next";
import { useTranslations } from "next-intl";
import { Page } from "@/components/page";
import { Hero } from "@/components/home/hero";
import { Advantages } from "@/components/home/advantages";
import { Statistics } from "@/components/home/statistics";
import { FAQ } from "@/components/home/faq";
import { LatestNews } from "@/components/latest-news";
import { getStrapiURL } from "@/lib/api";

export default function Index({ news }: { news: any[] }) {
  const t = useTranslations("Index");

  return (
    <Page title={t("title")}>
      <div>
        <Hero />
        <Advantages />
        <LatestNews news={news} />
        <Statistics />
        <FAQ />
      </div>
    </Page>
  );
}

Index.messages = [
  "Index",
  ...Advantages.messages,
  ...LatestNews.messages,
  ...Statistics.messages,
  ...FAQ.messages,
  ...Page.messages,
];

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const response = await fetch(
    getStrapiURL(
      `/api/articles?locale=${locale}&filters[type][$eq]=news&sort=createdAt:DESC&populate=*`
    )
  );
  const { data: news } = await response.json();

  return {
    props: {
      news,
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        Index.messages
      ),
    },
  };
}
