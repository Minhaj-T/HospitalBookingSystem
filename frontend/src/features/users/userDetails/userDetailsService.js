import * as api from '../../../api/index';

//Get prescription
const GetPrescription = async (limit,token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const { data } = await api.getPrescription(config,limit);
    return data;
  };


  //get MedicalRecords
  const GetMedicalRecords = async (limit,token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const { data } = await api.getMedicalRecords(config,limit);
    return data;
  };  

   //get Billing-Records
   const GetBillingRecords = async (limit,token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      };
    const { data } = await api.getbills(config,limit);
    return data;
  }; 




const userProfileService={
    GetPrescription,
    GetMedicalRecords,
    GetBillingRecords,

}

export default userProfileService