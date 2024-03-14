import { baseUrl } from "@/config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  //   session: {
  //     strategy: "jwt",
  //   },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const res = await baseUrl.post("/login", credentials);
          let resData;
          const token = res?.data?.access_token;

          if (token) {
            resData = await baseUrl.get("/profile", {
              headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
              },
            });
          }

          const user = {
            email: resData.data?.user?.email,
            name: resData.data?.user?.fullName,
            image: resData.data?.user?.image,
          };
          return user;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
