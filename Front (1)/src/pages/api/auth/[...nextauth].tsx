// @ts-nocheck
// @ts-ignore
import NextAuth from "next-auth"
import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.Google_Id,
            clientSecret: process.env.Google_Secret
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
        // ...add more providers here
    ],
    pages: {
    signIn: "/",
  },
   secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)