import { CreatePostDocument } from "@/types/gql/graphql";
import { useMutation } from "@apollo/client";

export const useCreatePost = () => {
  // const {setToken}=useUserStore(s=>s)
  const [createPost, { data, loading, error }] = useMutation(CreatePostDocument);

  /* const { data: userData, error: userError } =
    useSuspenseQuery<Pick<Query, "users">>(query);

  console.log(userError, userData); */
  return { createPost, data, loading, error };
};
