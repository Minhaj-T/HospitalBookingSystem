import * as api from '../../../api/index';

// Register user
const register = async (userData) => {
  const { data } = await api.signUp(userData);
  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

// Login user
const login = async (userData) => {
  const { data } = await api.login(userData);
  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

// Logout user
const logout = () => [localStorage.removeItem('user')];

// Edituser
const editUser = async (token, userData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await api.editUserDetails(userData, config);
  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

// Edit password
const editPassword = async(token,Data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await api.editUserPassword(Data, config);
  return data;
}

const authService = {
  register,
  logout,
  login,
  editUser,
  editPassword,
};

export default authService;
