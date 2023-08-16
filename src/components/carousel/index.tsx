import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Dots } from "./dots";
import { CarouselControls } from "./controls";
import Autoplay from "embla-carousel-autoplay";

type Props = React.PropsWithChildren & EmblaOptionsType;

export const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const length = React.Children.count(children);

  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  React.useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </div>
  );
};
