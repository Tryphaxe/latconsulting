import { NextResponse } from 'next/server'
import { parse } from 'cookie'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/prisma'

const JWT_SECRET = process.env.JWT_SECRET

export async function GET(request) {
  const cookie = request.headers.get('cookie') || ''
  const cookies = parse(cookie)
  const token = cookies.token
  if (!token) return NextResponse.json({ error: 'Non connecté' }, { status: 401 })

  try {
    const { userId } = jwt.verify(token, JWT_SECRET)
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true },
    })
    if (!user) return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 })

    return NextResponse.json({ user })
  } catch {
    return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
  }
}