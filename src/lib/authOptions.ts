/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await connectDB();
        const user = await User.findOne({ email: credentials.email });
        if (!user || !user.password) {
          throw new Error("No user found");
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, profile }) {
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        const newUser = new User({
          name: user.name || profile?.name,
          email: user.email,
          image: user.image || (profile as any)?.picture,
        });
        await newUser.save();
        user.id = newUser._id.toString();
      } else {
        user.id = existingUser._id.toString();
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) token.id = (user as any).id;
      return token;
    },

    async session({ session, token }) {
      if (token) (session.user as any).id = token.id;
      return session;
    },
  },

  pages: {
    signIn: "/auth/sign-in",
  },
};