import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isGifActive: { clicked: false, index: [] },
    showLock: { hover: false, index: [] },
  },
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
    showLockOption(state, action) {
      state.showLock.index.push(action.payload);
    },

    removeLockOption(state, action) {
      state.showLock.index.pop(action.payload);
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
