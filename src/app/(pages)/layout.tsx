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
  return <Nav>{children}</Nav>;
}
