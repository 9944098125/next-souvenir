"use client";

import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type RegisterFormProps = {
	formik: any;
	showPassword: boolean;
	setShowPassword: (value: boolean) => void;
	showConfirmPassword: boolean;
	setShowConfirmPassword: (value: boolean) => void;
};

const RegisterForm = (props: RegisterFormProps) => {
	const {
		formik,
		showPassword,
		setShowConfirmPassword,
		showConfirmPassword,
		setShowPassword,
	} = props;

	return (
		<React.Fragment>
			<div className="bg-green-700 rounded-lg w-[75%]">
				<form onSubmit={formik.handleSubmit}>
					<div className="mb-4 p-4">
						<input
							type="text"
							name="name"
							placeholder="Enter your Name..."
							className="w-full h-[45px] focus:h-[55px] border-none outline-none rounded-lg"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						{formik.errors.name && formik.touched.name && (
							<div className="text-sm text-red-500">{formik.errors.name}</div>
						)}
					</div>
					<div className="mb-4 p-4">
						<input
							value={formik.values.email}
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							type="text"
							placeholder="Enter your Email Address..."
							className="w-full h-[45px] focus:h-[55px] border-none outline-none rounded-lg"
						/>
						{formik.errors.email && formik.touched.email && (
							<div className="text-sm text-red-500">{formik.errors.email}</div>
						)}
					</div>
					<div className="mb-4 p-4">
						<div className="flex items-center">
							<input
								value={formik.values.password}
								name="password"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								type={showPassword ? "text" : "password"}
								placeholder="Enter your Password..."
								className="w-full h-[45px] focus:h-[55px] border-none outline-none rounded-lg"
							/>
							{showPassword ? (
								<FaEye
									style={{
										marginLeft: "-35px",
										fontSize: "25px",
										cursor: "pointer",
									}}
									onClick={() => setShowPassword(!showPassword)}
								/>
							) : (
								<FaEyeSlash
									style={{
										marginLeft: "-35px",
										fontSize: "25px",
										cursor: "pointer",
									}}
									onClick={() => setShowPassword(!showPassword)}
								/>
							)}
						</div>
						{formik.errors.password && formik.touched.password && (
							<div className="text-sm text-red-500">
								{formik.errors.password}
							</div>
						)}
					</div>
					<div className="mb-4 p-4">
						<div className="flex items-center">
							<input
								value={formik.values.confirmPassword}
								name="confirmPassword"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								type={showConfirmPassword ? "text" : "password"}
								placeholder="Enter your Password Again..."
								className="w-full h-[45px] focus:h-[55px] border-none outline-none rounded-lg"
							/>
							{showConfirmPassword ? (
								<FaEye
									style={{
										marginLeft: "-35px",
										fontSize: "25px",
										cursor: "pointer",
									}}
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								/>
							) : (
								<FaEyeSlash
									style={{
										marginLeft: "-35px",
										fontSize: "25px",
										cursor: "pointer",
									}}
									onClick={() => setShowConfirmPassword(!showConfirmPassword)}
								/>
							)}
						</div>
						{formik.errors.confirmPassword &&
							formik.touched.confirmPassword && (
								<div className="text-sm text-red-500">
									{formik.errors.confirmPassword}
								</div>
							)}
					</div>
					<div className="mb-4 p-4">
						<input
							value={formik.values.phone}
							name="phone"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							type="text"
							placeholder="Enter your Phone Number..."
							className="w-full h-[45px] focus:h-[55px] border-none outline-none rounded-lg"
						/>
						{formik.errors.phone && formik.touched.phone && (
							<div className="text-sm text-red-500">{formik.errors.phone}</div>
						)}
					</div>
					<div className="mb-4 p-4">
						<button
							type="submit"
							className="bg-pink-800 text-white rounded border-none outline-none w-full h-[45px] hover:h-[55px]">
							Register
						</button>
					</div>
				</form>
			</div>
		</React.Fragment>
	);
};

export default RegisterForm;
