import { createSlice } from "@reduxjs/toolkit";
import { fetchGiphyData } from "./dataFetch-action";

const giphySlice = createSlice({
  name: "giphy",
  initialState: {
    amountOfGifs: 4,
    locked: false,
    giphyElements: [], //all giphy data from API after initial fetch
    loadedElements: [], //storing all new gifs (if there are any locked, keeping the same)
    lockedGifEl: [], //locked gifs data
  },
  extraReducers: {
    [fetchGiphyData.fulfilled]: (state, { payload }) => {
      if (state.lockedGifEl.length > 0) {
        state.giphyElements = payload;
        state.lockedGifEl.forEach((el) => {
          state.giphyElements[el.index] = el;
        });
      } else state.giphyElements = payload;
    },
  },

  reducers: {
    lockGif(state, action) {
      if (state.lockedGifEl.some((val) => val.id == action.payload.id)) {
        state.lockedGifEl = state.lockedGifEl.filter(
          (val) => val.id !== action.payload.id
        );
      } else state.lockedGifEl.push(action.payload);
    },
  },
});

export const giphyActions = giphySlice.actions;
export default giphySlice;
