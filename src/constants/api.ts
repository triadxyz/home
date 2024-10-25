import axios from 'axios';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}` || '',
  },
});

export default api;
