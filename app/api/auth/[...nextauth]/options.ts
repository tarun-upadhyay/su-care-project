import { connect } from "@/database/mongo.config";
import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { User } from "@/models/User";

import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },

  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      connect();
      try {
        let findUser = await User.findOne({ email: user.email });

        if (findUser) {
          return true;
        }
        findUser = await User.create({ email: user.email, name: user.name });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same originp
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  providers: [
    CredentialsProvider({
      name: "Welcome Back",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        
        // console.info(
        //   "The credentials and req info",
        //   credentials,
        //   "checking",
        //   req,
        //   "bye bye"
        // );

        connect();
        const user = await User.findOne({ email: credentials?.email });
        //console.log(user, "User authorized");
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
};
