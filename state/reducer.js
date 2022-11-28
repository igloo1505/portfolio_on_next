import * as Types from "./Types";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	drawer: {
		isOpen: false,
	},
	contactModal: {
		isOpen: false,
	},
	navbar: {
		height: 0,
	},
	viewport: {
		width: 0,
		height: 0,
	},
	toast: {
		submittedBy: null,
	},
	messages: {
		contacts: [],
	},
};

const onlyReducer = createReducer(initialState, (builder) => {
	builder.addCase(Types.TOGGLE_DRAWER, (state, action) => {
		return {
			...state,
			drawer: {
				...state.drawer,
				isOpen: !state.drawer.isOpen,
			},
		};
	});
	builder.addCase(Types.SET_DRAWER_OPEN, (state, action) => {
		return {
			...state,
			drawer: {
				...state.drawer,
				isOpen: true,
			},
		};
	});
	builder.addCase(Types.SET_DRAWER_CLOSED, (state, action) => {
		return {
			...state,
			drawer: {
				...state.drawer,
				isOpen: false,
			},
		};
	});
	builder.addCase(Types.SET_CONTACT_MODAL_OPEN, (state, action) => {
		return {
			...state,
			drawer: {
				isOpen: false,
			},
			contactModal: {
				...state.contactModal,
				isOpen: true,
			},
		};
	});
	builder.addCase(Types.SET_CONTACT_MODAL_CLOSED, (state, action) => {
		return {
			...state,
			contactModal: {
				...state.contactModal,
				isOpen: false,
			},
		};
	});
	builder.addCase(Types.UPDATE_NAV_HEIGHT, (state, action) => {
		return {
			...state,
			...action.payload,
		};
	});
	builder.addCase(Types.POST_CONTACT_SUCCESS, (state, action) => {
		return {
			...state,
			contactModal: {
				...state.contactModal,
				isOpen: false,
			},
			toast: {
				submittedBy: action.payload,
			},
		};
	});
	builder.addCase(Types.SET_TOAST_SUBMITTED_BY, (state, action) => {
		return {
			...state,
			toast: {
				submittedBy: action.payload,
			},
		};
	});
	builder.addCase(Types.SET_CONTACTS, (state, action) => {
		return {
			...state,
			messages: {
				...state.messages,
				contacts: action.payload,
			},
		};
	});
	builder.addCase(Types.SHOW_MEDIA_MODAL, (state, action) => {
		return {
			...state,
			mediaModal: {
				...state.mediaModal,
				isOpen: true,
				...action.payload,
			},
		};
	});
	builder.addCase(Types.DISPOSE_MEDIA_MODAL, (state, action) => {
		return {
			...state,
			mediaModal: {
				isOpen: false,
			},
		};
	});
});

export default onlyReducer;
