import { createSlice } from "@reduxjs/toolkit";
import { fetchGiphyData } from "./dataFetch-action";

const giphySlice = createSlice({
  name: "giphy",
  initialState: { locked: false, giphyItems: [] },
  extraReducers: {
    [fetchGiphyData.fulfilled]: (state, { payload }) => {
      state.giphyItems = payload;
    },
  },

  reducers: {
    addGiphy(state, action) {
      state.giphyItems = action.payload;
    },
  },
});

export const giphyActions = giphySlice.actions;
export default giphySlice;
