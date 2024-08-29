import {
  LoginInputDto,
  Mutation,
  MutationLoginArgs,
  Query,
  TokenReturnDto,
  LoginDocument,
} from "@/types/gql/graphql";
// import { useUserStore } from "@/store/User/userStore";
import { useSuspenseQuery, useMutation, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const mutation = gql`
  mutation Login($loginUserInput: LoginInputDto!) {
    login(loginUserInput: $loginUserInput) {
      token
    }
  }
`;

export const useLoginService = () => {
  // const {setToken}=useUserStore(s=>s)
  const [login, { data, loading, error }] = useMutation(LoginDocument);

  /* const { data: userData, error: userError } =
    useSuspenseQuery<Pick<Query, "users">>(query);

  console.log(userError, userData); */
  return { login, data, loading, error };
};
