import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { Page } from "@/components/page";
import { FaCalendar, FaUser } from "react-icons/fa";
import { pick } from "lodash";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Image from "next/image";

const Article = ({ article }: any) => {
  const { title, createdAt, author, content, image, topic } =
    article.attributes;

  return (
    <Page title={title}>
      <div
        id="article"
        className="relative max-w-[60ch] mx-auto border rounded-md p-8 m-4 space-y-4"
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
              <FaCalendar />
              {new Date(createdAt).toLocaleDateString()}
            </p>
            {author?.data && (
              <p className="text-gray-500 flex items-center gap-2">
                <FaUser />
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
};

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  // const paths = locales.map(async (locale) => {
  //   const res = await fetch(
  //     getStrapiURL(`/api/articles?locale=${locale}&populate=*`)
  //   );
  //   const articlesRes = await res.json();

  //   // Error: A required parameter (slug) was not provided as a string in getStaticPaths for /article/[slug]

  //   return articlesRes?.data?.map((article: any) => {
  //     console.log(article.attributes.slug);
  //     return {
  //       params: {
  //         slug: article.attributes.slug,
  //       },
  //       locale,
  //     };
  //   });
  // });

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
      article: articleRes.data[0],
      messages: pick((await import(`@/messages/${locale}.json`)).default, [
        ...Page.messages,
      ]),
    },
    revalidate: 1,
  };
}

export default Article;
