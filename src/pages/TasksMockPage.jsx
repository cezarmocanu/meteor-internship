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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "../components/shared/button/Button";
import Chip from "../components/shared/chip/Chip";
import CardComponent from "../components/shared/card/Card";
import theme from "../theme";
import TaskStatus from "../constants/task-status";
import { STATUS_CARD_CONFIG } from "../components/TaskDetailsCard";

const LocalCardComponent = ({
	title,
	content,
	status,
	id,
	buttonText,
	buttonClick,
}) => {
	return (
		<Grid item xs={4}>
			<CardComponent>
				<CardHeader
					title={
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Typography variant="body1" color="text.secondary">
								T-{id}
							</Typography>

							<Chip
								color={STATUS_CARD_CONFIG[status].chipColor}
								variant="outlined"
								label={status}
								status={TaskStatus.PENDING}
							/>
						</div>
					}
				/>

				<CardContent>
					<Typography variant="h6" fontWeight="bold">
						{content}
					</Typography>
					<CardActions>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							sx={{ width: "100%" }}
						>
							<Button variant="link">{buttonText}</Button>
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
	);
};

const mockCards = [
	{
		title: "T-01",
		content: "taskul t01 pentru mine",
		id: "1",
		status: TaskStatus.PENDING,
	},
	{
		title: "T-02",
		content: "taskul t02 pentru mine",
		id: "2",
		status: TaskStatus.PENDING,
	},
	{
		title: "T-03",
		content: "taskul t03 pentru mine",
		id: "3",
		status: TaskStatus.IN_PROGRESS,
	},
	{
		title: "T-04",
		content: "taskul t03 pentru mine",
		id: "4",
		status: TaskStatus.COMPLETED,
	},
];

const TasksMockPage = () => {
	const [data, setData] = React.useState(mockCards);
	const [tabIndex, setTabIndex] = React.useState(0);
	const [status, setStatus] = React.useState(null);
	const handleChange = (event, newValue) => {
		console.log("newValue", newValue);
		setTabIndex(newValue);

		switch (newValue) {
			case 0:
				setStatus(null);
				break;
			case 1:
				setStatus(TaskStatus.PENDING);
				break;
			case 2:
				setStatus(TaskStatus.IN_PROGRESS);
				break;
			case 3:
				setStatus(TaskStatus.COMPLETED);
				break;
			default:
				break;
		}
	};
	return (
		<Container fixed>
			<Typography
				variant="h3"
				component="h1"
				sx={{
					fontWeight: "bold",
					marginTop: "2rem",
				}}
			>
				Task
			</Typography>
			<Typography variant="subtitle2" component="h3">
				Your Tasks In Your Page
			</Typography>
			<Box
				sx={{
					width: "100%",
					typography: "body1",
					marginTop: "2rem",
					marginBottom: "2rem",
				}}
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={tabIndex}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="All tasks" />
							<Tab label="Pending" />
							<Tab label="In progress" />
							<Tab label="Completed" />
						</Tabs>
					</Box>
				</Box>
				<Button variant="contained">Create Task</Button>
			</Box>
			<Grid container spacing={4}>
				{data
					.filter((item) => {
						if (status === null) {
							return true;
						}
						return item.status === status;
					})
					.map((item) => (
						<LocalCardComponent
							title={item.title}
							content={item.content}
							buttonText="View Task"
							status={item.status}
							id={item.id}
						/>
					))}
			</Grid>
		</Container>
	);
};

export default TasksMockPage;
