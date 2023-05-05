import React from "react";
import { Typography, Stack, Box, InputAdornment } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContainedImage from "../components/ContainedImage";
import Button from "../components/shared/button/Button";
import FormLabel from "../components/shared/input/FormLabel";
import TextField from "../components/shared/input/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const validationSchema = yup.object({
	firstName: yup
		.string("Enter your first name")
		.required("First name is required"),
	lastName: yup
		.string("Enter your last name")
		.required("Last name is required"),
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup
		.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

const onSubmit = (values) => {
	console.log("from button", formik.values);
};

function SignUpPage() {
	const theme = useTheme();

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmit,
	});

	return (
		<Stack sx={{ width: "100%", height: "100vh" }}>
			<Stack sx={{ height: "100%" }} direction={"row"}>
				<Stack
					sx={{
						height: "100%",
						width: "auto",
						position: "relative",
					}}
				>
					<ContainedImage
						width="100%"
						height="100%"
						src="logo-background.png"
					/>
					<Stack
						justifyContent="space-between"
						sx={{ position: "absolute", width: "100%", height: "100%", p: 6 }}
					>
						<Box />
						<Typography variant="h3" fontWeight="bold" color="white">
							Take your productivity to the next level.
						</Typography>
						<Typography variant="body2" color="white">
							SkillBrain 2022 | All Right Reserved
						</Typography>
					</Stack>
				</Stack>
				<Stack flexGrow={1} sx={{ p: 3 }}>
					<Stack direction="row" justifyContent="end">
						<Box>
							<Button size="small" variant="outlined">
								Log In
							</Button>
						</Box>
					</Stack>
					<Stack flexGrow={1} justifyContent="center" alignItems="center">
						<Stack
							gap={8}
							sx={{
								[theme.breakpoints.up("lg")]: {
									width: "60%",
								},
								[theme.breakpoints.up("md")]: {
									width: "80%",
								},
								width: "90%",
							}}
						>
							<Stack>
								<Typography variant="h5" fontWeight="bold">
									Create an Account
								</Typography>
								<Typography>It’s Simpe and Easy!!</Typography>
							</Stack>
							<Stack>
								<FormLabel>First Name</FormLabel>
								<TextField
									name="firstName"
									onChange={formik.handleChange}
									value={formik.values.firstName}
									error={
										formik.touched.firstName && Boolean(formik.errors.firstName)
									}
									helperText={
										formik.touched.firstName && formik.errors.firstName
									}
									required
									variant="outlined"
									size="small"
								/>
								<FormLabel>Last Name</FormLabel>
								<TextField
									name="lastName"
									onChange={formik.handleChange}
									value={formik.values.lastName}
									error={
										formik.touched.lastName && Boolean(formik.errors.lastName)
									}
									helperText={formik.touched.lastName && formik.errors.lastName}
									variant="outlined"
									size="small"
								/>
								<FormLabel>Email Address</FormLabel>
								<TextField
									name="email"
									onChange={formik.handleChange}
									value={formik.values.email}
									error={formik.touched.email && Boolean(formik.errors.email)}
									helperText={formik.touched.email && formik.errors.email}
									variant="outlined"
									size="small"
								/>
								<FormLabel>Enter A Password</FormLabel>
								<TextField
									name="password"
									onChange={formik.handleChange}
									value={formik.values.password}
									error={
										formik.touched.password && Boolean(formik.errors.password)
									}
									helperText={formik.touched.password && formik.errors.password}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<VisibilityOutlinedIcon />
											</InputAdornment>
										),
									}}
									type="password"
									variant="outlined"
									size="small"
								/>
							</Stack>
							<Button
								onClick={formik.handleSubmit}
								type="submit"
								variant="contained"
								color="primary"
								size="large"
							>
								Create account
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
export default SignUpPage;
