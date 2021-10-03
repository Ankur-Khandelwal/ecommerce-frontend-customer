import axios from 'axios';
import { api } from '../urlConfig';
import store from '../store';
import {authConstants} from '../actions/constants';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    'Authorization': token ? `Bearer ${token}` : ''
  }
});


export default axiosInstance;