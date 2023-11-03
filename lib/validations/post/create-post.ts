import * as z from "zod";

export const createPostSchema = z.object({
  title: z.string({ required_error: "Please enter title" }),

  content: z.string({ required_error: "Please enter content" }).min(6, {
    message: "Please user more than 6 characters for content",
  }),
});
