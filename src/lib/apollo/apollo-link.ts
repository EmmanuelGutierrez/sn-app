// import { useAppStore } from "@/store/App/useAppStore";
// import { useUserStore } from "@/store/User/userStore";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const authLink = setContext((_, context) => {
//   // const { token } = useUserStore(s=>s);
//   console.log(context);
//   // const {} = useAppStore(state=>state)
//   return {
//     headers: {
//       ...context.headers,
//       // authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  // credentials: "same-origin",
});

export const apolloLink = httpLink;