import Link, { LinkProps } from "next/link";
/**
 * Logo component
 * @returns
 */
type LogoProps = LinkProps & {
  label?: string;
};
const Logo = ({ href = "/", label = "eKart", ...rest }: LogoProps) => {
  return (
    <div>
      <Link href={href} {...rest}>
        {label}
      </Link>
    </div>
  );
};

export default Logo;
