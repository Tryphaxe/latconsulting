import jwt from 'jsonwebtoken'
import { parse } from 'cookie'
import prisma from '@/lib/prisma'

const JWT_SECRET = process.env.JWT_SECRET

export async function getUserFromToken(req) {
  if (!JWT_SECRET) {
    console.error("JWT_SECRET non défini")
    return null
  }

  const cookies = parse(req.headers.get('cookie') || '')
  const token = cookies.token
  if (!token) return null

  try {
    const { userId } = jwt.verify(token, JWT_SECRET)
    const user = await prisma.user.findUnique({ where: { id: userId } })
    return user
  } catch (error) {
    console.error("Erreur lors de la vérification du token :", error.message)
    return null
  }
}