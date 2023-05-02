import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter-slice";
import AuthenticationReducer from "./slices/authentication-slice";
import ModalReducer from "./slices/modal-slice";
import WorkspaceReducer from "./slices/workspace-slice";

const store = configureStore({
	reducer: {
		counter: CounterReducer,
		authentication: AuthenticationReducer,
		modal: ModalReducer,
		workspace: WorkspaceReducer,
	},
});

export default store;
