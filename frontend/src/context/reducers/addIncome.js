import {
	ADD_INCOME_ERROR,
	ADD_INCOME_SUCESS,
} from "../../constants/actionTypes.js";

const addIncome = (state, { payload, type }) => {
	switch (type) {
		case ADD_INCOME_SUCESS:
			return {
				...state,
				addIncome: {
					...state.addIncome,
					data: payload,
				},
			};

		case ADD_INCOME_ERROR:
			return {
				...state,
				addIncome: {
					...state.addIncome,
					error: payload,
				},
			};
		default:
			return state;
	}
};

export default addIncome;
