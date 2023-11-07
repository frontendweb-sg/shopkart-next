import { Suspense, type ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Error from "./error";

/**
 * Admin layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-slate-100 flex-1">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
