import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const count = await prisma.post.count();
		return NextResponse.json( count, { status: 200 });
	} catch (error) {
		console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
		return NextResponse.json({ error: "Fetch count failed", details: error }, { status: 500 });
	}
}