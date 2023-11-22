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
    <>
      <Header />
      <main className="flex-1 mx-auto max-w-[1200px] px-4 my-4">
        <div className="grid grid-cols-12 gap-4">
          <Sidebar className="col-span-3" />
          <div className="col-span-9">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
