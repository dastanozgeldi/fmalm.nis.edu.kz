import Link from "next/link";
import { FaClock, FaUser } from "react-icons/fa";
import Moment from "react-moment";
import { getStrapiMedia } from "@/lib/media";
import Image from "next/image";

export const ArticleItem = ({ article }: any) => {
  const { slug, image, title, description, published_at, author } =
    article.attributes;

  return (
    <Link href={`/article/${slug}`} className="m-4">
      <div className="border-2 rounded-lg max-w-[48ch]">
        {image.data && (
          <Image
            className="w-[48ch] h-[24ch] object-cover"
            width={480}
            height={240}
            src={getStrapiMedia(image)}
            alt="Banner Image"
          />
        )}
        <div className="p-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="px-2 flex space-x-4 my-2">
          <p className="text-gray-500 flex items-center gap-2">
            <FaClock />
            <Moment format="MMM Do YYYY">{published_at}</Moment>
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <FaUser />
            {author.attributes && author.attributes.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
