import axios from 'axios';
import { BACKEND_URL } from '../constants/url'

const API = axios.create({baseURL:BACKEND_URL,withCredentials: true})


//User endpoints
export const signUp = (userData) => API.post('/users/signup',userData);

