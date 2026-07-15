const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@stefano.it' },
    update: {},
    create: {
      email: 'admin@stefano.it',
      name: 'Stefano',
      password: hash,
      role: 'ADMIN',
    },
  });
  console.log('Admin user created:', user.email);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
