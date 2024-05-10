import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seahorse-app-cwuyw.ondigitalocean.app',
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`  || ''
  }
});

export default api;