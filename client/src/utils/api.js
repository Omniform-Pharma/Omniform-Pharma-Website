import axios from "axios";

// Shared API client so all frontend calls use one consistent base URL.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
