import { ReactNode } from "react";
import AuthHeader from "./Header";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import Footer from "@/components/layouts/Footer";

/**
 * Auth layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-100 min-h-screen p-4 flex items-center">
      <Container className="m-auto w-96 p-4 text-center">
        <Logo href="/" />
        <div className="mt-4">{children}</div>
        <Footer />
      </Container>
    </div>
  );
};
export default Layout;
