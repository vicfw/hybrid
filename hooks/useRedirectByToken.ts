import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRedirectByToken = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    }
  }, [router]);
};
