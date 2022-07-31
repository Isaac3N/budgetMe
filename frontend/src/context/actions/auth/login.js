import axiosInstance from "../../../helpers/axios";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../../constants/actionTypes.js";

export const login = (form) => (dispatch) => {
	axiosInstance
		.post("/auth/login/", form)
		.then((res) => {
			localStorage.token = res.data.token;
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: LOGIN_ERROR,
				payload: err.response.data,
			});
		});
};
