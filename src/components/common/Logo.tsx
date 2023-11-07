import classNames from "classnames";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
/**
 * Logo component
 * @returns
 */
type LogoProps = LinkProps & {
  label?: string;
  className?: string;
};
const Logo = ({ className, href = "/", label = "ShopKart", ...rest }: LogoProps) => {
  const classes = classNames("block text-center items-center flex", className);
  return (
    <Link className={classes} href={href} {...rest}>
      <Image alt="Logo" src="/logo-32.png" width={32} height={32} className="mr-2" /> {label}
    </Link>
  );
};

export default Logo;
