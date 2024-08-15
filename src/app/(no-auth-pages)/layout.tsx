
// import Image from "next/image";
// import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
// import Nav from "../_containers/Nav";
// import { redirect } from "next/navigation";
import { getTokenCookie } from "@/lib/cookie/cookie";

export default function RootLayout(props: Readonly<any>) {
  // const token = useAppStore.;
  // console.log(props);
  // if (!!token) {
  //   redirect("main");
  // }
  // document.documentElement.classList.add("dark");
  return <div className=" h-screen flex items-center justify-center">{props.children}</div>;
}
