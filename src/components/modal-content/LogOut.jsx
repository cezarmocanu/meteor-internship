import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";

function TestContent3() {
	const dispatch = useDispatch();

	return (
		<>
			<DialogTitle>You are about to LogOut</DialogTitle>
			<DialogContent>
				<DialogContentText>
					You can always log on to your task manager and continue from where you left off..
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => dispatch(closeModal())}>No,This was a Mistake</Button>
				<Button onClick={() => dispatch(closeModal())}>Yes, Log Me Out</Button>
			</DialogActions>
		</>
	);
}

export default TestContent3;