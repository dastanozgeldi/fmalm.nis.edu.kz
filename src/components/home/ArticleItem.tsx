import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";

export const ArticleItem = ({ article }: any) => {
  const { slug, image, title, description, published_at, author, topic } =
    article.attributes;

  return (
    <Link href={`/article/${slug}`} className="m-4">
      <div className="relative border-2 rounded-lg w-[360px]">
        {topic?.data && (
          <span className="text-sm absolute right-0 p-2 m-2 text-white bg-secondary rounded-lg">
            {topic.data.attributes.name}
          </span>
        )}
        {image?.data && (
          <Image
            className="w-[360px] h-[360px] object-cover rounded-t-lg"
            width={360}
            height={360}
            src={getStrapiMedia(image)}
            alt="Banner Image"
          />
        )}
        <div className="p-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{description.slice(0, 50)} ...</p>
        </div>
        <div className="px-2 flex items-center justify-between space-x-4 my-2">
          <p className="text-gray-500 flex items-center gap-2">
            <FaCalendar />
            <Moment format="MMM Do YYYY">{published_at}</Moment>
          </p>
          {author?.data && (
            <p className="text-gray-500 flex items-center gap-2">
              <FaUser />
              {author.data.attributes.name}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
