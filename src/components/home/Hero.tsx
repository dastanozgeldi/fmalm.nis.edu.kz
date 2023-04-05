import { styles } from "@/styles";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

type HeroProps = {
  images: {
    attributes: {
      url: string;
    };
  }[];
};

export const Hero = ({ images }: HeroProps) => {
  const t = useTranslations("Hero");

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
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
    <div className="relative pb-8">
      <div className="max-w-full aspect-[9/14] md:aspect-[16/9] w-full m-auto px-4 relative group">
        <div
          style={{
            backgroundImage: `url(${images[currentIndex].attributes.url})`,
          }}
          className="brightness-50 w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* Left Arrow */}
          <div className="absolute top-8 lg:top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={24} />
          </div>
          {/* Right Arrow */}
          <div className="absolute top-8 lg:top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={24} />
          </div>
          <div className="flex bottom-4 justify-center py-2">
            {images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                onClick={() => goToSlide(imageIndex)}
                className="text-white text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[80%] absolute top-0 bottom-0 m-auto lg:left-20 flex items-center px-4 lg:w-1/2">
          <div className="space-y-3 p-6 lg:p-0">
            <h1 className="text-white text-3xl lg:text-5xl font-extrabold">
              {t("title")}
            </h1>
            <p className="text-white text-lg lg:text-xl">{t("description")}</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-4 flex text-sm lg:text-lg">
          <a
            href="https://instagram.com/nis_pm_almaty"
            className={styles.heroSocialMedia}
          >
            Instagram
            <FaChevronRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.facebook.com/fmalm.nis.edu.kz/"
            className={styles.heroSocialMedia}
          >
            Facebook
            <FaChevronRight className="w-3 h-3" />
          </a>
          <a
            href="https://www.youtube.com/@nis_pm_almaty"
            className={styles.heroSocialMedia}
          >
            Youtube
            <FaChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

Hero.messages = ["Hero"];
