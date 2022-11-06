import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registered = createAsyncThunk(

)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: null,
    },
    reducers: {
      setCredentinals(state, action) {
        const {user, accesToken} = action.payload
        state.user = user
        state.token = accesToken
      }, 
      logOut(state) {
        state.user = null
        state.token = null
      }
    }
})

export const {setCredentinals, logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token