import Image from "next/image";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Nav from "../_containers/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // document.documentElement.classList.add("dark");
  return <Nav>{children}</Nav>;
}
