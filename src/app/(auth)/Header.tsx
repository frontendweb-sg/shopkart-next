import Logo from "@/components/common/Logo";

/**
 * Auth header component
 * @returns
 */
const AuthHeader = () => {
  return (
    <header className="p-3">
      <div>
        <Logo href="/" />
      </div>
    </header>
  );
};

export default AuthHeader;
