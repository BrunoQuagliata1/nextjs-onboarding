import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { z } from "zod";

const prisma = new PrismaClient();

const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const createSession = async (userId: string) => {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const sessionToken = bcrypt.genSaltSync(10);
  const session = await prisma.session.create({
    data: {
      userId,
      expires: expiresAt,
      sessionToken,
    },
  });

  await prisma.user.update({
    where: { id: userId },
    data: { sessionToken: session.sessionToken },
  });

  return session;
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const validatePassword = async (
  userPassword: string,
  inputPassword: string,
) => {
  return bcrypt.compare(inputPassword, userPassword);
};

export const validateCredentials = (data: object) => {
  return CredentialsSchema.parse(data);
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const deleteSession = async (sessionToken: string) => {
  return await prisma.session.delete({ where: { sessionToken } });
};
