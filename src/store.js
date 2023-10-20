import { configureStore } from "@reduxjs/toolkit";
import { ReduxReducer, chooseDataReducer } from "./Redux/ReduxReducer";

const store = configureStore({
	reducer: {
		ReduxReducer,
		chooseDataReducer
	}
});

export default store;
