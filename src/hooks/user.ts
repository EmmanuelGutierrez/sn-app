"use client"
import {
  Query,
} from "@/@types/codegen/graphql";
import { meQuery } from "@/lib/apollo/querys/me";
import { useSuspenseQuery, useMutation, gql } from "@apollo/client";

export const useUserService = () => {
  //   const { setUser } = useUserStore();
  // const {token}=useUserStore(s=>s)
  // console.log("token store",token)
  const { data, error, refetch } = useSuspenseQuery<Pick<Query, "me">>(
    meQuery,
    // { context: {
    //   token
    // }, }
  );
  //   if (!error) {
  //     setUser(data.me);
  //   }
  return { data, error, refetch };
};
