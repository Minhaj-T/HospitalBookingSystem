import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getallUsersServise from "./getallUsersServise";

const initialState = {
    users:[],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };

  export const fetchUsers = createAsyncThunk(
    "getallUsers",
    async (thunkAPI) => {
      try {
        return getallUsersServise.fetchallUsers();
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString() ||
          "Something wrong. Please check your network";
        return thunkAPI.rejectWithValue(message);
      }
    }
  );


  const getallUsersSlice=createSlice({
    name:"getallUsers",
    initialState,
    reducers: {
        reset: (state) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = false;
          state.message = "";
        },
      },
      extraReducers: {
        [fetchUsers.pending]: (state) => {
          console.log("panding");
          state.isLoading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
          console.log("suvvvvv");
          state.isLoading = false;
          state.isSuccess = true;
          state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
          console.log("errrr");
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.payload;
          state.users = null;
        },
      },
  })

  export const { reset } = getallUsersSlice.actions;
export default getallUsersSlice.reducer;