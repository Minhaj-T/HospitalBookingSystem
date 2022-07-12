import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from '../../../utilities/errorMessege';
import doctorService from './doctorService';

// Get doctor from localStorage
const doctor = JSON.parse(localStorage.getItem('doctorinfo'));

const initialState = {
  doctor: doctor ? doctor : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Doctors login
export const login = createAsyncThunk(
  'auth/doctorlogin',
  async (doctorData, thunkAPI) => {
    try {
      return await doctorService.login(doctorData);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//Edit-doctors-details
export const editDoctor_Details = createAsyncThunk(
  'auth/editdoctor_details',
  async(Data,thunkAPI)=>{
  try {
    const token = thunkAPI.getState().doctorAuth.doctor.token;
    return await doctorService.EditDoctor(Data,token)
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
    
  }}
);


const doctorAuth = createSlice({
  name: 'doctorAuth',
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
    [login.pending]: (state) => {
        state.isLoading = true;
      },
      [login.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.doctor = action.payload;
      },
      [login.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.doctor = null;
      },
      [editDoctor_Details.pending]: (state) => {
        state.isLoading = true;
      },
      [editDoctor_Details.fulfilled]: (state, action) => {
        state.doctor = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      },
      [editDoctor_Details.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.doctor = null;
      },
  },
});

export const { reset } = doctorAuth.actions;
export default doctorAuth.reducer;