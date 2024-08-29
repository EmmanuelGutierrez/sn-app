"use client";
import { useLogout } from "@/hooks/logout";
import { useAppStore } from "@/store/App/useAppStore";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import BarMenu from "../_components/BarMenu";

const Bar = () => {
  const { userMenu, setUserMenu, setSideBar, sideBar } = useAppStore((store)=>store);
  const logout = useLogout()

  return (
    <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-light ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <Bars3Icon
            className="size-6 stroke-gray stroke-2 ml-1 sm:hidden"
            onClick={() => setSideBar(!sideBar)}
          />
          <div className="relative sm:ml-96 ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <MagnifyingGlassIcon className="size-6 stroke-gray stroke-2" />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray border border-none rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 h-8 w-8 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={() => setUserMenu(!userMenu)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <BarMenu/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Bar;
