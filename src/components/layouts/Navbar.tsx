"use client";
import { useSession } from "next-auth/react";
import LinkItem from "../common/LinkItem";
import UserControl from "./UserControl";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center">
      {session ? (
        <UserControl />
      ) : (
        <ul className="flex items-center gap-5 mr-4">
          <LinkItem href="/products">Products</LinkItem>
          <LinkItem href="/about">About</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
