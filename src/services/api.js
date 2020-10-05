import axios from 'axios';

export const key = '';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default api;
