"use client";
import Logo from "../common/Logo";
import LinkItem from "../common/LinkItem";
import classNames from "classnames";
import { ADMIN_SIDEBAR_MENU } from "@/utils/menu";
import { usePathname } from "next/navigation";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

/**
 * Admin sidebar
 * @returns
 */
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r relative flex flex-wrap bg-white border-gray-300 p-5 flex-none animated faster">
      <div className="w-full">
        <Logo className="border-b pb-4 mb-4" href="/admin" />
        <div className="relative">
          <p className="uppercase text-xs/[12px] text-gray-600 mb-4 tracking-wider">menus</p>
          <ul>
            {ADMIN_SIDEBAR_MENU.map((menu) => {
              const Icon = menu.icon;
              return (
                <LinkItem
                  key={menu.id}
                  className={classNames(
                    "rounded-md hover:bg-gray-200 flex items-center capitalize py-2 px-3  text-sm hover:text-rose-600 transition ease-in-out duration-500",
                    {
                      "bg-rose-700 text-white hover:bg-rose-700": pathname === `/admin${menu.href}`,
                    }
                  )}
                  href={`/admin${menu.href}`}
                  menu
                >
                  <Icon className="text-xs mr-2" />
                  {menu.label}
                </LinkItem>
              );
            })}
          </ul>
          <p className="uppercase text-xs/[12px] text-gray-600 mb-4 tracking-wider mt-6">
            settings
          </p>
          <ul>
            <LinkItem
              className={classNames(
                "rounded-md hover:bg-gray-200 flex items-center capitalize py-2 px-3  text-sm hover:text-rose-600 transition ease-in-out duration-500",
                {
                  "bg-rose-700 text-white hover:bg-rose-700": pathname === `/admin/settings`,
                }
              )}
              href="/admin/settings"
              menu
            >
              <FaCog className="text-xs mr-2" />
              Settings
            </LinkItem>
          </ul>
        </div>
        <div className="absolute flex items-center justify-between border-t border-gray-100 w-full left-0 text-center px-3 py-2 bottom-0">
          <p className="text-xs">Version: 1.0.0</p>
          <button
            className="text-xs flex items-center text-rose-500"
            onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
