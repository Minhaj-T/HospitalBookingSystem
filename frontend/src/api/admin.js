import axios from "axios";
import { BACKEND_URL } from "../constants/axios";

const API = axios.create({
  baseURL: `${BACKEND_URL}/admin`,
  withCredentials: true,
});

//admin endpoints
export const loginAdmin = (data) => API.post(`/login`, data);
 
export const fetchUsers=(config)=>API.get('/fetch-users',config)
export const editUser=(userData,userId)=>API.put(`/edit-user/${userId}`,userData)
export const blockUser = (config,id,status) => API.patch(`/block-user?id=${id}&status=${status}`,config)
export const removeUser = (config,id) => API.delete(`/remove-user?id=${id}`,config)

export const addDoctor=(config,doctorData)=>API.post('/add-doctors',doctorData,config) 
export const fetchDoctors=(config)=>API.get('/fetch-doctors',config)
export const deleteDoctor=(config,doctorId)=>API.delete(`/delete-doctor/${doctorId}`,config)
export const blockDoctor = (config,id,status) => API.patch(`/block-doctor?id=${id}&status=${status}`,config)

export const fetchSpecialties=(config)=>API.get('/fetch-specialties',config)
export const addSpecialities=(config,specialties)=>API.post('/add-specialties',specialties,config)
export const deleteSpecialties=(config,Id)=>API.delete(`/delete-specialties/${Id}`,config)

export const widgetValues=(config)=> API.get('/get-widget-count',config)
export const appointmentStatistics=(config)=> API.get('/appointment-statistics',config);
export const latestTransactions=(limit,config)=> API.get(`/latest-transactions?limit=${limit}`,config);
export const specializationsRevenue=(config)=> API.get(`/specialization-revenue`,config)
export const latestUsers=(config,limit)=> API.get(`/latest-users?limit=${limit}`,config)
export const dailyRevenue=(config)=> API.get(`/daily-revenue`,config)
