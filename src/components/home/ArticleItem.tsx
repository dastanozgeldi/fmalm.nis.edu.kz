import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export const ArticleItem = ({ article, read_more }: any) => {
  const { slug, image, title, description, published_at, author, topic } =
    article.attributes;

  return (
    <div className="relative shadow rounded-lg w-[320px]">
      {topic?.data && (
        <span className="text-sm absolute right-0 p-2 m-2 text-white bg-secondary rounded-lg">
          {topic.data.attributes.name}
        </span>
      )}
      {image?.data && (
        <Image
          className="w-[320px] h-[240px] object-cover rounded-t-lg"
          width={320}
          height={240}
          src={getStrapiMedia(image)}
          alt="Banner Image"
        />
      )}
      <div className="pt-2 px-4 flex items-center justify-between space-x-4 my-2">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaCalendar />
          <Moment format="MMM Do YYYY">{published_at}</Moment>
        </p>
        {author?.data && (
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaUser />
            {author.data.attributes.name}
          </p>
        )}
      </div>
      <div className="px-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-md text-gray-500">{description.slice(0, 50)} ...</p>
      </div>
      <div className="py-3 px-4">
        <Link
          href={`/article/${slug}`}
          className="text-sm flex items-center w-max gap-2 button-secondary"
        >
          {read_more} <IoArrowForward />
        </Link>
      </div>
    </div>
  );
};
