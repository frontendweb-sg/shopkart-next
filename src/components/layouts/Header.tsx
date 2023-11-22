import Logo from "../common/Logo";
import Navbar from "./Navbar";
import Container from "../common/Container";

/**
 * Header component
 * @returns
 */
const Header = () => {
  return (
    <header className="navbar">
      <Container className="flex items-center justify-between">
        <Logo href="/" className="mr-8" />
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
