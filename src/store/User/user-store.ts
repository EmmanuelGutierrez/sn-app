import { create, createStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserStoreI } from "./types";
import { User } from "@/@types/codegen/graphql";

export const createUserStore = () => {
  return createStore<UserStoreI, [["zustand/persist", UserStoreI]]>(
    persist(
      (set) => ({
        user: null,
        setUser: (data: User | null | undefined) =>
          set((state) => ({ user: data })),
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
