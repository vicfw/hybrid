"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeletePost } from "@/hooks/pageHooks/useDeletePost";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Delete } from "lucide-react";

interface TDeletePost {
  id: string;
}

const DeletePostModal = ({ id }: TDeletePost) => {
  const { get, on } = useDeletePost(id);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Delete className="cursor-pointer text-destructive" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-bold text-center">
            Are you sure ?{" "}
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-7">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostModal;
