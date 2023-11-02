import classNames from "classnames";
import Link, { LinkProps } from "next/link";
/**
 * Logo component
 * @returns
 */
type LogoProps = LinkProps & {
  label?: string;
  className?: string;
};
const Logo = ({ className, href = "/", label = "eKart", ...rest }: LogoProps) => {
  const classes = classNames("block text-center", className);
  return (
    <Link className={classes} href={href} {...rest}>
      {label}
    </Link>
  );
};

export default Logo;
