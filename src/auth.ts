import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Users from "./Models/Users";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		// Credentials({
		// 	credentials: {
		// 		email: {},
		// 		password: {},
		// 	},
		// 	async authorize(credentials) {
		// 		if (credentials === null) return null;

		// 		try {
		// 			const existingUser = await Users.findOne({
		// 				email: credentials.email,
		// 			});
		// 			if (existingUser) {
		// 				console.log(existingUser);
		// 				return existingUser._id;
		// 			}
		// 		} catch (error: any) {
		// 			throw new Error(error);
		// 		}
		// 	},
		// }),
	],
});
