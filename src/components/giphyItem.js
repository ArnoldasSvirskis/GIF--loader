import { useEffect } from "react";
import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { URL } from "../state/constants";
import { fetchGiphyData } from "../state/dataFetch-action";

const GiphyItem = () => {
  const giphyItem = useSelector((state) => state.giphy.giphyItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  return (
    <>
      <p> GIPH</p>
    </>
  );
};

export default GiphyItem;
