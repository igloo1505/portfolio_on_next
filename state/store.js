import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";

const initialState = {
	drawer: {
		isOpen: false,
	},
	contactModal: {
		isOpen: false,
	},
	navbar: {
		height: 100,
	},
};

const withDevtools = () => {
	let withTools = process.env.NODE_ENV !== "production" || true;
	return withTools;
};

const store = configureStore({
	reducer: Reducer,
	devTools: () => withDevtools(),
	preloadedState: initialState,
});
if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
	window.store = store;
}

export default store;