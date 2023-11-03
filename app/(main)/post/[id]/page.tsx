import CreateEditPostModal from "@/components/CreateEditPostModal";
import DeletePostModal from "@/components/DeletePostModal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useSinglePost } from "@/hooks/pageHooks/useSinglePost";
interface TSinglePost {
  params: { id: string };
}

const SinglePost = ({ params }: TSinglePost) => {
  const { get, on } = useSinglePost(params.id);

  return (
    <section className="py-4">
      <Card className="text-center">
        <CardHeader className="font-bold">{get.data?.title}</CardHeader>
        <CardContent className="font-bold">{get.data?.content}</CardContent>
        <CardFooter className="flex justify-center gap-20">
          <CreateEditPostModal
            defaultValues={{
              content: get.data?.content,
              title: get.data?.title,
            }}
            type="edit"
          />
          <DeletePostModal id={get.data.post_id} />
        </CardFooter>
      </Card>
    </section>
  );
};

export default SinglePost;
