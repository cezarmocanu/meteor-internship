import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "modal",
	initialState: null,
	reducers: {
		open(state, action) {
			state = action.payload;
			return state;
		},
		close(state, _) {
			state = null;
			return state;
		},
	},
});

export const { open, close } = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
