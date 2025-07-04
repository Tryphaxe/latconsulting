import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prisma'

export async function POST(request) {
	const { username, password } = await request.json()

	if (!username || !password) {
		return Response.json({ error: 'Champs requis' }, { status: 400 })
	}

	const userExiste = await prisma.user.findUnique({ where: { username } })
	if (userExiste) return Response.json({error: 'Utilisateur existe déjà'}, {status: 409})

	const hashedPassword = await bcrypt.hash(password, 10)
	const newUser = await prisma.user.create({
		data: {
			username,
			password: hashedPassword,
		},
	})

	return Response.json({message: 'Utilisateur crée'}, {userId: newUser.id})
}