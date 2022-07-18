import * as api from '../../../api/doctors';

//doctor login
const login = async (doctorData) => {
  const { data } = await api.loginDoctor(doctorData);
  if (data) {
    localStorage.setItem('doctorinfo', JSON.stringify(data));
  }
  return data;
};

//edit Doctor information
const EditDoctor = async (Data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await api.editDoctorDetails(Data, config);
  if (data) {
    localStorage.setItem('doctorinfo', JSON.stringify(data));
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
  const { data } = await api.editDoctorPassword(Data, config);
  return data;
}

// Add Slotes
const addSlotes = async (token,Data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await api.addTimeSlots(Data, config);
  if (data) {
    localStorage.setItem('doctorinfo', JSON.stringify(data));
  }
  return data;

}
// Logout doctor
const logout = () => [localStorage.removeItem('doctorinfo')];

const doctorService = {
  login,
  logout,
  EditDoctor,
  editPassword,
  addSlotes,
};

export default doctorService;
