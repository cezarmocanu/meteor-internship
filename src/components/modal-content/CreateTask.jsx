import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton,
	Stack,
	MenuItem,
	Typography,
	Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./../shared/button/Button";
import FormLabel from "./../shared/input/FormLabel";
import TextField from "./../shared/input/TextField";
import DatePicker from "./../shared/date-picker/DatePicker";
import { closeModal } from "../../store/slices/modal-slice";

const OPTIONS = [
	{ label: "Low", id: 1 },
	{ label: "Medium", id: 2 },
	{ label: "High", id: 3 },
];

function CreateTask() {
	const today = dayjs();
	const tomorrow = dayjs().add(1, "day");

	function convertDate(string) {
		const date = String(string).split(" ");
		const mnths = {
			Jan: "01",
			Feb: "02",
			Mar: "03",
			Apr: "04",
			May: "05",
			Jun: "06",
			Jul: "07",
			Aug: "08",
			Sep: "09",
			Oct: "10",
			Nov: "11",
			Dec: "12",
		};
		return [mnths[date[2]], date[1], date[3]].join("/");
	}

	convertDate(today);
	const [taskName, setTaskName] = useState("");
	const [priority, setPriority] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useDispatch();
	const theme = useTheme();

	const handleChangeTaskName = (event) => {
		setTaskName(event.target.value);
	};
	const handleChangePriority = (event) => {
		setPriority(event.target.value);
	};
	const handleChangeDueDate = (selectDate) => {
		setDueDate(convertDate(selectDate));
	};
	const handleChangeDescription = (event) => {
		setDescription(event.target.value);
	};

	const TackDatails = {
		taskName,
		priority,
		dueDate,
		description,
	};

	const onSubmitAddTask = () => {
		console.log(TackDatails);
	};
	return (
		<Stack
			sx={{
				[theme.breakpoints.up("lg")]: {
					width: "35vw",
				},
				[theme.breakpoints.up("md")]: {
					width: "50vw",
				},
				width: "65vw",
			}}
		>
			<Stack sx={{ width: "100%" }}>
				<DialogActions sx={{ paddingBottom: 0 }}>
					<IconButton
						onClick={() => dispatch(closeModal())}
						color="theme.text.primary"
					>
						<CloseIcon />
					</IconButton>
				</DialogActions>
				<DialogTitle sx={{ paddingTop: 0 }}>Create Task</DialogTitle>
				<DialogContent>
					<Stack gap={2}>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Name</Typography>
							</FormLabel>
							<TextField
								required
								variant="outlined"
								onChange={handleChangeTaskName}
							/>
						</Stack>
						<Stack direction={"row"}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Task Priority</Typography>
										</FormLabel>
										<TextField
											value={priority}
											onChange={handleChangePriority}
											select
										>
											{OPTIONS.map((option) => (
												<MenuItem key={option.label} value={option.label}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</Stack>
								</Grid>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Due Date</Typography>
										</FormLabel>
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<DatePicker
												defaultValue={today}
												minDate={tomorrow}
												onChange={handleChangeDueDate}
											/>
										</LocalizationProvider>
									</Stack>
								</Grid>
							</Grid>
						</Stack>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Description</Typography>
							</FormLabel>
							<TextField
								required
								variant="outlined"
								placeholder="Type your content here...."
								onChange={handleChangeDescription}
								multiline
								rows={3}
							/>
						</Stack>
						<Stack justifyContent="flex-start" alignItems="flex-start">
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={onSubmitAddTask}
							>
								Create Task
							</Button>
						</Stack>
					</Stack>
				</DialogContent>
			</Stack>
		</Stack>
	);
}

export default CreateTask;
