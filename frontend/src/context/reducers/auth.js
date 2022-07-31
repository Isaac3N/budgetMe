import {
	REGISTER_ERROR,
	REGISTER_SUCESS,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
} from "../../constants/actionTypes.js";

const auth = (state, { payload, type }) => {
	switch (type) {
		case REGISTER_SUCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				auth: {
					...state.auth,
					data: payload,
				},
			};

		case REGISTER_ERROR:
		case LOGIN_ERROR:
			return {
				...state,
				auth: {
					...state.auth,
					error: payload,
				},
			};
		default:
			return state;
	}
};

export default auth;
