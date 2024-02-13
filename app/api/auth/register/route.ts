import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  if (!isValidEmail(email)) {
    return Response.json({}, { status: 400 });
  }
  if (!(await isUniqueEmail(email))) {
    return Response.json({}, { status: 409 });
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  await prisma.user.create({
    data: {
      email: email,
      password: hash,
    },
  });

  return Response.json({ status: 201 });
};

/* ###################################### */
/* ########## Helper Functions ########## */
/* ###################################### */

const isValidEmail = (email: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const isUniqueEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user === null;
};
