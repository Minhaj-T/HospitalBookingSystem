import * as api from "../../api";

// Register user
const register = async (userData) => {
    const { data } = await api.signUp(userData);
    console.log("this is the user fetch data into the backend",data);
  
    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
    }
  
    return data
  }


  // Logout user

  const logout=()=>[
    localStorage.removeItem('user')
  ]

  const authService = {
    register,
    logout
  }
  
  export default authService