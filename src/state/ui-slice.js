import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    lockedGifs: [],
    showLock: { hover: false, index: [] },
  },
  reducers: {
    sendLockedGifIndex(state, action) {
      if (state.lockedGifs.some((val) => val == action.payload)) {
        state.lockedGifs = state.lockedGifs.filter(
          (val) => val != action.payload
        );
      } else {
        state.lockedGifs.push(action.payload);
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
