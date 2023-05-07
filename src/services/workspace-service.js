import { ENDPOINTS } from "../constants/api";

const getWorkspace = async () => {
	const token = localStorage.getItem("token");

	const response = await fetch(ENDPOINTS.WORKSPACE.USER_WORKSPACE, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.status === 200) {
		const data = await response.json();
		return data;
	} else {
		return[];
	}
};

const workspaceService = {
	getWorkspace,
};

export default workspaceService;
