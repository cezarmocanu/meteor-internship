import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton,
	Stack,
	Typography,
	Grid,
	MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./../shared/button/Button";
import FormLabel from "./../shared/input/FormLabel";
import TextField from "./../shared/input/TextField";
import DatePicker from "./../shared/date-picker/DatePicker";
import { closeModal } from "../../store/slices/modal-slice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

const OPTIONS = [
	{ value: "Low", id: 1 },
	{ value: "Medium", id: 2 },
	{ value: "High", id: 3 },
];

function CreateTask() {
	const theme = useTheme();
	const today = useMemo(() => dayjs());
	const tomorrow = useMemo(() => today.add(1, "day"));
	//const tomorrow = useMemo(() => new Date().toISOString());
	const dispatch = useDispatch();

	const INITIAL_VALUES = {
		taskName: "",
		priority: "",
		dueDate: { tomorrow },
		description: "",
	};

	const validationSchema = yup.object({
		taskName: yup.string("Enter Task Name").required("Task Name is required"),
		priority: yup
			.string("Enter Task Priority")
			.required("Task Priority is required"),
		dueDate: yup.string("Enter Due Date").required("Due Date is required"),
		description: yup
			.string("Enter Task Description")
			.required("Task Descriptio is required"),
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: { taskName: "", priority: "", dueDate: "", description: "" },
		// validationSchema,
		onSubmit,
	});

	// const [formState, setFormState] = useState({
	// 	taskName: "",
	// 	priority: "",
	// 	dueDate: "",
	// 	description: "",
	// });

	// const handleFieldChange = (event) => {
	// 	setFormState({ ...formState, [event.target.name]: event.target.value });
	// };
	// const handleChangeDueDate = (selectedDate) => {
	// 	setFormState({ ...formState, dueDate: selectedDate.toDate() });
	// };
	// const onSubmitAddTask = () => {
	// 	console.log(formState);
	// };
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
				<DialogContent onSubmit={formik.handleSubmit}>
					<Stack gap={2}>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Name</Typography>
							</FormLabel>
							<TextField
								required
								variant="outlined"
								name="taskName"
								onChange={formik.handleChange}
								value={formik.values.taskName}
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
											select
											name="priority"
											// value={formState.priority}
											onChange={formik.handleChange}
											value={formik.values.priority}
										>
											{OPTIONS.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.value}
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
												defaultValue={tomorrow}
												// selected={
												// 	(field.value && new Date(field.value)) || null
												// }
												// onChange={(val) => {
												// 	setFieldValue(field.name, val);
												// }}
												// mode="date"
												// minDate={tomorrow.toString()}
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
								name="description"
								onChange={formik.handleChange}
								value={formik.values.description}
								multiline
								rows={3}
							/>
						</Stack>
						<Stack justifyContent="flex-start" alignItems="flex-start">
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={formik.handleSubmit}
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
