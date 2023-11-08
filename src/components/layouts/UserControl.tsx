"use client";

import classNames from "classnames";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import LinkItem from "../common/LinkItem";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { AppContent } from "@/utils/AppContent";

const UserControl = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const { data: session, status } = useSession();

  console.log("s", pathname, segment);
  return (
    <div className="relative">
      <div className="flex items-center p-2" onClick={() => setOpen((prev) => !prev)}>
        <Image src="/avatar.png" width={30} height={30} alt="Avatar" />
        <label className="ml-2 text-sm font-medium text-orange-700">{session?.user.name}</label>
      </div>
      <div
        className={classNames("absolute border rounded-md bg-white p-2 shadow-sm w-48 right-0", {
          hidden: !open,
        })}
      >
        <ul>
          <LinkItem
            menu
            className="py-2"
            href="/profile"
            parentProps={{
              className: "border-b border-slate-100",
            }}
          >
            {AppContent.profile}
          </LinkItem>
          <LinkItem
            className="py-2"
            menu
            href="/profile"
            parentProps={{
              className: "border-b border-slate-100",
            }}
          >
            {AppContent.changePassword}
          </LinkItem>
          <LinkItem
            className="py-2"
            menu
            href="/profile"
            parentProps={{
              className: "border-b border-slate-100",
            }}
          >
            {AppContent.settings}
          </LinkItem>
          <li>
            <div className="border-b"></div>
            <button className="" onClick={() => signOut({ callbackUrl: "/login", redirect: true })}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserControl;
