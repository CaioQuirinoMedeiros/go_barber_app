import axios from 'axios';

const api = axios.create({baseURL: 'https://go-barber-api-caio.herokuapp.com'});

export default api;
