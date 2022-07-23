import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/auth/authSlice";
import adminauthSlice from "../features/admin/auth/adminauthSlice";
import doctorAuth from "../features/Doctor/auth/doctorauthSlice";
// import Modalslice from "../features/admin/EdituserModal/Modalslice";
import getallUsersSlice from "../features/admin/Get-all-users/getallUsersSlice";
import getallSpecialties  from "../features/admin/Specialties/SpecialtiesSlice";
           
export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminauthSlice,
    doctorAuth:doctorAuth,
    fetchAlluser:getallUsersSlice,
    allspecialties:getallSpecialties,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
