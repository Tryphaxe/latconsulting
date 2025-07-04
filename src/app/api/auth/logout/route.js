import { NextResponse } from 'next/server'
import { serialize } from 'cookie'

export async function POST() {
	const cookie = serialize('token', '', {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		path: '/',
		expires: new Date(0), // Expire immédiatement
	})

	const response = NextResponse.json({ message: 'Déconnexion réussie' })
	response.headers.set('Set-Cookie', cookie)
	return response
}
