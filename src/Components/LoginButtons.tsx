import { doSocialLogin } from "@/Redux/Actions/login";
import React from "react";

const LoginButtons = () => {
	return (
		<React.Fragment>
			<form action={doSocialLogin}>
				<button
					className="mb-3 w-full h-[45px] hover:h-[50px] bg-blue-500 text-white rounded-lg border-none"
					type="submit"
					name="action"
					value="google">
					Google
				</button>
				<button
					className="w-full h-[45px] hover:h-[50px] bg-black text-white rounded-lg border-white border"
					type="submit"
					name="action"
					value="github">
					Github
				</button>
			</form>
		</React.Fragment>
	);
};

export default LoginButtons;
