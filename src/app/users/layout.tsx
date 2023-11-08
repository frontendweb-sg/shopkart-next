import Header from "@/components/layouts/Header";
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
      {children}
    </>
  );
};

export default Layout;
