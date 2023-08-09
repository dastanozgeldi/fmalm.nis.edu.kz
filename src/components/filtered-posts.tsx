import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

import { PostCard } from "./post-card";
import { BlogPostCore } from "@/types";
import { Icons } from "./icons";

type FilteredPostsProps = {
  posts: {
    data: BlogPostCore[];
  };
};

const FilteredPosts = ({ posts }: FilteredPostsProps) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = posts.data.filter((post) =>
    post.attributes.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="relative mb-8">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          aria-label="Search articles"
          className="w-full pl-12"
          id="search"
        />
        <Label htmlFor="search">
          <Icons.search
            className="absolute left-4 top-1/2 -translate-y-1/2"
            size={20}
          />
        </Label>
      </div>
      {!filteredPosts.length && (
        <div className="text-center text-xl">No posts found</div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default FilteredPosts;
