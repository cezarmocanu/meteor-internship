import { ENDPOINTS } from "../constants/api";

const login = async (username, password) => {
	const credentials = btoa(`${username}:${password}`);

	const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
		method: "POST",
		headers: {
			Authorization: `Basic ${credentials}`,
		},
	});

	const data = await response.json();
	localStorage.setItem("token", data.token);
};

const authService = {
	login: login,
};

export default authService;
