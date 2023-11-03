import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UserType } from "@/lib/types/globalTypes";
import { userStateStorageKey } from "@/lib/constants/globalConstants";

type UserAndExpiredAt = UserType;

interface UserState {
  user: UserAndExpiredAt | undefined;
  isAuthenticated: boolean;
  addUser: (user: UserAndExpiredAt) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        isAuthenticated: false,
        addUser: (incomingUser: UserAndExpiredAt) =>
          set({ user: incomingUser, isAuthenticated: true }),
        removeUser: () => set({ user: undefined, isAuthenticated: false }),
      }),
      {
        name: userStateStorageKey,
      }
    )
  )
);
