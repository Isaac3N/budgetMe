import axiosInstance from "../../../helpers/axios";

export const expenses = () => {
	axiosInstance
		.get("/expenses/")
		.then((res) => console.log("data", res.data))
		.catch((err) => console.log("err", err));
};
