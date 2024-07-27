'use client'
import {
  ArrowUpOnSquareIcon,
  CameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import NavButton, { NavButtonProps } from "../components/NavButton";
import Image from "next/image";
import UserCard from "./UserCard";
import { useAppStore } from "../../../_stores/App/appStore";
import { XMarkIcon } from "@heroicons/react/24/solid";

const buttonsData: NavButtonProps[] = [
  {
    href: "#",
    Icon: ClipboardDocumentListIcon,
    text: "Actividades",
  },
  {
    href: "#",
    Icon: CameraIcon,
    text: "Mis fotos",
  },
  {
    href: "#",
    Icon: ArrowUpOnSquareIcon,
    text: "Mis posts",
  },
  {
    href: "#",
    Icon: UsersIcon,
    text: "Mis seguidores",
  },
  {
    href: "#",
    Icon: ChatBubbleOvalLeftEllipsisIcon,
    text: "Chats",
  },
];

const Sidebar = () => {
  const { setSideBar, sideBar } = useAppStore();
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-50 sm:w-80 w-full h-screen transition-transform -translate-x-${
        sideBar ? "full" : "none"
      } bg-white-dark sm:translate-x-0 border-solid border-1 border-gray-light`}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-white-dark dark:bg-gray-800 relative">
        <XMarkIcon
          onClick={() => setSideBar(!sideBar)}
          className="sm:hidden size-7 strok-3 stroke-whitfill-white-dark fill-white-dark absolute right-3 top-2 z-40"
        />
        <UserCard />
        <div className="grid grid-cols-2 grid-rows-2 pt-28 px-12 justify-self-center">
          {buttonsData.map((d, i) => (
            <NavButton
              Icon={d.Icon}
              href={d.href}
              text={d.text}
              key={`${d.href}-${i}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
