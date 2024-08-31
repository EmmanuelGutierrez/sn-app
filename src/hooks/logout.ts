import { deleteCookie } from "@/lib/cookie/cookie";
import { deleteSession } from "@/lib/session";
import { useAppStore } from "@/store/App/useAppStore";
import { useUserStore } from "@/store/User/userStore";
import { useQuery } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const { setToken, setUser } = useUserStore((s) => s);
  const { setUserMenu } = useAppStore((s) => s);
  const router = useRouter();

  const logout = async () => {
    await deleteSession();
    setToken(null);
    setUser(null);
    setUserMenu(false);
    router.push("login");
  };

  return logout;
};
