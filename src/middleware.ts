import { NextResponse, type NextRequest } from "next/server";
import { tokenKey } from "./lib/cookie/cookies-key";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(tokenKey)?.value;

  if (token && !request.nextUrl.pathname.startsWith("/main") ) {
    return NextResponse.redirect(new URL("/main", request.url));
  }

  if (!token && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/main/:path*", "/login/:path*"],
};