import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { getDb } from "./database/db"

export const runtime = 'edge'

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: DrizzleAdapter(getDb()),
  session: { strategy: "jwt" },
  ...authConfig
}) 