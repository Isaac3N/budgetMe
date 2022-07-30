import axiosInstance from "../../helpers/axios";

export const register = (form) => (dispatch) => {
	axiosInstance
		.post("auth/register/", form)
		.then((res) => console.log("res", res))
		.catch((err) => console.log("e", err));
};
