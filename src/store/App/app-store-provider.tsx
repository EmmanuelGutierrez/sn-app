'use client'
import { createContext, useRef } from "react";
import { createAppStore } from "./app-store";

export type AppStoreAppi = ReturnType<typeof createAppStore>;

export const AppStoreContext = createContext<AppStoreAppi | undefined>(
  undefined
);

export const AppStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<AppStoreAppi>();
  if (!storeRef.current) {
    storeRef.current = createAppStore();
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

