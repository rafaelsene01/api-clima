import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apiadvisor.climatempo.com.br/api/v1',
});

export default api;
