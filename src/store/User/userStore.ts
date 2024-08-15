import { useStore } from "zustand";
import { UserStoreI } from "./types";
import { UserStoreContext } from "./user-store-provider";
import { useContext } from "react";


export const useUserStore = <T>(selector: (store: UserStoreI) => T) => {
  const userStoreContext = useContext(UserStoreContext);
  if (!userStoreContext) {
    throw new Error("useUserStore must be used within UserStoreProvider");
  }
  return useStore(userStoreContext, selector);
};
