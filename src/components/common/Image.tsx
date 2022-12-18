import { getStrapiMedia } from "../../lib/media";
import NextImage from "next/image";

const Image = ({ image }: any) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
