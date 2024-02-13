import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  const foundUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!foundUser) {
    return Response.json(
      {},
      {
        status: 404,
      }
    );
  }

  // Use bcrypt.compare in an asynchronous way
  const isPasswordValid = await bcrypt.compare(
    password,
    foundUser.password as string
  );

  if (!isPasswordValid) {
    return Response.json(
      {},
      {
        status: 401,
      }
    );
  }

  // Exclude password from the response for security reasons
  const { password: _, ...userWithoutPassword } = foundUser;

  return Response.json(userWithoutPassword, { status: 200 });
};
