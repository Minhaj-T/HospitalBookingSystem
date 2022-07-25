import * as api from '../../../api/doctors';

//get all appointment
const get_all_appointments = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await api.getAllappointment(config);
    return data;
  };


  const appointmentService={
    get_all_appointments
  };
  
  export default appointmentService;