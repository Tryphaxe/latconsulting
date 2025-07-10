import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import prisma from '@/lib/prisma'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(request) {
  const formData = await request.formData()

  const title = formData.get('title')
  const content = formData.get('content')
  const file = formData.get('image')

  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'Fichier invalide' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`

  // Upload sur Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from('posts') //Buckets supabase
    .upload(filename, buffer, {
      contentType: file.type,
    })

  if (uploadError) {
    console.error('Erreur Supabase upload :', uploadError)
    return NextResponse.json({ error: 'Erreur upload image' }, { status: 500 })
  }

  // l’URL publique
  const { data: publicData } = supabase.storage
    .from('posts')
    .getPublicUrl(filename)

  const imageUrl = publicData.publicUrl

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        src: imageUrl,
      },
    })

    return NextResponse.json({
      message: 'Post ajouté avec succès',
      post,
    })
  } catch (e) {
    console.error('Erreur Prisma :', e)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    console.error('Erreur Prisma :', error)
    return NextResponse.json({ error: 'Fetch posts failed' }, { status: 500 })
  }
}