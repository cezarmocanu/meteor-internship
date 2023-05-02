const HOST = "http://209.250.238.186:8081";
const API = `${HOST}/api`;
export const ENDPOINTS = {
	AUTH: {
		LOGIN: `${API}/v1/auth/login`,
	},
	TASKS: {
		GET_TASKS: (workspaceId) => `${API}/v1/workspaces/${workspaceId}/tasks`,
	},
};
