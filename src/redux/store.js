import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from './slices/filmsSlice'
import { apiSlice } from "./api/authApi";
import authReducer from './slices/authSlice'

export const store = configureStore({
    reducer: {
        films: filmsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})