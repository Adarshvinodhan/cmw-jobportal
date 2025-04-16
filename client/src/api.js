import axios from 'axios';

// Use the VITE_API_URL from environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000', // fallback to localhost in dev
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
