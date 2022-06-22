import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user=JSON.parse(localStorage.getItem('user'))

const initialState={
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

// Register user
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
      try {
        return await authService.register(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString() || "Something wrong. Please check your network";
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  
  // Logout the user
  export const logout= createAsyncThunk('auth/logout',
  async()=>{
    await authService.logout()
  })

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=''
        }

    },
    extraReducers: {
        [register.pending]: (state) => {
          state.isLoading = true;
        },
        [register.fulfilled]: (state, action) => {
          console.log("This is the fethched data from server", action);
          state.isLoading = false;
          state.isSuccess=false;
          state.user=action.payload;
        },
        [register.rejected]: (state, action) => {
          state.isLoading = false;
          state.isError=false;
          state.message=action.payload;
          state.user=null;
          console.log("The axios erorr...",action.payload);
        },
        [logout.fulfilled]:(state)=>{
          state.user=null;

        }
      }
})

export const {reset}=authSlice.actions
export default authSlice.reducer