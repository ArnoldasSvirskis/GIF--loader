import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isGifActive: { clicked: false, index: [] } },
  reducers: {
    makeGifActive(state, action) {
      if (state.isGifActive.index.some((val) => val == action.payload)) {
        state.isGifActive.index = state.isGifActive.index.filter(
          (val) => val != action.payload
        );
      } else {
        state.isGifActive.index.push(action.payload);
      }
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
