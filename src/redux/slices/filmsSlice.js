import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorites = createAsyncThunk(
  'films/getFavorites',
  async function(_, {rejectWithValue}){
    try {
      const response = await fetch(`https://63591e97ff3d7bddb99970b9.mockapi.io/favorite`)

      if (!response.ok) {
        throw new Error('Server Error!')
      }
  
      const data = await response.json();
  
      return data;

    } catch (error) {
      return rejectWithValue(error.message)
    }

  }
);

export const deleteFavorite = createAsyncThunk(
  'films/deleteFavorite',
  async function(id, {rejectWithValue, dispatch}){
    try {
      const response = await fetch(`https://63591e97ff3d7bddb99970b9.mockapi.io/favorite/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok){
        throw new Error('Can`t delete task. Server error!')
      }

      dispatch(setDeleteFavorite({id}));

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    favoritItems: [],
    active: false,
    status: null,
    error: null,
  },
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
    setDeleteFavorite(state, action){
      state.favoritItems = state.favoritItems.filter(films => films.id !== action.payload.id)
    },
  },
  extraReducers: {
    [getFavorites.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getFavorites.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.favoritItems = action.payload;
    },
    [getFavorites.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
});

export const { setActive, setDeleteFavorite } = filmsSlice.actions;

export default filmsSlice.reducer;
