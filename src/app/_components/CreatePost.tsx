"use client";
import { useAutosizeTextArea } from "@/hooks/useAutosizeTextArea";
import clsx from "clsx";
import React, { useImperativeHandle, useRef, useState } from "react";
import Button from "./common/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreatePostDto } from "@/types/gql/graphql";
import { useCreatePost } from "@/hooks/post/createPost";
import Image from "next/image";
import { useUserStore } from "@/store/User/userStore";
import { userDefaultImage } from "@/constants/userDefaultImage";

const CreatePost = () => {
  const { createPost, loading } = useCreatePost();

  const { user } = useUserStore((s) => s);

  const [canWrite, setCanWrite] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<CreatePostDto>({
    defaultValues: { body: "" },
    shouldFocusError: false,
  });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const maxLenght = 300;
  const { ref, ...bodyRegister } = register("body", {
    required: true,
    maxLength: maxLenght,
    onChange: (val) => {
      console.log("canWrite", canWrite);
      if (val.target.value.length > maxLenght) {
        setCanWrite(false);
      } else if (val.target.value.length <= maxLenght && !canWrite) {
        setCanWrite(true);
      }
    },
  });
  const body = watch("body");
  useAutosizeTextArea(textAreaRef.current, body);
  useImperativeHandle(ref, () => textAreaRef.current);
  /* const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target.value;
    setValue(val);
    if (val.length > maxLenght) {
      setCanWrite(false);
    } else if (val.length <= maxLenght && !canWrite) {
      setCanWrite(true);
    }
  }; */

  const iconsContainerClass = clsx("icons flex text-gray-500 m-2", {
    hidden: !showInfo,
  });
  const characterCountClass = clsx("count ml-auto  text-xs font-semibold", {
    "text-danger": !canWrite,
    "text-gray-400": canWrite,
  });
  const buttonsClass = clsx("buttons", {
    flex: showInfo,
    hidden: !showInfo,
  });
  const handleCancell = () => {
    resetField("body");
    setShowInfo(false);
    setCanWrite(true);
  };

  const onSubmit: SubmitHandler<CreatePostDto> = async (formData) => {
    console.log("posteando");
    const res = await createPost({ variables: { data: formData } });
    console.log("res", res);
    if (res.data?.createPost._id) {
      handleCancell();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="editor flex flex-col text-gray-800 border rounded-xl border-gray-300 p-4 shadow-lg max-w-2xl"
    >
      {/* <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
        /> */}
      <div className="flex  ">
        <div className="mr-3">
          <Image
            className="rounded-full"
            src={user?.me.profile_image?.secure_url ?? userDefaultImage}
            alt="user photo"
            width={48}
            height={48}
          />
        </div>
        <textarea
          disabled={loading}
          // onChange={handleChange}
          className="description w-full h-12 bg-gray-100 overflow-hidden p-3 border rounded-xl resize-none border-gray-300 outline-none"
          spellCheck="false"
          ref={textAreaRef}
          onFocus={() => {
            setShowInfo(true);
          }}
          placeholder="Describe everything about this post here"
          {...bodyRegister}
        ></textarea>
      </div>

      <div className={iconsContainerClass}>
        {/*   <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg> */}
        <div className={characterCountClass}>{body.length}/300</div>
      </div>
      <div className={buttonsClass}>
        <Button
          color="primary_dark"
          className="ml-auto"
          onClick={handleCancell}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          loading={loading}
          className=" ml-2"
          disabled={!canWrite}
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default CreatePost;
