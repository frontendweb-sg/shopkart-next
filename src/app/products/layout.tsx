import Screen from "@/components/common/Screen";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { ReactNode } from "react";

/**
 * Public layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Screen>
      <Header />
      <main className="my-5">{children}</main>
      <Footer />
    </Screen>
  );
};

export default Layout;
