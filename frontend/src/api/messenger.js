import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';
const API = axios.create({
  baseURL:`${BACKEND_URL}`,
  withCredentials: true,
});


//Chat Endpoints
export const savedMessage = (data) => API.post(`/messages`,data);
export const getMessage = (id,data) => API.get(`/messages/${id}`,data);

export const newConversation = (data) => API.post(`/conversations`,data);
export const getConversation = (id) => API.get(`/conversations/${id}`);
