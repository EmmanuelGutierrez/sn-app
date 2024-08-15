import { Query } from "@/@types/codegen/graphql";
import { getClient } from "@/lib/apollo/apollo-client";
import { meQuery } from "@/lib/apollo/querys/me";
import { getTokenCookie } from "@/lib/cookie/cookie";

export const getUserService = async () => {
  //   const { setUser } = useUserStore();
  // const token= await getTokenCookie() 
  const { data, loading, error } = await getClient().query<Pick<Query, "me">>({
    query: meQuery,
  });
  //   if (!error) {
  //     setUser(data.me);
  //   }
  return { data, error, loading };
};
  