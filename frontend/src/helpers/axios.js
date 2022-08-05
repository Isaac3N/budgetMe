import axios from "axios";

const baseURL = "https://budget-friend1.herokuapp.com/api";

console.log("BASE_URL", baseURL);

let headers = {};

if (localStorage.token) {
	headers.Authorization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: headers,
});

export default axiosInstance;
