import axiosInstance from "../../../helpers/axios";

export const register = (form) => (dispatch) => {
	axiosInstance
		.post("auth/register/", form)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			if (err.response) console.log(err.response.data);
		});
};
