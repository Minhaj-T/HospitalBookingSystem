import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';
const API = axios.create({
  baseURL:`${BACKEND_URL}/users`,
  withCredentials: true,
});

//User endpoints
export const signUp = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);
export const editUserDetails = (userData,config) => API.put(`/edit-userDetails`, userData,config);
export const editUserPassword = (NewPassword,config) => API.post(`/edit-password`, NewPassword,config);
