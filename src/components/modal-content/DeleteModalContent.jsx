import React from "react";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import { DialogTitle, DialogContent, Button, Typography } from "@mui/material";

function DeleteModalContent() {
	const dispatch = useDispatch();

	return (
		<>
			<DialogTitle>
				<Stack
					direction="row"
					sx={{
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h4">Delete task</Typography>
					<CloseIcon onClick={() => dispatch(closeModal())} />
				</Stack>
			</DialogTitle>
			<DialogContent>
				<Stack gap={2}>
					<Typography variant="body1">
						Are you sure you delete the task? This task is in-progress?
					</Typography>
					<Stack direction={"horizontal"} gap={1}>
						<Button
							color="primary"
							variant="contained"
							size="large"
							onClick={() => dispatch(closeModal())}
						>
							No
						</Button>
						<Button
							color="error"
							variant="contained"
							size="large"
							onClick={() => dispatch(closeModal())}
						>
							Yes
						</Button>
					</Stack>
				</Stack>
			</DialogContent>
		</>
	);
}
export default DeleteModalContent;
