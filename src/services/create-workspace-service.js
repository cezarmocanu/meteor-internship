import { ENDPOINTS } from "../constants/api";

const postWorkspaces = async (workspaceData) => {

    const response = await fetch(ENDPOINTS.WORKSPACE.USER_WORKSPACE, {
		method: "POST",
		mode:'cors',
		body: JSON.stringify(workspaceData),
	});

	if (response.status !== 201) {
		return false;
	}
	return true;
};
const createWorkspace = {
	postWorkspaces 
};
export default createWorkspace;