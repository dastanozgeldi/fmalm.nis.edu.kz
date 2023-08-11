import ReactMarkdown from "react-markdown";
import { pick } from "lodash";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Image from "next/image";
import { getStrapiURL } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { Page } from "@/components/page";
import { Icons } from "@/components/icons";

export default function Article({ article }: any) {
  const { title, createdAt, author, content, image, topic } = article;

  return (
    <Page title={title}>
      <div
        id="article"
        className="relative max-w-4xl mx-auto border rounded-md p-8 my-12 space-y-4"
      >
        {/* Details */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">{title}</h1>
            {topic?.data && (
              <p className="text-sm p-2 text-white bg-secondary rounded-lg">
                {topic.data.attributes.name}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between space-x-4 my-2">
            <p className="text-gray-500 flex items-center gap-2">
              <Icons.calendar />
              {new Date(createdAt).toLocaleDateString()}
            </p>
            {author?.data && (
              <p className="text-gray-500 flex items-center gap-2">
                <Icons.user />
                {author.data.attributes.name}
              </p>
            )}
          </div>
        </div>
        {image?.data && (
          <Image
            className="object-cover w-[60ch] h-[36ch] rounded-t-lg"
            width={400}
            height={240}
            src={getStrapiMedia(image)}
            alt="Banner Image"
          />
        )}
        <ReactMarkdown skipHtml>{content}</ReactMarkdown>
      </div>
    </Page>
  );
}

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  let paths: any[] = [];
  for (const locale of locales) {
    const res = await fetch(
      getStrapiURL(`/api/articles?locale=${locale}&populate=*`)
    );
    const articlesRes = await res.json();

    articlesRes?.data?.forEach((article: any) => {
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
  const res = await fetch(
    getStrapiURL(
      `/api/articles?locale=${locale}&filters[slug][$eq]=${params?.slug}`
    )
  );
  const articleRes = await res.json();

  return {
    props: {
      article: articleRes.data[0].attributes,
      messages: pick((await import(`@/messages/${locale}.json`)).default, [
        ...Page.messages,
      ]),
    },
    revalidate: 1,
  };
}
