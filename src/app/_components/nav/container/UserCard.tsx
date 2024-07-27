
import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className="bg-black-light h-96 relative">
      <div className="absolute top-28 h-full w-full py-14 px-10 ">
        <div className="bg-white z-60 h-full w-full rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <Image
            className="rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
            width={80}
            height={80}
          />
          <p className="self-center text-lg font-bold sm:text-2sm whitespace-nowrap text-gray dark:text-white mt-2">
            Usuario
          </p>    
          <div className="border-solid border-gray border-b-1 mt-3 mb-9 w-44"></div>
          <div className="flex justify-evenly w-full">
            <div className="flex flex-col items-center">
              <p className="mb-1 font-semibold text-black-light dark:text-black-light">
                10
              </p>
              <h5 className="mb-1 text-sm font-normal tracking-tight text-gray dark:text-white">
                Seguidores
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-1 font-semibold text-black-light dark:text-black-light">
                10
              </p>
              <h5 className="mb-1 text-sm font-normal tracking-tight text-gray dark:text-white">
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
