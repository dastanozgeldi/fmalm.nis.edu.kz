import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export const ArticleItem = ({ article, read_more }: any) => {
  const { slug, image, title, description, createdAt, author, topic } =
    article.attributes;

  return (
    <div className="relative hover:duration-500 border border-gray-200 rounded-lg w-[360px]">
      {topic?.data && (
        <span className="absolute top-2 right-2 text-sm py-2 px-4 text-white bg-secondary rounded-full">
          #{topic.data.attributes.name}
        </span>
      )}
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
          {new Date(createdAt).toLocaleDateString()}
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
      <Link
        href={`/article/${slug}`}
        className="py-3 px-4 hover:text-gray-400 rounded-lg duration-300 text-sm flex items-center w-max gap-2"
      >
        {read_more} <IoArrowForward className="w-4 h-4" />
      </Link>
    </div>
  );
};
