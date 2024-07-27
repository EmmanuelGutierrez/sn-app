import { create } from "zustand";
import { appStoreI } from "./types";

export const useAppStore = create<appStoreI, []>((set) => ({
  userMenu: false,
  setUserMenu: (value) => {
    set(() => ({
      userMenu: value,
    }));
  },
  sideBar: false,
  setSideBar: (value) => {
    set(() => ({
      sideBar: value,
    }));
  },
}));
