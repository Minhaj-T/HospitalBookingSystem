import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';
const API = axios.create({
  baseURL:`${BACKEND_URL}/users`,
  withCredentials: true,
});

//User endpoints /login-google
export const signUp = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);
export const login_google = (userData) => API.post('/login-google', userData);
export const editUserDetails = (userData,config) => API.put(`/edit-userDetails`, userData,config);
export const editUserPassword = (NewPassword,config) => API.post(`/edit-password`, NewPassword,config);
export const getAllDoctors = (skip,limit) => API.get(`/fetch-allDoctors?limit=${limit}&skip=${skip}`)
export const getDoctor = (id) => API.get(`/get-doctor?id=${id}`)
export const getAllSpecialites=()=> API.get ('/fetch-specialties');
export const getAllappointment= (config) => API.get(`/get-appointments`,config) 
export const getappointments= (config) => API.get(`/get-user-Allappointments`,config)
export const deleteSlote= (data,config) => API.post (`/delete-slot`,data,config)
export const getUser = (id) => API.get(`/get-user?id=${id}`)
export const favoriteDoctor= (data,config)=> API.post(`/add-favourites`,data,config)
export const RemovefavoriteDoctor= (data,config)=> API.put(`/remove-favourites`,data,config)
