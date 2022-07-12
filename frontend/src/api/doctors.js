import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';

const API = axios.create({
  baseURL: `${BACKEND_URL}/doctor`,
  withCredentials: true,
});

export const loginDoctor = (doctorData) => API.post('/login', doctorData);
export const editDoctorDetails=(Data,config)=>API.put('/edit-doctorDetails', Data,config);
export const editDoctorPassword = (NewPassword,config) => API.put(`/edit-password`, NewPassword,config);
