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

const token = localStorage.getItem("token");

const logout = async () => {

	const response = await fetch(ENDPOINTS.AUTH.LOGOUT, {
		method: "POST",
		headers: {
			Authorization : `Bearer ${token}`,
		},
	});
	
	const data = await response.json();
	localStorage.removeItem("token");
	console.log("logout", data);
};

const authService = {
	login,
	logout,
};

export default authService;
