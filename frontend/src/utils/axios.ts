import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// todo : où sera stocké le token ? comment sera-t-il renvoyé ?

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true,  // todo : ?
});

axiosInstance.interceptors.request
  .use
  // (config) => {
  // todo : ?
  // },
  // (error) => {
  //     return Promise.reject(error);
  // }
  ();

export default axiosInstance;
