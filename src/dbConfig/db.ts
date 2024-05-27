import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
	try {
		console.log(process.env.MONGO_URI);
		const db = await mongoose.connect(process.env.MONGO_URI!);
		db.connection.on("connected", () => {
			console.log("Connected to the database successfully!");
		});
		db.connection.on("error", (err) => {
			console.log("Connection error: ", err);
		});
	} catch (err: any) {
		throw err;
	}
};

export default connectDB;
