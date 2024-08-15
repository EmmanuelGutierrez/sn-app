import { AppStoreProvider } from "./App/app-store-provider";
import { UserStoreProvider } from "./User/user-store-provider";

export const ZustandProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <UserStoreProvider>
      <AppStoreProvider>{children}</AppStoreProvider>
    </UserStoreProvider>
  );
};
