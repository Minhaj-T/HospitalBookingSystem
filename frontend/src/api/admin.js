import axios from "axios";
import { BACKEND_URL } from "../constants/axios";

const API = axios.create({
  baseURL: `${BACKEND_URL}/admin`,
  withCredentials: true,
});

//admin endpoints
export const loginAdmin = (data) => API.post(`/login`, data);
