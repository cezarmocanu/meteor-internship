import { alignProperty } from "@mui/material/styles/cssUtils";
import wid from "./wid.png";
import { Button } from "@mui/material";
import { useState } from "react";

function NoTasksPlaceholder() {
	const [count, setCount] = useState(0);
	const onCreateTaskClick = () => {
		setTask(count + 1);
	};
	return (
		<div
			style={{
				fontFamily: "Gelion",
				textAlign: "center",
				backgroundColor: "#E5E5E5",
				width: "30%",
				margin: "auto",
				boxSizing: "border-box",
			}}
		>
			<img style={{ width: "50%" }} src={wid} alt="widget image" />
			<div style={{ padding: 10 }}>
				<h1
					style={{
						fontFamily: "sans-serif",
						flexShrink: 1,
						fontSize: 28,
						fontWeight: 600,
						fontStyle: "normal",
						letterSpacing: -1,
					}}
				>
					No Tasks Yet
				</h1>
				<p>You have no task created in your workspace yet.</p>
				<p>Get productive. Create a Task Now.</p>
			</div>
			<Button
				variant="contained"
				style={{ textTransform: "revert", bottom: 5 }}
				onClick={onCreateTaskClick}
			> 
				Create a Task
			</Button>
		</div>
	);
}

export default NoTasksPlaceholder;
