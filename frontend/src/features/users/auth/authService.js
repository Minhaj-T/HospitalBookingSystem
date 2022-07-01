import * as api from "../../../api/index";

// Register user
const register = async (userData) => {
  const { data } = await api.signUp(userData);
  console.log("this is the user fetch data into the backend", data);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

// Login user
const login = async (userData) => {
  const { data } = await api.login(userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

// Logout user
const logout = () => [localStorage.removeItem("user")];

const authService = {
  register,
  logout,
  login,
};

export default authService;
