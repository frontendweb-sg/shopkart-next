import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  (req) => {
    const url = req.nextUrl;
    const token = req.nextauth.token;
    console.log(url, "tokn", token);
    if (url.pathname.startsWith("/admin") && token) {
      return NextResponse.rewrite(new URL("/admin", url));
    }
    return NextResponse.rewrite(new URL("/login", url));
  },
  {
    callbacks: {
      authorized(params) {
        console.log("params", params);
        return !!params.token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/(.*)"],
};
