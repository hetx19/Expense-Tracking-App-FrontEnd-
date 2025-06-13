import axios from "axios";
import { BASE_URL } from "./api";

const axiosInst = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

axiosInst.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInst.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = "/signin";
      } else if (error.response.status === 500) {
        console.error("Server Error. Please Try Again");
      } else if (error.code === "ECONNABORTED") {
        console.error("Request Timeout. Try Again");
      }
      return Promise.reject(error);
    }
  }
);

export default axiosInst;
