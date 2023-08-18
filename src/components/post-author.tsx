import { Icons } from "./icons";

export const PostAuthor = ({ author }: { author: any }) => {
  const { name } = author.data.attributes;
  return (
    <div className="flex items-center space-x-2 text-sm">
      <Icons.user size={24} />
      <div className="flex-1 text-left leading-tight">
        <p className="font-medium">{name}</p>
      </div>
    </div>
  );
};
