import { ReactNode } from "react";
import AuthHeader from "./Header";
import Container from "@/components/common/Container";

/**
 * Auth layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthHeader />
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;
