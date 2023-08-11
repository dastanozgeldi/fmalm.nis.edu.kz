import { styles } from "@/styles";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArticleItem } from "./ArticleItem";
import { Button } from "../ui/button";

type ArticlesProps = {
  title: string;
  articles: any;
  showMore?: boolean;
};

export const Articles = ({
  title,
  articles,
  showMore = false,
}: ArticlesProps) => {
  const t = useTranslations("Articles");

  return (
    <section className="space-y-8 py-24">
      <h1 className={styles.sectionHeadText}>{title}</h1>
      <div className="py-12 mx-4 flex hide-scrollbar overflow-auto lg:grid lg:grid-cols-4 gap-4 items-center justify-items-center">
        {articles.slice(0, 4).map((article: any) => (
          <ArticleItem key={article.id} article={article.attributes} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        {/* if there are less than 3 articles, there is no point in navigating to "all articles" */}
        {articles.length > 3 && showMore && (
          <Link href="/articles">
            <Button size="lg">{t("show_more")}</Button>
          </Link>
        )}
      </div>
    </section>
  );
};

Articles.messages = ["Articles"];
