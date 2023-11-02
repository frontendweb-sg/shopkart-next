import Logo from "@/components/common/Logo";
import Link from "next/link";
/**
 * Admin sidebar
 * @returns
 */
const Sidebar = () => {
  return (
    <aside className="bg-slate-800 p-2 w-60">
      <Logo href="/admin" className="h-10 items-center text-white border-b border-slate-700 mb-3" />

      <div className="menu">
        <ul>
          <li className="text-white hover:text-sky-800 font-raleway">
            <Link className="block p-2 rounded-sm" href="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="text-white hover:text-sky-800">
            <Link className="block p-2 rounded-sm" href="/admin/category">
              Category
            </Link>
          </li>
          <li className="text-white hover:text-sky-800">
            <Link className="block p-2 rounded-sm" href="/admin/products">
              Products
            </Link>
          </li>
          <li className="text-white hover:text-sky-800">
            <Link className="block p-2 rounded-sm" href="/admin/colors">
              Colors
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
