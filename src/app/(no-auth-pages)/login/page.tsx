import { colors } from "@/@types/colors";
import Button from "@/app/_components/common/Button";
import Input from "@/app/_components/common/Input";
import React from "react";

const page = () => {
  return (
    <div className="border-solid bg-white border-gray-light border-1 rounded-xl py-5 px-10 ">
      {/* <p className="self-center text-lg font-bold sm:text-2sm whitespace-nowrap text-gray dark:text-white mt-2">
        Usuario
      </p> */}
      <p className="text-2xl font-bold my-2 text-black-light">Login</p>
      <p className=" font-light text-md text-gray">
        Ingrese sus datos para logearse{" "}
      </p>
      <form className="max-w-sm w-72 flex flex-col items-center ">
        <Input placeholder={"Email"}>Email</Input>
        <Input type="password" placeholder={"Password"}>
          Password
        </Input>
        <Button className="mt-6 w-36">Login</Button>
      </form>
    </div>
  );
};

export default page;
