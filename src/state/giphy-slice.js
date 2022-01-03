import { createSlice } from "@reduxjs/toolkit";
import { fetchGiphyData } from "./dataFetch-action";

const giphySlice = createSlice({
  name: "giphy",
  initialState: {
    amountOfGifs: 4,
    locked: false,
    giphyElements: [],
    clickedImg: [],
    lockedGifEl: [],
  },
  extraReducers: {
    [fetchGiphyData.fulfilled]: (state, { payload }) => {
      state.giphyElements.push(payload);
    },
  },

  reducers: {
    change(state) {
      state.locked = !state.locked;
    },
    changeAllGifs(state) {
      state.giphyElements = [];
    },

    lockGif(state, action) {
      state.clickedImg = action.payload;
      console.log(
        state.giphyElements.indexOf(
          state.giphyElements.find((val) => val.id === action.payload)
        )
      );

      // state.clickedImg.forEach((val) => {
      //   state.lockedGifEl = state.giphyElements.find(val);
      // });
    },
  },
});

export const giphyActions = giphySlice.actions;
export default giphySlice;
