import axios from 'axios';
import { BACKEND_URL } from '../constants/axios'
const API = axios.create({baseURL:BACKEND_URL,withCredentials: true})

//User endpoints
export const signUp = (userData) => API.post("/users/signup", userData);
export const login = (userData) => API.post("/users/login", userData);
export const getUser = () => API.get("/users/getuser");
