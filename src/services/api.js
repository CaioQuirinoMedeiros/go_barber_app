import axios from 'axios';
import { REACT_APP_API_URL } from 'react-native-dotenv'

import {store} from '../store';

const api = axios.create({baseURL: 'https://go-barber-api-caio.herokuapp.com'});

api.interceptors.request.use(async config => {
  const {token} = store.getState().auth;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
