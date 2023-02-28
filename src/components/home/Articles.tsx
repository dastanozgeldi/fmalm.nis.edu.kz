import { useTranslations } from "next-intl";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { ArticleItem } from "./ArticleItem";

type ArticlesProps = PropsWithChildren & {
  articles: any;
  showMore?: boolean;
};

export const Articles = ({
  children,
  articles,
  showMore = false,
}: ArticlesProps) => {
  const t = useTranslations("Articles");

  return (
    <section className="space-y-8 py-8">
      <h1 className="leading-10 text-center text-3xl font-extrabold heading">
        {children}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 space-y-4 items-center justify-items-center">
        {articles.slice(0, 3).map((article: any) => (
          <ArticleItem
            key={article.id}
            article={article}
            read_more={t("read_more")}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        {/* if there are less than 3 articles, there is no point in navigating to "all articles" */}
        {articles.length > 3 && showMore && (
          <Link href="/articles" className="button-secondary">
            {t("show_more")}
          </Link>
        )}
      </div>
    </section>
  );
};

Articles.messages = ["Articles"];
