import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { email, password, firstName, lastName } = await request.json();
  if (!email || !password || !firstName || !lastName) {
    return new Response('Please fill all the fields', { status: 400 });
  }
  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });
  if (userExists) {
    return new Response('User already exists', { status: 409 });
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      firstName,
      lastName,
    },
  });
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
