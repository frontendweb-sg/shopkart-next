import Link from "next/link";
import Logo from "../common/Logo";
import Navbar from "./Navbar";

/**
 * Header component
 * @returns
 */
const Header = () => {
  return (
    <header className="relative z-20 w-full h-16 sm:h-20 border-b lg:h-16  items-center is-scrolling">
      <div className="w-5/6 m-auto min-h-full items-center  flex justify-between">
        <Logo href="/" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
