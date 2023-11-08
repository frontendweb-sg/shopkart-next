"use client";
import { FaBars, FaBell, FaCommentAlt } from "react-icons/fa";
import UserControl from "../layouts/UserControl";

const AdminHeader = () => {
  return (
    <header className="border-b flex items-center justify-between border-gray-200 px-4 py-3">
      <div className="w-full flex items-center justify-between">
        <button onClick={() => {}}>
          <FaBars />
        </button>
        <nav className="flex items-center">
          <ul className="flex items-center gap-4 mr-4">
            <li>
              <button className="text-rose-500">
                <FaCommentAlt />
              </button>
            </li>
            <li>
              <button className="text-rose-500">
                <FaBell />
              </button>
            </li>
          </ul>
          <UserControl />
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
