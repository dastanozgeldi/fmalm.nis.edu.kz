import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      url: "https://i.imgur.com/DcWxz66.jpg",
    },
    {
      url: "https://i.imgur.com/duQOR2O.jpg",
    },
    {
      url: "https://i.imgur.com/noDMWxs.jpg",
    },
    {
      url: "https://i.imgur.com/ZkzYKNU.jpg",
    },
    {
      url: "https://i.imgur.com/5Qz6snh.jpg",
    },
    {
      url: "https://i.imgur.com/0TudJAN.jpg",
    },
    {
      url: "https://i.imgur.com/77XniZ3.jpg",
    },
    {
      url: "https://i.imgur.com/GzE7l2A.jpg",
    },
    {
      url: "https://i.imgur.com/uKOXqu6.jpg",
    },
    {
      url: "https://i.imgur.com/XOFJa5P.jpg",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="max-w-full h-[780px] w-full m-auto px-4 absolute group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="brightness-50 w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* Left Arrow */}
          <div className="absolute top-10 lg:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="absolute top-10 lg:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex bottom-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-white text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-4 flex">
          <a
            href="https://instagram.com/nis_pm_almaty"
            className="hover:bg-opacity-90 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
          >
            Instagram
            <FaChevronRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.facebook.com/fmalm.nis.edu.kz/"
            className="hover:bg-opacity-90 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
          >
            Facebook
            <FaChevronRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.youtube.com/@nis_pm_almaty"
            className="hover:bg-opacity-90 hover:duration-300 flex items-center gap-2 p-3 bg-primary text-white"
          >
            Youtube
            <FaChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
