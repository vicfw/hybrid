"use client";
import { PostType } from "@/lib/types/globalTypes";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface TPost extends PostType {}

const PostCard = ({ content, post_id, title }: TPost) => {
  return (
    <Link href={`/post/${post_id}`}>
      <Card className="hover:bg-black hover:text-white">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">{content}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default PostCard;
