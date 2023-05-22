import React from "react";
import { Typography, InputAdornment } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "../components/shared/button/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import TextField from "../components/shared/input/TextField";
import FormLabel from "../components/shared/input/FormLabel";

function ChangePasswordPage() {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			minHeight="100vh"
			minWidth="100vw"
			sx={{
				backgroundImage: `url(city-background.svg)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<Stack
				alignItems="flex-start"
				justifyContent="center"
				spacing={2}
				style={{ padding: "1rem" }}
			>
				<Typography
					variant="h6"
					sx={{
						fontWeight: "bold",
					}}
				>
					Enter New Password
				</Typography>
				<Typography variant="caption" width="18rem">
					Your account has been recovered. Enter your new password to gain full
					control of your account
				</Typography>
				
			</Stack>
		</Box>
	);
}
export default ChangePasswordPage;
