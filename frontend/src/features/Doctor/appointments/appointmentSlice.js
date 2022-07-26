import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { errorHandler } from '../../../utilities/errorMessege';
import appointmentService from './appointmentService.js';

const initialState = {
  appointment: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  addSloat: false,
  deleteSlotes: false,
  message: '',
};

//get appointments using user id
export const getAppointment = createAsyncThunk(
    'get/appointment',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().doctorAuth.doctor.token;
        return await appointmentService.get_all_appointments(token);
      } catch (error) {
        return thunkAPI.rejectWithValue(errorHandler(error));
      }
    }
  );

  //change the appointment status 
export const changeStatus = createAsyncThunk(
  'changeStatus',
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().doctorAuth.doctor.token;
      return await appointmentService.changeStatusAppointment(Data,token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

const appointments = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.addSloat = false;
      state.deleteSlotes = false;
      state.message = '';
    },
  },
  extraReducers: {
    [getAppointment.pending]: (state) => {
        state.isLoading = true;
      },
      [getAppointment.fulfilled]: (state, action) => {
        state.appointment = action.payload.data;
        state.isLoading = false;
        state.isSuccess = true;
      },
      [getAppointment.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.appointment = null;
      },
      [changeStatus.pending]: (state) => {
        state.isLoading = true;
      },
      [changeStatus.fulfilled]: (state, action) => {
        const updatedData = state.appointment.map((doc) =>
        doc._id === action.payload.data._id ? action.payload.data : doc
        );
        console.log(updatedData);
        state.appointment = updatedData;
        state.isLoading = false;
        state.isSuccess = true;
      },
      [changeStatus.rejected]: (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.appointment = null;
      },

  }
});

export const { reset } = appointments.actions;
export default appointments.reducer;