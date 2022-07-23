import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getallUsersServise from './getallUsersServise';
import { errorHandler } from '../../../utilities/errorMessege';

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
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

export const block = createAsyncThunk('fetch-Users', async (thunkAPI) => {
  try {
    return getallUsersServise.fetchallUsers();
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
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
    }
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
