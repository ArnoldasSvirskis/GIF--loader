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
    const d = await Promise.all([response1, response2, response3, response4]);
    const b = d.map((arr) => ({
      url: arr.data.images.fixed_height_downsampled.url,
    }));

    // const data = await d.json();

    return b;

    // return {
    //   url: data.data.images.fixed_height_downsampled.url,
    //   embedURL: data.data.embed_url,
    // };
  }
);
