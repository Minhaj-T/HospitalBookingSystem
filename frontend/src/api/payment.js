import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';
const API = axios.create({
  baseURL:`${BACKEND_URL}/payment`,
  withCredentials: true,
});


//Payment Endpoints
export const createRazorOrder = (data) => API.post(`/create-order`,data);
export const verifyAndPay = (data) => API.post(`/verify-payment`,data);