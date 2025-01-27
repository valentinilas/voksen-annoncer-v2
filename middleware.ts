import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

// export async function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
//   return await updateSession(request)
// }

export async function middleware(request: NextRequest) {
  // Redirect `/artikler` to `/artikler/page/1`
  if (request.nextUrl.pathname === "/artikler") {
    const url = new URL("/artikler/side/1", request.url);
    return NextResponse.redirect(url, 308); // Use 308 for permanent redirect
  }

  // Handle session update
  return (await updateSession(request)) || NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
