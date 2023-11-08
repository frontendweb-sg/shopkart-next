import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  (req) => {
    const url = req.nextUrl;
    const token = req.nextauth.token;

    if (url.pathname.startsWith("/admin") && token && token?.role === "admin") {
      return NextResponse.rewrite(new URL("/admin", url));
    }

    if (url.pathname.startsWith("/users") && token) {
      return NextResponse.rewrite(new URL("/users", url));
    }

    return NextResponse.rewrite(new URL("/login", url));
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
