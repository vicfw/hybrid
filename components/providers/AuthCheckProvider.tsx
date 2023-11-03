"use client";

import { userStateStorageKey } from "@/lib/constants/globalConstants";
import { useUserStore } from "@/lib/store/userStore";
import { useEffect } from "react";

const AuthCheckProvider = () => {
  const { addUser } = useUserStore((state) => state);

  useEffect(() => {
    const storage = localStorage.getItem(userStateStorageKey);
    if (!storage) return;
    const parseStorage = JSON.parse(storage ?? "");
    const user = parseStorage.state?.user;

    addUser(user);
  }, []);

  return null;
};

export default AuthCheckProvider;
