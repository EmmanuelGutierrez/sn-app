import {
  LoginDocument,
} from "@/types/gql/graphql";
// import { useUserStore } from "@/store/User/userStore";
import {  useMutation } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const useLoginService = () => {
  // const {setToken}=useUserStore(s=>s)
  const [login, { data, loading, error }] = useMutation(LoginDocument);

  /* const { data: userData, error: userError } =
    useSuspenseQuery<Pick<Query, "users">>(query);

  console.log(userError, userData); */
  return { login, data, loading, error };
};
