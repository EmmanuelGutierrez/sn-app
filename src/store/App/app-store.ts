import { create, createStore } from "zustand";
import { appStoreI } from "./types";


export const createAppStore = ()=>{
  return createStore<appStoreI, []>((set) => ({
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
    // token: null,
    // setToken: (value) => {
    //   set(() => ({ token: value }));
    // },
  }));
}
