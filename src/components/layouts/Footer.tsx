import Link from "next/link";

export type FooterProps = React.HtmlHTMLAttributes<HTMLElement> & {};
const Footer = (props: FooterProps) => {
  return (
    <div
      className="w-full absolute bottom-0 m-auto left-0 right-0 py-5 px-3 border-t border-slate-200 mt-4 text-center"
      {...props}
    >
      <div className="text-center">
        <p className="text-sm flex justify-center">
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
