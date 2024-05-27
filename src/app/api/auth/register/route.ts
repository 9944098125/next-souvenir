import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/dbConfig/db";
import Users from "@/Models/Users";

export async function POST(req: NextRequest) {
	try {
		await connectDB();
		const { name, email, password, phone } = await req.json();
		const existingUser = await Users.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{
					message: "User already exists",
				},
				{ status: 409 }
			);
		}
		const newUser = new Users({
			name,
			email,
			password,
			phone,
		});
		await newUser.save();
		return NextResponse.json(
			{
				message: `${name}, you have registered with us successfully...!`,
			},
			{ status: 201 }
		);
	} catch (err: any) {
		return NextResponse.json(
			{
				message: "Something went wrong !",
				error: err.message,
			},
			{ status: 404 }
		);
	}
}
