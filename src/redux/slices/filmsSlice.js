import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  active: false,
  favoritItems: []
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
    setFavoriteItems(state, action){
      state.favoritItems.push(action.payload)
    }
  },
});

export const { setActive, setFavoriteItems } = filmsSlice.actions;

export default filmsSlice.reducer;
