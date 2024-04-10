import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seahorse-app-cwuyw.ondigitalocean.app',
});

export default api;