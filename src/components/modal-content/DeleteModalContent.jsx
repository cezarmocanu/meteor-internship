import React from "react";
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Theme from "../../theme";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";

function DeleteModalContent() {
    const dispatch = useDispatch();

    return (
        <>
        <Stack direction="row" sx={{width: '100%',
    justifyContent: "space-between"}}>

            <DialogTitle variant="h2">Delete task</DialogTitle>
        <CloseIcon onClick={() => dispatch(closeModal())}></CloseIcon>
        </Stack>

            <DialogContent>
                <DialogContentText>
                    Are you sure you delete the task? This task is in-progress?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" size="large"onClick={() => dispatch(closeModal())}>No</Button>

                <Button sx={{
                        backgroundColor: Theme.palette.info.light,
                    }} color="error" variant="contained" size="large" onClick={() => dispatch(closeModal())}>Yes</Button>
            </DialogActions>
        </>
    );
}
export default DeleteModalContent;