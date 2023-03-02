import Link from "next/link";
import { FaCalendar, FaUser } from "react-icons/fa";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";
import clsx from "clsx";

export const ArticleItem = ({ article }: any) => {
  const { slug, image, title, description, createdAt, author, topic } =
    article.attributes;

  const captionExists = image.data ? true : false;

  return (
    <div
      className={clsx(
        "relative hover:duration-500 border border-gray-200 rounded-lg min-w-[300px] max-w-[300px]",
        captionExists ? "min-h-[400px]" : "min-h-[175px]"
      )}
    >
      {captionExists && (
        <>
          <Image
            className="w-[300px] h-[225px] object-cover rounded-t-lg"
            width={300}
            height={225}
            src={getStrapiMedia(image)}
            alt="Banner Image"
          />
          {topic?.data && (
            <span className="absolute top-2 right-2 text-sm py-2 px-4 text-white bg-secondary rounded-full">
              #{topic.data.attributes.name}
            </span>
          )}
        </>
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
        <Link
          href={`/article/${slug}`}
          className="hover:opacity-60 hover:duration-300"
        >
          <h2 className="text-lg font-semibold">{title}</h2>
        </Link>
        <p className="text-md text-gray-500">{description.slice(0, 50)} ...</p>
      </div>
    </div>
  );
};
