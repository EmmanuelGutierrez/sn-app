"use client";
import { LoginInputDto } from "@/types/gql/graphql";
import { colors } from "@/types/colors";
import Button from "@/app/_components/common/Button";
import Input from "@/app/_components/common/Input";
import { useLoginService } from "@/hooks/login";
// import { useUserService } from "@/hooks/user";
import { getTokenCookie, setCookie } from "@/lib/cookie/cookie";
import { useAppStore } from "@/store/App/useAppStore";
import { useUserStore } from "@/store/User/userStore";
import { getCookie, getCookies } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createSession } from "@/lib/session";

const Page = () => {
  const { data, error, loading, login } = useLoginService();
  const { setToken, token } = useUserStore((state) => state);
  // const {refetch}=useUserService()

  // const token = getCookies();
  // console.log("token login", token);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputDto>();

  const router = useRouter();

  // useEffect(() => {
  //   if(getTokenCookie()){
  //     router.push("/main");
  //   }
  // }, [getTokenCookie()]);
  const onSubmit: SubmitHandler<LoginInputDto> = async (formData) => {
    const res = await login({ variables: { loginUserInput: formData } });

    if (res.data?.login.token) {
      await createSession(res.data.login.token);
      setToken(res.data.login.token);
      router.push('/main')
    }
  };

  return (
    <div className="border-solid bg-white border-gray-light border-1 rounded-xl py-5 px-10 ">
      {/* <p className="self-center text-lg font-bold sm:text-2sm whitespace-nowrap text-gray dark:text-white mt-2">
        Usuario
      </p> */}
      <p className="text-2xl font-bold my-2 text-black-light">Login</p>
      <p className=" font-light text-md text-gray">
        Ingrese sus datos para logearse{" "}
      </p>
      <form
        className="max-w-sm w-72 flex flex-col items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder={"Email"}
          inputProps={{
            ...register("username", { required: true }),
          }}
          error={!!errors.username}
        >
          Email
        </Input>
        <Input
          type="password"
          placeholder={"Password"}
          inputProps={{
            ...register("password", { required: true }),
          }}
          error={!!errors.password}
        >
          Password
        </Input>
        <Button loading={loading} disabled={!!token} className="mt-6 w-36">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Page;
