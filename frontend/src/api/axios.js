// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://bashsoftdigital.com/api", 
  headers: { "Content-Type": "application/json" },
});

export default api;
