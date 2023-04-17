import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: 0,
	reducers: {
		increment(state, action) {
			state += action?.payload ?? 1;
			return state;
		},
		decrement(state, action) {
			state -= action?.payload ?? 1;
			return state;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;

export const selectCounter = (state) => state.counter;

export default counterSlice.reducer;
