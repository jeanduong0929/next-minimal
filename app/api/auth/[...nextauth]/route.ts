import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { instance } from "@/lib/axios-config";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = req.body as {
          email: string;
          password: string;
        };

        const { data } = await instance.post("/auth/login", {
          email,
          password,
        });

        return data;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/",
  },
});

export { handler as GET, handler as POST };
