import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; 

export async function POST(request) {
  const formData = await request.formData();

  const title = formData.get('title');
  const content = formData.get('content');
  const file = formData.get('image'); // type: Blob

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'Fichier invalide' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), 'public/uploads');
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  const filepath = path.join(uploadDir, filename);

  try {
    await writeFile(filepath, buffer);

    const post = await prisma.post.create({
      data: {
        title,
        content,
        src: `/uploads/${filename}`,
      },
    });

    return NextResponse.json({
      message: 'Post ajouté avec succès',
      post,
    });
  } catch (e) {
    console.error('Erreur lors de l\'écriture ou de la création :', e);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
			orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Erreur Prisma :", JSON.stringify(error, null, 2));
    return NextResponse.json({ error: "Fetch posts failed", details: error }, { status: 500 });
  }
}