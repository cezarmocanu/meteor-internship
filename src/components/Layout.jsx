import React from "react";
import { styled } from "@mui/material/styles";
import SideBar from "./SideBar";
import { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({}));

const drawerWidth = 240;
const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen((old) => !old);
	};
	return (
		<div>
			<AppBar position="fixed" open={isOpen}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						edge="start"
						sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Persistent drawer
					</Typography>
				</Toolbar>
			</AppBar>
			<SideBar isOpen={isOpen} toggleDrawer={toggleDrawer} />
			{children}
		</div>
	);
};

export default Layout;
