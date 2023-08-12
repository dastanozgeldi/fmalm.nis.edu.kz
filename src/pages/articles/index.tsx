import { pick } from "lodash";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { Page } from "@/components/page";
import { FilteredPosts } from "@/components/filtered-posts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStrapiURL } from "@/lib/api";
import { BlogPostCore } from "@/types";

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
        Articles.messages
      ),
    },
  };
};

export default function Articles({ articles }: { articles: BlogPostCore[] }) {
  const t = useTranslations("Articles");

  const tabs = [
    {
      value: "announcements",
      data: articles.filter(
        (obj: any) => obj.attributes.type === "announcements"
      ),
    },
    {
      value: "news",
      data: articles.filter((obj: any) => obj.attributes.type === "news"),
    },
    {
      value: "mass-media",
      data: articles.filter((obj: any) => obj.attributes.type === "mass media"),
    },
  ];

  return (
    <Page title={t("title")}>
      <div className="max-w-4xl mx-auto p-6">
        <Tabs defaultValue="announcements" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="announcements">
              {t("announcements")}
            </TabsTrigger>
            <TabsTrigger value="news">{t("news")}</TabsTrigger>
            <TabsTrigger value="mass-media">{t("mass-media")}</TabsTrigger>
          </TabsList>
          {tabs.map(({ value, data }) => (
            <TabsContent key={value} value={value}>
              <FilteredPosts posts={{ data }} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Page>
  );
}

Articles.messages = ["Articles", ...Page.messages];
