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
    <section className="p-8">
      <h1 className="text-center text-4xl font-semibold my-4 underline decoration-primary decoration-4 underline-offset-[10px]">
        {children}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center">
        {articles.map((article: any) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        {/* if there are less than 3 articles, there is no point in navigating to "all articles" */}
        {articles.length >= 3 && showMore && (
          <Link href="/articles" className="button-primary">
            {t("show_more")}
          </Link>
        )}
      </div>
    </section>
  );
};

Articles.messages = ["Articles"];
