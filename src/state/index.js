import { configureStore } from "@reduxjs/toolkit";
import giphySlice from "./giphy-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  // middleware: [thunk, logger],
  reducer: { giphy: giphySlice.reducer, ui: uiSlice.reducer },
});

export default store;
