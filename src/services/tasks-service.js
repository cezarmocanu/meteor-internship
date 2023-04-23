import { ENDPOINTS } from "../constants/api";


const getTasks = async (workspaceId) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${ENDPOINTS.TASKS}/v1/tasks?workspaceId=${workspaceId}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    
}