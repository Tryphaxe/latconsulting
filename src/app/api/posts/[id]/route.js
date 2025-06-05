import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; 

export async function DELETE(request, { params }) {
	const { id } = params;

	try {
		await prisma.post.delete({
			where: { id: Number(id) }
		});
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		console.log("Erreur Modification : ", error);
		return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
	}
}