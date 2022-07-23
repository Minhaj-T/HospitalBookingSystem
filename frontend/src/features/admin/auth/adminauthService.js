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
export const fetchallUsers = async () => {
  const { data } = await api.fetchUsers();
  return data;
};

//block-users
export const BlockUsers = async (id,status) => {
  const { data } = await api.blockUser(id,status);
  return data;
};

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
export const addDoctor = async (doctorData) => {
  const { data } = await api.addDoctor(doctorData);
  return data;
};

// Delete Doctor
export const deleteDoctor = async (doctorId) => {
  const { data } = await api.deleteDoctor(doctorId);
  return data;
};

//getall specialties
export const getallSpecialties = async () => {
  const { data } = await api.fetchSpecialties();
  return data;
};

//add specialties
export const addSpecialty= async (specialty) =>{
  const {data} = await api.addSpecialities(specialty);
  return data;
}

// Delete Specialties
export const deleteSpecialty = async (Id) => {
  const { data } = await api.deleteSpecialties(Id);
  return data;
};

const adminauthService = {
  login,
  fetchallUsers,
  getallDoctors,
  getallSpecialties,
  addDoctor,
  deleteDoctor,
  addSpecialty,
  deleteSpecialty,
  BlockUsers
};
export default adminauthService;
