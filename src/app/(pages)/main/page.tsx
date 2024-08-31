"use client";
import Button from "@/app/_components/common/Button";
import CreatePost from "@/app/_components/CreatePost";
import Post from "@/app/_components/Post";
import PostContainer from "@/app/_containers/PostContainer";
import { useAutosizeTextArea } from "@/hooks/useAutosizeTextArea";
import { useUserService } from "@/hooks/user";
import { useUserStore } from "@/store/User/userStore";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  
  return (
    <div className="p-7">
      <CreatePost/>
      <PostContainer />
    </div>
  );
};
export default Page;
