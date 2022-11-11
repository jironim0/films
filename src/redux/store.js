import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from './slices/filmsSlice'
import {authReducer} from './slices/authSlice'

export const store = configureStore({
    reducer: {
        films: filmsSlice,
        auth: authReducer,
    },
})