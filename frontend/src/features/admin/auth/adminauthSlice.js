import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminauthService from "./adminauthService";

// Get admin from localStorage
const admin = JSON.parse(localStorage.getItem("admininfo"));

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/adminlogin",
  async (admin, thunkAPI) => {
    try {
      return adminauthService.login(admin);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        "Something wrong. Please check your network";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const adminauthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.admin = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.admin = null;
    },
  },
});
export const { reset } = adminauthSlice.actions;
export default adminauthSlice.reducer;