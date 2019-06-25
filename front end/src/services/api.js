import axios from "axios";

const api = axios.create({
  baseURL: "https://http://localhost:9999/"
});

export default api;