import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const messages = await prisma.message.findMany({
			orderBy: { createdAt: "desc" },
			take: 5,
		});
		return NextResponse.json(messages, { status: 200 });
	} catch (error) {
		console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
		return NextResponse.json({ error: "Fetch messages failed", details: error }, { status: 500 });
	}
}