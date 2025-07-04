const { PrismaClient } = require('../src/generated/prisma')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
    },
  })

  console.log('✅ Utilisateur admin créé avec succès.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
