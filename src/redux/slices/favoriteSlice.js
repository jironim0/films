import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favoritItems: []
}

const favoriteSlice = createSlice({
    name: favorite,
    initialState,
    reducers: {
        setFavoriteItems(state, action){
            state.favoritItems.push(action.payload)
          }
    }
})

export const {setFavoriteItems} = favoriteSlice.actions

export default favoriteSlice.reducer