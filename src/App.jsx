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
import RoutePaths from "./constants/route-paths";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			dispatch(login());
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutePaths.ROOT} element={<TasksPage />} />
				<Route path={RoutePaths.TEST} element={<Test />} />
				<Route path={RoutePaths.LOGIN} element={<LoginPage />} />
				<Route path={RoutePaths.SIGNUP} element={<SignUpPage />} />
				<Route
					path={RoutePaths.FORGOT_PASSWORD}
					element={<ForgotPasswordPage />}
				/>
				<Route
					path={RoutePaths.CHANGE_PASSWORD}
					element={<ChangePasswordPage />}
				/>
				<Route path={RoutePaths.WORKSPACE} element={<WorkspacePage />} />
				<Route path={RoutePaths.AUTH} element={<AuthenticationPage />} />
				<Route path={RoutePaths.PRIVATE} element={<PrivatePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
