import axios from "axios"

const user =JSON.parse(localStorage.getItem("user"))
 const token= user ? user.token :""

export const BACKEND_URL = "http://localhost:5000/api" 

const axiosInstance=axios.create({
    baseURL:BACKEND_URL,
    withCredentials: true,
    headers:{
        "Authorization": token ? `Bearer ${token}`:'',
        "Content-type": "application/json"
    }
    })

    export default axiosInstance