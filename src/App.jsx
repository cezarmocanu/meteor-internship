import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./pages/TestPage";
import TasksPage from "./pages/TasksPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import LoginPage from "./pages/LoginPage";
import WorkspacePage from "./pages/WorkspacePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import PrivatePage from "./pages/PrivatePage";
import { login } from "./store/slices/authentication-slice";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			dispatch(login());
		}
	}, []);

	return (
		<div>
			<Routes>
				<Route path="/" element={<TasksPage />} />
				<Route path="/test" element={<Test />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/change-password" element={<ChangePasswordPage />} />
				<Route path="/workspace" element={<WorkspacePage />} />
				<Route path="/auth" element={<AuthenticationPage />} />
				<Route path="/private" element={<PrivatePage />} />
			</Routes>
		</div>
	);
}

export default App;
