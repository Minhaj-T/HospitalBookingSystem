import * as api from '../../../api/admin';

// admin login
export const addDoctor = async (doctorData) => {
  const { data } = await api.addDoctor(doctorData);
  return data;
};

//getall doctors
export const getallDoctors = async () => {
  const { data } = await api.fetchDoctors();
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
