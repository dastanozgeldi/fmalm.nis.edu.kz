import Link from "next/link";
import NextImage from "../common/Image";

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
            <NextImage image={article.attributes.image} />
            <div className="p-2">
              <h2 className="text-xl">{article.attributes.title}</h2>
              <p className="text-gray-500">{article.attributes.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Articles;
