import { Icons } from "./icons";

export const PostAuthor = ({ author }: any) => {
  const { name, email } = author.data.attributes;

  return (
    <a
      href={`mailto:${email}`}
      key={author.id}
      className="flex items-center space-x-2 text-sm"
    >
      <Icons.user size={32} />
      <div className="flex-1 text-left leading-tight">
        <p className="font-medium">{name}</p>
        <p className="text-[12px] text-muted-foreground">{email}</p>
      </div>
    </a>
  );
};
