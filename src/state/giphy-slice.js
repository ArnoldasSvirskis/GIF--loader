import { createSlice } from "@reduxjs/toolkit";

const giphySlice = createSlice({
  name: "giphy",
  initialState: { locked: false, giphyItems: [] },
  reducers: {
    addGiphy(state, action) {
      state.giphyItems = action.payload;
    },
  },
});

export const giphyActions = giphySlice.actions;
export default giphySlice;
