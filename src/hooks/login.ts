import {
  LoginInputDto,
  Mutation,
  MutationLoginArgs,
  Query,
  TokenReturnDto,
} from "@/@types/codegen/graphql";
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
  const [login, { data, loading, error }] = useMutation<
    Pick<Mutation, "login">,
    MutationLoginArgs
  >(mutation, { onCompleted: (res,cliOp) => {
    // cliOp?.context
    // console.log('data',res.login.token)
    // setToken(res.login.token)
  } });

  /* const { data: userData, error: userError } =
    useSuspenseQuery<Pick<Query, "users">>(query);

  console.log(userError, userData); */
  return { login, data, loading, error };
};
