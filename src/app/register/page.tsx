"use client";

import Heading from "@/Components/Heading";
import React from "react";
import RegisterForm from "./RegisterForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/Redux/Actions/register";
import { RootState } from "@/Redux/Reducers";

type RegisterFormValues = {
	name: string;
	email: string;
	password: string;
	phone: string;
};

const validationSchema = Yup.object({
	name: Yup.string().required("Name is required..."),
	email: Yup.string().email("Invalid Email").required("Email is required..."),
	password: Yup.string()
		.required("Password is required")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, // eslint-disable-line
			" Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character" // eslint-disable-line
		),
	confirmPassword: Yup.string()
		.required("Confirm Your Password")
		.oneOf([Yup.ref("password")], "Your Passwords are not matching"),
	phone: Yup.string().required("Phone is required..."),
});

const Register = () => {
	const dispatch: any = useDispatch();

	const { loading, success, message } = useSelector(
		(state: RootState) => state.register
	);
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

	const submitRegisterForm = async (requestBody: RegisterFormValues) => {
		try {
			dispatch(register(requestBody));
		} catch (err: any) {
			toast.error(err.response?.data.message);
		}
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			const body = {
				name: values.name,
				email: values.email,
				password: values.password,
				phone: values.phone,
			};
			submitRegisterForm(body);
		},
	});

	// React.useEffect(() => {
	// 	if (message) {
	// 		toast.success(message);
	// 	} else if (!success) {
	// 		toast.error(message);
	// 	}
	// }, [message, success]);

	return (
		<React.Fragment>
			<div className="min-h-screen w-full flex flex-col items-center justify-center">
				<Heading
					heading="Registration"
					desc="Already have an account ? Please, "
					link="/login"
					linkText="Login"
				/>
				<RegisterForm
					showPassword={showPassword}
					showConfirmPassword={showConfirmPassword}
					setShowPassword={setShowPassword}
					setShowConfirmPassword={setShowConfirmPassword}
					formik={formik}
				/>
			</div>
		</React.Fragment>
	);
};

export default Register;
