import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/register";

  const token =
    request.cookies.get("next-auth.session-token.1")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value ||
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("next-auth.session-token.0")?.value ||
    "";
  const platform = request.cookies.get("backendToken") || "";

  if (isPublicPath && token && !platform)
    return NextResponse.redirect(
      new URL("/dashboard?token=flase", request.nextUrl)
    );

  if (isPublicPath && token)
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));

  if (!isPublicPath && !token && !platform) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/dashboard", "/booking", "/login", "/register"],
};
