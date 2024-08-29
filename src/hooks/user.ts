"use client";
import { useUserStore } from "@/store/User/userStore";
import { MeDocument, MeQuery } from "@/types/gql/graphql";
import { useQuery, useSuspenseQuery } from "@apollo/client";
// import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
// import { useSuspenseQuery, useMutation, gql } from "@apollo/client";

export const useUserService = () => {
  //   const { setUser } = useUserStore();
  // const {token}=useUserStore(s=>s)
  // console.log("token store",token)
  // const { data, loading, error } = useQuery<MeQuery>(MeDocument);
  // if(!data){
  //   const { setUser } = useUserStore((s) => s);

  // }

  return useQuery<MeQuery>(MeDocument);
  //   if (!error) {
  //     setUser(data.me);
  //   }
  // return { data, error, refetch };
};
