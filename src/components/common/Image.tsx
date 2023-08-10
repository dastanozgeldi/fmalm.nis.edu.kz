import { getStrapiMedia } from "@/lib/media";
import NextImage from "next/image";

export const Image = ({ image }: any) => {
  const { width, height } = image.data.attributes;

  return (
    <NextImage
      className="object-cover"
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      src={getStrapiMedia(image)}
      alt={"..."}
    />
  );
};
