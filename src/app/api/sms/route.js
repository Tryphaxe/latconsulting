import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// ADD MESSAGE
export async function POST(request) {
	const data = await request.json();
	console.log("Data reçu côté serveur :", data);

	try {
		const message = await prisma.message.create({
			data: {
				nome: data.nome,
				prenom: data.prenom,
				email: data.email,
				phone: data.phone,
				content: data.content,
			}
		})

		return NextResponse.json(message, { status: 201 });
	} catch (error) {
		console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
		return NextResponse.json({ error: "Add message failed", details: error }, { status: 500 });

	}
}

export async function GET() {
	try {
		const messages = await prisma.message.findMany();
		return NextResponse.json(messages, { status: 200 });
	} catch (error) {
		console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
		return NextResponse.json({ error: "Fetch messages failed", details: error }, { status: 500 });
	}
}