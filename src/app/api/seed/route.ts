import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
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
    return NextResponse.json({ message: 'Admin user created successfully', email: user.email });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
