import React from "react";
import Post from "../_components/Post";

const posts = [
  {
    user: {
      username: "Usuario1",
      image_profile: {
        url: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      },
    },
    createdAt: new Date(),
    reactions: [].length,
    images: [
      {
        url: "https://res.cloudinary.com/dcfnbbld6/image/upload/v1720575751/users/profile_images/668de7069e1df568f656af45/668de7069e1df568f656af45.jpg",
      },
    ],
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio quis cupiditate, enim autem quam magni quos optio inventore obcaecati earum eum asperiores, rerum quas ratione maxime suscipit id voluptatum?",
  },
  {
    user: {
      username: "Usuario1",
      image_profile: {
        url: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      },
    },
    createdAt: new Date(),
    reactions: [].length,
    images: [
      {
        url: "https://res.cloudinary.com/dcfnbbld6/image/upload/v1720575751/users/profile_images/668de7069e1df568f656af45/668de7069e1df568f656af45.jpg",
      },
    ],
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio quis cupiditate, enim autem quam magni quos optio inventore obcaecati earum eum asperiores, rerum quas ratione maxime suscipit id voluptatum?",
  },
  {
    user: {
      username: "Usuario1",
      image_profile: {
        url: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      },
    },
    createdAt: new Date(),
    reactions: [].length,
    images: [
      {
        url: "https://res.cloudinary.com/dcfnbbld6/image/upload/v1720575751/users/profile_images/668de7069e1df568f656af45/668de7069e1df568f656af45.jpg",
      },
    ],
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio quis cupiditate, enim autem quam magni quos optio inventore obcaecati earum eum asperiores, rerum quas ratione maxime suscipit id voluptatum?",
  },
];

const PostContainer = () => {
  console.log("hola")
  return (
    <div className="flex flex-col items-center before:contet-[''] before:block before:bg-gray-light before:w-0.5 before:h-full before:absolute before:left-12 before:top-10 before:-z-10  before:opacity-70 relative">
      {posts.map((p, i) => (
        <Post key={i} />
      ))}
    </div>
  );
};

export default PostContainer;
