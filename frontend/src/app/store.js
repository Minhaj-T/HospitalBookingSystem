import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/users/auth/authSlice";
import adminauthSlice from "../features/admin/auth/adminauthSlice";
import doctorAuth from "../features/Doctor/auth/doctorauthSlice";
import appointmentSlice from "../features/Doctor/appointments/appointmentSlice";
// import Modalslice from "../features/admin/EdituserModal/Modalslice";
           
export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminauthSlice,
    doctorAuth:doctorAuth,
    appointments: appointmentSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
