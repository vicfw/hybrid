import { PostType } from "@/lib/types/globalTypes";
import { ChangeEvent, useState } from "react";

export const usePosts = (posts: PostType[]) => {
  const [allPosts, setAllPosts] = useState<PostType[]>(posts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return {
    get: { allPosts, searchQuery },
    set: {},
    on: { handleSearchChange },
  };
};
