import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// ADD USER
export async function POST(request) {
	const data = await request.json();
	console.log("Data reçu côté serveur :", data);

	try {
		const user = await prisma.user.create({
			data: {
				name: data.username,
				email: data.email,
				password: data.password,
			}
		})

		return NextResponse.json(user, { status: 201 }
		)
	} catch (error) {
		console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
		return NextResponse.json({ error: "Add user failed", details: error }, { status: 500 });

	}
}

export async function GET() {
	try {
		const users = await prisma.user.findMany();
		return NextResponse.json(users, { status: 200 });
	} catch (error) {
		console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
		return NextResponse.json({ error: "Fetch users failed", details: error }, { status: 500 });
	}
}