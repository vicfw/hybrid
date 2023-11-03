import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRedirectByToken } from "../useRedirectByToken";
import { registerUserApi } from "@/lib/api/user";
import { registerSchema } from "@/lib/validations/auth/register-validation";

export const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();
  // redirect if no token set
  useRedirectByToken();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      await registerUserApi({ ...values });
      toast({
        description: "Your account created successfully.",
        variant: "success",
      });
      router.replace("/login");
    } catch (e: any) {
      toast({
        description: e.message,
        variant: "destructive",
      });
    }
  }

  return {
    get: { form },
    set: {},
    on: { onSubmit },
  };
};
