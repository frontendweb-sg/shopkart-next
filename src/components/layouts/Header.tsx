import Link from "next/link";
import Logo from "../common/Logo";

const Header = () => {
  return (
    <header className="relative z-20 w-full h-16 sm:h-20 lg:h-16  items-center is-scrolling">
      <div className="w-5/6 m-auto min-h-full items-center  flex justify-between">
        <Logo href="/" />
        <div className="flex">
          <ul className="flex">
            <li className="mx-2">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2">
              <Link href="/products">Products</Link>
            </li>
            <li className="mx-2">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
