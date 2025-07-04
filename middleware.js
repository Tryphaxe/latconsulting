import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const PUBLIC_ROUTES = ["/pages/auth"]

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Si route publique : ne pas bloquer
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next()
  }

  // Récupérer le token depuis le cookie
  const token = request.cookies.get("token")?.value
  console.log("TOKEN IN MIDDLEWARE:", token);
  if (!token) {
    return NextResponse.redirect(new URL("/pages/auth", request.url))
  }

  try {
    // Vérifie le token
    jwt.verify(token, process.env.JWT_SECRET)
    return NextResponse.next()
  } catch (e) {
    // Token invalide
    return NextResponse.redirect(new URL("/pages/auth", request.url))
  }
}

export const config = {
  matcher: ['/admin/:path*'], 
}
