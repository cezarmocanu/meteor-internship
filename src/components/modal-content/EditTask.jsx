import React from "react";
import { useDispatch } from "react-redux";
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { closeModal } from "../../store/slices/modal-slice";
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
import  DatePicker  from "./../shared/date-picker/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const OPTIONS = [
    {value: 'Low', id: 1},
    {value: 'Medium', id: 2},
    {value: 'High', id: 3},
];

const validationSchema = Yup.object().shape({
    taskName: Yup.string().required('Task Name is required'),
    priority: Yup.string().required('Priority is required'),
    dueDate: Yup.date().required('Due Date is required'),
    description: Yup.string().required('Description is required'),
});

const EditTask = ({ initialValues }) => {
    const dispatch = useDispatch();
    const today = dayjs();
    const tomorrow = today.add(1, 'day');

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <Form>
                    <Stack
                    sx={{
                        width: '65vw',
                        '@media (min-width: 600px)': {
                            width: '50vw',
                        },
                        '@media (min-width: 1280px)': {
                            width: '35vw',
                            },
                            }}
                            >
                                
                            </Stack>
                </Form>
            )}
        </Formik>
    )
}