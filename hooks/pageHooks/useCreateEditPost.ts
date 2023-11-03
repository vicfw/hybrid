import { createPostSchema } from "@/lib/validations/post/create-post";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useCreateEditPost = (defaultValues: {
  title: string;
  content: string;
}) => {
  const [openModal, setOpenModal] = useState(false);

  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues,
  });

  function handleClose() {
    setOpenModal((perv) => !perv);
  }

  async function onCreateSubmit(values: z.infer<typeof createPostSchema>) {
    console.log(values, "create");
    handleClose();

    try {
    } catch (e: any) {}
  }

  async function onEditSubmit(values: z.infer<typeof createPostSchema>) {
    console.log(values, "edit");
    handleClose();
    try {
    } catch (e: any) {}
  }

  return {
    get: { form, openModal },
    set: {},
    on: { onCreateSubmit, onEditSubmit, handleClose },
  };
};
