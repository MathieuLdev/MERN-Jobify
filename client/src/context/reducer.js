import {
	CLEAR_ALERT,
	DISPLAY_ALERT,
	SETUP_USER_BEGIN,
	SETUP_USER_ERROR,
	SETUP_USER_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: "danger",
			alertText: "Please provide all values !",
		};
	}

	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: "",
			alertType: "",
		};
	}

	if (action.type === SETUP_USER_BEGIN) {
		return {
			...state,
			isLoading: true,
		};
	}

	if (action.type === SETUP_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token: action.payload.token,
			user: action.payload.user,
			userLocation: action.payload.location,
			jobLocation: action.payload.location,
			showAlert: true,
			alertType: "success",
			alertText: action.payload.alertText,
		};
	}

	if (action.type === SETUP_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: "danger",
			alertText: action.payload.msg,
		};
	}

	throw new Error(`no such action : ${action.type}`);
};

export default reducer;