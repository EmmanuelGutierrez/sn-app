import Image from "next/image";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Bar from "../_components/Bar";

export default function Nav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Bar/>

      <Sidebar/>

      <div className="p-4 sm:ml-80 xl:mr-120 md:mr-14  h-screen">
        <div className="mt-14 ">{children}</div>
      </div>
    </div>
  );
}
