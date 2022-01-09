import { URL } from "./constants";
import { giphyActions } from "./giphy-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGiphyData = createAsyncThunk(
  "giphy/fetchGiphyData",
  async () => {
    const response1 = await (await fetch(URL)).json();
    const response2 = await (await fetch(URL)).json();
    const response3 = await (await fetch(URL)).json();
    const response4 = await (await fetch(URL)).json();
    const response5 = await (await fetch(URL)).json();
    const response6 = await (await fetch(URL)).json();
    const response7 = await (await fetch(URL)).json();
    const response8 = await (await fetch(URL)).json();
    const response9 = await (await fetch(URL)).json();
    const response10 = await (await fetch(URL)).json();
    const response11 = await (await fetch(URL)).json();
    const response12 = await (await fetch(URL)).json();
    const response = await Promise.all([
      response1,
      response2,
      response3,
      response4,
      response5,
      response6,
      response7,
      response8,
      response9,
      response10,
      response11,
      response12,
    ]);
    const data = response.map((arr) => ({
      url: arr.data.images.fixed_height_downsampled.url,
      id: arr.data.id + Math.random() * 10,
      date: arr.data.import_datetime,
    }));

    return data;
  }
);
