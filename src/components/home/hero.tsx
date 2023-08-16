import Image from "next/image";
import { Carousel } from "../carousel";

export const Hero = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <Carousel loop>
      {numbers.map((number) => {
        return (
          <div key={number} className="relative h-[600px] flex-[0_0_100%]">
            <Image
              src={`/carousel/${number}.JPG`}
              fill
              className="object-cover brightness-75"
              alt="alt"
            />
          </div>
        );
      })}
    </Carousel>
  );
};
