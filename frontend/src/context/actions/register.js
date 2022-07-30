import axiosInstance from "../../helpers/axios";

export const register = () => {
	axiosInstance
		.post("http://127.0.0.1:8000/api/auth/register/")
		.then((res) => console.log("res", res))
		.catch((err) => console.log("e", err));
};
