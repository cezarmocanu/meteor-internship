import React from "react";
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
	const dispatch = useDispatch();

	const INITIAL_VALUES = {
		taskName: "",
		priority: "",
		dueDate: "",
		description: "",
	};
	const onSubmit = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues: INITIAL_VALUES,
		validation,
		onSubmit,
	});

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
								variant="outlined"
								name="taskName"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.taskName}
								error={
									formik.touched.taskName && Boolean(formik.errors.taskName)
								}
								helperText={formik.touched.taskName && formik.errors.taskName}
								required
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
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.priority}
											error={
												formik.touched.priority &&
												Boolean(formik.errors.priority)
											}
											helperText={
												formik.touched.priority && formik.errors.priority
											}
											required
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
												minDate={tomorrow}
												error={
													formik.touched.dueDate &&
													Boolean(formik.errors.dueDate)
												}
												helperText={
													formik.touched.dueDate && formik.errors.dueDate
												}
												required
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
								onBlur={formik.handleBlur}
								value={formik.values.description}
								error={
									formik.touched.description &&
									Boolean(formik.errors.description)
								}
								helperText={
									formik.touched.description && formik.errors.description
								}
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
								type="submit"
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

const validation = yup.object({
	taskName: yup.string().required("Task Name is required"),
	priority: yup.string().required("Task Priority is required"),
	dueDate: yup.string().required("Due Date is required"),
	description: yup.string().required("Task Descriptio is required"),
});

export default CreateTask;
