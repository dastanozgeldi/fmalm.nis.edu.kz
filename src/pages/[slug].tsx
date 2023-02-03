import ReactMarkdown from "react-markdown";
import { getStrapiURL } from "@/lib/api";
import { Page } from "@/layouts/Page";
import { pick } from "lodash";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";

const GeneralPage = ({ page }: any) => {
  const { title, image, content } = page.attributes;

  return (
    <Page title={title}>
      <div
        id="page"
        className="relative max-w-[60ch] mx-auto border rounded-md p-8 m-4 space-y-4"
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

export async function getStaticPaths({ locales = [] }: GetStaticPathsContext) {
  let paths: any[] = [];
  for (const locale of locales) {
    const res = await fetch(
      getStrapiURL(`/api/pages?locale=${locale}&populate=*`)
    );
    const pagesRes = await res.json();

    pagesRes?.data?.forEach((page: any) => {
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
  const res = await fetch(
    getStrapiURL(
      `/api/pages?locale=${locale}&filters[slug][$eq]=${params?.slug}`
    )
  );
  const pageRes = await res.json();

  return {
    props: {
      page: pageRes.data[0],
      messages: pick((await import(`@/messages/${locale}.json`)).default, [
        ...Page.messages,
      ]),
    },
    revalidate: 1,
  };
}

export default GeneralPage;
