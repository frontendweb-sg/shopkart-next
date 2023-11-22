import { Raleway, Roboto, Lato } from "next/font/google";

const railway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "900"],
  display: "block",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "block",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
  display: "block",
});

export { railway, roboto, lato };
