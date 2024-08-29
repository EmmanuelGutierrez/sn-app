import { create, createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserStoreI } from "./types";
import { MeQuery, User } from "@/types/gql/graphql";
import { useUserService } from "@/hooks/user";

export const createUserStore = () => {
  return createStore<UserStoreI, [["zustand/persist", UserStoreI]]>(
    persist(
      (set) => ({
        user: null,
        setUser: (data: MeQuery | null | undefined) => {
          // const { loading } = useUserService();
          return set((state) => ({ user: data }));
        },
        loading: false,
        setLoading: (data: boolean) => {
          // const { loading } = useUserService();
          return set((state) => ({ loading: data }));
        },
        token: null,
        setToken: (value) => {
          set(() => ({ token: value }));
        },
      }),
      {
        name: "user-storage",
      }
    )
  );
};
