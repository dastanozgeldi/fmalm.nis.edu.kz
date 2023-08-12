import { Skeleton } from "./ui/skeleton";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";

import { useFormattedDate } from "@/hooks";

import { BlogPostCore } from "@/types";
import { getStrapiMedia } from "@/lib/media";

export const PostCard = (post: BlogPostCore) => {
  const {
    title,
    description,
    image,
    slug,
    publishedAt: date,
  } = post.attributes;

  let preview = null;

  if (image.data) {
    preview = getStrapiMedia(image);
  }

  const formattedDate = useFormattedDate(date, "YYYY-MM-DD");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Link
      key={post.id}
      href={`/articles/${slug}`}
      className="group relative flex flex-col space-y-3 rounded-2xl border border-accent-2 p-6"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 [--spotlight:rgba(0,0,0,0.05)] group-hover:opacity-100 dark:[--spotlight:rgba(255,255,255,0.15)]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--spotlight),
              transparent 80%
            )
          `,
        }}
      />
      {preview ? (
        <img
          className="rounded-lg h-[200px] object-cover"
          src={preview}
          alt={title}
        />
      ) : (
        <Skeleton className="h-[200px] w-full rounded-lg" />
      )}
      <div className="flex-grow space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="text-accent-5">{description}</div>
      </div>
      <div className="flex items-center text-sm">
        {formattedDate ? formattedDate : <Skeleton className="h-5 w-10" />}
        &nbsp;/&nbsp; 585 likes &nbsp;/&nbsp; 1840 views
      </div>
    </Link>
  );
};
