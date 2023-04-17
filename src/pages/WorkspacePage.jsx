import React from "react";
import { Typography, Stack } from "@mui/material";
import ContainedImage from "../components/ContainedImage";
import Button from "../components/shared/button/Button";
import FormLabel from "../components/shared/input/FormLabel";
import TextField from "../components/shared/input/TextField";
function WorkspacePage() {
	return (
		<Stack sx={{ width: "100vw", height: "100vh" }}>
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
						justifyContent="center"
						alignItems="center"
						sx={{ position: "absolute", width: "100%", height: "100%" }}
					>
						<Typography variant="h4" fontWeight="bold" color="white">
							Your Environment, Your will.
						</Typography>
					</Stack>
				</Stack>
				<Stack flexGrow={1} justifyContent="center" alignItems="center">
					<Stack gap={2} direction={"column"}>
						<Stack
							justifyContent="space-between"
							sx={{ width: "100%", height: "100%" }}
							display="flex"
							direction={"row"}
							gap={1}
						>
							<Typography variant="h4" fontWeight="bold">
								Create
							</Typography>
							<Typography variant="h4" fontWeight="bold">
								A
							</Typography>
							<Typography variant="h4" fontWeight="bold" color="primary">
								Workspace.
							</Typography>
						</Stack>
						<Stack>
							<FormLabel>Title your workspace</FormLabel>
							<TextField
								required
								variant="outlined"
								helperText="Information about the label"
								size="small"
							/>
						</Stack>
						<Stack>
							<Button variant="contained" color="primary" size="large">
								Next
							</Button>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
export default WorkspacePage;
