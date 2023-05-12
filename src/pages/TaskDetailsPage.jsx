import React from "react";
import TaskDetailsCard from "../components/TaskDetailsCard";
import { Container, Button } from "@mui/material";
import AssignmentReturnSharpIcon from "@mui/icons-material/AssignmentReturnSharp";

function TaskDetailsPage() {
	return (
		<Container>
			<AssignmentReturnSharpIcon />
			<Button size="large" variant="outlined" color="primary">
				Edit Task
			</Button>
			<TaskDetailsCard />
		</Container>
	);
}

export default TaskDetailsPage;
