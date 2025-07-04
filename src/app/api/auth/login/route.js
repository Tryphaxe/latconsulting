import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { serialize } from 'cookie'
import prisma from '@/lib/prisma'

const JWT_SECRET = process.env.JWT_SECRET

export async function POST(request) {
	if (!JWT_SECRET) {
		console.error("❌ JWT_SECRET non défini dans .env");
		return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
	}
	const { username, password } = await request.json()

	const user = await prisma.user.findUnique({ where: { username } })

	if (!user) return NextResponse.json({ error: 'Utilisateur introuvable' }, { status: 404 })

	const validPassword = await bcrypt.compare(password, user.password)
	if (!validPassword) return NextResponse.json({ error: 'Mot de passe incorrect' }, { status: 401 })

	const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' })

	// Créer le cookie manuellement
	const cookie = serialize('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/',
		maxAge: 60 * 60 * 24 * 1, // 1 jour
	})

	const response = NextResponse.json({ message: 'Connexion réussie' })
	response.headers.set('Set-Cookie', cookie)
	return response
}