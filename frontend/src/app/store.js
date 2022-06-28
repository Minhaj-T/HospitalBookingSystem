import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import adminauthSlice from "../features/admin/auth/adminauthSlice";
import Modalslice from "../features/admin/EdituserModal/Modalslice";
import getallUsersSlice from "../features/admin/Get-all-users/getallUsersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminauthSlice,
    fetchAlluser:getallUsersSlice,
    edituserModal:Modalslice,
  },
});
