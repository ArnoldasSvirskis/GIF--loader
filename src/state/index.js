import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import giphySlice from "./giphy-slice";

const store = configureStore({
  // middleware: [thunk, logger],
  reducer: { giphy: giphySlice.reducer },
});

export default store;
