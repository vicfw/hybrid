import { PostType } from "@/lib/types/globalTypes";
import { mockPosts } from "@/mock/posts";
import { useMemo } from "react";

export const useHome = () => {
  const fakeData: PostType[] = useMemo(() => {
    return mockPosts;
  }, []);

  return { get: { fakeData }, on: {} };
};
