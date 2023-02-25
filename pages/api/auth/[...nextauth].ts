import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
type GoogleProviderOptions = {
  clientId: string;
  clientSecret: string;
};
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.CLIENT_SECRET,
    } as GoogleProviderOptions),

    // ...add more providers here
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    } as GoogleProviderOptions),
  ],
};

export default NextAuth(authOptions);
