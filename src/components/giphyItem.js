import { useEffect } from "react";
import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { URL } from "../state/constants";

const GiphyItem = () => {
  const giphyItem = useSelector((state) => state.giphy.giphyItems);
  const data = useSelector((state) => state.giphy.giphyData);
  const dispatch = useDispatch();
  console.log(giphyItem);
  console.log(data);

  useEffect(() => {
    dispatch(fetchGiphyData());
  }, []);

  return (
    <>
      {giphyItem.map((value) => (
        <div key={value.id}>
          <img src={value.url} width="200px" height="auto"></img>
        </div>
      ))}
    </>
  );
};

export default GiphyItem;
