import axios from "axios";
import { getAccessToken } from "./constant";

const serverUrl = "http://localhost:4000";

const api = axios.create({
  baseURL: serverUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized - redirect to login");
    }
    return Promise.reject(error);
  },
);

export default api;
