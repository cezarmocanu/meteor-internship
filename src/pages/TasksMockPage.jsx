import React, { useState } from "react";

import {
	Container,
	Typography,
	Box,
	CardContent,
	Grid,
	Stack,
	CardActions,
	CardHeader,
	Avatar,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "../components/shared/button/Button";
import Chip from "../components/shared/chip/Chip";
import CardComponent from "../components/shared/card/Card";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import theme from "../theme";

const TasksMockPage = () => {
	const [value, setValue] = React.useState(0);
	return (
		<Container fixed>
			<Typography variant="h3" component="h1">
				Task
			</Typography>
			<Typography variant="subtitle2" component="h3">
				Your Tasks In Your Page
			</Typography>
			<Box sx={{ width: 500 }}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction label="All tasks" />
					<BottomNavigationAction label="Pending" />
					<BottomNavigationAction label="Progress" />
					<BottomNavigationAction label="Completed" />
				</BottomNavigation>
			</Box>
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<CardComponent>
						<CardHeader
							title={
								<Typography variant="body1" color="text.secondary">
									T-01
								</Typography>
							}
						/>
						<Chip color="error" variant="disabled" label="23" />

						<CardContent>
							<Typography variant="h6" fontWeight="bold">
								Create A Design System For Enum Workspace.
							</Typography>
							<CardActions>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: "100%" }}
								>
									<Button variant="link">View Task</Button>
									<Avatar
										variant="circular"
										sx={{
											color: theme.palette.text.primary,
											backgroundColor: theme.palette.text.light,
										}}
									></Avatar>
								</Stack>
							</CardActions>
						</CardContent>
					</CardComponent>
				</Grid>
				<Grid item xs={4}>
					<CardComponent>
						<CardHeader
							title={
								<Typography variant="body1" color="text.secondary">
									T-01
								</Typography>
							}
						/>
						<CardContent>
							<Typography variant="h6" fontWeight="bold">
								Create A Design System For Enum Workspace.
							</Typography>
							<CardActions>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: "100%" }}
								>
									<Button variant="link">View Task</Button>
									<Avatar
										variant="circular"
										sx={{
											color: theme.palette.text.primary,
											backgroundColor: theme.palette.text.light,
										}}
									>
										<ErrorOutlineIcon />
									</Avatar>
								</Stack>
							</CardActions>
						</CardContent>
					</CardComponent>
				</Grid>
				<Grid item xs={4}>
					<CardComponent>
						<CardHeader
							title={
								<Typography variant="body1" color="text.secondary">
									T-01
								</Typography>
							}
						/>
						<CardContent>
							<Typography variant="h6" fontWeight="bold">
								Create A Design System For Enum Workspace.
							</Typography>
							<CardActions>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: "100%" }}
								>
									<Button variant="link">View Task</Button>
									<Avatar
										variant="circular"
										sx={{
											color: theme.palette.text.primary,
											backgroundColor: theme.palette.text.light,
										}}
									>
										<ErrorOutlineIcon />
									</Avatar>
								</Stack>
							</CardActions>
						</CardContent>
					</CardComponent>
				</Grid>
				<Grid item xs={4}>
					<CardComponent>
						<CardHeader
							title={
								<Typography variant="body1" color="text.secondary">
									T-01
								</Typography>
							}
						/>
						<CardContent>
							<Typography variant="h6" fontWeight="bold">
								Create A Design System For Enum Workspace.
							</Typography>
							<CardActions>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: "100%" }}
								>
									<Button variant="link">View Task</Button>
									<Avatar
										variant="circular"
										sx={{
											color: theme.palette.text.primary,
											backgroundColor: theme.palette.text.light,
										}}
									>
										<ErrorOutlineIcon />
									</Avatar>
								</Stack>
							</CardActions>
						</CardContent>
					</CardComponent>
				</Grid>
				<Grid item xs={4}>
					<CardComponent>
						<CardHeader
							title={
								<Typography variant="body1" color="text.secondary">
									T-01
								</Typography>
							}
						/>
						<CardContent>
							<Typography variant="h6" fontWeight="bold">
								Create A Design System For Enum Workspace.
							</Typography>
							<CardActions>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: "100%" }}
								>
									<Button variant="link">View Task</Button>
									<Avatar
										variant="circular"
										sx={{
											color: theme.palette.text.primary,
											backgroundColor: theme.palette.text.light,
										}}
									>
										<ErrorOutlineIcon />
									</Avatar>
								</Stack>
							</CardActions>
						</CardContent>
					</CardComponent>
				</Grid>
			</Grid>
		</Container>
	);
};

export default TasksMockPage;
