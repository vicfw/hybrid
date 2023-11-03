"use client";

import { usePosts } from "@/hooks/pageHooks/usePosts";
import { PostType } from "@/lib/types/globalTypes";
import React from "react";
import PostCard from "./PostCard";
import SearchPosts from "./SearchPosts";
import CreateEditPostModal from "./CreateEditPostModal";

interface TPosts {
  posts: PostType[];
}

const Posts = ({ posts }: TPosts) => {
  const { get, set, on } = usePosts(posts);

  return (
    <>
      <div className="flex justify-between items-center py-3">
        <SearchPosts handleSearchChange={on.handleSearchChange} />
        <CreateEditPostModal
          defaultValues={{ title: "", content: "" }}
          type="create"
        />
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-5 justify-center overflow-auto">
        {get.allPosts
          .filter((post) =>
            post.title.toLowerCase().includes(get.searchQuery.toLowerCase())
          )
          .map((data) => (
            <PostCard {...data} key={data.post_id} />
          ))}
      </div>
    </>
  );
};

export default Posts;
