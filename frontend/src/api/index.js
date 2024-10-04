import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",// http://localhost:5000/api/reports
});

export default api;