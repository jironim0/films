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
        title: action.payload,
        imageUrl: action.payload,
      })
    }
  },
});

export const { setActive, setFavoriteItems } = filmsSlice.actions;

export default filmsSlice.reducer;
