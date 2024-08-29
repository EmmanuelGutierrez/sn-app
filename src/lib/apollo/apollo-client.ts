import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { getTokenCookie } from "../cookie/cookie";
import { useAppStore } from "@/store/App/useAppStore";
import { apolloLink } from "./apollo-link";

export const client = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    link: apolloLink,
    // link: new HttpLink({
    //   uri: "http://localhost:3000/graphql",
    //   headers: {
    //     authorization: `Bearer ${getTokenCookie()}` ?? "",
    //   },
    // }),
  });
});
