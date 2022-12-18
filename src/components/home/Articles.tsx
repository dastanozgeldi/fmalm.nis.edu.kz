import Link from "next/link";
import { FaClock, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { getStrapiMedia } from "../../lib/media";

const Articles = ({ articles }: any) => (
  <section className="p-8">
    <h1 className="text-4xl font-semibold my-4">Articles</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center">
      {articles.map((article: any) => (
        <Link
          key={article.attributes.slug}
          href={`/article/${article.attributes.slug}`}
          className="m-4"
        >
          <div className="border-2 rounded-lg max-w-[48ch]">
            <img
              className="w-[48ch] h-[24ch] object-cover"
              src={getStrapiMedia(article.attributes.image)}
              alt=""
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold">
                {article.attributes.title}
              </h2>
              <p className="text-gray-500">{article.attributes.description}</p>
            </div>
            <div className="px-2 flex space-x-4 my-2">
              <p className="text-gray-500 flex items-center gap-2">
                <FaClock />
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
              <p className="text-gray-500 flex items-center gap-2">
                <FaUser />
                Өзгелді Дастан
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Articles;
