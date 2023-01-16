import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import slide1 from "../../../public/slides/1.jpeg";
import slide2 from "../../../public/slides/2.jpeg";
import slide3 from "../../../public/slides/3.jpeg";

export const Slider = () => {
  return (
    <Carousel
      className="border relative p-0 m-0"
      interval={1000}
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      <Image className="h-[800px] object-cover" src={slide1} alt="..." />
      <Image className="h-[800px] object-cover" src={slide2} alt="..." />
      <Image className="h-[800px] object-cover" src={slide3} alt="..." />
    </Carousel>
  );
};
