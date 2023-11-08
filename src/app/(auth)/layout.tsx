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
  return <div className="flex items-center">{children}</div>;
};
export default Layout;
