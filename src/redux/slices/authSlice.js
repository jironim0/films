import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../axios";

export const fetchAuth = createAsyncThunk(
  "auth/fetchUserData",
  async function (params) {
    const { data } = await axios.post("http://localhost:4444/auth/login", params);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    status: "loading",
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state, action) => {
      state.status = "rejected";
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data)

export const authReducer = authSlice.reducer;
