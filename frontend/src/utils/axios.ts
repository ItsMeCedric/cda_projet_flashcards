import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL as string;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // todo : LS/ à remettre en place pour les cookies (enlevé à cause de json-server)
});

export default axiosInstance;
