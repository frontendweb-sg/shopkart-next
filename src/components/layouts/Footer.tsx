import classNames from "classnames";
import Link from "next/link";
import Container from "../common/Container";
import LinkItem from "../common/LinkItem";
import Logo from "../common/Logo";
import {
  FaCaretRight,
  FaEnvelopeOpen,
  FaFacebook,
  FaFax,
  FaGithub,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { AppContent } from "@/utils/AppContent";

export type FooterProps = React.HTMLAttributes<HTMLElement> & {
  theme?: "light" | "dark";
  textSize?: Size;
  isSticky?: boolean;
  noContent?: boolean;
};

/**
 * Footer component
 * @param param0
 * @returns
 */
const Footer = ({ noContent, isSticky = true, theme, textSize = "sm", ...rest }: FooterProps) => {
  return (
    <footer
      className={classNames("bottom-0 w-full bg-gray-100 mt-5 ", {
        "top-[100vh] sticky": isSticky,
      })}
    >
      {!noContent && (
        <Container>
          <div className="pt-14 pb-9">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <Logo href="/" />
                <p className="text-xs my-4 pr-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam
                  deserunt saepe aspernatur vero itaque quos! Reprehenderit.
                </p>
                <ul className="flex items-center gap-3 mt-4">
                  <li>
                    <LinkItem href="">
                      <FaFacebook />
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem href="">
                      <FaTwitter />
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem href="">
                      <FaGithub />
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem href="">
                      <FaInstagram />
                    </LinkItem>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-sm mb-3">Links</h6>
                <ul className="text-xs">
                  <li>
                    <LinkItem href="/" className="flex items-center py-1 hover:text-rose-600">
                      <FaCaretRight className="mr-1" /> Home
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem
                      href="/shipping-return-policy"
                      className="flex items-center py-1 hover:text-rose-600"
                    >
                      <FaCaretRight className="mr-1" /> Shipping &amp; Return policy
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem
                      href="/terms-conditions"
                      className="flex items-center py-1 hover:text-rose-600"
                    >
                      <FaCaretRight className="mr-1" /> Terms &amp; Conditions
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem
                      href="/privacy-policy"
                      className="flex items-center py-1 hover:text-rose-600"
                    >
                      <FaCaretRight className="mr-1" /> Privacy policy
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem href="/faq" className="flex items-center py-1 hover:text-rose-600">
                      <FaCaretRight className="mr-1" /> FAQ`s
                    </LinkItem>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="mb-3 text-sm">My Account</h6>
                <ul className="text-xs">
                  <li>
                    <LinkItem className="flex items-center py-1 hover:text-rose-600" href="/shop">
                      <FaCaretRight className="mr-1" /> {AppContent.shop}
                    </LinkItem>
                  </li>
                  <li>
                    <LinkItem className="flex items-center py-1 hover:text-rose-600" href="/cart">
                      <FaCaretRight className="mr-1" /> {AppContent.cart}
                    </LinkItem>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold mb-3">Store information</h6>
                <div className="footer-contant">
                  <ul className="contact-list text-xs">
                    <li className="mb-2 flex items-center">
                      <FaMapMarker className="mr-2" /> Multikart Demo Store, Demo store India
                      345-659
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaPhone className="mr-2" />
                      Call Us: 123-456-7898
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaEnvelopeOpen className="mr-2" />
                      Email Us: <a href="#">Support@Fiot.com</a>
                    </li>
                    <li className="mb-2 flex items-center">
                      <FaFax className="mr-2" />
                      Fax: 123456
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      <div className="bg-white py-5 text-xs text-center text-gray-600">
        <Container>
          <p>
            &copy; {new Date().getFullYear()} All rights reserved, powered by -{" "}
            <LinkItem href="https://frontendweb.in" target="_blank" className="italic font-black">
              frontend<span className="text-rose-600">web</span>
            </LinkItem>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
