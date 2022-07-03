import * as api from '../../../api/admin';

// add-doctors
export const addDoctor = async (doctorData) => {
  const { data } = await api.addDoctor(doctorData);
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

// Delete Doctor
export const deleteDoctor = async (doctorId) => {
  const { data } = await api.deleteDoctor(doctorId);
  return data;
};

const Doctorservice = {
  addDoctor,
  getallDoctors,
  deleteDoctor,
};
export default Doctorservice;
