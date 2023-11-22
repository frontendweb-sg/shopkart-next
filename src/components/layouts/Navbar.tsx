"use client";
import { useSession } from "next-auth/react";
import LinkItem from "../common/LinkItem";
import UserControl from "./UserControl";
import CartIcon from "../cart/CartIcon";
import { AppContent } from "@/utils/AppContent";
import { FaLock } from "react-icons/fa";
import GlobalSearch from "../common/GlobalSearch";

/**
 * Navbar component
 * @returns
 */
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between flex-1 items-center">
      <ul className="flex items-center gap-5 mr-4">
        <LinkItem menu href="/search">
          {AppContent.shop}
        </LinkItem>
      </ul>
      <GlobalSearch />
      <div>
        {session ? (
          <UserControl />
        ) : (
          <ul className="flex items-center  gap-5 mr-4">
            <LinkItem menu href="/login" className="flex items-center">
              <FaLock className="text-sm mr-2" /> {AppContent.login}
            </LinkItem>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
