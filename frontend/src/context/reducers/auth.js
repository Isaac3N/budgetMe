import {
	REGISTER_ERROR,
	REGISTER_SUCESS,
} from "../../constants/actionTypes.js";

export const auth = (state, { payload, type }) => {
	switch (type) {
		case REGISTER_SUCESS:
			return {
				...state,
				auth: {
					...state.auth,
					data: payload,
				},
			};

		case REGISTER_ERROR:
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
