import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

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
