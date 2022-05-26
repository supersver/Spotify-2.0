// Checking if user is authorized 

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname, origin  } = req.nextUrl;

  //   Allow the requests if the following is true...
  //  1) its a request for next-auth session & provide fetching
  //  2) If the token exists
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // redirect users to login page if they dont have token
  if (!token && pathname !== "/login") {
    return NextResponse.rewrite(`${origin}/login`);
  }
}
