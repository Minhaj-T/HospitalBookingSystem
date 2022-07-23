import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminauthService from "./adminauthService";
import { errorHandler } from '../../../utilities/errorMessege';
// Get admin from localStorage
const admin = JSON.parse(localStorage.getItem("admininfo"));

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  users:[],
  doctors:[],
  specialties:[],
  message: "",
};

//admin login
export const login = createAsyncThunk(
  "auth/adminlogin",
  async (admin, thunkAPI) => {
    try {
      return adminauthService.login(admin);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//fetch all users
export const fetchUsers = createAsyncThunk('fetch-Users', async (thunkAPI) => {
  try {
    return adminauthService.fetchallUsers();
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

//block-User
export const Blockusers = createAsyncThunk('block-Users', async (data,thunkAPI) => {
  const{id,status}=data;
  try {
    return adminauthService.BlockUsers(id,status); 
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

//remove-User
export const Deleteuser = createAsyncThunk('delete-Users', async (id,thunkAPI) => {
  try {
    return adminauthService.RemoveUser(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error));
  }
});

// get all doctors
export const allDoctors = createAsyncThunk(
  'fetch-doctors',
  async (_,thunkAPI) => {
    try {
      const token = thunkAPI.getState().adminAuth.admin.token
      return adminauthService.getallDoctors(token);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//add doctor
export const addDoctor = createAsyncThunk(
  'add-Doctor',
  async (doctor, thunkAPI) => {
    try {
      const token = thunkAPI.getState().adminAuth.admin.token
      return adminauthService.addDoctor(doctor);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

//Delete doctor
export const deleteDoctor = createAsyncThunk(
  'delete-Doctor',
  async (doctorId, thunkAPI) => {
    try {
      return await adminauthService.deleteDoctor(doctorId);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);


// get all specialties
export const allSpecialties = createAsyncThunk(
  'fetch-Specialties',
  async (_,thunkAPI) => {
    try {
      return await adminauthService.getallSpecialties();
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

 // add specialties
 export const addSpecialities= createAsyncThunk(
  "add-specialities",
  async (specialty,thunkAPI) => {
    try {
      return await adminauthService.addSpecialty(specialty);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
 )

  //Delete specialties
export const deleteSpecialties = createAsyncThunk(
  'delete-specialties',
  async (SpecialtiesId, thunkAPI) => {
    try {
      return await adminauthService.deleteSpecialty(SpecialtiesId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
  }
);

const adminauthSlice = createSlice({
  name: "adminAuth",
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
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.admin = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.admin = null;
    },
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = JSON.parse(JSON.stringify([...action.payload.user]))
      state.isLoading = false;
      state.isSuccess = true;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
    [allDoctors.pending]: (state) => {
      state.isLoading = true;
    },
    [allDoctors.fulfilled]: (state, action) => {
      state.doctors = JSON.parse(JSON.stringify([...action.payload.doctor]))
      state.isLoading = false;
      state.isSuccess = true;
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
      state.doctors.push(action.payload);
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
    [Blockusers.pending]: (state) => {
      state.isLoading = true;
    },
    [Blockusers.fulfilled]: (state, action) => {
      const updatedTodos = state.users.map((user) =>
      user._id === action.payload.user._id ? action.payload.user : user
      );
      state.users=updatedTodos;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [Deleteuser.pending]: (state) => {
      state.isLoading = true;
    },
    [Deleteuser.fulfilled]: (state, action) => {
      const itemId = action.payload.userId;
      // console.log("out",itemId);

      state.users = state.users.filter(
        (item) => item._id !== itemId
      );
      state.isLoading = false;
      state.isSuccess = true;
    },
    [Deleteuser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
    [Blockusers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      state.users = null;
    },
    [deleteDoctor.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteDoctor.fulfilled]: (state, action) => {
      const itemId = action.payload.doctorId;
      state.doctors = state.doctors.filter(
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
    [allSpecialties.pending]: (state) => {
      state.isLoading = true;
    },
    [allSpecialties.fulfilled]: (state, action) => {
      state.specialties = JSON.parse(JSON.stringify([...action.payload.specialties]))
      state.isLoading = false;
      state.isSuccess = true;
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
      state.specialties.push(action.payload);
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
      state.specialties= state['specialties'].filter(
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
export const { reset } = adminauthSlice.actions;
export default adminauthSlice.reducer;
