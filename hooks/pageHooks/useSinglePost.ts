import { PostType } from "@/lib/types/globalTypes";
import { mockPosts } from "@/mock/posts";
import { useMemo } from "react";

export const useSinglePost = (id: string) => {
  const fakeData: PostType[] = useMemo(() => {
    return mockPosts;
  }, []);

  const data = fakeData.find((data) => data.post_id === id)!;

  return { get: { data }, on: {} };
};
