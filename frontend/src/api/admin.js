import axios from "axios";
import { BACKEND_URL } from "../constants/axios";

const API = axios.create({
  baseURL: `${BACKEND_URL}/admin`,
  withCredentials: true,
});

//admin endpoints
export const loginAdmin = (data) => API.post(`/login`, data);

export const fetchUsers=()=>API.get('/fetch-users')
export const editUser=(userData,userId)=>API.put(`/edit-user/${userId}`,userData)
export const blockUser = (id,status) => API.patch(`/block-user?id=${id}&status=${status}`)
export const removeUser = (id) => API.delete(`/remove-user?id=${id}`)

export const addDoctor=(doctorData)=>API.post('/add-doctors',doctorData)
export const fetchDoctors=(config)=>API.get('/fetch-doctors',config)
export const deleteDoctor=(doctorId)=>API.delete(`/delete-doctor/${doctorId}`)
export const blockDoctor = (id,status) => API.patch(`/block-doctor?id=${id}&status=${status}`)

export const fetchSpecialties=()=>API.get('/fetch-specialties')
export const addSpecialities=(specialties)=>API.post('/add-specialties',specialties)
export const deleteSpecialties=(Id)=>API.delete(`/delete-specialties/${Id}`)

export const widgetValues=(config)=> API.get('/get-widget-count',config)
export const appointmentStatistics=(config)=> API.get('/appointment-statistics',config);
export const latestTransactions=(limit,config)=> API.get(`/latest-transactions?limit=${limit}`,config);
export const specializationsRevenue=(config)=> API.get(`/specialization-revenue`,config)
export const latestUsers=(config,limit)=> API.get(`/latest-users?limit=${limit}`,config)
