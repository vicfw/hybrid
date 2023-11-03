import { useToast } from "@/components/ui/use-toast";
import { useUserStore } from "@/lib/store/userStore";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRedirectByToken } from "../useRedirectByToken";
import { loginUserApi } from "@/lib/api/user";
import { encryptTokenAndSetLocalStorage } from "@/lib/utils";
import { loginSchema } from "@/lib/validations/auth/login-validation";

export const useLogin = () => {
  const { addUser } = useUserStore((state) => state);
  const router = useRouter();
  const { toast } = useToast();

  // redirect if no token set
  useRedirectByToken();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      // const result = await loginUserApi({ ...values });
      encryptTokenAndSetLocalStorage("hello");
      // addUser({ ...data.user, expiredAt: data.authorization.expires_at });
      router.replace("/");
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
