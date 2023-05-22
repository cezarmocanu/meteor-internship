import React from "react";
import { useFormik } from "formik";
import { Typography,
        FormLabel, 
        TextField,         
        Stack, 
        InputAdornment 
} from "@mui/material";
import Button from "../shared/button/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import * as yup from "yup";


function ChangePasswordForm() {
	const onSubmit = (values) => {
		console.log("from button", values);
	};

    const formik = useFormik({
		initialValues: INITIAL_VALUES,
		validationSchema,
		onSubmit,
	});

	return (
		<>
        <Stack
					sx={{
						width: "20rem",
						maxWidth: "100%",
					}}
				>
					<FormLabel>Password</FormLabel>
					<TextField
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<VisibilityOutlinedIcon />
								</InputAdornment>
							),
						}}
						type="password"
						required
						size="small"
						variant="outlined"
					/>
				</Stack>
				<Stack
					sx={{
						width: "20rem",
						maxWidth: "100%",
					}}
				>
					<FormLabel>Confirm Password</FormLabel>
					<TextField
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<VisibilityOutlinedIcon />
								</InputAdornment>
							),
						}}
						type="password"
						required
						size="small"
						variant="outlined"
					/>
				</Stack>
				<Stack alignItems="flex-start">
					<Button size="medium" variant="contained">
						<Typography variant="button">Save</Typography>
					</Button>
				</Stack>
        </>
    );
}


export default ChangePasswordForm;
                