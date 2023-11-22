import { lato } from "@/utils/fonts";
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
const Logo = ({ className, href = "/", label = "Shopkart", ...rest }: LogoProps) => {
  const classes = classNames(
    "block text-center font-lato text-rose-600 items-center flex italic font-black",
    className
  );
  return (
    <Link className={classes} href={href} {...rest}>
      <Image alt="Logo" src="/logo-32.png" width={32} height={32} className="mr-2" /> {label}
    </Link>
  );
};

export default Logo;
