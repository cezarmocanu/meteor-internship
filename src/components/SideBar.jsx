import React, { useState, useCallback } from "react";
import {
	Drawer,
	Typography,
	Stack,
	Avatar,
	IconButton,
	Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import SideBarItems from "./SideBarItems";
import ModalTypes from "../constants/modal-types";
import { openModal } from "../store/slices/modal-slice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch } from "react-redux";

const BASE_DRAWER_WIDTH = 70;
const EXPANDED_DRAWER_WIDTH = 400;

function SideBar() {
	const dispatch = useDispatch();
	const [isExpanded, setIsExpanded] = useState(
		JSON.parse(localStorage.getItem("isExpanded"))
	);
	const theme = useTheme();

	const handleExpandClick = useCallback(() => {
		setIsExpanded((isExpanded) => {
			const nextValue = !isExpanded;
			localStorage.setItem("isExpanded", nextValue);
			return nextValue;
		});
	}, [setIsExpanded]);

	return (
		<Drawer
			variant="permanent"
			anchor={"left"}
			sx={{
				width: isExpanded ? EXPANDED_DRAWER_WIDTH : BASE_DRAWER_WIDTH,
				height: "100vh",
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: isExpanded ? EXPANDED_DRAWER_WIDTH : BASE_DRAWER_WIDTH,
					boxSizing: "border-box",
				},
			}}
		>
			<Stack direction={"row"} height="100%">
				<Stack
					direction="column"
					spacing={2}
					padding={1.85}
					sx={{
						backgroundColor: theme.palette.primary.main,
					}}
					alignItems="center"
				>
					<IconButton
						sx={{
							color: theme.palette.secondary.contrastText,
							backgroundColor: theme.palette.primary.main,
							borderRadius: "25%",
						}}
						onClick={handleExpandClick}
					>
						{isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
					<Avatar sx={{ marginTop: 4, borderRadius: "25%" }} variant="rounded">
						N
					</Avatar>
					<IconButton
						sx={{
							color: theme.palette.secondary.contrastText,
							backgroundColor: theme.palette.primary.main,
							borderRadius: "25%",
						}}
					>
						<AddIcon />
					</IconButton>
				</Stack>
				<Stack
					sx={{
						width: isExpanded ? EXPANDED_DRAWER_WIDTH - BASE_DRAWER_WIDTH : 0,
						transition: "width 0.2s",
					}}
				>
					<Stack
						padding={2}
						paddingTop={5}
						sx={{
							display: isExpanded ? "flex" : "none",
						}}
					>
						<Typography variant="h6" component="h3">
							Me & I
						</Typography>
						<Typography>Emanuel's Space</Typography>
					</Stack>
					<SideBarItems />
					<Button
						size="small"
						variant="contained"
						onClick={() => dispatch(openModal(ModalTypes.LOGOUT))}
					>
						Logout Modal
					</Button>
				</Stack>
			</Stack>
		</Drawer>
	);
}

export default SideBar;
