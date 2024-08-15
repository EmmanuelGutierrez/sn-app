"use server";
import { cookies } from "next/headers";
import { tokenKey } from "./cookies-key";
import { getCookie,deleteCookie as deleteCookieNext } from "cookies-next";

export const getTokenCookie = () => {
  // const cookeStore= cookies()
  const token =getCookie(tokenKey,{cookies,})

  return token;
};

export const deleteCookie = () => {
  // const cookeStore= cookies()
  const token = deleteCookieNext(tokenKey, { cookies });

  return token;
};


export const setCookie = (token: string) => {
  // console.log("seteando token", token);

  cookies().set({
    name: tokenKey,
    value: token,
    httpOnly: true,
    maxAge: 60 *  5 * 1000,
    expires: new Date(Date.now() + 60 * 5 * 1000),
    path: "/",
  });
};
