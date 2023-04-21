import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton,
	Stack,
	MenuItem,
	InputAdornment,
	Typography,
	Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormLabel from "./../shared/input/FormLabel";
import TextField from "./../shared/input/TextField";
import Button from "./../shared/button/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import OPTIONS from "../CreateTaskItems";

function CreateTask() {
	const dispatch = useDispatch();
	const theme = useTheme();
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
				<DialogTitle variant="h5" fontWeight="bold" sx={{ paddingTop: 0 }}>
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
						<Stack direction={"row"}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Task Priority</Typography>
										</FormLabel>
										<TextField select>
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
										<TextField
											InputProps={{
												endAdornment: (
													<InputAdornment position="end">
														<CalendarMonthOutlinedIcon />
													</InputAdornment>
												),
											}}
											required
											variant="outlined"
										/>
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
								multiline
								rows={3}
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
		</Stack>
	);
}

export default CreateTask;
