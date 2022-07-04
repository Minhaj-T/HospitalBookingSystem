import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../../api/doctors';

// Get doctor from localStorage
const doctor = JSON.parse(localStorage.getItem('doctorinfo'));

const initialState = {
  doctor: doctor ? doctor : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const login = createAsyncThunk(
  'auth/doctorlogin',
  async (doctorData, thunkAPI) => {
    try {
      const { data } = await api.loginDoctor(doctorData);
      if (data) {
        localStorage.setItem('doctorinfo', JSON.stringify(data));
      }
      return data;
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
        console.log("This is the fetche data from server", action);
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
  },
});

export const { reset } = doctorAuth.actions;
export default doctorAuth.reducer;