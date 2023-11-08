import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  (req) => {
    const url = req.nextUrl;
    const token = req.nextauth.token;
    if (url.pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.rewrite(new URL("/login", url));
    }

    // if (url.pathname.startsWith("/users") && token?.role !== "users") {
    //   return NextResponse.rewrite(new URL("/users", url));
    // }

    // if (url.pathname.startsWith("/users") && token?.role === "admin") {
    //   return NextResponse.redirect(new URL("/admin", url));
    // }
    // return NextResponse.rewrite(new URL("/login", url));
  },
  {
    callbacks: {
      authorized(params) {
        return !!params.token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/users/:path*"],
};
