import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!user) {
    return new Response('User not found', { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);

  if (!isMatch) {
    return new Response('Wrong password or Email', { status: 401 });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    {
      expiresIn: '30d',
    }
  );
  return new Response('it worked', {
    status: 200,
    headers: {
      'Set-Cookie': `token=${token}; path=/; HttpOnly; Secure; SameSite=Strict`,
    },
  });
}
