import * as api from "../../../api/admin";

// admin login
export const login = async (adminData) => {
  const { data } = await api.loginAdmin(adminData);
  if (data) {
    localStorage.setItem("admininfo", JSON.stringify(data));
  }
  return data;
};

//fetch-allUsers
export const fetchallUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.fetchUsers(config);
  return data;
};

//block-users
export const BlockUsers = async (token,id,status) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.blockUser(config,id,status);
  return data;
};

//romove user
export const RemoveUser = async (Id,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.removeUser(config,Id);
  return data;
}

//getall doctors
export const getallDoctors = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.fetchDoctors(config);
  return data;
};

// add-doctors
export const addDoctor = async (doctorData,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.addDoctor(config,doctorData);
  return data;
};

// Delete Doctor
export const deleteDoctor = async (doctorId,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.deleteDoctor(config,doctorId);
  return data;
};

//block-doctors
export const BlockDoctors = async (id,status,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.blockDoctor(config,id,status);
  return data;
};

//getall specialties
export const getallSpecialties = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.fetchSpecialties(config);
  return data;
};

//add specialties
export const addSpecialty= async (specialty,token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const {data} = await api.addSpecialities(config,specialty);
  return data;
}

// Delete Specialties
export const deleteSpecialty = async (Id,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.deleteSpecialties(config,Id);
  return data;
};

// Logout user
const logout = () => [localStorage.removeItem('admininfo')];

const adminauthService = {
  login,
  fetchallUsers,
  getallDoctors,
  getallSpecialties,
  addDoctor,
  deleteDoctor,
  addSpecialty,
  deleteSpecialty,
  BlockUsers,
  RemoveUser,
  BlockDoctors,
  logout,
};
export default adminauthService;
