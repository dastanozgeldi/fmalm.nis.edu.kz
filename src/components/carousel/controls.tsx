import { Icons } from "../icons";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

export const CarouselControls = (props: Props) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={() => {
          if (props.canScrollPrev) props.onPrev();
        }}
        disabled={!props.canScrollPrev}
        className="p-2 text-white rounded-md absolute top-1/2 transform -translate-y-1/2 left-0"
      >
        <Icons.chevronLeft className="w-8 h-8 md:w-16 md:h-16" />
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) props.onNext();
        }}
        disabled={!props.canScrollNext}
        className="p-2 text-white rounded-md absolute top-1/2 transform -translate-y-1/2 right-0"
      >
        <Icons.chevronRight className="w-8 h-8 md:w-16 md:h-16" />
      </button>
    </div>
  );
};
