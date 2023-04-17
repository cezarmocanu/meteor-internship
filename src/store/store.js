import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter-slice";
import AuthenticationReducer from "./slices/authentication-slice";

const store = configureStore({
	reducer: {
		counter: CounterReducer,
		authentication: AuthenticationReducer,
	},
});

export default store;
