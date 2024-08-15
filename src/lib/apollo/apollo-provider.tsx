"use client";

import { ApolloLink, createHttpLink, from, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { apolloLink } from "./apollo-link";
// import { useUserStore } from "@/store/User/userStore";
import { useRef } from "react";

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  // const { token } = useUserStore((s) => s);
  const tokenRef = useRef<string | null | undefined>();
  // tokenRef.current = token;
  // console.log("provider token", token);
  const authLink = setContext((_, context) => {
    // const { token } = useUserStore(s=>s);
    console.log(context);
    // const {} = useAppStore(state=>state)
    return {
      headers: {
        ...context.headers,
        ...(tokenRef.current ? { authorization: tokenRef.current ? `Bearer ${tokenRef.current}` : "" } : {}),
      },
    };
  });
  const makeClient = () => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link:
        typeof window === undefined
          ? ApolloLink.from([
              new SSRMultipartLink({ stripDefer: true }),
              from([authLink, apolloLink, authLink]),
            ])
          : from([authLink, apolloLink]),
    });
  };
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
