import * as z from "zod";

export const registerSchema = z.object({
  username: z.string({ required_error: "Please enter your name" }).min(2, {
    message: "Please user more than 2 characters",
  }),
  email: z
    .string({ required_error: "Please enter your email" })
    .email({ message: "Please enter a valid email" }),
  password: z.string({ required_error: "Please enter a password" }).min(6, {
    message: "Please user more than 6 characters for password",
  }),
});
