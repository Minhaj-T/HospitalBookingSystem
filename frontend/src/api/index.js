import axiosInstance from "../constants/axios";
const API = axiosInstance;

//User endpoints
export const signUp = (userData) => API.post("/users/signup", userData);
export const login = (userData) => API.post("/users/login", userData);
export const getUser = () => API.get("/users/getuser");
