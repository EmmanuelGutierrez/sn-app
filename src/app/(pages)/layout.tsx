// 'use client'
import { useEffect, useState } from "react";
import Nav from "../_containers/Nav";
import { getUserService } from "@/services/user";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const token = await getTokenCookie();
  // // console.log("red", getTokenCookie()?.value);
  // if (!token) {
  //   redirect("login");
  // }
  // console.log(token)
  // const [mount, setMount] = useState(false)
  // useEffect(()=>{
  //   setMount(true)
  // },[])
  // if(!mount){
  //   return <div></div>
  // }
  return <Nav>{children}</Nav>;
}
