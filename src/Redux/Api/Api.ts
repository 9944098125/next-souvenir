import Axios from "axios";

const Api = Axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"Content-Type": "application/json",
	},
});

export default Api;
