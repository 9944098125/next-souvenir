import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import { doLogout } from "@/Redux/Actions/login";

const Home = async () => {
	const session = await auth();
	if (!session?.user) {
		redirect("/");
	}
	return (
		<React.Fragment>
			<div className="min-h-screen flex flex-col items-center justify-center px-10">
				<Image
					src={session.user?.image!}
					alt=""
					height={100}
					width={100}
					style={{ borderRadius: "50%" }}
				/>
				<form action={doLogout}>
					<button
						className="bg-black text-white rounded px-5 py-2 border-none outline-none"
						type="submit">
						Logout
					</button>
				</form>
			</div>
		</React.Fragment>
	);
};

export default Home;
