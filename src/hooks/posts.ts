import {
  LoginInputDto,
  Mutation,
  MutationLoginArgs,
  Query,
  TokenReturnDto,
} from "@/@types/codegen/graphql";
import { useSuspenseQuery, useMutation, gql } from "@apollo/client";

const query = gql`
  query Query($params: FilterDto!) {
    allPosts(params: $params) {
      page
      total
      inThisPage
      data {
        _id
        title
      }
    }
  }
`;

export const useGetPostService = () => {
  const {data,error,} = useSuspenseQuery<Pick<Query, "allPosts">>(query);


  if(!error){
    
  }

  return { data, error };
};
