import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "@/lib/api";
import { Page } from "@/components/page";
import { pick } from "lodash";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";

export default function GeneralPage({ page }: any) {
  const { title, image, content } = page;

  return (
    <Page title={title}>
      <div
        id="page"
        className="relative max-w-4xl mx-auto rounded-md px-8 m-4 space-y-4 prose"
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
        <ReactMarkdown skipHtml>{content}</ReactMarkdown>
      </div>
    </Page>
  );
}

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  let paths: any[] = [];

  for (const locale of locales) {
    const response = await fetch(
      getStrapiURL(`/api/pages?locale=${locale}&populate=*`)
    );
    const { data } = await response.json();

    data &&
      data.forEach((page: any) => {
        paths.push({
          params: {
            slug: page.attributes.slug,
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
      `/api/pages?locale=${locale}&filters[slug][$eq]=${params?.slug}`
    )
  );
  const { data } = await response.json();

  return {
    props: {
      page: data[0].attributes,
      messages: pick((await import(`@/messages/${locale}.json`)).default, [
        ...Page.messages,
      ]),
    },
    revalidate: 1,
  };
}
