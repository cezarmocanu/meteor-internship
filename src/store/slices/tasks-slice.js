import { createSlice } from "@reduxjs/toolkit";
import taskService from "../../services/tasks-service";

const taskSlice = createSlice({
	name: "tasks",
	initialState: {
		items: [],
		isLoading: false,
	},
	reducers: {
		setTasks(state, action) {
			state.items = action.payload;
			return state;
		},
		setLoading(state, action) {
			state.isLoading = action.payload;
			return state;
		},
	},
});

export const { setTasks, setLoading } = taskSlice.actions;

export const fetchTasks = (workspaceId) => async (dispatch) => {
	dispatch(setLoading(true));
	const tasks = await taskService.getTasks(workspaceId);
	dispatch(setTasks(tasks));
	dispatch(setLoading(false));
};

export const selectTasks = (state) => state.tasks.items;
export const selectTasksLoading = (state) => state.tasks.isLoading;

export default taskSlice.reducer;
