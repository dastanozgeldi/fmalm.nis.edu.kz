import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArticleCore } from "@/types";
import { getStrapiMedia } from "@/lib/media";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const FirstNewsItem = ({
  first,
  more,
}: {
  first: ArticleCore;
  more: string;
}) => {
  const { image, title, createdAt, description, slug } = first.attributes;
  return (
    <div className="flex min-w-[300px] h-full justify-between text-white">
      {image.data && (
        <img
          className="object-cover brightness-75"
          src={getStrapiMedia(image)}
          alt={title}
        />
      )}
      <time className="absolute text-sm text-white top-0 right-0 p-6">
        {new Date(createdAt).toLocaleDateString()}
      </time>
      <div className="absolute bottom-0 p-6 space-y-3">
        <h3 className="font-bold text-lg md:text-2xl">{title}</h3>
        <p className="hidden md:block">{description}</p>
        <Link className={cn(buttonVariants())} href={`/articles/${slug}`}>
          {more}
        </Link>
      </div>
    </div>
  );
};

const LatestNewsItem = ({ item }: { item: ArticleCore }) => {
  const { image, title, createdAt, slug } = item.attributes;
  return (
    <div key={item.id} className="relative overflow-hidden p-2 bg-gray-100">
      <div className="flex min-w-[300px] gap-3 p-3">
        {image.data && (
          <img
            className="w-[80px] h-[60px] object-cover"
            src={getStrapiMedia(image)}
            alt={title}
          />
        )}
        <div>
          <h3 className="font-bold text-lg hover:text-foreground/70 hover:duration-300">
            <Link href={`/articles/${slug}`}>{title}</Link>
          </h3>
          <time className="text-sm text-gray-600">
            {new Date(createdAt).toLocaleDateString()}
          </time>
        </div>
      </div>
    </div>
  );
};

export const LatestNews = ({ news }: { news: ArticleCore[] }) => {
  const t = useTranslations("LatestNews");

  const first = news[0];
  const remaining = news.slice(1, 5);

  return (
    <section
      id="latest-news"
      className="space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="container md:max-w-7xl">
        <div className="mb-6">
          <h1 className="text-3xl my-2 md:text-4xl font-bold">{t("title")}</h1>
          <hr className="border-0 max-w-[36px] h-[6px] bg-green-500" />
        </div>
        <div className="mx-auto justify-center flex flex-col lg:flex-row">
          <div className="relative w-full flex-1 lg:w-2/3">
            <FirstNewsItem first={first} more={t("more")} />
          </div>

          <div className="divide-y flex-1 divide-gray-400">
            {remaining.map((item) => (
              <LatestNewsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

LatestNews.messages = ["LatestNews"];
