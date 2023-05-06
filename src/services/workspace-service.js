import { ENDPOINTS } from "../constants/api";
import { setWorkspace } from "../store/slices/workspace-slice";

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
		localStorage.setWorkSpace("token", data.token);
		dispatch(setWorkspace(data));
	} else {
		dispatch(setWorkspace([]));
	}
};

const workspaceService = {
	getWorkspace,
};

export default workspaceService;
