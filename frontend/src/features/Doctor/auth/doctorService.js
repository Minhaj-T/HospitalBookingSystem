import * as api from '../../../api/doctors';

//doctor login
const login = async (doctorData) => {
  const { data } = await api.loginDoctor(doctorData);
  if (data) {
    localStorage.setItem('doctorinfo', JSON.stringify(data));
  }
  return data;
};

const EditDoctor = async (Data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await api.editDoctorDetails(Data, config);
  if (data){
  localStorage.setItem('doctorinfo', JSON.stringify(data));
  }
  return data;
};

const doctorService = {
  login,
  EditDoctor,
};

export default doctorService;
