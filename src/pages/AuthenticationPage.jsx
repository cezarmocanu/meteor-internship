import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Button from "../components/shared/button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
	login,
	logout,
	selectAuthentication,
} from "../store/slices/authentication-slice";

function AuthenticationPage() {
	const authentication = useSelector(selectAuthentication);
	const dispatch = useDispatch();

	return (
		<Container>
			<Typography>Auth page</Typography>
			<Typography>
				{authentication.isAuthenticated
					? "Esti autentificat"
					: "Nu esti autentificat"}
			</Typography>

			{authentication.isAuthenticated ? (
				<Box>
					<Button
						size="small"
						variant="outlined"
						onClick={() => dispatch(logout())}
					>
						Log Out
					</Button>
				</Box>
			) : (
				<Box>
					<Button
						size="small"
						variant="outlined"
						onClick={() => dispatch(login())}
					>
						Log In
					</Button>
				</Box>
			)}
		</Container>
	);
}
export default AuthenticationPage;
