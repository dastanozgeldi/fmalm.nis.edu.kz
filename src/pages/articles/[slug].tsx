import ReactMarkdown from "react-markdown";
import { useTranslations } from "next-intl";
import { pick } from "lodash";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Link from "next/link";
import Image from "next/image";

import { getStrapiURL } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { Page } from "@/components/page";
import { Icons } from "@/components/icons";
import { BlogPostCore } from "@/types";
import { useFormattedDate } from "@/hooks";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PostAuthor } from "@/components/post-author";

export default function Article({ article }: { article: BlogPostCore }) {
  const t = useTranslations("Articles");
  const { title, content, createdAt, author, image, topic } =
    article.attributes;
  const formattedDate = useFormattedDate(createdAt);

  return (
    <Page title={title}>
      <article
        id="article"
        className="relative container max-w-3xl mx-auto rounded-md p-8 space-y-4"
      >
        <div className="flex items-center justify-between">
          {createdAt && (
            <time
              dateTime={createdAt}
              className="block text-sm text-muted-foreground"
            >
              {formattedDate}
            </time>
          )}
          {topic?.data && (
            <Badge className="text-sm">{topic.data.attributes.name}</Badge>
          )}
        </div>
        <h1 className="mt-2 inline-block font-bold text-4xl leading-tight lg:text-5xl">
          {title}
        </h1>
        <div className="mt-4 flex space-x-4">
          {author?.data && <PostAuthor author={author} />}
        </div>
        {image?.data && (
          <Image
            className="object-cover w-full h-[36ch] rounded-t-lg"
            width={400}
            height={240}
            src={getStrapiMedia(image)}
            alt="Banner Image"
          />
        )}
        <ReactMarkdown skipHtml className="prose">
          {content}
        </ReactMarkdown>
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/articles"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            {t("see_all")}
          </Link>
        </div>
      </article>
    </Page>
  );
}

Article.messages = ["Articles", ...Page.messages];

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  let paths: any[] = [];

  for (const locale of locales) {
    const response = await fetch(
      getStrapiURL(`/api/articles?locale=${locale}&populate=*`)
    );
    const { data } = await response.json();

    data.forEach((article: any) => {
      paths.push({
        params: {
          slug: article.attributes.slug,
        },
        locale,
      });
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  const response = await fetch(
    getStrapiURL(
      `/api/articles?locale=${locale}&filters[slug][$eq]=${params?.slug}&populate=*`
    )
  );
  const { data } = await response.json();

  return {
    props: {
      article: data[0],
      messages: pick(
        (await import(`@/messages/${locale}.json`)).default,
        Article.messages
      ),
    },
    revalidate: 1,
  };
}
