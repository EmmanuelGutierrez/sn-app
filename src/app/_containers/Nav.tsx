"use client";
import Image from "next/image";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Bar from "./Bar";
// import { useUserService } from "@/hooks/user";
import { useUserStore } from "@/store/User/userStore";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import { MeDocument, Query } from "@/types/gql/graphql";
import { meQuery } from "@/gql/querys/me";
import { useEffect } from "react";
import { useUserService } from "@/hooks/user";

export default function Nav({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { setUser, setLoading } = useUserStore((s) => s);
  // const [usu, setUsu] = useState(Types);

  const { data, loading } = useUserService();
  // console.log(data);
  useEffect(() => {
    setLoading(loading);
  }, [loading, setLoading]);
  useEffect(() => {
    if (data) {
      console.log(data.me);
      // const { followers, following, ...user } = data.me;
      setUser(data);
    }
  }, [data, setUser]);
  // if (loading || !data) return <div>...cargando</div>;
  return (
    <div>
      <Bar />
      <Sidebar />

      <div className="p-4 sm:ml-80 xl:mr-120 md:mr-14  h-screen">
        <div className="mt-14 ">{children}</div>
      </div>
    </div>
  );
}
