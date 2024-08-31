"use client";
import { useUserStore } from "@/store/User/userStore";
import { redirect, useRouter, usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";

const RedirectWrapper = ({ children }: { children: React.ReactNode }) => {
  const { token } = useUserStore((s) => s);
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    console.log(token);
    if (token && !pathname.startsWith("/main")) {
      router.push("/main");
    }

    if (!token && !pathname.startsWith("/login")) {
      router.push("/login");
    }
  }, [token, pathname]);
  return <>{children}</>;
};

export default RedirectWrapper;
