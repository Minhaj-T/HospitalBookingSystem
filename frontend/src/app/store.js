import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import adminauthSlice from "../features/admin/auth/adminauthSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminauthSlice,
  },
});
