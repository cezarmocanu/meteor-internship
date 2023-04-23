import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter-slice";
import AuthenticationReducer from "./slices/authentication-slice";
import ModalReducer from "./slices/modal-slice";
import TaskReducer from "./slices/tasks-slice";

const store = configureStore({
	reducer: {
		counter: CounterReducer,
		authentication: AuthenticationReducer,
		modal: ModalReducer,
		tasks: TaskReducer,
	},
});

export default store;
