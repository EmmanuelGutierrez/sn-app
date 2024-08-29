import { MeQuery, User } from "@/types/gql/graphql";

export interface UserStoreI {
  user: MeQuery | null | undefined;
  setUser: (value: MeQuery | null | undefined) => void;
  token: string | null | undefined;
  setToken: (value: string | null | undefined) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}
