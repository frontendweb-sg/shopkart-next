import UserControl from "@/components/layouts/UserControl";
import type { LinkProps } from "next/link";
import { FaBars, FaCommentAlt, FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <header className="p-3">
      <div className="flex items-center justify-between border-b">
        <button className="bg-slate-600 p-2 text-white rounded-sm">
          <FaBars />
        </button>
        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <button>
                <FaCommentAlt />
              </button>
            </li>
            <li>
              <button>
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

export default Header;
