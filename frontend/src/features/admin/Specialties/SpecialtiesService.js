import * as api from '../../../api/admin';

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
  console.log("thishsih",Id);
  const { data } = await api.deleteSpecialties(Id);
  return data;
};


const Doctorservice = {
    getallSpecialties,
    addSpecialty,
    deleteSpecialty
  };
  export default Doctorservice;