import { getStrapiMedia } from "@/lib/media";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const LatestNews = ({ news }: { news: any[] }) => {
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
            <div className="flex min-w-[300px] justify-between text-white">
              {first.attributes.image.data && (
                <img
                  className="object-cover brightness-75"
                  src={getStrapiMedia(first.attributes.image)}
                  alt={first.attributes.title}
                />
              )}
              <time className="absolute text-sm text-white top-0 right-0 p-6">
                {new Date(first.attributes.createdAt).toLocaleDateString()}
              </time>
              <div className="absolute bottom-0 p-6 space-y-3">
                <h3 className="font-bold text-2xl">{first.attributes.title}</h3>
                <p>{first.attributes.description}</p>
                <Link
                  className={cn(buttonVariants())}
                  href={`/articles/${first.attributes.slug}`}
                >
                  {t("more")}
                </Link>
              </div>
            </div>
          </div>

          <div className="divide-y flex-1 divide-gray-400">
            {remaining.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden p-2 bg-gray-100"
              >
                <div className="flex min-w-[300px] gap-3 p-3">
                  {item.attributes.image.data && (
                    <img
                      className="w-[80px] h-[60px] object-cover"
                      src={getStrapiMedia(item.attributes.image)}
                      alt={item.attributes.title}
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-lg">
                      <Link href={`/articles/${item.attributes.slug}`}>
                        {item.attributes.title}
                      </Link>
                    </h3>
                    <time className="text-sm text-gray-600">
                      {new Date(item.attributes.createdAt).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

LatestNews.messages = ["LatestNews"];
