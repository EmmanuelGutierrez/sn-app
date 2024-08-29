import { useUserStore } from "@/store/User/userStore";
import Image from "next/image";
import React from "react";
import SkeletonTextLoader from "./common/SkeletonTextLoader";
import { userDefaultImage } from "@/constants/userDefaultImage";

const UserCard = () => {
  const { user, loading } = useUserStore((s) => s);
  console.log(user);
  // if(!user || loading){
  //   return<div>cargando</div>
  // }
  // const {me}=user
  // console.log('me',me)
  return (
    <div className="bg-black-light h-96 relative">
      <div className="absolute top-28 h-full w-full py-14 px-10 ">
        <div className="bg-white z-60 h-full w-full rounded-2xl shadow-lg flex flex-col justify-center items-center ">
          <Image
            className="rounded-full"
            src={user?.me.profile_image?.secure_url ?? userDefaultImage}
            alt="user photo"
            width={80}
            height={80}
          />

          <div className="mt-2 flex justify-center">
            {user ? (
              <p className="self-center text-lg font-bold sm:text-2sm whitespace-nowrap text-gray dark:text-white">
                {user?.me.username}
              </p>
            ) : (
              <SkeletonTextLoader width={10}/>
            )}
          </div>
          <div className="border-solid border-gray border-b-1 mt-3 mb-9 w-44"></div>
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col items-center">
              {user ? (
                <p className="font-semibold text-black-light dark:text-black-light">
                  {user?.me.followers.length}
                </p>
              ) : (
                <SkeletonTextLoader />
              )}
              <h5 className="mb-1 mt-1 text-sm font-normal tracking-tight text-gray dark:text-white">
                Seguidores
              </h5>
            </div>
            <div className="flex flex-col items-center">
              {user ? (
                <p className="font-semibold text-black-light dark:text-black-light">
                  {user?.me.following.length}
                </p>
              ) : (
                <SkeletonTextLoader />
              )}
              <h5 className="mb-1 mt-1 text-sm font-normal tracking-tight text-gray dark:text-white">
                Seguidos
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
