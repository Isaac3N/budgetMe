import {
	ADD_INCOME_ERROR,
	ADD_INCOME_SUCESS,
} from "../../../constants/actionTypes.js";
import axiosInstance from "../../../helpers/axios";

export const register = (form) => (dispatch) => {
	axiosInstance
		.post("/income/", form)
		.then((res) => {
			dispatch({
				type: ADD_INCOME_SUCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: ADD_INCOME_ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		});
};
