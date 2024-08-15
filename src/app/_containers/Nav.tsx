"use client";
import Image from "next/image";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Bar from "../_components/Bar";
import { useUserService } from "@/hooks/user";
import { useUserStore } from "@/store/User/userStore";

export default function Nav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { token } = useUserStore((s) => s);
  // console.log("token user", token);
  // const { data, error } = useUserService();
  console.log("user");
  return (
    <div>
      <Bar />

      <Sidebar />

      <div className="p-4 sm:ml-80 xl:mr-120 md:mr-14  h-screen">
        <div className="mt-14 ">{children}</div>
      </div>
    </div>
  );
}
