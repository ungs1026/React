import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: "67a11c16d19906e711695f463cda181d",
		language: "ko-KR"
	}
})

export default instance;