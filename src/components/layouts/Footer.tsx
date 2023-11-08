import classNames from "classnames";
import Link from "next/link";

export type FooterProps = React.HtmlHTMLAttributes<HTMLElement> & {
  theme?: "light" | "dark";
  textSize?: Size;
};
const Footer = ({ theme, textSize = "sm", ...rest }: FooterProps) => {
  return (
    <div
      className={classNames(
        "w-full absolute bottom-0 m-auto left-0 right-0 py-5 px-3mt-4 text-center",
        theme === "light" ? "text-white" : "text-slate-800"
      )}
      {...rest}
    >
      <div className="text-center">
        <p className={classNames("flex justify-center", `text-${textSize}`)}>
          &copy; {new Date().getFullYear()}, All rights reserved. powered by{" "}
          <Link className="inline-block ml-2 text-pink-500" href="https://www.frontendweb.in">
            FrontendWeb
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
