import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

      dispatch(deleteFav(id))

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const setFilm = createAsyncThunk(
  'films/',
  async function(obj, {rejectWithValue}){
    try {
      const response = await fetch(`https://63591e97ff3d7bddb99970b9.mockapi.io/item`)

      if (!response.ok){
        throw new Error('Server bug!')
      }

      const data = await response.json()

      return data;

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    arrFilm: [],
    favoritItems: [],
    active: false,
    status: null,
    error: null,
  },
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
    deleteFav(state, action) {
      const filmId = action.payload
      state.favoritItems = state.favoritItems.filter(u => u.id !== filmId)
    }
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
    [setFilm.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [setFilm.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.arrFilm = action.payload
    },
    [setFilm.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
});

export const { setActive, setDeleteFavorite, deleteFav } = filmsSlice.actions;

export default filmsSlice.reducer;
