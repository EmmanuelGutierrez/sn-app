import Image from "next/image";
import React from "react";


const Post = () => {
  return (
    <div className=" p-6 min-h-48  rounded-lg flex ">
      <div className=" px-1 ">
        <button
          type="button"
          className="flex text-sm bg-gray-800 h-12 w-12 rounded-full focus:ring-4 focus:ring-gray-300"
        >
          <Image
            className="w-12 h-12 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
            width={40}
            height={40}
          />
        </button>
      </div>
      <div className="w-full pl-4 pt-3 flex flex-col">
        <p className="font-semibold text-lg">Usuario</p>
        <p className="font-extralight text-sm mb-4">1 year ago</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          deserunt in iusto, nobis asperiores a magnam consequuntur officia vel
          tempore natus, quae tenetur! Quis voluptatibus distinctio illum sint
          odio magni!
        </p>
        <Image
          className="h-120 w-120 object-cover rounded-lg mt-5"
          src={
            "https://res.cloudinary.com/dcfnbbld6/image/upload/v1720575751/users/profile_images/668de7069e1df568f656af45/668de7069e1df568f656af45.jpg"
          }
          alt="img"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Post;
