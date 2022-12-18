import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <Carousel className="border" interval={1000} autoPlay infiniteLoop>
      <div>
        <img src="slide1.jpg" alt="..." />
      </div>
      <div>
        <img src="slide2.jpg" alt="..." />
      </div>
      <div>
        <img src="slide3.jpg" alt="..." />
      </div>
      <div>
        <img src="slide4.jpg" alt="..." />
      </div>
    </Carousel>
  );
};

export default Slider;
