import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  if (!isValidEmail(email)) {
    return Response.json({}, { status: 409 });
  }
  if (!(await isUniqueEmail(email))) {
    return Response.json({ status: 409, message: "Email already exists" });
  }

  await prisma.user.create({
    data: {
      email: email,
      password: password,
    },
  });

  return Response.json({ status: 201 });
};

const isValidEmail = (email: string) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const isUniqueEmail = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user === null;
};
