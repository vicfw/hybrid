"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Edit2, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCreateEditPost } from "@/hooks/pageHooks/useCreateEditPost";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

interface TCreateEditPost {
  defaultValues: {
    title: string;
    content: string;
  };
  type: "create" | "edit";
}

const CreateEditPostModal = ({ defaultValues, type }: TCreateEditPost) => {
  const { get, set, on } = useCreateEditPost(defaultValues);
  const isCreate = type === "create";
  return (
    <Dialog onOpenChange={on.handleClose} open={get.openModal}>
      <DialogTrigger asChild>
        {isCreate ? (
          <Button className="cursor-pointer">
            <div className="flex items-center gap-2">
              <PlusCircle />
              Create Post
            </div>
          </Button>
        ) : (
          <Edit2 className="cursor-pointer text-primary" />
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <Form {...get.form}>
          <form
            onSubmit={get.form.handleSubmit(
              isCreate ? on.onCreateSubmit : on.onEditSubmit
            )}
            className="space-y-4"
          >
            <FormField
              control={get.form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={get.form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter content..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              {isCreate ? "Add" : "Edit"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEditPostModal;
