import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "modal",
	initialState: null,
	reducers: {
		openModal(state, action) {
			state = action.payload;
			return state;
		},
		closeModal(state, _) {
			state = null;
			return state;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModal = (state) => state.modal;

export default modalSlice.reducer;
