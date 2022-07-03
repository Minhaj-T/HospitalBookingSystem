import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Doctorservice from './Doctorservice';

const initialState = {
  doctors: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// get all doctors
export const allDoctors = createAsyncThunk(
  'fetch-doctors',
  async (_,thunkAPI) => {
    try {
      const token = thunkAPI.getState().adminAuth.admin.token
      return Doctorservice.getallDoctors(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        'Something wrong. Please check your network';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//add doctor
export const addDoctor = createAsyncThunk(
  'add-Doctor',
  async (doctor, thunkAPI) => {
    try {
      const token = thunkAPI.getState().adminAuth.admin.token
      return Doctorservice.addDoctor(doctor);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        'Something wrong. Please check your network';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Delete doctor
export const deleteDoctor = createAsyncThunk(
  'delete-Doctor',
  async (doctorId, thunkAPI) => {
    try {
      return await Doctorservice.deleteDoctor(doctorId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        'Something wrong. Please check your network';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const getAllDoctors = createSlice({
  name: 'fetch-all-Doctors',
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
    [allDoctors.pending]: (state) => {
      state.isLoading = true;
    },
    [allDoctors.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.doctors = action.payload;
    },
    [allDoctors.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.doctors = null;
    },
    [addDoctor.pending]: (state) => {
      state.isLoading = true;
    },
    [addDoctor.fulfilled]: (state, action) => {
      state.doctors.doctor.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
    },
    [addDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.doctors = null;
    },
    [deleteDoctor.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteDoctor.fulfilled]: (state, action) => {
      const itemId = action.payload.doctorId;
      state.doctors.doctor = state.doctors.doctor.filter(
        (item) => item._id !== itemId
      );
      state.isLoading = false;
      state.isSuccess = true;
    },
    [deleteDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.doctors = null;
    },
  },
});

export const { reset, removeItem } = getAllDoctors.actions;
export default getAllDoctors.reducer;
