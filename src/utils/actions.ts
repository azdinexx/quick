'use server';
import jwt from 'jsonwebtoken';
import { connectDB } from './db';
import bcrypt from 'bcryptjs';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const SignUp = async ({
  email,
  password,
  firstname,
  lastname,
}: {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}) => {
  const userExists = await prisma.user.findUnique({
    where: { email: email },
  });
  if (userExists) {
    return 401;
    // 401 is the status code for founding an existing user with the same email
  }
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      firstName: firstname,
      lastName: lastname,
    },
  });
  return 200;
};

export const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // to be chenged afterwards to return a token
  // 0 means the user is not found
  // 1 means the user is found but the password is wrong
  // 2 means the user is found and the password is correct

  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!user) {
    return 0;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);

  if (!isMatch) {
    return 1;
  }
  console.log(user);
  jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: '30d' },
    (err, token) => {
      if (err) throw err;
      console.log(token);
      return token;
    }
  );
  return 2;
};
