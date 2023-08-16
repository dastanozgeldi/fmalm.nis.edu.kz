import { cn } from "@/lib/utils";

type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

export const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-end gap-2">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={cn(
          "px-4 py-2 text-white rounded-md",
          !props.canScrollPrev && "bg-indigo-200",
          props.canScrollPrev && "bg-indigo-400"
        )}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={cn(
          "px-4 py-2 text-white rounded-md",
          !props.canScrollNext && "bg-indigo-200",
          props.canScrollNext && "bg-indigo-400"
        )}
      >
        Next
      </button>
    </div>
  );
};
