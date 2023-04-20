import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	IconButton,
	Stack,
	FormControl,
	InputLabel,
	MenuItem,
	InputAdornment,
	Select,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormLabel from "./../shared/input/FormLabel";
import TextField from "./../shared/input/TextField";
import Button from "./../shared/button/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CreateTask() {
	const dispatch = useDispatch();
	const [focus, setFocused] = useState(false);
	const [hasValue, setHasValue] = useState(false);
	const onFocus = () => setFocused(true);
	const onBlur = () => setFocused(false);

	const options = [
		{ label: "Low", id: 1 },
		{ label: "Medium", id: 2 },
		{ label: "High", id: 3 },
	];

	return (
		<Stack>
			<DialogActions>
				<IconButton
					onClick={() => dispatch(closeModal())}
					color="theme.text.primary"
				>
					<CloseIcon />
				</IconButton>
			</DialogActions>
			<DialogTitle variant="h4" fontWeight="bold">
				Create Task
			</DialogTitle>
			<DialogContent>
				<Stack gap={2}>
					<Stack gap={1}>
						<FormLabel>
							<Typography fontWeight="medium">Task Name</Typography>
						</FormLabel>
						<TextField required variant="outlined" />
					</Stack>
					<Stack direction={"row"} spacing={2}>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Priority</Typography>
							</FormLabel>
							<TextField select placeholder="Select" defaultValue="">
								{options.map((option) => (
									<MenuItem key={option.label} value={option.label}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Stack>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Due Date</Typography>
							</FormLabel>
							<TextField
								onFocus={onFocus}
								onBlur={onBlur}
								InputProps={{
									classes: {
										input: "CustomTextField",
									},
									endAdornment: (
										<InputAdornment position="end">
											<CalendarMonthOutlinedIcon />
										</InputAdornment>
									),
								}}
								onChange={(e) => {
									if (e.target.value) setHasValue(true);
									else setHasValue(false);
								}}
								label="Today"
								type={hasValue || focus ? "datetime-local" : "text"}
								required
								variant="outlined"
							/>
						</Stack>
					</Stack>
					<Stack gap={1}>
						<FormLabel>
							<Typography fontWeight="medium">Task Description</Typography>
						</FormLabel>
						<TextField
							required
							variant="outlined"
							placeholder="Type your content here...."
						/>
					</Stack>
					<Stack justifyContent="flex-start" alignItems="flex-start">
						<Button variant="contained" color="primary" size="large">
							Create Task
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</Stack>
	);
}

export default CreateTask;
