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
  addSloat:false,
  deleteSlotes:false,
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

// editDoctor_Password
export const editDoctor_Password = createAsyncThunk(
  'auth/EditDoctor_Password',
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().doctorAuth.doctor.token;
      return await doctorService.editPassword(token, Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

// add the slotes
export const add_Slotes = createAsyncThunk(
  'auth/add_Slotes',
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().doctorAuth.doctor.token;
      return await doctorService.addSlotes(token, Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//delete the slotes
export const delete_TimeSlotes = createAsyncThunk(
  'auth/delete_Slotes',
  async (Data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().doctorAuth.doctor.token;
      return await doctorService.deleteSlotes(token, Data);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);



// Logout the Doctor
export const logout = createAsyncThunk('auth/logout_Doctor', async () => {
  await doctorService.logout();
});


const doctorAuth = createSlice({
  name: 'doctorAuth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.addSloat=false;
      state.deleteSlotes=false;
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
      [editDoctor_Password.pending]: (state) => {
        state.isLoading = true;
      },
      [editDoctor_Password.fulfilled]: (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      },
      [editDoctor_Password.rejected]: (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
      },
      [add_Slotes.pending]: (state) => {
        state.isLoading = true;
      },
      [add_Slotes.fulfilled]: (state,action) => {
        state.doctor = action.payload;
        state.isLoading = false;
        state.addSloat = true;
      },
      [add_Slotes.rejected]: (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
      },
      [delete_TimeSlotes.pending]: (state) => {
        state.isLoading = true;
      },
      [delete_TimeSlotes.fulfilled]: (state,action) => {
        state.doctor = action.payload;
        state.isLoading = false;
        state.deleteSlotes = true;
      }, 
      [delete_TimeSlotes.rejected]: (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
      },
      [logout.fulfilled]: (state) => {
        state.doctor = null;
        state.isSuccess = false;
        state.addSloat = false;
        state.deleteSlotes=false;
      },
  },
});

export const { reset } = doctorAuth.actions;
export default doctorAuth.reducer;