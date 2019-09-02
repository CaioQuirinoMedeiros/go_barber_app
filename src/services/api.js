import axios from 'axios';

const api = axios.create({baseURL: 'https://caio-payprev.herokuapp.com'});

export default api;
