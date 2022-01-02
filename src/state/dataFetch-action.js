import { URL } from "./constants";
import { giphyActions } from "./giphy-slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGiphyData = () => {
  return (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("failed to get data");
      }

      const { data } = await response.json();
      console.log(data.url);

      return data.url;
    };

    try {
      const giphyData = fetchData();
      console.log(giphyData);

      dispatch(giphyActions.addGiphy(giphyData));
    } catch (error) {
      throw new Error("failed to add data");
    }
  };
};
