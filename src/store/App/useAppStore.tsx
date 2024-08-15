import { useContext } from "react";
import { AppStoreContext } from "./app-store-provider";
import { useStore } from "zustand";
import { appStoreI } from "./types";

export const useAppStore = <T,>(selector: (store: appStoreI) => T) => {
  const appStoreContext = useContext(AppStoreContext);
  if (!appStoreContext) {
    throw new Error("useAppStore must be used within AppStoreProvider");
  }
  return useStore(appStoreContext, selector);
};
