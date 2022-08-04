import * as api from '../../../api/doctors';

//Get prescription
const GetPrescription = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const { data } = await api.getPrescription(config);
    return data;
  };

//add-prescription  
const AddPrescription = async (Data,token) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  const { data } = await api.addPrescription(Data,config);
  return data;
};

  //get MedicalRecords
  const GetMedicalRecords = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const { data } = await api.getMedicalRecords(config);
    return data;
  };  

  //add-addMedicalRecords
const AddMedicalrecords = async (Data,token) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  const { data } = await api.addMedicalRecords(Data,config);
  return data;
};

   //get Billing-Records
   const GetBillingRecords = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const { data } = await api.getbills(config);
    return data;
  }; 

//add-addMedicalRecords
const Addbills = async (Data,token) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  const { data } = await api.addBilling(Data,config);
  return data;
};



const userProfileService={
    GetPrescription,
    GetMedicalRecords,
    GetBillingRecords,
    AddPrescription,
    AddMedicalrecords,
    Addbills,

}

export default userProfileService