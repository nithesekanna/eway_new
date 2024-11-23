import axios from "axios";
import COMMON_URL from "./config";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: COMMON_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
