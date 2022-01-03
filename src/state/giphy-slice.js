import { createSlice } from "@reduxjs/toolkit";
import { fetchGiphyData } from "./dataFetch-action";

const giphySlice = createSlice({
  name: "giphy",
  initialState: {
    amountOfGifs: 4,
    locked: false,
    giphyElements: [], //all giphy data from API after initial fetch
    loadedElements: [], //storing all new gifs (if there are any locked, keeping the same)
    lockedGifIndexes: [], //locked gifs indexes
    lockedGifEl: [], //locked gifs data
  },
  extraReducers: {
    [fetchGiphyData.fulfilled]: (state, { payload }) => {
      if (state.locked) {
        state.giphyElements = payload;
      }
      state.giphyElements = payload;
    },
  },

  reducers: {
    lockGif(state, action) {
      state.lockedGifEl.push(action.payload);
      state.lockedGifIndexes.push(
        state.giphyElements.indexOf(
          state.giphyElements.find((val) => val.id === action.payload.id)
        )
      );
    },
    isAnyLockedGif(state) {
      if (state.lockedGifEl.length > 0) state.locked = true;
    },
  },
});

export const giphyActions = giphySlice.actions;
export default giphySlice;
