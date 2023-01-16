import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { Page } from "../../layouts/Page";
import { FaClock, FaUser } from "react-icons/fa";

const SchoolLife = ({ article }: any) => {
  const { title, published_at, author, content } = article.attributes;

  return (
    <Page title={title}>
      <div
        id="article"
        className="relative max-w-[60ch] mx-auto border p-8 m-4 space-y-4"
      >
        {/* Details */}
        <div className="">
          <h1 className="text-2xl">{title}</h1>
          <div className="flex space-x-4 my-2">
            <p className="text-gray-500 flex items-center gap-2">
              <FaClock />
              <Moment format="MMM Do YYYY">{published_at}</Moment>
            </p>
            <p className="text-gray-500 flex items-center gap-2">
              <FaUser />
              {author.data.attributes.name}
            </p>
          </div>
        </div>
        <ReactMarkdown skipHtml>{content}</ReactMarkdown>
      </div>
    </Page>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/school-lives", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI("/school-lives", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default SchoolLife;
