import { type ReactNode } from "react";
import Sidebar from "@/components/admin/Sidebar";
import AdminHeader from "@/components/admin/Header";

/**
 * Admin layout
 * @param param0
 * @returns
 */
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen bg-gray-50 flex flex-row flex-wrap">
      <Sidebar />
      <div className="bg-gray-100 flex-1">
        <AdminHeader />
        <div className="flex-1  p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
