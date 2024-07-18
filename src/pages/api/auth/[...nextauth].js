// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with the email");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return { email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
