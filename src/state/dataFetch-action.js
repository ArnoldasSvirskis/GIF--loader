import { URL } from "./constants";
import { giphyActions } from "./giphy-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGiphyData = createAsyncThunk(
  "giphy/fetchGiphyData",
  async () => {
    const response = await fetch(URL);

    const data = await response.json();
    return {
      url: data.data.images.fixed_height_downsampled.url,
      id: data.data.id,
      date: data.data.import_datetime,
      locked: false,
    };
  }
);
