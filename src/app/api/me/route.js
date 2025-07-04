import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.json({ error: 'Pas connecté' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return NextResponse.json({ message: 'Connecté ✅', userId: decoded.userId })
  } catch (e) {
    return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
  }
}