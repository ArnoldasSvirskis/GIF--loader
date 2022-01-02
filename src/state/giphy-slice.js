import { createSlice } from "@reduxjs/toolkit";
import { fetchGiphyData } from "./dataFetch-action";

const giphySlice = createSlice({
  name: "giphy",
  initialState: {
    amountOfGifs: 12,
    locked: false,
    giphyElements: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    giphyData: [],
  },
  extraReducers: {
    [fetchGiphyData.fulfilled]: (state, { payload }) => {
      state.giphyData.push(payload);
      state.giphyElements.shift();
      state.giphyElements.push(payload);
    },
  },

  reducers: {
    addGiphy(state, action) {
      state.giphyItems = action.payload;
    },
    change(state) {
      state.locked = !state.locked;
    },
  },
});

export const giphyActions = giphySlice.actions;
export default giphySlice;
