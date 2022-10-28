import { createSlice } from "@reduxjs/toolkit";

const filmsSlice = createSlice({
  name: "films",
  initialState: {
    favoritItems: [],
    active: false
  },
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
    setFavoriteItems(state, action){
      state.favoritItems.push({
        favorit: action.payload
      })
    },
    setDeleteFavorite(state, action){
      state.favoritItems = state.favoritItems.filter(obj => obj.id !== action.payload.id)
    }
  },
});

export const { setActive, setFavoriteItems, setDeleteFavorite } = filmsSlice.actions;

export default filmsSlice.reducer;
