import { User } from "@/@types/codegen/graphql";

export interface UserStoreI {
  user: User | null|undefined;
  setUser: (value: User|null|undefined) => void;
  token: string | null | undefined;
  setToken: (value: string | null | undefined) => void;
}
