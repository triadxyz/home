import  { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import api from "./axios";


export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const discordId = account?.id;
        await api.post('/discord/user', {
          name: user.name,
          email: user.email,
          id: discordId,
          eventInvitation: 'SEZ'
        })
      } catch (error) {
        console.log(error)
        return true
      }
      return true;
    },

    async redirect({ url, baseUrl }) {
      return url;
    },

    async session({ session, user, token }) {
      return {...session, id: token.sub};
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
  },
};
