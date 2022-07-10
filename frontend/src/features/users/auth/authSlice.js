import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import { errorHandler } from '../../../utilities/errorMessege';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  form1: null,
  form2: null,
  form3: null,
  form4: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

//editUser
export const editUser_Details = createAsyncThunk(
  'auth/editUserDetails',
  async (userDetails, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await authService.editUser(token, userDetails);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

// Logout the user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
    form1: (state, action) => {
      state.form1 = action.payload;
    },
    form2: (state, action) => {
      state.form2 = action.payload;
    },
    form3: (state, action) => {
      state.form3 = action.payload;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [editUser_Details.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser_Details.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [editUser_Details.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.user = null;
      state.isSuccess = false;
    },
  },
});

export const { reset, form1, form2, form3, form4 } = authSlice.actions;
export default authSlice.reducer;
