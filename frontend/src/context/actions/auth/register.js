import {
	REGISTER_ERROR,
	REGISTER_SUCESS,
} from "../../../constants/actionTypes.js";
import axiosInstance from "../../../helpers/axios";

export const register = (form) => (dispatch) => {
	axiosInstance
		.post("/auth/register/", form)
		.then((res) => {
			dispatch({
				type: REGISTER_SUCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: REGISTER_ERROR,
				payload: err.response ? err.response.data : "COULD NOT CONNECT",
			});
		});
};
