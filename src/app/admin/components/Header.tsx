import type { LinkProps } from "next/link";
import { FaBars, FaCommentAlt, FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <header className="p-3">
      <div className="flex items-center justify-between">
        <button className="bg-slate-600 p-2 text-white rounded-sm">
          <FaBars />
        </button>
        <div>
          <ul className="flex items-center">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
