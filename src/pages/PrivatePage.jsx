import React from "react";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAuthentication } from "../store/slices/authentication-slice";

function PrivatePage() {
	const authentication = useSelector(selectAuthentication);

	return (
		<Container>
			<Typography>Private page</Typography>
			{authentication.isAuthenticated ? (
				<Typography>
					This is private content available only for authorized users
				</Typography>
			) : (
				<Typography>Please leave the page, this is private.</Typography>
			)}
		</Container>
	);
}
export default PrivatePage;
