import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../../../utilities/errorMessege';
import userDetailsService from './userDetailsService';

const initialState = {
  prescription: [],
  medicalRecords: [],
  billing: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Get all prescriptions
export const getPrescription = createAsyncThunk(
  'userDetails/getPrescription',
  async (limit, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userDetailsService.GetPrescription(limit,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//Get all medicalrecords
export const getMedicalRecords = createAsyncThunk(
  'userDetails/getMedicalRecords',
  async (limit, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userDetailsService.GetMedicalRecords(limit,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//Get all billingRecords
export const billingRecords = createAsyncThunk(
  'userDetails/billingRecords',
  async (limit, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userDetailsService.GetBillingRecords(limit,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: {
    [getPrescription.pending]: (state) => {
      state.isLoading = true;
    },
    [getPrescription.fulfilled]: (state, action) => {
      state.prescription = action?.payload.prescription;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [getPrescription.rejected]: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.isError = true;
      state.prescription = null;
    },
    [getMedicalRecords.pending]: (state) => {
      state.isLoading = true;
    },
    [getMedicalRecords.fulfilled]: (state, action) => {
      state.medicalRecords = action.payload?.medicalRecords;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [getMedicalRecords.rejected]: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.isError = true;
      state.medicalRecords = null;
    },
    [billingRecords.pending]: (state) => {
      state.isLoading = true;
    },
    [billingRecords.fulfilled]: (state, action) => {
      state.billing = action.payload?.bills;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [billingRecords.rejected]: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.isError = true;
      state.billing = null;
    },
  },
});

export const { reset } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
