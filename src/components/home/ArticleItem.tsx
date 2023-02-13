import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const ArticleItem = ({ article, read_more }: any) => {
  const { slug, image, title, description, createdAt, author, topic } =
    article.attributes;

  return (
    <div className="border border-gray-200 rounded-lg w-[360px]">
      {image?.data && (
        <Image
          className="w-[360px] h-[225px] object-cover rounded-t-lg"
          width={360}
          height={225}
          src={getStrapiMedia(image)}
          alt="Banner Image"
        />
      )}
      <div className="pt-2 px-4 flex items-center justify-between space-x-4 my-2">
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <FaCalendar />
          <Moment format="MMM Do YYYY">{createdAt}</Moment>
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
      <div className="flex items-center justify-between py-3 px-4">
        {topic?.data && (
          <span className="text-sm py-2 px-4 text-white bg-secondary rounded-full">
            #{topic.data.attributes.name}
          </span>
        )}
        <Link
          href={`/article/${slug}`}
          className="hover:bg-gray-200 p-2 rounded-lg duration-300 text-sm flex items-center w-max gap-2"
        >
          {read_more} <IoArrowForwardCircleOutline className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};
