import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import Theme from "../theme";

export default function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDrawer = () => {
		setIsOpen((old) => !old);
	};
	const menuItems = [
		{
			text: "Overview",
			icon: AppsIcon,
		},
		{
			text: "Tasks",
			icon: AssignmentIcon,
		},
		{
			text: "Settings",
			icon: SettingsIcon,
		},
	];
	const list = () => (
		<Box
			sx={{ auto: 300 }}
			role="presentation"
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
			paddingRight={8}
		>
			<List>
				{menuItems.map((item, index) => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<item.icon />
							</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<>
				<Button onClick={toggleDrawer}>Click On Menu</Button>

				<Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer}>
					<Stack direction={"row"} height="100%">
						<Stack
							direction="column"
							spacing={2}
							padding={2}
							sx={{
								backgroundColor: Theme.palette.primary.main,
							}}
							alignItems="center"
						>
							<Avatar sx={{ marginTop: 4 }}>N</Avatar>
							<AddIcon />
						</Stack>
						<Stack>
							<Stack padding={2} paddingTop={5}>
								<Typography variant="h6" component="h3">
									Me & I
								</Typography>
								<Typography>Emanuel's Space</Typography>
							</Stack>
							{list()}
						</Stack>
					</Stack>
				</Drawer>
			</>
		</div>
	);
}
