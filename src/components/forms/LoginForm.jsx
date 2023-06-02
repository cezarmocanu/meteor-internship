import React, { useState, useCallback, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import FormLabel from "../shared/input/FormLabel";
import TextField from "../shared/input/TextField";
import PasswordInput from "../shared/password-input/PasswordInput";
import LocalStorageKeys from "../../constants/local-storage-keys";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import authService from "../../services/auth-service";
import RoutePaths from "../../constants/route-paths";
import { login } from "../../store/slices/authentication-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/shared/button/Button";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const localStorageIsChecked = JSON.parse(
			localStorage.getItem(LocalStorageKeys.isChecked)
		);
		const localStorageUsername = localStorage.getItem(
			LocalStorageKeys.username
		);

		if (!localStorageIsChecked || localStorageUsername === null) {
			return;
		}

		setIsChecked(localStorageIsChecked);
		setLoginData({ ...loginData, username: localStorageUsername });
	}, []);

	const onTextFieldChange = (e) => {
		setLoginData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLoginClick = () => {
		authService
			.login(loginData.username, loginData.password)
			.then((loggedInWithSuccess) => {
				if (!loggedInWithSuccess) {
					return;
				}

				if (isChecked) {
					localStorage.setItem(LocalStorageKeys.username, loginData.username);
				}

				dispatch(login());
				navigate(RoutePaths.TEST);
			});
	};

	const handleRememberCheck = useCallback(() => {
		setIsChecked((isChecked) => {
			const nextValue = !isChecked;
			localStorage.setItem(
				LocalStorageKeys.isChecked,
				JSON.stringify(nextValue)
			);
			return nextValue;
		});
	}, [setIsChecked]);

	return (
		<>
			<Stack>
				<Stack>
					<FormLabel>Email Address</FormLabel>
					<TextField
						name="username"
						value={loginData.username}
						onChange={onTextFieldChange}
						required
						variant="outlined"
						helperText="Example. mano@gmail.com"
					/>
				</Stack>
				<Stack>
					<FormLabel>Enter your Password</FormLabel>
					<PasswordInput
						name="password"
						value={loginData.password}
						onChange={onTextFieldChange}
					/>
				</Stack>
				<FormControlLabel
					style={{ pointerEvents: "none" }}
					control={
						<Checkbox
							onClick={handleRememberCheck}
							style={{ pointerEvents: "auto" }}
							checked={isChecked}
							name="checkbox"
							value={loginData.checkbox}
						/>
					}
					label={<Typography fontWeight="bold"> Remember me</Typography>}
				/>
			</Stack>
			<Button
				variant="contained"
				color="primary"
				size="large"
				onClick={handleLoginClick}
			>
				Log in
			</Button>
		</>
	);
}

export default LoginForm;
