import { cn } from "@/lib/utils";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};

export const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);

  return (
    <div className="flex gap-1 items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300 bg-white",
              !selected && "opacity-50"
            )}
          ></div>
        );
      })}
    </div>
  );
};
