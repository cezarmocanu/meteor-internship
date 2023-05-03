import { ENDPOINTS } from "../constants/api";

const getTasks = async (workspaceId) => {
	const token = localStorage.getItem("token");
	if (!token) {
		return [];
	}
	const response = await fetch(ENDPOINTS.ALL_TASKS.GET_TASKS(workspaceId), {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.status !== 200) {
		return [];
	}
	const data = await response.json();
	return data;
};

const taskService = {
	getTasks,
};

export default taskService;
