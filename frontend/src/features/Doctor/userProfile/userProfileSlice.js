import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../../../utilities/errorMessege';
import userProfileService from './userProfileService';

const initialState = {
    prescription: [],
    medicalRecords:[],
    billing:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  };

  //Get all prescriptions
export const getPrescription = createAsyncThunk(
    'userProfile/getPrescription',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().doctorAuth.doctor.token;
        return await userProfileService.GetPrescription(token);
      } catch (error) {
        return thunkAPI.rejectWithValue(errorHandler(error));
      }
    }
  );

  //add Prescription
export const addPrescription = createAsyncThunk(
    'userProfile/addPrescription',
    async (Data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().doctorAuth.doctor.token;
        return await userProfileService.AddPrescription(Data,token);
      } catch (error) {
        return thunkAPI.rejectWithValue(errorHandler(error));
      }
    }
  );


  //Get all medicalrecords
export const getMedicalRecords = createAsyncThunk(
    'userProfile/getMedicalRecords',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().doctorAuth.doctor.token;
        return await userProfileService.GetMedicalRecords(token);
      } catch (error) {
        return thunkAPI.rejectWithValue(errorHandler(error));
      }
    }
  );

  //add medicalRecords
export const addMedicalRecords = createAsyncThunk(
  'userProfile/addmedicalRecords',
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().doctorAuth.doctor.token;
      return await userProfileService.AddMedicalrecords(Data,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

  //Get all billingRecords
export const billingRecords = createAsyncThunk(
  'userProfile/billingRecords',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().doctorAuth.doctor.token;
      return await userProfileService.GetBillingRecords(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//add Bills
  export const addBills = createAsyncThunk(
    'userProfile/addBills',
    async (Data, thunkAPI) => {
      try {
        const token = thunkAPI.getState().doctorAuth.doctor.token;
        return await userProfileService.Addbills(Data,token);
      } catch (error) {
        return thunkAPI.rejectWithValue(errorHandler(error));
      }
    }
  );


  const userProfileSlice=createSlice({
    name: 'userProfile',
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
          [addPrescription.pending]: (state) => {
            state.isLoading = true;
          },
          [addPrescription.fulfilled]: (state, action) => {
            state.prescription.push(...action.payload.Data);
            state.isLoading = false;
            state.isSuccess = true;
          },
          [addPrescription.rejected]: (state, action) => {
            state.message = action.payload;
            state.isLoading = false;
            state.isError = true;
            state.prescription = null;
          },
          [addMedicalRecords.pending]: (state) => {
            state.isLoading = true;
          },
          [addMedicalRecords.fulfilled]: (state, action) => {
            state.medicalRecords.push(...action.payload.Data);
            state.isLoading = true;
            state.isSuccess = true;
          },
          [addMedicalRecords.rejected]: (state, action) => {
            state.message = action.payload;
            state.isLoading = false;
            state.isError = true;
            state.medicalRecords = null;
          },
          [addBills.pending]: (state) => {
            state.isLoading = true;
          },
          [addBills.fulfilled]: (state, action) => {
            state.billing.push(...action.payload.Data);
            state.isLoading = true;
            state.isSuccess = true;
          },
          [addBills.rejected]: (state, action) => {
            state.message = action.payload;
            state.isLoading = false;
            state.isError = true;
            state.billing = null;
          },
      }
  })

  export const { reset } = userProfileSlice.actions;
export default userProfileSlice.reducer;