import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function DELETE(request, { params }) {
  const { id } = await params

  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    })

    if (!post) {
      return NextResponse.json({ error: 'Post non trouvé' }, { status: 404 })
    }

    // Extraire le chemin relatif du fichier depuis l'URL publique
    const imageUrl = post.src
    const pathname = new URL(imageUrl).pathname
    const relativePath = pathname.replace('/storage/v1/object/public/', '') // ex: posts/ma-photo.jpg

    // Supprimer le fichier de Supabase Storage
    const { error: storageError } = await supabase.storage
      .from('posts')
      .remove([relativePath])

    if (storageError) {
      console.warn('Image non supprimée sur Supabase:', storageError)
    }

    // Supprimer le post de la base de données
    await prisma.post.delete({
      where: { id: Number(id) },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    console.log('Erreur suppression :', error)
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 })
  }
}