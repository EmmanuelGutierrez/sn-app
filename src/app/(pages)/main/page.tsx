"use client";
import Post from "@/app/_components/Post";
import PostContainer from "@/app/_containers/PostContainer";
import { useUserService } from "@/hooks/user";
import { useUserStore } from "@/store/User/userStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  return (
    <div className="p-7">
      <div className="bg-white mb-2.5 p-3 rounded-xl shadow-sm">
        <form>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </form>
      </div>
      <PostContainer />
    </div>
  );
};
export default Page;
