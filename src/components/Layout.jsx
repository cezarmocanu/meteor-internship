import React from "react";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";

const Layout = ({ children }) => {
	return (
		<Stack direction="row">
			<SideBar />
			<Stack flexGrow={1}>{children}</Stack>
		</Stack>
	);
};

export default Layout;
