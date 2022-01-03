import { giphyActions } from "../state/giphy-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchGiphyData } from "../state/dataFetch-action";
import { useEffect } from "react";
import styles from "./GiphyItem.module.css";

const GiphyItem = () => {
  const giphyData = useSelector((state) => state.giphy.giphyData);
  const dispatch = useDispatch();
  const giphyElements = useSelector((state) => state.giphy.giphyElements);
  const amountOfGifs = useSelector((state) => state.giphy.amountOfGifs);
  const lockedGifs = useSelector((state) => state.giphy.clickedImg);

  console.log(giphyElements);
  console.log(lockedGifs);

  useEffect(() => {
    if (giphyElements.length < amountOfGifs) {
      dispatch(fetchGiphyData());
    }
  }, [giphyElements]);

  const changeAllGifsHandler = () => {
    dispatch(giphyActions.changeAllGifs());
  };

  const lockGifHandler = (event) => {
    dispatch(giphyActions.lockGif(event.target.id));
  };

  return (
    <>
      <div>
        <button onClick={changeAllGifsHandler}>click here</button>
        <ul>
          {giphyElements.map((val) => (
            <li onClick={lockGifHandler} key={val.id}>
              <img src={val.url} id={val.id} width="200px" height="auto"></img>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GiphyItem;
