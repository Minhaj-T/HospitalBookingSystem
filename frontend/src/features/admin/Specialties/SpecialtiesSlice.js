import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SpecialtiesService from './SpecialtiesService';

const initialState = {
  specialties: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};



// get all specialties
export const allSpecialties = createAsyncThunk(
    'fetch-Specialties',
    async (thunkAPI) => {
      try {
        return await SpecialtiesService.getallSpecialties();
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

  // add specialties
 export const addSpecialities= createAsyncThunk(
  "add-specialities",
  async (specialty,thunkAPI) => {
    try {
      return await SpecialtiesService.addSpecialty(specialty);
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
 )

 //Delete specialties
export const deleteSpecialties = createAsyncThunk(
  'delete-specialties',
  async (SpecialtiesId, thunkAPI) => {
    try {
      return await SpecialtiesService.deleteSpecialty(SpecialtiesId)
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



  const getAllSpecialties = createSlice({
    name: 'fetch-all-Specialties',
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
      [allSpecialties.pending]: (state) => {
        state.isLoading = true;
      },
      [allSpecialties.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.specialties = action.payload;
      },
      [allSpecialties.rejected]: (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.doctors = null;
      },
      [addSpecialities.pending]: (state) => {
        state.isLoading = true;
      },
      [addSpecialities.fulfilled]: (state, action) => {
        state.specialties.specialties.push(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
      },
      [addSpecialities.rejected]: (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true; 
        state.message = action.payload;
        state.doctors = null;
      },
      [deleteSpecialties.pending]: (state) => {
        state.isLoading = true;
      },
      [deleteSpecialties.fulfilled]: (state, action) => {
        const itemId = action.payload.specialtyId;
        console.log("itemId", itemId);
        state.specialties.specialties = state.specialties.specialties.filter(
          (item) => item._id !== itemId
        );
        state.isLoading = false;
        state.isSuccess = true;
      },
      [deleteSpecialties.rejected]: (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.doctors = null;
      },
    },
  });
  
  export const { reset} = getAllSpecialties.actions;
  export default getAllSpecialties.reducer;
  