import { getClient } from "@/lib/apollo/apollo-client";
import { deleteCookie } from "@/lib/cookie/cookie";
import { useUserStore } from "@/store/User/userStore";
import { useQuery } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const { setToken, setUser } = useUserStore((s) => s);
  const router = useRouter();
  

  const logout = () => {
    
    deleteCookie();
    setToken(null);
    setUser(null);
    router.push("login");
  };

  return logout;
};
