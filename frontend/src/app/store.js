import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/auth/authSlice";
import adminauthSlice from "../features/admin/auth/adminauthSlice";
// import Modalslice from "../features/admin/EdituserModal/Modalslice";
import getallUsersSlice from "../features/admin/Get-all-users/getallUsersSlice";
import getAllDoctors from '../features/admin/Doctors/DoctorSlice'
import getallSpecialties  from "../features/admin/Specialties/SpecialtiesSlice";
           
export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminauthSlice,
    allDoctors:getAllDoctors,   
    fetchAlluser:getallUsersSlice,
    allspecialties:getallSpecialties,
  },
});
