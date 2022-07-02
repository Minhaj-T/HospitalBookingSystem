import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getallUsersServise from './getallUsersServise';

const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const fetchUsers = createAsyncThunk('fetch-Users', async (thunkAPI) => {
  try {
    return getallUsersServise.fetchallUsers();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString() ||
      'Something wrong. Please check your network';
    return thunkAPI.rejectWithValue(message);
  }
});

const getallUsersSlice = createSlice({
  name: 'fetch-all-Users',
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
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
  },
});

export const { reset } = getallUsersSlice.actions;
export default getallUsersSlice.reducer;
