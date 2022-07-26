import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';

const API = axios.create({
  baseURL: `${BACKEND_URL}/doctor`,
  withCredentials: true,
});

export const loginDoctor = (doctorData) => API.post('/login', doctorData);
export const editDoctorDetails=(Data,config)=>API.put('/edit-doctorDetails', Data,config);
export const editDoctorPassword = (NewPassword,config) => API.put(`/edit-password`, NewPassword,config);
export const addTimeSlots=(Data,config) => API.post(`/add-timeSlots`, Data,config);
export const deleteTimeSlots=(Data,config) => API.patch(`/delete-timeSlots`, Data,config);
export const getAllappointment= (config) => API.get(`/get-appointments`,config)
export const changeStatus_Appointment= (Data,config) => API.patch('/changeStaus-appointments',Data,config)
