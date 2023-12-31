import Header from "@/components/layouts/Header";
import UserSidebar from "@/components/users/UserSidebar";
import { ReactNode } from "react";

/**
 * User layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1340px] px-4 md:px-8 2xl:px-6">
        <div className="grid grid-cols-12 gap-4">
          <UserSidebar />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
