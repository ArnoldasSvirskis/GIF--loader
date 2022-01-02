import { useEffect } from "react";
import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { URL } from "../state/constants";

const GiphyItem = () => {
  const giphyItem = useSelector((state) => state.giphy.giphyItems);
  const dispatch = useDispatch();
  console.log(giphyItem);

  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  return (
    <>
      {giphyItem.map((value) => (
        <div>
          <img src={value.url} width="200px" height="auto"></img>
        </div>
      ))}
    </>
  );
};

export default GiphyItem;
