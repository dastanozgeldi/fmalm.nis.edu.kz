import ReactMarkdown from "react-markdown";
import { fetchAPI } from "@/lib/api";
import { Page } from "@/layouts/Page";
import { pick } from "lodash";
import { GetStaticPropsContext } from "next";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";

const GeneralPage = ({ article }: any) => {
  const { title, image, content } = article.attributes;

  return (
    <Page title={title}>
      <div
        id="article"
        className="relative max-w-[60ch] mx-auto border p-8 m-4 space-y-4"
      >
        {/* Details */}
        {image?.data && (
          <Image
            width={600}
            height={600}
            src={getStrapiMedia(image)}
            alt="Banner Image"
          />
        )}
        <h1 className="text-2xl">{title}</h1>
        <ReactMarkdown skipHtml>{content}</ReactMarkdown>
      </div>
    </Page>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/pages", { fields: ["slug"] });

  return {
    paths: articlesRes?.data?.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  const articlesRes = await fetchAPI("/pages", {
    filters: {
      slug: params?.slug,
    },
    populate: "*",
  });

  return {
    props: {
      article: articlesRes.data[0],
      messages: pick((await import(`@/messages/${locale}.json`)).default, [
        ...Page.messages,
      ]),
    },
    revalidate: 1,
  };
}

export default GeneralPage;
