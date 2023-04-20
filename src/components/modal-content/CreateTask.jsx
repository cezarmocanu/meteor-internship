import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";

function CreateTask() {
	const dispatch = useDispatch();

	return (
		<>
			<DialogActions>
				<Button onClick={() => dispatch(closeModal())}>X</Button>
			</DialogActions>
			<DialogTitle>Create Task</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button>Create Task</Button>
			</DialogActions>
		</>
	);
}

export default CreateTask;
