import CreateEditPostModal from "@/components/CreateEditPostModal";
import PostCard from "@/components/PostCard";
import Posts from "@/components/Posts";
import SearchPosts from "@/components/SearchPosts";

import { useHome } from "@/hooks/pageHooks/useHome";

export default function Home() {
  const { get, on } = useHome();

  return (
    <section className="py-4">
      <Posts posts={get.fakeData} />
    </section>
  );
}
