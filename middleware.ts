import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/auth"

export default async function middleware(request: NextRequest) {
  const session = await auth()

  // Check if the pathname starts with /app
  const isAppRoute = request.nextUrl.pathname.startsWith('/app')

  // If it's not an /app route, allow the request to proceed
  if (!isAppRoute) {
    return NextResponse.next()
  }

  // If it is an /app route and there's no session, redirect to login
  if (!session) {
    const loginUrl = new URL('/login', request.url)
    // loginUrl.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(loginUrl)
  }

  // If there's a session and it's an /app route, allow the request
  return NextResponse.next()
}

export const config = {
  matcher: ['/app/:path*'],
}