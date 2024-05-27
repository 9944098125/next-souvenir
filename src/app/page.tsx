"use client";

import Heading from "@/Components/Heading";
import React, { useCallback } from "react";
import { Field, Form, Formik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type LoginFormValues = {
	email: string;
	password: string;
};
const Login = () => {
	const [formValues] = React.useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = React.useState(false);
	const validate = (values: LoginFormValues) => {
		const errors: Partial<LoginFormValues> = {};
		if (!values.email) {
			errors.email = "Email is required";
		} else if (values.email) {
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
				//eslint-disable-line
				errors.email = "Invalid Email";
			}
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
				//eslint-disable-line
				values.password
			)
		) {
			errors.password =
				"Password must contain 8 characters one number, one capital, one small and one special character...";
		}
		return errors;
	};

	const submitForm = (values: LoginFormValues) => {
		console.log(values);
	};

	return (
		<React.Fragment>
			<div className="min-h-screen flex flex-col items-center justify-center px-10">
				<Heading
					heading="Login"
					desc="Don't you have an account ? Please, "
					linkText="Register"
					link="/register"
				/>
				{/* <LoginForm validate={validate} submitForm={submitForm} /> */}
				<div className="bg-black rounded-lg p-5 w-[40%]">
					<Formik
						initialValues={formValues}
						validate={(values) => validate(values)}
						onSubmit={(values) => submitForm(values)}>
						{({ errors, touched }) => (
							<Form>
								<div className="mb-4">
									<Field
										type="text"
										name="email"
										placeholder="Enter your Email Address..."
										className={
											touched.email && errors.email
												? "border outline-none border-red-500 h-[45px] focus:h-[55px] w-full rounded-lg"
												: "border-none outline-none h-[45px] focus:h-[55px] w-full rounded-lg"
										}
									/>
									{errors.email && touched.email && (
										<div className="text-red-500">{errors.email}</div>
									)}
								</div>
								<div className="mb-4">
									<div className="flex items-center">
										<div className="w-full">
											<Field
												type={showPassword ? "text" : "password"}
												name="password"
												placeholder="Enter your Password..."
												className={
													touched.password && errors.password
														? "border outline-none border-red-500 h-[45px] focus:h-[55px] w-full rounded-lg"
														: "border-none outline-none h-[45px] focus:h-[55px] w-full rounded-lg"
												}
											/>
											{errors.password && touched.password && (
												<div className="text-red-500">{errors.password}</div>
											)}
										</div>
										{showPassword ? (
											<FaEye
												fontSize={25}
												style={{ marginLeft: "-35px", cursor: "pointer" }}
												onClick={() => setShowPassword(!showPassword)}
											/>
										) : (
											<FaEyeSlash
												fontSize={25}
												style={{ marginLeft: "-35px", cursor: "pointer" }}
												onClick={() => setShowPassword(!showPassword)}
											/>
										)}
									</div>
								</div>
								<div className="h-[60px]">
									<button className="h-[45px] hover:h-[55px] rounded-lg w-full bg-violet-800 text-white font-bold">
										Login
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
